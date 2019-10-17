
(function() {
    const ICONS = {
        camera: 'M12 14.5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5zM12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm9.24 9.78c.12-.6.36-2.09.35-4.78 0-2.7-.24-4.18-.36-4.77-.41-.14-1.47-.4-3.74-.58-.23-.02-.47-.03-.73-.06-.7-.07-.87-.4-1.04-.57-.98-.94-2.29-1.52-3.72-1.52-1.43 0-2.74.58-3.72 1.51-.17.17-.34.5-1.04.57-.41.05-.78.06-1.13.09-1.97.17-2.94.41-3.35.54-.13.59-.36 2.09-.36 4.78 0 2.71.24 4.2.36 4.79.66.22 2.94.77 9.24.77 6.26 0 8.55-.54 9.24-.77zM22.5 7.47c.02.06.5 1.6.5 5.52 0 3.93-.48 5.48-.5 5.55-.05.16-.16.3-.3.39-.28.18-2.09 1.07-10.2 1.07s-9.92-.89-10.2-1.07a.723.723 0 0 1-.3-.39c-.02-.07-.5-1.63-.5-5.55s.48-5.48.51-5.54c.05-.17.16-.31.3-.4.21-.13 1.31-.65 5.28-.9C8.35 4.82 10.08 4 12 4s3.66.82 4.91 2.15c3.98.26 5.08.8 5.29.93.14.09.25.23.3.39z',
        userNoProfile: 'M 37 57.5735 C 23.6533 57.6 15.3067 53.9733 10.32 46.56 C 12.6667 43.4667 18.72 37.7067 23.68 37.736 C 26.16 39.04 28.9867 39.7867 32 39.7867 C 35.0133 39.7867 37.84 39.04 40.32 37.736 C 45.28 37.68 51.3067 43.44 53.68 46.56 C 48.6933 53.9733 40.3467 57.6 32 57.5735 M 32 9.65333 C 38.7467 9.65333 44.2133 15.12 44.2133 21.8667 C 44.2133 28.6133 38.7467 34.08 32 34.08 C 25.2533 34.08 19.7867 28.6133 19.7867 21.8667 C 19.7867 15.12 25.2533 9.65333 32 9.65333 M 32 0 C 14.32 0 0 14.32 0 32 C 0 49.68 14.32 64 32 64 C 49.68 64 64 49.68 64 32 C 64 14.32 49.68 0 32 0',
        userProfile: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
    }

    const sizes = {
        'SM': {
            avatar: 75,
            icon: 22
        },
        'DEFAULT': {
            avatar: 125,
            icon: 30
        },
        'LG': {
            avatar: 175,
            icon: 50
        }
    }

    // first we create a <template> 
    const template = document.createElement('template');

    // then insert some html inside 
    // the reason we're using a template is because cloning templates is much cheaper than calling .innerHTML for all instances of our component.
    template.innerHTML = `
    <style>
        :host {
            display: inline;
            font-family: sans-serif;
            margin-right: 30px;
        }

        .greg-avatar__wrapper {
            display: inline-block;
            z-index: 5;
        }

        .greg-avatar__title {
            margin-bottom: 10px;
        }

        .greg-avatar__img-wrapper {
            position: relative;
        }

        .greg-avatar__img {
            object-fit: cover;
            border-radius: 100%;
        }

        .greg-avatar__edit-icon {
            border-radius: 100%;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 15;
            border-color: purple;
            color: purple;
            border: solid 1px;
            background: white;
        }
    </style>
    <div class="greg-avatar__wrapper">
        <div class="greg-avatar__title">
        </div>
        <div class="greg-avatar__img-wrapper">
        </div>
    </div>
    `;

    // We'll use our constructor to attach our shadowroot, and we'll set it to open mode
    class gregAvatar extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({ 'mode': 'open' });
            this._shadowRoot.appendChild(template.content.cloneNode(true));

            // elements
            this.$title = this._shadowRoot.querySelector('.greg-avatar__title')
            this.$imgWrapper = this.shadowRoot.querySelector('.greg-avatar__img-wrapper')

            // state
            this._currentSize = this.getAttribute('size') && sizes[this.getAttribute('size')] || sizes.DEFAULT
            this._currentImage = this.getAttribute('avatar-image') || null
            this._currentTitle = this.getAttribute('title') || null
        }

        connectedCallback() {
            console.log(this._currentSize)
            this.$title.innerHTML = this._currentTitle

            if(this.hasAttribute('avatar-image')) {
                this._renderImage(this._currentImage, this._currentSize)
            } else {
                this._renderImage()
            }

            if(this.hasAttribute('editable')) {
                let editAvatar = document.createElement('div')
                editAvatar.className = 'greg-avatar__edit-icon'
                editAvatar.style.width = editAvatar.style.height = `${this._currentSize.icon}px`

                let iconAvatar = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                iconAvatar.setAttribute('width', `${this._currentSize.avatar}px`)
                iconAvatar.setAttribute('height', `${this._currentSize.avatar}px`)
                iconAvatar.setAttribute('viewBox', '0 0 64 64')


                this.$imgWrapper.appendChild(editAvatar)
            }
        }

        _render(el, value) { el.innerHTML = value }

        static get observedAttributes() {
            return ['title'];
        }
    
        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'title':
                    this._render(this.$title, newValue)
                    break;
                default:
                    break;
            }
        }

        _renderImage(imgPath, size = this._currentSize) {
            const { avatar: avatarSize, icon: iconSize } = size
            let avatarElContent;

            this.$imgWrapper.style.width = this.$imgWrapper.style.height = `${avatarSize}px`

            if (imgPath) { 
                avatarElContent = document.createElement('img')
                avatarElContent.setAttribute('src', imgPath)
                avatarElContent.style.width = avatarElContent.style.height = `${avatarSize}px`
            } else {
                avatarElContent = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                avatarElContent.setAttribute('width', `${avatarSize}px`)
                avatarElContent.setAttribute('height', `${avatarSize}px`)
                avatarElContent.setAttribute('viewBox', '0 0 64 64')

                let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                path.setAttribute('d', ICONS.userNoProfile)

                avatarElContent.appendChild(path)
            }
            
            avatarElContent.className = 'greg-avatar__img'

            this.$imgWrapper.appendChild(avatarElContent)
        }
    }

    window.customElements.define('greg-avatar', gregAvatar);
})()
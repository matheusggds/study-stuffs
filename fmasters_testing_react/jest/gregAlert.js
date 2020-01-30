
const template = document.createElement('template')

template.innerHTML = `
  <div class="wrapper">
    <h1>teste</h1>
  </div>
`

class Alert extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'button-text', 'open']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

if (!window.customElements.get('greg-alert')) {
  customElements.define('greg-alert', Alert)
}
// import tokens from '@easynvest/greg-tokens'

const template = document.createElement('template')
template.innerHTML = `
<style>
:host {

    --color-primary-white: #ffffff;
    --color-primary-black: #322828;
    --color-primary-warm-grey: #f7f7eb;
    --color-primary-dawn: #87027B;
    --color-primary-awaken: #4e0250;
    --color-primary-morning: #e6268C;
    --color-primary-daybreak: #3ccbda;
    --color-primary-sunrise: #ffbb00;
    --color-primary-rise: #d0ff0d;
    --color-primary-cool-grey: #efefef;
    --color-secondary-grey-lighter: #f5f5f5;
    --color-secondary-grey-light: #d8d8d8;
    --color-secondary-grey-dark: #9b9b9b;
    --color-secondary-grey-darker: #696969;
    --color-secondary-dawn-light: #b130a6;
    --color-secondary-dawn-dark: #6f1167;
    --color-secondary-awaken-light: #762e78;
    --color-secondary-awaken-dark: #3B023D;
    --color-secondary-morning-light: #f07ebb;
    --color-secondary-morning-dark: #BC0D64;
    --color-secondary-daybreak-light: #afeaf0;
    --color-secondary-daybreak-dark: #0F6177;
    --color-secondary-sunrise-light: #ffe49b;
    --color-secondary-sunrise-dark: #987003;
    --color-secondary-rise-light: #eeffaa;
    --color-secondary-rise-dark: #627900;
    --color-secondary-nightfall-default: #B00000;
    --color-secondary-nightfall-light: #ff9898;
    --breakpoint-screen-xs-max: 767px;
    --breakpoint-screen-sm-min: 768px;
    --breakpoint-screen-sm-max: 991px;
    --breakpoint-screen-md-min: 992px;
    --breakpoint-screen-md-max: 1271px;
    --breakpoint-screen-lg-min: 1272px;
    --space-tiny: 8px;
    --space-small: 16px;
    --space-base: 24px;
    --space-large: 48px;
    --space-xlarge: 64px;
    --font-family: "Rational Display";
    --font-weight-light: 300;
    --font-weight-medium: 500;
    --font-size-desktop-display1: 56px;
    --font-size-desktop-display2: 48px;
    --font-size-desktop-title1: 40px;
    --font-size-desktop-title2: 36px;
    --font-size-desktop-title3: 24px;
    --font-size-desktop-subtitle: 18px;
    --font-size-mobile-display1: 44px;
    --font-size-mobile-display2: 36px;
    --font-size-mobile-title1: 32px;
    --font-size-mobile-title2: 24px;
    --font-size-mobile-title3: 18px;
    --font-size-mobile-subtitle: 16px;
    --font-size-body-paragraph1: 16px;
    --font-size-body-paragraph2: 14px;
    --font-size-body-caption: 12px;
    --line-height-desktop-display1: 72px;
    --line-height-desktop-display2: 60px;
    --line-height-desktop-title1: 48px;
    --line-height-desktop-title2: 40px;
    --line-height-desktop-title3: 32px;
    --line-height-desktop-subtitle: 24px;
    --line-height-mobile-display1: 56px;
    --line-height-mobile-display2: 48px;
    --line-height-mobile-title1: 40px;
    --line-height-mobile-title2: 32px;
    --line-height-mobile-title3: 24px;
    --line-height-mobile-subtitle: 24px;
    --line-height-body-paragraph1: 24px;
    --line-height-body-paragraph2: 20px;
    --line-height-body-caption: 16px;
    --border-radius-default: 3px;
    --border-radius-circle: 50%;
    --border-radius-button-small: 16px;
    --border-radius-button-large: 24px;
    --border-width-default: 1px;
    --border-width-thick: 2px;
    --border-width-thicker: 4px;
    --border-style-default: solid;
    --border-style-link: dotted;
    --border-style-upload: dashed;
    --shadow-default: 0 7px 8px rgba(50,40,40, 0.25);
    --shadow-darker: 0 7px 8px rgb(50,40,40, 0.06);
    --opacity-default: 0.6;
    --opacity-lighter: 0.3;
    --opacity-darker: 0.9;
    --opacity-darkest: 0.98;
    --size-small: 16px;
    --size-base: 24px;
    --size-large: 48px;
    --size-xlarge: 64px;
    --text-color-light-default: var(--color-primary-black);
    --text-color-light-brand: var(--color-primary-awaken);
    --text-color-light-highlight: var(--color-primary-morning);
    --text-color-light-deemphasized: var(--color-secondary-grey-dark);
    --text-color-light-button: var(--color-primary-white);
    --text-color-light-error: var(--color-secondary-nightfall-default);
    --text-color-light-success: var(--color-secondary-rise-dark);
    --text-color-light-action-default: var(--color-primary-dawn);
    --text-color-light-action-hover: var(--color-secondary-dawn-light);
    --text-color-light-action-pressed: var(--color-secondary-dawn-dark);
    --text-color-light-action-disabled: var(--color-secondary-grey-light);
    --text-color-dark-default: var(--color-primary-white);
    --text-color-dark-brand: var(--color-primary-morning);
    --text-color-dark-highlight: var(--color-primary-sunrise);
    --text-color-dark-deemphasized: var(--color-secondary-grey-light);
    --text-color-dark-button: var(--color-primary-awaken);
    --text-color-dark-error: var(--color-secondary-nightfall-light);
    --text-color-dark-success: var(--color-primary-rise);
    --text-color-dark-action-default: var(--color-primary-daybreak);
    --text-color-dark-action-hover: var(--color-secondary-daybreak-light);
    --text-color-dark-action-pressed: var(--color-secondary-daybreak-dark);
    --text-color-dark-action-disabled: var(--color-secondary-grey-dark);
    --icon-color-light-default: var(--color-primary-black);
    --icon-color-light-deemphasized: var(--color-secondary-grey-dark);
    --icon-color-light-button: var(--color-primary-white);
    --icon-color-light-alert: var(--color-primary-sunrise);
    --icon-color-light-error: var(--color-secondary-nightfall-default);
    --icon-color-light-success: var(--color-secondary-rise-dark);
    --icon-color-light-action-default: var(--color-primary-dawn);
    --icon-color-light-action-hover: var(--color-secondary-dawn-light);
    --icon-color-light-action-pressed: var(--color-secondary-dawn-dark);
    --icon-color-light-action-disabled: var(--color-secondary-grey-light);
    --icon-color-dark-default: var(--color-primary-white);
    --icon-color-dark-deemphasized: var(--color-secondary-grey-light);
    --icon-color-dark-button: var(--color-primary-awaken);
    --icon-color-dark-alert: var(--color-primary-sunrise);
    --icon-color-dark-error: var(--color-secondary-nightfall-light);
    --icon-color-dark-success: var(--color-primary-rise);
    --icon-color-dark-action-default: var(--color-primary-daybreak);
    --icon-color-dark-action-hover: var(--color-secondary-daybreak-light);
    --icon-color-dark-action-pressed: var(--color-secondary-daybreak-dark);
    --icon-color-dark-action-disabled: var(--color-secondary-grey-dark);
    --icon-size-small: var(--size-small);
    --icon-size-base: var(--size-base);
    --icon-size-large: var(--size-large);
    --icon-size-xlarge: var(--size-xlarge);
    --background-color-light-page-default: var(--color-primary-white);
    --background-color-light-page-hightlight: var(--color-primary-warm-grey);
    --background-color-light-page-deemphasized: var(--color-secondary-grey-lighter);
    --background-color-light-feedback-info: var(--color-primary-dawn);
    --background-color-light-feedback-success: var(--color-secondary-rise-dark);
    --background-color-light-feedback-alert: var(--color-primary-sunrise);
    --background-color-light-feedback-error: var(--color-secondary-nightfall-default);
    --background-color-light-action-default: var(--color-primary-dawn);
    --background-color-light-action-hover: var(--color-secondary-dawn-light);
    --background-color-light-action-pressed: var(--color-secondary-dawn-dark);
    --background-color-light-action-disabled: var(--color-secondary-grey-light);
    --background-color-dark-page-default: var(--color-primary-awaken);
    --background-color-dark-page-hightlight: var(--color-primary-dawn);
    --background-color-dark-page-deemphasized: var(--color-secondary-awaken-dark);
    --background-color-dark-feedback-info: var(--color-primary-warm-grey);
    --background-color-dark-feedback-success: var(--color-secondary-rise-dark);
    --background-color-dark-feedback-alert: var(--color-primary-sunrise);
    --background-color-dark-feedback-error: var(--color-secondary-nightfall-light);
    --background-color-dark-action-default: var(--color-primary-daybreak);
    --background-color-dark-action-hover: var(--color-secondary-daybreak-light);
    --background-color-dark-action-pressed: var(--color-secondary-daybreak-dark);
    --background-color-dark-action-disabled: var(--color-secondary-grey-dark);
    --border-color-light-form-default: var(--color-secondary-grey-dark);
    --border-color-light-form-error: var(--color-secondary-nightfall-default);
    --border-color-light-form-focus: var(--color-primary-black);
    --border-color-light-form-disabled: var(--color-secondary-grey-light);
    --border-color-light-action-default: var(--color-primary-dawn);
    --border-color-light-action-hover-selected: var(--color-secondary-dawn-light);
    --border-color-dark-form-error: var(--color-secondary-nightfall-light);
    --border-color-dark-form-focus: var(--color-primary-white);
    --border-color-dark-form-disabled: var(--color-secondary-grey-dark);
    --border-color-dark-action-default: var(--color-primary-daybreak);
    --border-color-dark-action-hover-selected: var(--color-secondary-daybreak-light);
    --border-color-divider-light-divider: var(--color-secondary-grey-light);
    --border-color-divider-dark-divider: var(--color-secondary-grey-lighter);
    --padding-tiny: var(--space-tiny);
    --padding-default: var(--space-base);
    --padding-small: var(--space-small);
    --padding-large: var(--space-large);
    --margin-base: var(--space-base);
    --margin-small: var(--space-small);
    --margin-large: var(--space-large);
    --margin-xlarge: var(--space-xlarge);
}
</style>
    <style>
        :host {
            display: block;
            margin-top: 5px;
        }

        ::slotted(span) {
            color: var(--text-color-light-default);
            font-family: var(--font-family);
        }
  </style>
  <div class="greg-input-helper__wrapper">
    <slot></slot>
  </div>
`

class InputHelper extends HTMLElement {
  static get observedAttributes() {
    return ['error', 'dark']
  }

  constructor() {
    super()

    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    // this.$wrapper = this._shadowRoot.querySelector('greg-input-helper__wrapper')
    this.$text = this._shadowRoot.querySelector('greg-input-helper__text')
  }

  attributeChangedCallback(name, oldName, value) {
    this[name] = value
  }
  set error(val) {
    if (val) {
      this.setAttribute('error')
    } else {
      this.removeAttribute('error')
    }
  }

  get error() { return this.hasAttribute('error') }
}

customElements.define('greg-input-text', InputHelper)
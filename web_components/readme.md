# Web Components

links
- [Web Components from zero to hero](https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m)


### intro
Web components are getting more and more traction. With the Edge team's recent announcement of implementing Custom Elements and Shadow DOM, all major browsers will soon support web components natively. Companies like Github, Netflix, Youtube and ING are even already using web components in production. Neat! However, surprisingly enough, none of those huge, succesful companies have implemented a (you guessed it) to-do app!


### Web components?
[Web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) are a set of standards that allow us to write modular, reusable and encapsulated HTML elements. And the best thing about them: since they're based on web standards, we don't have to install any framework or library to start using them. You can start writing web components using vanilla javascript, right now!

##### Custom Elements
The [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/) api allows us to author our own DOM elements. Using the api, we can define a custom element, and inform the parser how to properly construct that element and how elements of that class should react to changes. Have you ever wanted your own HTML element, like `<my-cool-element>`? Now you can!

##### Shadow DOM
[Shadow DOM](https://w3c.github.io/webcomponents/spec/custom/) gives us a way to encapsulate the styling and markup of our components. It's a sub DOM tree attached to a DOM element, to make sure none of our styling leaks out, or gets overwritten by any external styles. This makes it great for modularity.

##### ES Modules

##### HTML Templates
The [HTML `<template>`](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/) tag allows us to write reusable chunks of DOM. Inside a template, scripts don't run, images don't load, and styling/mark up is not rendered. A template tag itself is not even considered to be in the document, until it's activated. HTML templates are great, because for every instance of our element, only 1 template is used.

### Component lifecycle
``` javascript
class MyElement extends HTMLElement {
    constructor() {
        // always call super() first
        super(); 
        console.log('constructed!');
    }

    connectedCallback() {
        console.log('connected!');
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed!`);
    }

    adoptedCallback() {
        console.log('adopted!');
    }
}

window.customElements.define('my-element', MyElement);
```

##### constructor()
The constructor runs whenever an element is created, but before the element is attached to the document. We'll use the constructor for setting some initial state, event listeners, and creating the shadow DOM.

##### connectedCallback()
The connectedCallback is called when the element is inserted to the DOM. It's a good place to run setup code, like fetching data, or setting default attributes.

##### disconnectedCallback()
The disconnectedCallback is called whenever the element is removed from the DOM. Clean up time! We can use the disconnectedCallback to remove any event listeners, or cancel intervals.

##### attributeChangedCallback(name, oldVal, newVal)
The attributeChangedCallback is called any time your element's observed attributes change. We can observe an element's attributes by implementing a static observedAttributes getter, like so:

##### Registering our element
And finally, though not part of the lifecycle, we register our element to the CustomElementRegistry like so:
``` javascript
window.customElements.define('my-element', MyElement);
```
The CustomElementRegistry is an interface that provides methods for registering custom elements and querying registered elements. The first argument of the registries' define method will be the name of the element, so in this case it'll register <my-element>, and the second argument passes the class we made.

***

### First steps
-   Create `template` than `innerHTML` on it with your initial _elements_, we use `template` because cloning templates is much cheaper then calling `.innerHTML` for all instances of our component.

-   Use `constructor` to attach our shadowroot, and set it do `open`. <br>
    Clone your template to shadowroot.

> An important thing to note is that the display is always set to display: inline;, which means you can't set a width or height on your element. So make sure to set a :host display style (e.g. block, inline-block, flex) unless you prefer the default of inline.

> Light DOM: <br>
> The light DOM lives outside the component's shadow DOM, and is basically anything that is not shadow DOM. For example, the `<h1>Hello world</h1>` up there lives in the light DOM. The term light DOM is used to distinguish it from the Shadow DOM. It's perfectly fine to make web components using light DOM, but you miss out on the great features of shadow DOM.
>
> Open shadow DOM: <br>
> Since the latest version (V1) of the shadow DOM specification, we can now use open or closed shadow DOM. Open shadow DOM allows us to create a sub DOM tree next to the light DOM to provide encapsulation for our components. Our shadow DOM can still be pierced by javascript like so: document.querySelector('our-element').shadowRoot. One of the downsides of shadow DOM is that web components are still relatively young, and many external libraries don't account for it.
>
> Closed shadow DOM: <br>
> Closed shadow roots are not very applicable, as it prevents any external javascript from piercing the shadowroot. Closed shadow DOM makes your component less flexible for yourself and your end users and should generally be avoided.
>
>Some examples of elements that do use a closed shadow DOM are the `<video>` element.

``` javascript
const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
    display: block;
    font-family: sans-serif;
    text-align: center;
    }

    button {
    border: none;
    cursor: pointer;
    }

    ul {
    list-style: none;
    padding: 0;
    }
</style>
<h1>To do</h1>

<input type="text" placeholder="Add a new to do"></input>
<button>✅</button>

<ul id="todos"></ul>
`;

class TodoApp extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$todoList = this._shadowRoot.querySelector('ul');
    }
}

window.customElements.define('to-do-app', TodoApp);
```
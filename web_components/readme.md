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
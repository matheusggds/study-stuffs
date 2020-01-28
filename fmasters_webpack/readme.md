# Webpack

- There is 2 ways of run javascripta at browser.
 ``` javascript
 <script src="app.js"></script>
 ```
 or
 ``` javascript
 <script type="text/javascript">
 // your script here
 </script>
 ```

core problem is: **it doesn`t Scale**.

You will have to import multiple script files... And, each browser has a bottleneck about how many requests simultaneasouly can be made. So, multiple files can be a huge performance problem...

    Forget about load individual scripts

And, u will not have a single file with all your app. A lot of problems:
- Scope
- Size
- Readabiltiy
- Fragility
- Monolith Files

## Solutions?
**IIFE** _Immediatly Invoked Function Expression_

``` javascript
const whatever = (function(data) {
    return {
        someAttr: 'value'
    }
})(1)
```
Provide data from outside scope and return a scoped information

``` javascript
const outerScope = 1

const whatever = (function(data) {
    var outerScope = 4
    return {
        someAttr: 'value'
    }
})(1)

console.log(outerScope)
// console log return 1! no inner scope leak!
```
- You can see why `IFFE` resolve big problems... You can have variables with the same name at the outer scope.

It`s all about **Encapsulation**

    Treat each file as IIFE (Revealing Moddule Pattern)

And, now, we can combine files without concern of scope collision!

  
## History of Modules
- CommonJS
- AMD
- CommonJS + ADM
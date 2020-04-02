# Intermediate React

### useState

### useReducer
A function you run that takes in an old state, some sorft of action, and returns to a new state
Good when you have do track multiple getters and setters for smiliar implementations 

### Memoise
#### React.Memo and PureCompontent
React.memo and PureComponent is quite similar... PureComponent you use with Class, and, React.Memo with Functional Components.

Both uses a Memoise technology to only re-render when your props really update, and not parent componenent is rerendering.

#### useMemo and useCallback

useMemo returns a memoized value

useCallback returns a memoized callback

Both React.useMemo and React.useCallback receives a function as its first argument and a dependencies array as the second one. The hook will return a new value only when one of the dependencies value changes (referential equality). The main difference is that React.useMemo will call the fooFunction and return its result while React.useCallback will return the fooFunction without calling it.

### Jest & React Testing Library
`__tests__` underscore on both sides of a folder, means something is looking for this.

Jest will automatically find this folder and rund tests with it.

### Redux


### Code Splitting
The idea behind code splitting, is that u dont have to load up front, everything thats not essential for the first page load.

If you want do defer the load of a component, you will not anymore import it like this:

``` js
import { Details } from './Details.js'
```
instead, you will:

``` js
const Details = lazy(() => import('./Details'))
```

`const Details` is a placeholder, that will not load this code until later when _Details_ is actually tried to be rendered for the first time.

_Dynamic import_ is not something from React, is from Javascript.

So, you can use it with `Suspense`, from React.

``` 
<Supense fallback={<h1> Loading... </h1>}>
    <Router>
        <Details>
    </Router>
</Supense>
```

Suspense will display Fallback component while something inside it is not ready to be rendered yet.
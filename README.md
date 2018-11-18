# React better context

React's context is awesome, but a pain on jsx, having a couple of the applied to a component makes more spaghetti than my italian mother.

## Install

A version of react >= 16.3 is required for this package, as it contains the [final context specs](https://github.com/facebook/react/blob/master/CHANGELOG.md#1630-march-29-2018).

```
npm i react-better-context
```

## How to use

The default export `createContext` is a function requiring a minimum of 2 paramethers, the name that will be used to display the context container (string), and the default value of the context.

```js
// userContext.js
import createContext from "react-better-context";

const UserContext = createContext("User", { name: "kornil" });
```

`UserContext` value is an object containing `Provider`, the default context provider, and a `connect` function that is used to link the consumer instead of the context `Consumer`.

```jsx
import UserContext from "./userContext.js"

// connecting the Provider
class BigContainer extends react.Component {
...
  render() {
    const properContextValue = {
      hello: "world",
      name: "kornil"
    }
    return (
      <UserContext.Provider value={properContextValue}>
        <MyComponent />
      </UserContext.Provider>
    )
  }
}

// connecting the Consumer
const MyComponent = (props) => (
  <h1>
    hello {props.UserContext.name}
  </h1>
);

export UserContext.connect(MyComponent);
```

And you're done.


TL;DR
Use `Provider` the same && instead of `Consumer` in your jsx, use the `connect` function the same as `react-redux`.

## Info

- This package is 2KB minified without gzip.
- Other than depending on `react` itself (not DOM!), it uses `react-display-name`, [a 9 lines package](https://github.com/jurassix/react-display-name/blob/master/src/getDisplayName.js).
- This package [is written in typescript](src/index.tsx), but it is compiled with babel so you can use it regardless.
- [The package provides its own types](src/index.d.ts).

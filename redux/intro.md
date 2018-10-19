# Redux #

*Redux is a predictable state container for JS apps which helps write apps that behave consistently in different environments*

## Main Concepts ##

*There is a single state object that is responsible for the whole state of the app.*

This means that no matter how many components you have for your React App, there will be one single state to control the entirety of the app. This is called the Redux Store. All react components still have their local state. The Redux Store is central for all changes and all changes occurring locally within a component must go through the Redux store if the component wishes to update its state. For changes to appear, it must go through the Redux Store.

The React Store is in charge of managing the application state

You can create a store using:
    let store = Redux.createStore(reducer);

where reducer is a required argument.

States can be retrieved from the redux store using:
    store.getState();

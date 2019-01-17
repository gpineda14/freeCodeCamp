# Redux Actions #

*So how do we update the Redux Store? We use actions to trigger changes!*

An action is a JS object that contains info about an action that has occurred. This action must contain a type property and can optionally contain data as well.

Actions are the messengers that deliver information about your app to the Redux Store.

We can create an action like so:
    let action = {type: 'LOGIN'};

After creating the action, we then use an Action Creator to send the action to the Redux store. An Action Creator is a JS function that returns an action.
    function actionCreator() {
      return action;
    }

It is common practice to set action types as read-only constants.

*What do we do with the action we created?*

After the action is created, we use the *dispatch* method to send the returned value from the action creator to the store.

*What does the Action do with the store?*

Once a redux store receives an action, it needs to respond. With the help of a **reducer** function, the store receives a new state. The reducer takes a state and an action a returns a brand new state.

*What else can the store do?*

With the help of the **subscribe** method, we can create listener functions that are called whenever an action is dispatched against the store.

*Combining Multiple Reducers*

Remember the first principle of Redux: all app state is held in a single state object in the store. Redux provides a combineReducers() method which accepts an object that you can define properties which associate keys to specific reducer functions. 

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

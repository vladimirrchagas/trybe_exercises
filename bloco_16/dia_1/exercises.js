{// Exercise 1
/*  ** Redux: Define an Action Creator **
    After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events. 
    Define a function named actionCreator() that returns the action object when called.
*/
  const action = {
    type: 'LOGIN',
  }

  // Define an action creator here:
  const actionCreator = () => {
    return action;
  }
};

{// Exercise 2
/*  ** Redux: Dispatch an Action Event **
    dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.

    Recall that action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:

      store.dispatch(actionCreator());
      store.dispatch({ type: 'LOGIN' });
    
    The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. There's also an action creator called loginAction() which returns an action of type LOGIN. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().
*/

  const store = Redux.createStore(
    (state = {login: false}) => state,
  );

  const loginAction = () => {
    return {
      type: 'LOGIN',
    }
  };

  // Dispatch the action here:
  store.dispatch(loginAction());
}

{// Exercise 3
/*  ** Redux: Handle an Action in the Store **
    After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a reducer function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A reducer takes state and action as arguments, and it always returns a new state. It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.

    Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. You'll practice this in later challenges.

    The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.
*/

  const defaultState = {
    login: false
  };

  const reducer = (state = defaultState, action) => {
    // Change code below this line]
    switch (action.type) {
      case 'LOGIN':
        state = {login: true};
        return state;
      default:
        return state;
    }
    // Change code above this line
  };

  const store = Redux.createStore(reducer);

  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
}

{// Exercise 4
/*  **Redux: Use a Switch Statement to Handle Multiple Actions**
    You can tell the Redux store how to handle multiple action types. Say you are managing user authentication in your Redux store. You want to have a state representation for when users are logged in and when they are logged out. You represent this with a single state object with the property authenticated. You also need action creators that create actions corresponding to user login and user logout, along with the action objects themselves.

    The code editor has a store, actions, and action creators set up for you. Fill in the reducer function to handle multiple authentication actions. Use a JavaScript switch statement in the reducer to respond to different action events. This is a standard pattern in writing Redux reducers. The switch statement should switch over action.type and return the appropriate authentication state.

    Note: At this point, don't worry about state immutability, since it is small and simple in this example. For each action, you can return a new object — for example, {authenticated: true}. Also, don't forget to write a default case in your switch statement that returns the current state. This is important because once your app has multiple reducers, they are all run any time an action dispatch is made, even when the action isn't related to that reducer. In such a case, you want to make sure that you return the current state.
*/

  const defaultState = {
    authenticated: false
  };

  const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch(action.type) {
      case 'LOGIN':
        state = {authenticated: true};
        return state;
      case 'LOGOUT':
        state = {authenticated: false};
        return state;
      default:
        return state;
    }
    // Change code above this line
  };

  const store = Redux.createStore(authReducer);

  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };

  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };
}

{// Exercise 5
/*  **Redux: Use const for Action Types**
    A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as const declarations.

    Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively. Then, edit the authReducer() and the action creators to reference these constants instead of string values.

    Note: It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.

*/

  // Change code below this line
  const LOGIN = 'LOGIN';
  const LOGOUT = 'LOGOUT';
  // Change code above this line
          
  const defaultState = {
    authenticated: false
  };

  const authReducer = (state = defaultState, action) => {

    switch (action.type) {
      case LOGIN:
        return {
          authenticated: true
        }
      case LOGOUT:
        return {
          authenticated: false
        }
      default:
        return state;
    }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {type: LOGIN};
};

const logoutUser = () => {
  return {type: LOGOUT};
};

}

{// Exercise 6
/*  **Redux: Register a Store Listener**
    Another method you have access to on the Redux store object is store.subscribe(). This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.

    Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method. You'll see that store.dispatch() is called three times in a row, each time directly passing in an action object. Watch the console output between the action dispatches to see the updates take place.
*/

  const ADD = 'ADD';

  const reducer = (state = 0, action) => {
    switch(action.type) {
      case ADD:
        return state + 1;
      default:
        return state;
    }
  };

  const store = Redux.createStore(reducer);

  // Global count variable:
  let count = 0;

  // Change code below this line
  const incrementCount = () => count ++;

  store.subscribe(incrementCount);

  // Change code above this line

  store.dispatch({type: ADD});
  console.log(count);
  store.dispatch({type: ADD});
  console.log(count);
  store.dispatch({type: ADD});
  console.log(count);
}

{// Exercise 7
/*  **Redux: Combine Multiple Reducers**
    When the state of your app begins to grow more complex, it may be tempting to divide state into multiple pieces. Instead, remember the first principle of Redux: all app state is held in a single state object in the store. Therefore, Redux provides reducer composition as a solution for a complex state model. You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer. The root reducer is then passed into the Redux createStore() method.

    In order to let us combine multiple reducers together, Redux provides the combineReducers() method. This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions. The name you give to the keys will be used by Redux as the name for the associated piece of state.

    Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way. For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting. For such an application, we might write the combineReducers() method like this:

      const rootReducer = Redux.combineReducers({
      auth: authenticationReducer,
      notes: notesReducer});
    
    Now, the key notes will contain all of the state associated with our notes and handled by our notesReducer. This is how multiple reducers can be composed to manage more complex application state. In this example, the state held in the Redux store would then be a single object containing auth and notes properties.

    There are counterReducer() and authReducer() functions provided in the code editor, along with a Redux store. Finish writing the rootReducer() function using the Redux.combineReducers() method. Assign counterReducer to a key called count and authReducer to a key called auth.
*/
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';

  const counterReducer = (state = 0, action) => {
    switch(action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  };

  const LOGIN = 'LOGIN';
  const LOGOUT = 'LOGOUT';

  const authReducer = (state = {authenticated: false}, action) => {
    switch(action.type) {
      case LOGIN:
        return {
          authenticated: true
        }
      case LOGOUT:
        return {
          authenticated: false
        }
      default:
        return state;
    }
  };

  const rootReducer = // Define the root reducer here
  Redux.combineReducers({count: counterReducer, auth: authReducer});

  const store = Redux.createStore(rootReducer);
}


{// Exercise 8
/*  **Redux: Send Action Data to the Store**
    By now you've learned how to dispatch actions to the Redux store, but so far these actions have not contained any information other than a type. You can also send specific data along with your actions. In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. The Redux store often needs to know about this data.

    There's a basic notesReducer() and an addNoteText() action creator defined in the code editor. Finish the body of the addNoteText() function so that it returns an action object. The object should include a type property with a value of ADD_NOTE, and also a text property set to the note data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.

    Next, finish writing the switch statement in the notesReducer(). You need to add a case that handles the addNoteText() actions. This case should be triggered whenever there is an action of type ADD_NOTE and it should return the text property on the incoming action as the new state.

    The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store state.
*/
  const ADD_NOTE = 'ADD_NOTE';

  const notesReducer = (state = 'Initial State', action) => {
    switch(action.type) {
      // Change code below this line
      case ADD_NOTE:
        return action.text;
      // Change code above this line
      default:
        return state;
    }
  };

  const addNoteText = (note) => {
    // Change code below this line
    return {
      type: ADD_NOTE,
      text: note,
    }
    // Change code above this line
  };

  const store = Redux.createStore(notesReducer);

  console.log(store.getState());
  store.dispatch(addNoteText('Hello!'));
  console.log(store.getState());
}

{// Exercise 9
/*  **Redux: Write a Counter with Redux**
    Now you've learned all the core principles of Redux! You've seen how to create actions and action creators, create a Redux store, dispatch your actions against the store, and design state updates with pure reducers. You've even seen how to manage complex state with reducer composition and handle asynchronous actions. These examples are simplistic, but these concepts are the core principles of Redux. If you understand them well, you're ready to start building your own Redux app. The next challenges cover some of the details regarding state immutability, but first, here's a review of everything you've learned so far.

    In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store. Good luck building your first Redux app!
*/

  const INCREMENT = 1; // Define a constant for increment action types
  const DECREMENT = -1; // Define a constant for decrement action types

  const counterReducer = (state = 0, action) => {
      switch (action.type) {
          case INCREMENT:
              return state + INCREMENT;
          case DECREMENT:
              return state + DECREMENT;
          default:
              return state;
      }
  }; // Define the counter reducer which will increment or decrement the state based on the action it receives

  const incAction = () => {
      return {
          type: INCREMENT,
      }
  }; // Define an action creator for incrementing

  const decAction = () => {
      return {
          type: DECREMENT,
      }
  }; // Define an action creator for decrementing

  const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
}

{// Exercise 10
/*  **Redux: Never Mutate State**
    These final challenges describe several methods of enforcing the key principle of state immutability in Redux. Immutable state means that you never modify state directly, instead, you return a new copy of state.

    If you took a snapshot of the state of a Redux app over time, you would see something like state 1, state 2, state 3,state 4, ... and so on where each state may be similar to the last, but each is a distinct piece of data. This immutability, in fact, is what provides such features as time-travel debugging that you may have heard about.

    Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer. Fortunately, JavaScript (especially ES6) provides several useful tools you can use to enforce the immutability of your state, whether it is a string, number, array, or object. Note that strings and numbers are primitive values and are immutable by nature. In other words, 3 is always 3. You cannot change the value of the number 3. An array or object, however, is mutable. In practice, your state will probably consist of an array or object, as these are useful data structures for representing many types of information.

    There is a store and reducer in the code editor for managing to-do items. Finish writing the ADD_TO_DO case in the reducer to append a new to-do to the state. There are a few ways to accomplish this with standard JavaScript or ES6. See if you can find a way to return a new array with the item from action.todo appended to the end.
*/

  const ADD_TO_DO = 'ADD_TO_DO';

  // A list of strings representing tasks to do:
  const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
  ];

  const immutableReducer = (state = todos, action) => {
    switch(action.type) {
      case ADD_TO_DO:
        // Don't mutate state here or the tests will fail
        return [...state, action.todo];
      default:
        return state;
    }
  };

  const addToDo = (todo) => {
    return {
      type: ADD_TO_DO,
      todo
    }
  }

  const store = Redux.createStore(immutableReducer);
}

{// Exercise 11
/*  **Redux: Use the Spread Operator on Arrays**
    One solution from ES6 to help enforce state immutability in Redux is the spread operator: .... The spread operator has a variety of applications, one of which is well-suited to the previous challenge of producing a new array from an existing array. This is relatively new, but commonly used syntax. For example, if you have an array myArray and write:

    let newArray = [...myArray];

    newArray is now a clone of myArray. Both arrays still exist separately in memory. If you perform a mutation like newArray.push(5), myArray doesn't change. The ... effectively spreads out the values in myArray into a new array. To clone an array but add additional values in the new array, you could write [...myArray, 'new value']. This would return a new array composed of the values in myArray and the string 'new value' as the last value. The spread syntax can be used multiple times in array composition like this, but it's important to note that it only makes a shallow copy of the array. That is to say, it only provides immutable array operations for one-dimensional arrays.

    Use the spread operator to return a new copy of state when a to-do is added.
*/
  const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        // Don't mutate state here or the tests will fail
        return [...state, action.todo]
      default:
        return state;
    }
  };

  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }

  const store = Redux.createStore(immutableReducer);
}

{// Exercise 12
/*  **Redux: Remove an Item from an Array**
    Time to practice removing items from an array. The spread operator can be used here as well. Other useful JavaScript methods include slice() and concat().

    The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed.
*/
  const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // Don't mutate state here or the tests will fail
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1, state.length)
        ];
      default:
        return state;
    }
  };

  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }

  const store = Redux.createStore(immutableReducer);
}

{// Exercise 13
/*  **Redux: Copy an Object with Object.assign**
    The last several challenges worked with arrays, but there are ways to help enforce state immutability when state is an object, too. A useful tool for handling objects is the Object.assign() utility. Object.assign() takes a target object and source objects and maps properties from the source objects to the target object. Any matching properties are overwritten by properties in the source objects. This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy. Here's an example:

      const newObject = Object.assign({}, obj1, obj2);
    
    This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.

    The Redux state and actions were modified to handle an object for the state. Edit the code to return a new state object for actions with type ONLINE, which set the status property to the string online. Try to use Object.assign() to complete the challenge.
*/
  const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
    
  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ONLINE':
        // Don't mutate state here or the tests will fail
        const newObject = Object.assign({}, state, {status: 'online'});
        return newObject;
      default:
        return state;
    }
  };

  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };

  const store = Redux.createStore(immutableReducer);
}
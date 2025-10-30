<img width="1470" height="719" alt="image" src="https://github.com/user-attachments/assets/9cddf1d9-a211-4688-baca-61f3ac8998a7" /># Assignment 6

## Extracting State Logic into the Reducer

1. Dispatch actions from event handlers
<img width="1470" height="719" alt="image" src="https://github.com/user-attachments/assets/8ff31e0b-ca50-4a38-88b5-0eea4833c5ca" />

2. Clear the input on sending a message
   <img width="1470" height="719" alt="image" src="https://github.com/user-attachments/assets/28c5b119-82e0-4513-b2ca-67a90c9fcde4" />

3. Restore input values when switching between tabs
   <img width="1470" height="719" alt="image" src="https://github.com/user-attachments/assets/0d940200-f159-42f1-a233-bf896921a0ce" />

4. Implement useReducer from scratch
<img width="1470" height="719" alt="image" src="https://github.com/user-attachments/assets/a7960ec8-67cd-4a0b-bca5-40210f662a01" />

## Passing Data Deeply with Context

1. Replace prop drilling with context
   <img width="1470" height="719" alt="image" src="https://github.com/user-attachments/assets/dd5c3956-62cd-47ef-828f-ad52cacdfe83" />

_______________________________________________________________________________
Answer the following questions in your own language

a. What is state lifting and props drilling?
Ans: State Lifting is the process in which the individual state of the child component is lifted up into the parent component, and that state is shared by the children component. The props drilling is a concept in which we pass props from the parent component to the child or the leaf components by passing props from the top, and midway, to the end component.

b. How to avoid props drilling?
Ans: Props drilling is avoided by using the React's context API, and the Redux which manages the application’s state in 1 component.

c. Compare useState vs useReducer. When is useReducer a better choice?
Ans: The useState and useReducer both are React Hooks for state management. The useState hook is simpler and easy to understand and needs less code for implementation, but it is inefficient when we want to use it in complex projects. The useReducer takes the reducer and initialState as arguments, and then it returns the state and dispatch. The reducer combines all the operations on the state by writing switch cases inside of it and using the type property in the action to execute the particular case block. So, the reducer manages the state effectively; however, the code needed is comparatively larger, and we need to create an extra reducer as well.

d. How to trigger a re-render in React?
Ans: Re-rendering in React is triggered when the state updates either in the useState or the useReducer. The methods are setState or dispatch(actions). The component also rerenders when the parent component passing props changes the prop values.



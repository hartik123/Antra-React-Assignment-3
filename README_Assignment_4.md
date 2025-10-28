# Assignment 4

## Queueing a Series of State Update

1. Fix a request counter
   <img width="1470" height="721" alt="image" src="https://github.com/user-attachments/assets/2186a4d3-588d-4d90-a7ee-710e5b47473c" />

2. Implement the state queue yourself
   <img width="1470" height="721" alt="image" src="https://github.com/user-attachments/assets/b1e553a4-2ba5-49ad-8f00-e111c06f275b" />

## Updating Objects in States

1. Fix incorrect state updates
   <img width="1470" height="721" alt="image" src="https://github.com/user-attachments/assets/8353cfff-8633-4050-82b0-4b69803f4a07" />

   changes made:
   1. Score: for updating the score the previous object was copied and then the +1 was made to it.
   2. handleLastNameChange: The previous player Object was copied and then the lastName value was changed, as in previosuly it was replacing the player object with the object having only lastName property.

2. Find and fix the mutation
   <img width="1470" height="721" alt="image" src="https://github.com/user-attachments/assets/97ce7fa0-099d-4b3d-b20a-6a8ca29b4a2b" />

   Q. Why is the background moving after the color change?
   Ans: The background is moving because the same object's x and y value is updated on the moving of the shape which is used by the rectangular background for positioning itself. So, now I copied the position object into shape, and now the shape is using a seprate position objcet and the backgeounf is using sperate.

3. Update an object with Immer
   <img width="1470" height="721" alt="image" src="https://github.com/user-attachments/assets/75385250-6464-4f46-84c1-14ac7e8dac49" />

## Updating Arrays in State

1. Update an item in the shopping cart
   <img width="1470" height="721" alt="image" src="https://github.com/user-attachments/assets/5dda0f38-671c-4478-bb89-0e7fe1b4647a" />

2. Remove an item from the shopping cart
   <img width="1470" height="721" alt="image" src="https://github.com/user-attachments/assets/67e7cf10-da90-4a5b-b99a-60e0511ed1fa" />

3. Fix the mutations using non-mutative methods
   <img width="1470" height="721" alt="image" src="https://github.com/user-attachments/assets/ee0733c0-88e8-405d-a4ec-726509182f78" />

4. Fix the mutations using Immer
   <img width="1470" height="721" alt="image" src="https://github.com/user-attachments/assets/7f0eb8aa-76f7-4772-8d2e-aa9419ff0a93" />


**Answer the following questions in your own words:**
1. What is immutability
Ans: Immutabiliy means the primitaive dataypes like number, string, boolean, cannot be modified inplace, and in React the objects also cannot be modified hhowever in javascript it is possible. So, to store object in a component state and to modify it we have to immutitaive approaches like copying the object propertise first and then using setter methods, or using map and filter methods.

3. What is state update batching and why
Ans: The state update batching is a concepot whenern in all the updates to the statein a function are queued and they are batched together to processes in once so that the compinent can be optimised and the rerendering could be efficient.

4. What are the 2 forms of setState argument and what is the difference
Ans: The 2 forms of setState arguments are given below
a. setState(num+1): replacing the state or the variable directly. Here , it takes the state when the action was done like click or change, and that is passed in the queue like setState(5+1).
b. setState(num=>num+1): putting the updater function in the queue, and it takes the previous state and then updates the variable.

6. Controlled vs uncontrolled components
Ans: Controlled Components uses React state to handle compnent value wheraes the unocntrolled comopnent manage own state and rely on the DOM, and uses refs to access the values. The controlled compinents are useful for the complex form validations, and making sure the React Lifecycel is followed, and the Uncontrolled compnents can be used for simple form submissions.



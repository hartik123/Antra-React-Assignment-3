# Antra-React-Assignment-2 - Part 1

## Passing Props to a Component

1. Extract a component
   <img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/b7a262ac-d286-4630-a66d-5f248bcd8c5e" />

2. Adjust the image size based on a prop
<img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/f44b13b8-6a51-425d-88c3-e9ee003d4f55" />

3.Passing JSX in a children prop
<img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/e3dd40fb-ffa9-4cb1-abd4-0b6942639c8c" />

## Conditional Rendering

1. Show an icon for incomplete items with ? :
   <img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/602c453c-5226-482b-9bda-d0f3cb13812b" />

2.Show the item importance with &&
<img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/81b84d8d-1cce-4693-a700-a31202c84b70" />

3.Refactor a series of ? : to if and variables
<img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/fa708abf-3735-4da0-be14-4e3d69ca36c8" />

## Rendering Lists

1.Splitting a list in two
<img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/6f6dc886-79d8-40fb-88c4-b0c14c39541b" />

2. Nested lists in one component
   <img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/844a47f6-954d-4581-84fc-6806f293c121" />

3. Extracting a list item component
   <img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/2479e1cd-d73d-42d3-a826-b984b88dc9ae" />

4. List with a separator 
<img width="1464" height="711" alt="image" src="https://github.com/user-attachments/assets/61065c09-6c03-4143-a41d-f20193db6552" />


# Part 2

What’s the purpose of using the key attribute when we render a list of items in JSX?
Ans: The items can be distringuised from other similar items present at the same level like for the <li> tag we need to use key attribute. It is similar to how we need file names in the desktop to identify the file. Just by remembvering th eorder it will confusing because if some files are insrete dor deleted or rearranges we won't be able to identify it so that';s why filename is important and imilarly the key is also important as well.

What is the “children” props?
Ans: Like how we pass the html tags or have nested html elements in the html file similarly in the React a nested componentedn can be passed to a wrapper component within the oepning and clsoign tag of the component, and it is passed as a children prop to the wrapper component.

ex:
<NavigationBar>
<MenuItem /> //children 
<MenuItem /> //children
</NavigationBar>

What is pure function and pure component?
Ans: A pure function is a function which returns the same output on the same input everytimne and has no side effects. similarly the Pure component renders the same output on the same props and the same state, and has no side effects.

What is conditional rendering? How do you implement it effectively?
Ans:
Conditional rendering can be done in 3 ways
if else -> The JS if else conditinal sytntax can be used for the conditional rendserig
?: -> This is a ternary operator. If the consition is true then the first block produces the output otherwise the block after : will be prodcuing the output.
&&: If the condition before && is true then the content after && is shown. Additionally it is put inside the {} only.













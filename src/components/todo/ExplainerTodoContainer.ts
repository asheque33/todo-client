const sortedTodos = [...(todo?.data || [])].sort((a, b) =>
  a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
);
console.log(sortedTodos);
// ! {todo?.data || []: This is using the optional chaining (?.) and logical OR (||) operators. It's checking if todo is not null or undefined. If todo is null or undefined, it will return [] (an empty array). If todo is not null or undefined, it will return todo.data.

// ![...(todo?.data || [])]: The spread operator (...) is used to create a new array that contains all the elements of todo.data (or an empty array if todo.data is null or undefined).

// !.sort((a, b) => a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1): This is using the sort method of the array to sort the todos. The sort method takes a comparator function, which is used to determine the order of the elements. The comparator function takes two arguments, a and b, which represent two elements in the array.

// !If a.isCompleted is equal to b.isCompleted, it returns 0, which means a and b are equal in terms of sorting.
// !If a.isCompleted is true (which means the todo is completed), it returns 1, which means a should come after b in the sorted array.
// !If a.isCompleted is false (which means the todo is not completed), it returns -1, which means a should come before b in the sorted array.
// !const sortedTodos = ...: Finally, the sorted array is assigned to the sortedTodos constant.

// !So, in summary, this line of code is creating a new sorted array of todos where the completed todos come after the not completed ones. }
//todo The .sort() function is used to arrange the elements of an array in a certain order. In this case, it's being used to order the todo items based on whether they are completed or not.

//todo The function (a, b) => a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1 is the rule used for sorting. Here's what it does:

//? It compares two todo items at a time, a and b.
//? If both a and b have the same completion status (both are completed or both are not completed), it returns 0. This means a and b are equal in terms of sorting, so their order doesn't change.
//? If a is completed (meaning a.isCompleted is true), it returns 1. This means a should come after b in the sorted array. So, completed todos are placed at the end of the list.
//? If a is not completed (meaning a.isCompleted is false), it returns -1. This means a should come before b in the sorted array. So, not completed todos are placed at the beginning of the list.
//todo  Finally, the sorted array is stored in the sortedTodos variable. This is the array that will be used to display the todos in the desired order. */

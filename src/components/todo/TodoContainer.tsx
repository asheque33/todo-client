import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import TodoDropDownFilter from "./TodoDropDownFilter";
import { useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { selectedTodos } from "@/redux/features/todoSlice";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  //todo--> From Local State management to show data in the UI[Redux only]
  const todos = useAppSelector(selectedTodos);
  const filteredTodos = todos.filter((todo) => {
    if (priority === "" || priority === "All") return todos;
    return todo.priority === priority;
  });
  //todo--> From Server state management to get Todos data[RTK]
  // const { data, isError, isLoading } = useGetTodosQuery(priority);
  // const { data: todo } = data;

  //* Sort todos so that completed ones are at the end
  const sortedTodos = [...(filteredTodos || todos)].sort((a, b) =>
    a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
  );
  // if (isLoading) {
  //   return <h3 className="text-green-400 text-3xl">Loading..............</h3>;
  // }
  // if (isError) {
  //   return <h3 className="text-red-400 text-3xl">Error..............</h3>;
  // }
  return (
    <div>
      <div className="flex justify-between px-3 mb-3">
        {/*Add Todo Button*/}
        <AddTodoModal />
        {/*Filter Todo Priority Button*/}
        <TodoDropDownFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="  p-1.5 w-full h-full bg-primary-gradient rounded-xl gap-x-5">
        <div className="bg-white p-5 rounded-lg space-y-3">
          {sortedTodos.map((item) => (
            <TodoCard {...item} key={item._id} />
          ))}
        </div>
        {/* <div className="bg-white flex justify-center items-center p-5 rounded-md text-2xl font-semibold">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;

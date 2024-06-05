import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import TodoDropDownFilter from "./TodoDropDownFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useAppSelector } from "@/redux/hook";
import { selectTodo } from "@/redux/features/todoSlice";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // console.log(priority);
  //! From Local State management to show data in the UI.
  // const todo = useAppSelector(selectTodo);
  //* From Server state management to get Todos data
  const { data: todo, isError, isLoading } = useGetTodosQuery(priority);
  //todo=> [For caching data] -> useGetTodosQuery(undefined, { pollingInterval: 1000, refetchOnMountOrArgChange: true }); etc
  console.log(todo);
  // Sort todos so that completed ones are at the end
  const sortedTodos = [...(todo?.data || [])].sort((a, b) =>
    a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
  );

  console.log(sortedTodos);
  if (isLoading) {
    return <h3 className="text-green-400 text-3xl">Loading..............</h3>;
  }
  if (isError) {
    return <h3 className="text-red-400 text-3xl">Error..............</h3>;
  }
  return (
    <div className=" ">
      <div className="flex justify-between px-3 mb-3">
        <AddTodoModal />
        <TodoDropDownFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="  p-1.5 w-full h-full bg-primary-gradient rounded-xl gap-x-5">
        <div className="bg-white p-5 rounded-lg space-y-3">
          {/* {todo?.data?.map((item) => ( */}
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

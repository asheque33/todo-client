import TodoContainer from "@/components/todo/TodoContainer";
import ReusableContainer from "@/components/ui/ReusableContainer";

const Todo = () => {
  return (
    <ReusableContainer>
      <h1 className="text-3xl text-center font-semibold my-10">Todo List</h1>
      <TodoContainer />
    </ReusableContainer>
  );
};

export default Todo;

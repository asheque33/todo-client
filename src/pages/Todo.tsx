import TodoContainer from "@/components/todo/TodoContainer";
import ReusableContainer from "@/components/ui/ReusableContainer";
import React from "react";

const Todo = () => {
  return (
    <ReusableContainer>
      <h1 className="text-3xl text-center font-semibold my-10">My Todo</h1>
      <TodoContainer />
    </ReusableContainer>
  );
};

export default Todo;

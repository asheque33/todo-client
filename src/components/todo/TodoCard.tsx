import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { ListChecks, Trash2 } from "lucide-react";
import { removeTodo, toggleCompleted } from "@/redux/features/todoSlice";
import { useUpdateTodoMutation } from "@/redux/api/api";
type TodoCardProps = {
  _id: string;
  priority: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
const TodoCard = ({
  _id,
  priority,
  title,
  description,
  isCompleted,
}: TodoCardProps) => {
  //* For local State management */
  // const dispatch = useAppDispatch();
  // const handleRemoveTodo = () => {
  //   dispatch(removeTodo(id));
  // };
  //* For Server State management */
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  const toggleState = () => {
    // dispatch(toggleCompleted(id));
    const updatedData = {
      priority,
      title,
      description,
      isCompleted: !isCompleted,
    };
    const updatedDataWithId = { _id, data: updatedData };
    console.log(updatedData);
    if (updatedData.isCompleted === true) {
      // Move the selected done item to the bottom of the list
      // const doneItem = document.getElementById(_id);
      // doneItem?.parentNode?.appendChild(doneItem);
    }
    updateTodo(updatedDataWithId);
    if (isLoading) {
      <p>Loading................</p>;
    }
  };
  return (
    <div className="flex justify-between items-center rounded-md p-3 border border-purple-400">
      <input
        className="mr-4"
        onChange={toggleState}
        type="checkbox"
        name="toggle"
        id="toggle"
        defaultChecked={isCompleted}
      />
      <h4 className="text-xl font-semibold flex-[1.5]">{title}</h4>
      <div className="flex-1 flex items-center gap-2">
        <div
          className={`size-3 rounded-full 
        ${priority === "Low" ? "bg-red-400" : ""}
        ${priority === "Medium" ? "bg-yellow-400" : ""}
        ${priority === "High" ? "bg-green-400" : ""}
        `}
        ></div>
        <h4>{priority}</h4>
      </div>
      <h4 className="flex-1">
        {isCompleted ? (
          <span className="text-green-400">Done</span>
        ) : (
          <span className="text-red-400">Pending</span>
        )}
      </h4>
      <p className="flex-[2.5]">{description}</p>
      <div className="space-x-5 mr-1">
        <Button>
          <Trash2 onClick={() => handleRemoveTodo()} />
        </Button>
        <Button>
          <ListChecks />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;

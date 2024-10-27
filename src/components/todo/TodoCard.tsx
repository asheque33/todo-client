import { useAppDispatch } from "@/redux/hook";
import { toggleCompleted } from "@/redux/features/todoSlice";
import UpdateTodoItem from "./UpdateTodoItem";
import DeletedModal from "../Modal/DeletedModal";
export type TodoCardProps = {
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
  //todo-> For local State management [Redux only]
  const dispatch = useAppDispatch();

  //! For Server State management [RTK Query]
  // const [updateTodo, { isLoading }] = useUpdateTodoMutation();

  const togglePriorityState = () => {
    dispatch(toggleCompleted(_id));

    //* Move the selected done item to the bottom of the list
    // if (updatedData.isCompleted === true) {
    const selectedItem = document.getElementById(_id);
    selectedItem?.parentNode?.appendChild(selectedItem);
    // }
    //! Server State management To Update Specific One[RTK Query]
    // const updatedDataWithId = { _id, data: updatedData };
    //   updateTodo(updatedDataWithId);
    //   if (isLoading) {
    //     <p>Loading................</p>;
    //   }
  };
  return (
    <div className="flex justify-between items-center rounded-md p-3 border border-purple-400">
      <input
        className="mr-4"
        onChange={togglePriorityState}
        type="checkbox"
        name="toggle"
        id="toggle"
        defaultChecked={isCompleted} //checked condition false
      />
      <h4 className="text-xl font-semibold flex-[2]">{title}</h4>
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
      <div className="flex justify-between items-center gap-x-6 mr-1">
        <div>
          <DeletedModal _id={_id} />
        </div>
        <div>
          <UpdateTodoItem
            existingTodoItem={{
              _id,
              title,
              priority,
              description,
              isCompleted,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;

import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import { createTodo } from "@/redux/features/todoSlice";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useCreateTodoMutation } from "@/redux/api/api";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  //! For Local State management
  // const dispatch = useAppDispatch();
  //todo=> For Server State management
  const [createTodo, { data, isLoading, isError }] = useCreateTodoMutation();
  /* -------- */
  const handleModalForm = (e: FormEvent) => {
    e.preventDefault();
    //* const id = Math.random().toString(36).substring(2, 11);
    const taskDetails = {
      // id: id,
      title: task,
      description,
      isCompleted: false,
      priority,
    };
    //! For Local State to create data[locally] => [createTodo<-todoSlice.ts]
    // dispatch(createTodo(taskDetails));
    //todo=> For Server State management to create data using server
    console.log(taskDetails);
    console.log({ data, isLoading, isError });
    createTodo(taskDetails);
    console.log("inside modal form", taskDetails);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <span className="text-2xl font-semibold">Add Task</span>
          </DialogTitle>
          <DialogDescription>
            <span className="text-lg">
              Add your task that you want to complete.
            </span>
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleModalForm}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Priority</Label>
              <Select onValueChange={(value) => setPriority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AddTodoModal;
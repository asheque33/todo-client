import { ListChecks } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { TodoCardProps } from "./TodoCard";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { updateTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";

const UpdateTodoItem = ({
  existingTodoItem,
}: {
  existingTodoItem: TodoCardProps;
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    description: "",
  });
  useEffect(() => {
    if (existingTodoItem) {
      setFormData({
        title: existingTodoItem.title || "",
        priority: existingTodoItem.priority || "",
        description: existingTodoItem.description || "",
      });
    }
  }, [existingTodoItem]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectedValue = (value: string) => {
    setFormData({ ...formData, priority: value });
  };
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTodo({ ...existingTodoItem, ...formData }));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" text-xl font-semibold">
          <ListChecks />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] ">
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
        <form onSubmit={handleForm}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onChange={handleChange}
                value={formData.title}
                required
                placeholder="Add Task Title"
                name="title"
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Priority</Label>
              <Select
                required
                value={formData.priority}
                onValueChange={handleSelectedValue}
              >
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
              <textarea
                onChange={handleChange}
                value={formData.description}
                placeholder="Add description here..."
                required={true}
                name="description"
                id="description"
                className="col-span-3 border rounded-md"
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

export default UpdateTodoItem;

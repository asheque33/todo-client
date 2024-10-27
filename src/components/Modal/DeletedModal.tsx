import { removeTodo } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
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
import { useAppDispatch } from "@/redux/hook";

const DeletedModal = ({ _id }: { _id: string }) => {
  const dispatch = useAppDispatch();
  const handleRemoveTodo = (_id: string) => {
    dispatch(removeTodo(_id));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-400">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-full max-h-36 h-full">
        <DialogHeader>
          <DialogTitle>Are You Sure You Want To Delete?</DialogTitle>
        </DialogHeader>
        {/* <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription> */}
        <DialogFooter className="flex justify-between items-end h-16">
          <DialogClose asChild>
            <Button type="button" className="w-full text-[#f1f1f1] ">
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="bg-red-400 w-full"
            onClick={() => handleRemoveTodo(_id)}
          >
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletedModal;

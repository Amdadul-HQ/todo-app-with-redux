import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export function AddTaskModal() {
    const form = useForm()
    const onsubmit = (data) =>{
        console.log(data);
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">Fill up this form to add task</DialogDescription>
        <DialogHeader>
            <DialogTitle>
                Add Task
            </DialogTitle>
        </DialogHeader>
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}>
        <FormField
            control={form.control}
            name="title"
            render={({field}) => (
                <FormItem>
                <FormLabel />
                <FormControl>
                <Input {...field}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
            </FormItem>
            )}
        />
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
        </form>
        </Form>

      </DialogContent>
    </Dialog>
  );
}

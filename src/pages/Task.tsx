import { useAppSelector } from "@/Redux/features/hook";
import { selectTasks } from "@/Redux/features/task/taskSlice";

const Task = () => {
    const tasks = useAppSelector(selectTasks);
    return (
        <div>
            
        </div>
    );
};

export default Task;
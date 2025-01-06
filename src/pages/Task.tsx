import TaskCard from "@/module/tasks/TaskCard";
import { useAppSelector } from "@/Redux/features/hook";
import { selectTasks } from "@/Redux/features/task/taskSlice";

const Task = () => {
    const tasks = useAppSelector(selectTasks);
    return (
        <div className="w-full px-5 mt-20">
            <div>
                <h1>Tasks</h1>
            </div>
            <div className="space-y-5 mt-5">
                {
                    tasks.map(task =><TaskCard task={task}/>)
                }
            </div>
        </div>
    );
};

export default Task;
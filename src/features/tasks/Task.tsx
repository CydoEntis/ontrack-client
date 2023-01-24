import AddComment from "../comments/AddComment";
import { AiTwotoneCalendar } from "react-icons/ai";
import Avatar from "@/components/avatars/Avatar";
import Button from "@/components/buttons/Button";
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import SubTasks from "./SubTasks";
import Tag from "@/components/tags/Tag";
import TaskHeader from "./TaskHeader";
import TextArea from "@/components/form/TextArea";
import { useState } from "react";

let taskList = [
  {
    id: "1",
    description: "Some kind of task",
    completed: false,
  },
  {
    id: "2",
    description: "A completed task",
    completed: true,
  },
  {
    id: "3",
    description: "Get this shit done",
    completed: false,
  },
  {
    id: "4",
    description: "Some kind of task",
    completed: false,
  },
  {
    id: "5",
    description: "A completed task",
    completed: true,
  },
  {
    id: "6",
    description: "Get this shit done",
    completed: false,
  },
  {
    id: "7",
    description: "Some kind of task",
    completed: false,
  },
  {
    id: "8",
    description: "A completed task",
    completed: true,
  },
  {
    id: "9",
    description: "Get this shit done",
    completed: false,
  },
];

type Props = {};

const Task = (props: Props) => {
  const [tasks, setTasks] = useState(taskList);

  const [subtask, setSubtask] = useState<string>("");

  const deleteTaskHandler = (id: string) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    console.log(tasks);
  };

  const completeTaskHandler = (id: string) => {
    let index = tasks.findIndex((task) => task.id === id);
    let updatedTasks = [...tasks];
    let updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className="relative flex flex-col flex-wrap gap-3 ">
      <Link
        className="absolute top-5 right-5 flex w-10 items-center justify-center rounded-lg border border-red-30 bg-red-10 py-1 px-2 text-xs text-red-40"
        to={`/projects/${1}/tasks?sort=all`}
      >
        <MdClose className="text-2xl" />
      </Link>
      <TaskHeader />
      <SubTasks
        className="h-52 w-5/6 overflow-y-auto p-3"
        tasks={taskList}
        deleteTaskHandler={deleteTaskHandler}
        completeTaskHandler={completeTaskHandler}
      />
      <AddComment />
      <Comments />
    </div>
  );
};

export default Task;

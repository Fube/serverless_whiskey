import React from "react";
import Task from "./Task";

function divideIntoHours(tasks) {
    const map = new Map();

    for (const task of tasks) {
        const hour = task.createdAt.getHours();
        if (map.has(hour)) {
            map.get(hour).push(task);
        } else {
            map.set(hour, [task]);
        }
    }
    return map;
}

function taskFromMap(map) {
    const toRet = [];
    for (const [hour, tasks] of map) {
        toRet.push(<h3 className="hour-divider">{hour}</h3>);
        for (const task of tasks) {
            toRet.push(<Task {...task} />);
        }
    }
    return toRet;
}

function TaskList({ tasks }) {
    return (
        <div className="task-container">
            {taskFromMap(divideIntoHours(tasks))}
        </div>
    );
}

export default TaskList;

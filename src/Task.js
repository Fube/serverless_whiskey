import { DateTime } from "luxon";
import React from "react";

function asShortTime(date) {
    return DateTime.fromJSDate(new Date(date)).toFormat("HH:mm");
}

function Task({ person, task, createdAt }) {
    return (
        <div className="task">
            With {person} at {asShortTime(createdAt)}: {task}
        </div>
    );
}

export default Task;

import { DateTime } from "luxon";
import React, { useMemo } from "react";
import { firestore } from "./global";
import { useCollectionData } from "react-firebase-hooks/firestore";
import TaskList from "./TaskList";

function Day({ day }) {
    const start = DateTime.fromJSDate(new Date(day)).startOf("day").toJSDate();
    const end = DateTime.fromJSDate(start).endOf("day").toJSDate();

    const query = useMemo(() => {
        const tasksRef = firestore.collection("tasks");
        const query = tasksRef
            .orderBy("createdAt", "desc")
            .where("createdAt", ">", start)
            .where("createdAt", "<", end);
        return query;
    }, [start, end]);

    const [tasks] = useCollectionData(query, { idField: "id" });

    return (
        <div>
            <h1>
                What did Whiskey do on{" "}
                {DateTime.fromJSDate(start).toFormat("DD")}?
            </h1>
            <div className="flex jcc">
                {tasks?.length > 0 ? (
                    <TaskList
                        tasks={tasks.map((n) => {
                            n.createdAt = new Date(n.createdAt.seconds * 1000);
                            return n;
                        })}
                    />
                ) : (
                    <h3>Nothing 😢</h3>
                )}
            </div>
        </div>
    );
}

export default Day;

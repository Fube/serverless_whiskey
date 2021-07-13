import "firebase/firestore";
import React, { useEffect } from "react";
import Datetime from "react-datetime";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useHistory } from "react-router-dom";
import { firestore } from "./global";

function Landing() {
    const router = useHistory();
    const tasksRef = firestore.collection("tasks");
    const query = tasksRef.orderBy("createdAt", "desc").limit(1);
    const [tasks] = useCollectionData(query, { idField: "id" });

    function gotoDay(day) {
        router.push(`/day/${day.toISOString()}`);
    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <>
            <h1>Where is Whiskey right now?</h1>
            <h3>
                {tasks?.[0]?.task === "walk start"
                    ? `Out on a walk with ${tasks?.[0].person}`
                    : "At home"}
            </h3>
            <div className="flex jcc">
                <Datetime
                    closeOnClickOutside
                    closeOnSelect
                    onChange={(e) => gotoDay(new Date(e.toLocaleString()))}
                />
            </div>
        </>
    );
}

export default Landing;

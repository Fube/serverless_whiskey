import capitalize from "capitalize";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { firestore } from "./global";

const activities = ["walk start", "walk end", "feed", "brush teeth", "bathe"];

function TaskSubmission() {
    const router = useHistory();
    const [name, setName] = useState("");
    const [activity, setActivity] = useState("");

    const tasksRef = firestore.collection("tasks");

    async function submit(e) {
        e.preventDefault();

        await tasksRef.add({
            task: activity,
            person: name,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        router.push("/day");
    }

    return (
        <Container className="jcc flex">
            <Form className="task-submit" onSubmit={submit}>
                <Form.Group className="jcc flex flex-column">
                    <Form.Label>Activity</Form.Label>
                    <select
                        className="d-block"
                        onChange={({ target: { value } }) => setActivity(value)}
                        value={activity}
                    >
                        <option value="" disabled selected hidden>
                            Choose Activity...
                        </option>
                        {activities.map((act, key) => (
                            <option value={act} key={key}>
                                {capitalize(act)}
                            </option>
                        ))}
                    </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label className="w-100">Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        onChange={({ target: { value } }) => setName(value)}
                        value={name}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default TaskSubmission;

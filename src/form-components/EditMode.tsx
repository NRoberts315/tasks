import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function checkEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function checkStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function resetName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Group>
                <Form.Check
                    type="switch"
                    label="Edit"
                    checked={edit}
                    onChange={checkEdit}
                />
                <Form.Check
                    hidden={edit == false}
                    type="checkbox"
                    id="isStudent"
                    label="Is student?"
                    name="isStudent"
                    checked={isStudent}
                    onChange={checkStudent}
                />
                <Form.Control
                    hidden={edit == false}
                    value={name}
                    onChange={resetName}
                />
            </Form.Group>
            <h3 hidden={edit == true}>
                {name} is {isStudent ? "" : "not"} a student
            </h3>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <Form.Group className="a4CheckAns">
            <Form.Label>Check Answer</Form.Label>
            <Form.Control
                value={answer}
                onChange={changeAnswer}
                placeholder="Please Enter your Answer"
            />
            {answer == expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </Form.Group>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(request)) {
            setRequest(parseInt(event.target.value));
        } else {
            setRequest(0);
        }
    }

    return (
        <Form.Group className="a4GiveAttempts">
            <Form.Label>Attempts remaining: </Form.Label>
            {attempts}
            <Form.Control
                type="number"
                value={request}
                onChange={updateRequest}
                placeholder="Please input the number of attempts you would like to add"
            />
            <button
                disabled={attempts <= 0}
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
            >
                use
            </button>
            <button
                onClick={() => {
                    setAttempts(attempts + request);
                }}
            >
                gain
            </button>
        </Form.Group>
    );
}

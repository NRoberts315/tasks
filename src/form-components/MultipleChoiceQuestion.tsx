import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function changeAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Select value={answer} onChange={changeAnswer}>
                    {options.map((x: string) => {
                        return (
                            <option key={x} value={x}>
                                {x}
                            </option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
            <h3>{answer == expectedAnswer ? "✔️" : "❌"}</h3>
        </div>
    );
}

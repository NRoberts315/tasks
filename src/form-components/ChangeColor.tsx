import React, { HTMLInputTypeAttribute, useState } from "react";
import { Form } from "react-bootstrap";
const colorList = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];
const startColor = colorList[0];
export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(startColor);

    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                {colorList.map((cList: string) => (
                    <Form.Check
                        type="radio"
                        name="color"
                        key={cList}
                        value={cList}
                        style={{ backgroundColor: cList }}
                        checked={cList == color}
                        onChange={changeColor}
                    />
                ))}
            </Form.Group>
            <h3>
                You have chosen
                <p
                    data-testid="colored-box"
                    style={{ backgroundColor: "${color}" }}
                >
                    {color}
                </p>
            </h3>
        </div>
    );
}

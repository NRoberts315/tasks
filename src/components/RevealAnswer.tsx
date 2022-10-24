import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function visibilityOnOffSwitch(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={visibilityOnOffSwitch}>RevealAnswer</Button>
            {visible && <div>42</div>}
        </div>
    );
}

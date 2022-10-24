import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    //In order, Christmas, Halloween, Thanksgiving, Independence Day (Windows please add flag emoji), Presidents Day
    type Holiday = "🎄" | "🎃" | "🦃" | "🎆" | "🤵";

    const changeByAlphabet: Record<Holiday, Holiday> = {
        "🎄": "🎃",
        "🎃": "🎆",
        "🎆": "🤵",
        "🤵": "🦃",
        "🦃": "🎄"
    };

    const changeByDay: Record<Holiday, Holiday> = {
        "🤵": "🎆",
        "🎆": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🤵"
    };

    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function incrementByDay(): void {
        setHoliday(changeByDay[holiday]);
    }

    function incrementByAlphabet(): void {
        setHoliday(changeByAlphabet[holiday]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={incrementByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={incrementByDay}>Advance by Year</Button>
        </div>
    );
}

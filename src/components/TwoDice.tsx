import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, rollLeftDie] = useState<number>(1);
    const [rightDie, rollRightDie] = useState<number>(2);

    function rollLeft(): void {
        rollLeftDie(d6());
    }

    function rollRight(): void {
        rollRightDie(d6());
    }

    function rollBoth(): void {
        rollLeftDie(d6());
        rollRightDie(d6());
    }

    return (
        <div>
            <Button onClick={rollLeft}> Roll Left </Button>
            <span data-testid={"left-die"}>||{leftDie}||</span>
            <Button onClick={rollBoth}> Roll Both </Button>
            <span data-testid={"right-die"}>||{rightDie}||</span>
            <Button onClick={rollRight}> Roll Right </Button>
            {leftDie == rightDie ? (
                leftDie == 1 ? (
                    <div>You Lose</div>
                ) : (
                    <div>You Win</div>
                )
            ) : (
                <div>Roll Again</div>
            )}
        </div>
    );
}

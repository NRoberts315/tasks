import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizRunning, setQuizRunning] = useState<boolean>(false);

    function reduceAttemptsLeft(): void {
        setAttempts(attempts - 1);
    }

    function increaseAttemptsLeft(): void {
        setAttempts(attempts + 1);
    }

    function beginQuiz(): void {
        quizRunning
            ? setQuizRunning(true)
            : (setQuizRunning(true), reduceAttemptsLeft());
    }

    function endQuiz(): void {
        setQuizRunning(false);
    }

    return (
        <div>
            {attempts}
            <br></br>
            <Button onClick={beginQuiz} disabled={quizRunning || attempts == 0}>
                Start Quiz
            </Button>
            <Button onClick={increaseAttemptsLeft} disabled={quizRunning}>
                {" "}
                Mulligan
            </Button>
            <Button onClick={endQuiz} disabled={!quizRunning}>
                Stop Quiz
            </Button>
            <br></br>
            {quizRunning && <div>Quiz In Progress </div>}
        </div>
    );
}

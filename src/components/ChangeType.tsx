import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    type QuestionType = "multiple_choice_question" | "short_answer_question";

    const typeSwap: Record<QuestionType, QuestionType> = {
        short_answer_question: "multiple_choice_question",
        multiple_choice_question: "short_answer_question"
    };

    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeType(): void {
        const newQuestionType = typeSwap[questionType];
        setQuestionType(newQuestionType);
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {questionType === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}

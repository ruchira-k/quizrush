"use client";

import { useState } from "react";
import { questions } from "../data/questions";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="text-center p-6 bg-violet-950 shadow rounded-xl">
        <h2 className="text-2xl font-bold">Quiz Finished 🎉</h2>
        <p className="mt-2">Your score: {score}/{questions.length}</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-violet-950 shadow rounded-xl">
      <h2 className="text-lg font-bold mb-4">
        Question {current + 1} of {questions.length}
      </h2>
      <p className="mb-4">{questions[current].question}</p>
      <div className="space-y-2">
        {questions[current].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

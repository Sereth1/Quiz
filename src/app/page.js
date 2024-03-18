"use client";
import ChooseQuizPrompt from "./Components/ChooseQuizPrompt";
import DataFetch from "./Components/DataFetch";
import { useReducer } from "react";
import QuizSelection from "./Components/QuizSelection";
import Options from "./Components/Options";
import Question from "./Components/Question";
import Progress from "./Components/Progress";
import Results from "./Components/Results";
import ControlButton from "./Components/NextButton";
import Background from "./Components/Background";
const initialState = {
  questions: [],

  status: "initial",
  answer: null,
  points: 0,
  index: 0,
  quizName: "quiz",
};
const quizReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        answer: null,
        index: 0,
        points: 0,
        quizName: "quiz",
        status: "initial",
      };
    case "dataReceived":
      console.log(action.payload);
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "failed" };
    case "quizName":
      return { ...state, quizName: action.payload };
    case "answer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    default:
      return state;
  }
};

export default function Home() {
  const [{ questions, status, answer, points, index, quizName }, dispatch] =
    useReducer(quizReducer, initialState);
  console.log(quizName);
  const total = questions.length;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {status === "initial" && (
        <>
          <Background quizName={quizName} />
          <ChooseQuizPrompt />
          <QuizSelection dispatch={dispatch} quizName={quizName} />
        </>
      )}

      <DataFetch dispatch={dispatch} quizName={quizName} />
      {index < 15 && (
        <>
          {status === "ready" && (
            <>
              <Background quizName={quizName} />
              <Question
                dispatch={dispatch}
                questions={questions}
                index={index}
              />
              <Progress total={total} index={index} points={points} />
              <Options
                total={total}
                dispatch={dispatch}
                answer={answer}
                questions={questions}
                index={index}
              />
              <ControlButton
                dispatch={dispatch}
                control={"nextQuestion"}
                text={"Next"}
              />
            </>
          )}
        </>
      )}
      {index > 14 && (
        <Results points={points} quizName={quizName} dispatch={dispatch} />
      )}
    </main>
  );
}

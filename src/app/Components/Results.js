import ControlButton from "./NextButton";

function Results({ points, quizName, dispatch }) {
  let message;
  let bgColor = "bg-green-500";
  let textColor = "text-white";

  if (points < 50) {
    message = `You need more practice...Read something about ${quizName} nob`;
    bgColor = "bg-red-500";
  } else if (points < 80) {
    message = `Doing good, keep going and you'll be the master of ${quizName} some day`;
    bgColor = "bg-yellow-500";
  } else {
    message = `You are the master of ${quizName}!`;
  }

  return (
    <div className="fixed inset-0 bg-black  flex justify-center items-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <div
          className={`${bgColor} ${textColor} p-8 rounded-lg shadow-2xl text-lg font-bold mb-4`}
        >
          {message}
        </div>
        <ControlButton dispatch={dispatch} control={"reset"} text={"Reset"} />
      </div>
    </div>
  );
}

export default Results;

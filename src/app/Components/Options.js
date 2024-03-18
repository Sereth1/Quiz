function Options({ questions, dispatch, index, answer, total }) {
  const currentQuestion = questions[index];
  const hasAnswered = answer !== null;
  if (!currentQuestion || !currentQuestion.options) return null;
  console.log(index);
  const optionElements = currentQuestion.options.map((option, i) => (
    <button
      key={i}
      className={`w-full md:max-w-lg font-semibold text-lg py-6 px-8 rounded-lg shadow-lg hover:shadow-xl m-4 ease-linear transition-all duration-150 ${
        hasAnswered
          ? i === currentQuestion.correctOption
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-yellow-500 text-white hover:bg-yellow-600"
          : "bg-white"
      }`}
      onClick={() => dispatch({ type: "answer", payload: i })}
    >
      {option}
    </button>
  ));

  return (
    <div className="flex flex-wrap justify-center items-center mt-4">
      {optionElements}
    </div>
  );
}

export default Options;

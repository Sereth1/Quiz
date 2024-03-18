function Question({ questions, index }) {
  const questionText =
    index < 15 && questions.length > 0
      ? questions[index].question
      : index >= 15
      ? null // or you can use an empty string "" if you prefer
      : "Loading question...";

  return (
    <div className="max-w-2xl mx-auto my-12 p-6 bg-gradient-to-r bg-white rounded-xl shadow-xl transform transition duration-500 hover:scale-105">
      <h4 className="text-2xl font-bold text-black text-center tracking-wide">
        {questionText}
      </h4>
    </div>
  );
}

export default Question;

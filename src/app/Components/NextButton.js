function ControlButton({ dispatch, answer, control, text }) {
  if (answer === null) return null;

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 text-xl rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg"
      onClick={() => dispatch({ type: control })}
    >
      {text}
    </button>
  );
}

export default ControlButton;

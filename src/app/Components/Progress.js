function Progress({ points, index, total }) {
  const progressPercentage = ((index + Number(index !== null)) / total) * 100;

  return (
    <div className="bg-white shadow rounded-lg p-2 max-w-md mx-auto my-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700">
          Points: {points}
          &nbsp;
        </span>
        <span className="text-sm font-semibold text-gray-700">
          Question {index + 1}/{total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Progress;

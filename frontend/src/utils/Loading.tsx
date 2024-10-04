
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-10 w-10 text-blue-600 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 0116 0"
          />
        </svg>
        <p className="text-lg font-semibold text-gray-700">ডেটা লোড হচ্ছে...</p>
      </div>
    </div>
  );
};

export default Loading;

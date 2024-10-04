import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <p className="text-2xl font-semibold mt-4 text-gray-700">
        উফ্! পৃষ্ঠা খুঁজে পাওয়া যায়নি।
        </p>
        <p className="mt-2 text-gray-500">
        আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই।
        </p>
        <Link to="/">
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
          হোম পৃষ্ঠায় যান
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

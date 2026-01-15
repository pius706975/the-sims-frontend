import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-8xl font-extrabold text-gray-900">404</h1>

      <p className="mt-4 text-center text-lg text-gray-600">
        Maaf, halaman yang Anda cari tidak ditemukan.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Kembali ke Halaman Sebelumnya
      </button>
    </div>
  );
};

export default NotFound;

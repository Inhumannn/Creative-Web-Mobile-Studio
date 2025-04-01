import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">
        La page que vous recherchez n'existe pas.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 text-lg font-semibold text-white bg-[#777] rounded-md hover:bg-[#333] transition duration-300"
      >
        Retour à la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;

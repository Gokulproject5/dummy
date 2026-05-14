import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onDelete }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative bg-white w-44 h-64 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <img
        src={movie.poster_path || "https://via.placeholder.com/150"}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isVisible ? "opacity-30" : "opacity-100"}`}
        alt={movie.original_title}
      />
      {isVisible && (
        <div className="absolute inset-0 z-20 p-4 flex flex-col justify-center bg-black/70 text-white text-[13px] font-bold italic space-y-2">
          <p className="line-clamp-3">
            <span className="text-purple-300">Movie:</span>{" "}
            {movie.original_title}
          </p>
          <p>
            <span className="text-purple-300">Lang:</span>{" "}
            {movie.original_language?.toUpperCase()}
          </p>
          <div className="flex flex-col gap-2">
            <Link
              to={`/Edit/${movie.id}`}
              className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded text-center"
            >
              Edit
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(movie.id);
              }}
              className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Movie = ({ value, Limit }) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://mimic-server-api.vercel.app/movies?_limit=${Limit}&q=${value}`,
        );
        if (!response.ok) throw new Error("Fetch failed");
        const data = await response.json();
        if (isMounted) setMovieList(data);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMovie();
    return () => {
      isMounted = false;
    };
  }, [value, Limit]);

  const handleDelete = (id) => {
    fetch(`https://mimic-server-api.vercel.app/movies/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setMovieList((prev) => prev.filter((m) => m.id !== id));
        alert("Deleted successfully");
      })
      .catch((err) => alert("Delete error: " + err));
  };

  return (
    <div className="bg-gray-50 p-5 min-h-screen flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-6">
        {loading ? (
          <p className="text-purple-600 animate-pulse">Loading...</p>
        ) : (
          movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onDelete={handleDelete} />
          ))
        )}
        {error ? (
          <p className="text-red-600 animate-pulse">{error}</p>
        ) : (
          <p>{""}</p>
        )}
      </div>
    </div>
  );
};

export default Movie;

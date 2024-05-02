import { MOVIE_KEY, POSTER_PATH } from "../utils/constants";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Pegination } from "./Pegination";
import { Sorting } from "./Sorting";

export const Table = () => {
    const [movies, setMovies] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTitle, setSearchTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = () => {
        fetch(MOVIE_KEY)
        .then(result => result.json())
        .then(data => {
            setMovies(data.results);
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
    };

    const sortedMovies = [...movies].sort((a, b) => {
        const aValue = columnValue(a, sortBy);
        const bValue = columnValue(b, sortBy);

        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    const filteredMovies = sortedMovies.filter(movie => movie.title.toLowerCase().includes(searchTitle.toLowerCase()));

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredMovies.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div>
            <Search value={searchTitle} onChange={(e) => {
                setSearchTitle(e.target.value)
            }} />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Poster
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Movie name
                                    <Sorting column="title" sortBy={sortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} setSortBy={setSortBy} />
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Overview
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Release Date
                                    <Sorting column="release_date" sortBy={sortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} setSortBy={setSortBy} />
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Ratings
                                    <Sorting column="vote_average" sortBy={sortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} setSortBy={setSortBy} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((movie, index) => 
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    <img src={POSTER_PATH + movie.poster_path} alt={movie.title} />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-pre-line dark:text-white break-words">
                                    {movie.title}
                                </td>
                                <td className="px-6 py-4 w-6/12">
                                    {movie.overview}
                                </td>
                                <td className="px-6 py-4">
                                    {movie.release_date}
                                </td>
                                <td className="px-6 py-4">
                                    {movie.vote_average}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Pegination currentPage={currentPage} itemsPerPage={itemsPerPage} indexOfLastItem={indexOfLastItem} filteredMovies={filteredMovies} nextPage={nextPage} prevPage={prevPage} />
        </div>
    );
};

const columnValue = (item, column) => {
    if (column === "release_date") {
        // Convert release_date string to a sortable format (e.g., timestamp)
        return new Date(item.release_date).getTime();
    }
    return item[column];
};

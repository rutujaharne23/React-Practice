export const Pegination = ({currentPage, itemsPerPage, indexOfLastItem, filteredMovies, nextPage, prevPage}) => {
    return (
        <div>
            <nav className="flex items-center justify-end py-2">
                <button
                    className={`bg-gray-400 hover:bg-gray-500 text-white py-1 px-2 rounded-sm ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="px-2">
                    Page {currentPage} of {Math.ceil(filteredMovies.length / itemsPerPage)}
                </span>
                <button
                    className={`bg-gray-400 hover:bg-gray-500 text-white py-1 px-2 rounded-sm ${indexOfLastItem >= filteredMovies.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={nextPage}
                    disabled={indexOfLastItem >= filteredMovies.length}
                >
                    Next
                </button>
            </nav>
        </div>
    );
}
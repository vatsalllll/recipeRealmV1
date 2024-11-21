const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-8 mb-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      <div className="flex items-center space-x-2">
        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => typeof pageNumber === 'number' && onPageChange(pageNumber)}
            disabled={pageNumber === '...'}
            className={`px-3 py-2 rounded-md ${
              pageNumber === currentPage
                ? 'bg-blue-500 text-white'
                : pageNumber === '...'
                ? 'bg-gray-100 text-gray-600 cursor-default'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
import React, { useEffect, useState } from "react";
import "./Pagination.css";
const Pagination = ({
  totalResults,
  cardsPerPage,
  changePage,
  currentPage,
}) => {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalResults / cardsPerPage); i++) {
    pages.push(i);
  }
  const handleClick = (event) => {
    changePage(Number(event.target.id));
  };
  let maxPages = Number(pages.length);
  const IndentNext = () => {
    changePage(pages.length);
    setMaxPageNumberLimit(maxPages);
    setMinPageNumberLimit(maxPages - 5);
  };

  const IndentPrev = () => {
    changePage(1);

    setMaxPageNumberLimit(5);
    setMinPageNumberLimit(0);
  };

  const handleNextBtn = () => {
    changePage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    changePage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div className="pagination-container">
      <button
        onClick={handlePrevBtn}
        disabled={currentPage === pages[0] ? true : false}
      >
        Previous
      </button>
      {currentPage > 5 && (
        <button className="indent" onClick={IndentPrev}>
          {1} ...
        </button>
      )}
      <div className="pageNumbers">
        {pages.map((number) => {
          if (number <= maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                id={number}
                onClick={handleClick}
                className={currentPage === number ? "active" : null}
              >
                {number}
              </li>
            );
          } else {
            return null;
          }
        })}
      </div>
      {currentPage < pages.length - 5 && (
        <button className="indent" onClick={IndentNext} value={pages.length}>
          ... {pages.length}
        </button>
      )}
      <button
        onClick={handleNextBtn}
        disabled={currentPage === pages[pages.length - 1] ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

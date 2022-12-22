import React, { useEffect, useState } from "react";

function LikeAntd({ totalItem, changePage }) {
  //   const [totalItem, setTotalItem] = useState(500);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [buttons, setButtons] = useState([]);
  const [pageTotal, setPageTotal] = useState(Math.ceil(totalItem / pageSize));
  
  useEffect(() => {
    cantrol(1);
  }, []);

  useEffect(() => {
    setPageTotal(Math.ceil(totalItem / pageSize))
  }, [totalItem]);

  useEffect(() => {
    cantrol(1);
  }, [pageSize, pageTotal]);
  
  function cantrol(number) {
    // console.log(totalItem, currentPage, pageSize, pageTotal);
    let truePage =
      1 > number ? number : number > pageTotal ? pageTotal : number;
    setCurrentPage(truePage);
    let clickButtons = [];
    if (pageTotal > 6) {
      if (number < 4) {
        for (let i = 1; pageTotal >= i && 5 >= i; i++) {
          clickButtons.push(i);
        }
        setButtons(clickButtons);
      } else if (pageTotal - 3 < number) {
        for (let i = pageTotal; 1 <= number && pageTotal - 5 < i; i--) {
          clickButtons.push(i);
        }
        setButtons(clickButtons.reverse());
      } else {
        for (let i = number - 2; i <= number + 2; i++) {
          clickButtons.push(i);
        }
        setButtons(clickButtons);
      }
    } else {
      for (let i = 1; pageTotal >= i; i++) {
        clickButtons.push(i);
      }
      setButtons(clickButtons);
    }
    // console.log(clickButtons);
    changePage(truePage, pageSize, totalItem);
  }

  return (
    <div className="flex">
      <div className="flex items-center select-none">
        <div
          className={`min-w-[40px] cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            currentPage <= 1
              ? "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white cursor-not-allowed"
              : ""
          }`}
        >
          {currentPage > 1 ? (
            <div
              className="h-full w-full px-1 py-2 text-center"
              onClick={() => cantrol(currentPage - 1)}
            >{`<`}</div>
          ) : (
            <div className="h-full w-full px-1 py-2 text-center">{`<`}</div>
          )}
        </div>

        {currentPage > 3 && pageTotal > 6 ? (
          <div
            className="min-w-[40px] text-center cursor-pointer px-1 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => cantrol(1)}
          >
            1
          </div>
        ) : null}

        {4 < currentPage && pageTotal > 6 ? (
          <div
            className="min-w-[40px] text-center cursor-pointer px-1 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => cantrol(currentPage - 5 < 2 ? 1 : currentPage - 5)}
          >
            ...
          </div>
        ) : null}

        {buttons.map((button) => {
          return (
            <div
              key={button}
              className={`min-w-[40px] text-center cursor-pointer px-1 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === button
                  ? "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  : ""
              }`}
              onClick={() => cantrol(button)}
            >
              {button}
            </div>
          );
        })}

        {pageTotal - 3 > currentPage && pageTotal > 6 ? (
          <div
            className="min-w-[40px] text-center cursor-pointer px-1 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() =>
              cantrol(currentPage + 5 > pageTotal ? pageTotal : currentPage + 5)
            }
          >
            ...
          </div>
        ) : null}

        {currentPage < pageTotal - 2 && pageTotal > 6 ? (
          <div
            className="min-w-[40px] text-center cursor-pointer px-1 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => cantrol(pageTotal)}
          >
            {pageTotal}
          </div>
        ) : null}

        <div
          className={`min-w-[40px] cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            currentPage >= pageTotal
              ? "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white cursor-not-allowed"
              : ""
          }`}
        >
          {pageTotal > currentPage ? (
            <div
              className="h-full w-full px-1 py-2 text-center"
              onClick={() => cantrol(currentPage + 1)}
            >{`>`}</div>
          ) : (
            <div className="h-full w-full px-1 py-2 text-center">{`>`}</div>
          )}
        </div>
      </div>
      <div className="ml-3">
        <select
        defaultValue={10}
          onChange={(e) => {
            setPageSize(e.target.value);
            setPageTotal(Math.ceil(totalItem / e.target.value))
          }}
          className="h-[38px] outline-none bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={500}>500</option>
        </select>
      </div>
    </div>
  );
}

export default LikeAntd;

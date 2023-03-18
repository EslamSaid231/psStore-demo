import React, { useState } from "react";
import { useData } from "../../Store/DataProvider";

const PaginationButtons = () => {
  const { setPageState } = useData();
  const [highlight, sethighlight] = useState(1);
  return (
    <>
      <div className="pagination">
        {[...Array(38)].map((btn, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              onClick={() => {
                sethighlight(index);
                setPageState(index.toString());
              }}
              className={highlight === index ? "index" : null}
            >
              {index}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default PaginationButtons;

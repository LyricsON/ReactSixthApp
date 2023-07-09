import React from "react";

const StarRating = ({ rateFilter, handleRateFilter }) => {
  const stars = (rateFilter) => {
    var tab = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rateFilter) {
        tab.push(
          <span
            onClick={() => handleRateFilter(i)}
            style={{ color: "gold", fontSize: "30px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else {
        tab.push(
          <span
            onClick={() => handleRateFilter(i)}
            style={{ color: "black", fontSize: "30px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      }
    }
    return tab;
  };
  return <div>{React.Children.toArray(stars(rateFilter))}</div>;
};
StarRating.defaultProps = {
  handleRateFilter: () => {},
};
export default StarRating;

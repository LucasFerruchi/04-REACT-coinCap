import React from "react";

const TableCoins = () => {
  return (
    <>
      <table className="table table-hover table-coins">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price Usd</th>
            <th>Change 24Hr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rank</td>
            <td>
              <img src="" alt="" />
            </td>
            <td>Coin</td>
            <td>Price</td>
            <td>Change %</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableCoins;

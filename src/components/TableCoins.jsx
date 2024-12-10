import React from "react";
import numeral from "numeral";

const TableCoins = ({ coins }) => {
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
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.rank}</td>
              <td>
                <img
                  src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                  alt={coin.name}
                />
              </td>
              <td>{coin.name}</td>
              <td>{numeral(coin.priceUsd).format("$0,0.00")}</td>
              <td
                className={
                  coin.changePercent24Hr > 0 ? "text-success" : "text-danger"
                }
              >
                {parseFloat(coin.changePercent24Hr).toFixed(2)} %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableCoins;

// ENLACE DONDE BUSCAR EL SIMBOLO DE LAS CRYPTOS
// https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png

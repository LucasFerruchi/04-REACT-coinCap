import React from "react";
import SearchCoins from "../components/SearchCoins";
import TableCoins from "../components/TableCoins";

function HomeScreen() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Home Screen</h2>
          </div>
        </div>

        <div className="row mb-3">
          {/* ACTUALIZAR */}
          <div className="col">
            <div className="d-flex justify-content-end">
              <button className="btn btn-outline-success">
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {/* BUSCADOR */}
          <SearchCoins />
        </div>

        <div className="row mt-5">
          {/* TABLA */}
          <TableCoins />
        </div>
      </div>
    </>
  );
}

export default HomeScreen;

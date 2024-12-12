import React, { useEffect, useState } from "react";
import { getCoins } from "../helpers/coinsApp";
import SearchCoins from "../components/SearchCoins";
import TableCoins from "../components/TableCoins";

function HomeScreen() {
  const [coins, setCoins] = useState(null);
  console.log(coins);

  //estado para controlar la barra de busqueda
  const [inputSearch, setInputSearch] = useState("");
  console.log(inputSearch);

  //MONTAJE DEL HOME
  useEffect(() => {
    //codigo
    traerMonedas(inputSearch);
  }, [inputSearch]);

  const traerMonedas = async (termino) => {
    const { data } = await getCoins(termino);

    setCoins(data);
  };

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
              <button
                className="btn btn-outline-success"
                onClick={() => traerMonedas("")}
              >
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {/* BUSCADOR */}
          <SearchCoins
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
          />
        </div>

        <div className="row mt-5">
          {coins ? (
            <div className="col text-center">
              {/* TABLA */}
              <TableCoins coins={coins} />
            </div>
          ) : (
            <div className="col text-center">
              <h3>Cargando datos...por favor espere!</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeScreen;

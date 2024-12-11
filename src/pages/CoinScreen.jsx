import React, { useEffect, useState } from "react";
import numeral from "numeral";
import { getCoinById } from "../helpers/coinsApp";
import { useParams } from "react-router-dom";

function CoinScreen() {
  const params = useParams();
  console.log(params);
  //desestructuro params
  const { id } = useParams();

  const [coin, setCoin] = useState;

  useEffect(() => {
    traerDatos();
  }, [id]);

  const traerDatos = async () => {
    //DESESTRUCTURO
    const { data } = await getCoinById(id);
    setCoin(data);
  };

  return (
    <>
      <div className="container">
        <>
          <div className="row mt-5">
            <div className="col text-center">
              <h1>Name</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-8 offset-md-2">
              <div className="card card-coin mb-3">
                <div className="row g-0">
                  <div className="col-md-4 p-3 text-center img-card">
                    <img className="img-fluid rounded-start" src="" alt="" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">Symbol</h3>
                      <p className="card-text">
                        <b>
                          Rank <span className="fs-3">Rank</span>
                        </b>
                      </p>
                      <p className="card-text">
                        <b>Price Usd:</b> <span>$</span>
                      </p>
                      <div>
                        <a src="" target="_blank">
                          <span className="badge text-bg-primary">
                            Explorer
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default CoinScreen;

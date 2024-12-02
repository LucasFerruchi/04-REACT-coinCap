import React from "react";

function LoginScreem() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3>
              Sing in to <i className="fa fa-btc" aria-hidden="true"></i>
              comReact1 Coins
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6 offset-md-3">
            <form>
              <div className="mb-3 d-grid">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  //required
                />
              </div>
              <div className="mb-3 d-grid">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>
              <div className="mb-3 d-grid">
                <button className="btn btn-success">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreem;

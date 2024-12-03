import React, { useState } from "react";

function LoginScreem() {
  //? Crear UN estado POR CAMPO
  //   const [email, setEmail] = useState("");
  // //   console.log(email);
  //   const [password, setPassword] = useState("");
  // //   console.log(password);

  //? Crear UN estado para TODOS los campos del form
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  console.log(formValues);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormValues({
      //! SPREAD OPERATOR "...": crea EL NUEVO OBJETO
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

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
                  //   required
                  //   onChange={(e) => {
                  //     setEmail(e.target.value);
                  //   }}
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-grid">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  //   onChange={(e) => {
                  //     setPassword(e.target.value);
                  //   }}
                  value={formValues.password}
                  onChange={handleChange}
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

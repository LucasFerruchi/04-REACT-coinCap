import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreem({ cambiarLogin }) {
  const navigate = useNavigate();

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
  //! console.log(formValues);

  const handleChange = (e) => {
    //! console.log(e.target.value);

    setFormValues({
      //! SPREAD OPERATOR "...": crea EL NUEVO OBJETO
      ...formValues,

      //! Identificar CADA UNO  de los campos del form
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //USUARIO REGISTRADO DE EJEMPLO - DB
    const user = {
      email: "lucas@lucas.com",
      password: "123456",
    };

    //? validar que se completen los campos
    if (!formValues.email || !formValues.password) {
      alert("Debe completar los campos obligatorios!");
    }

    if (
      formValues.email === user.email &&
      formValues.password === user.password
    ) {
      // alert("Datos correctos");
      cambiarLogin();
      navigate("/");
    } else {
      alert("Email o password incorrecto!");
    }
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
            <form onSubmit={handleSubmit}>
              <div className="mb-3 d-grid">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  // required
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

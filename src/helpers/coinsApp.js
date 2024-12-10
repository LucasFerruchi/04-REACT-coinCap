const url = "https://api.coincap.io/v2/assets";

let limite = 20;

export const getCoins = async () => {
  const coins = await fetch(`${url}?limit=${limite}`);

  const data = await coins.json();

  return data;
};

//Funcion de llamar a UNA moneda en especifico

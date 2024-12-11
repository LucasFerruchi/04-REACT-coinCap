const url = "https://api.coincap.io/v2/assets";

let limite = 20;

export const getCoins = async (termino) => {
  const coins = await fetch(`${url}?limit=${limite}&search=${termino}`);

  const data = await coins.json();

  return data;
};

//Funcion de llamar a UNA moneda en especifico

export const getCoinById = async (id) => {
  const coins = await fetch(`${url}/${id}`);

  const data = await coins.json();

  return data;
};

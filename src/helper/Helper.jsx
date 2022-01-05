export const getYearArray = (numero) => {
  let años = [];

  for (let i = numero; i <= 2022; i++) {
    años.push(i);
  }

  return años;
};

export const getCarModel = (tipo) => {
  if (tipo === "americano") {
    return ["Cadillac", "Chrysler", "Dodge", "Ford", "Jeep"];
  } else if (tipo === "europeo") {
    return ["Ferrari", "Mercedes Benz", "Porsche", "Peugeot", "Renault"];
  } else {
    return ["Toyota", "Subaru", "Honda", "Suzuki", "Daihatsu"];
  }
};

export const getPrice = (año, tipo, plan) => {
  let price = 0;
  let base = 0;

  plan === "basico"
    ? (base = 1000)
    : plan === "medium"
    ? (base = 2000)
    : (base = 3000);

  tipo === "europeo"
    ? (base += 1000)
    : tipo === "americano"
    ? (base += 500)
    : (base += 250);

  Number(año <= 2010)
    ? (price = base + (base * 2) / 100)
    : Number(año >= 2010 && año <= 2018)
    ? (price = base + (base * 4) / 100)
    : (price = base + (base * 8) / 100);

  return price; 
};



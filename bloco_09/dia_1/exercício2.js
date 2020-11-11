
// Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// A --> A (Chamada síncrona)
// B --> C (Chamada assíncrona com 3000 milissegundos para seu processamento)
// C --> B (Chamada assíncrona com 2000 milissegundos para seu processamento)

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A --> A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B --> C
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C --> B
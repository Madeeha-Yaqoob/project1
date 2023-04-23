function createCar(manufacturer: string, model: string, ...options /*: [string, unknown][]*/): Record<string, unknown> {
    const car = {
      manufacturer,
      model,
    };
    for (const [key, value] of options) {
      car[key] = value;
    }
    return car;
  }
  
  // Example usage:
  const myCar = createCar("Toyota", "Camry",color: "blue",year: 2022);
  console.log(myCar);
export{};  
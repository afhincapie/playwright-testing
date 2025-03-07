import { faker } from '@faker-js/faker';

export const regexCardNumber = /Card Number:\s*([\d-]+)\s*Name/;
export const regexName = /Name:\s*([A-Za-z\s]+)\s*Date/;

export function findValorCard(campo: string | null) {
  return campo ? campo.match(regexCardNumber)?.[1] : "no encontro texto";
}

export function findValorName(campo: string | null) {
  return campo ? campo.match(regexName)?.[1] : "no encontro texto";
}


export function llenarFormulario() {
  const name = faker.person.firstName();
  const country = faker.location.country();
  const city = faker.location.city();
  const card = faker.finance.creditCardNumber('visa');
  const month = faker.date.month();
  const year = new Date().getFullYear().toString(); 
  return { name, country, city, card, month, year };
}

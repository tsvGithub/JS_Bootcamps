//named export
export function getDate() {
  const date = `${new Date()}`;
  return date;
}
export const year = new Date().getFullYear();

//or this way:
// function getDate() {
//   const date = `${new Date()}`;
//   return date;
// }
// const year = new Date().getFullYear();
// export { getDate, year };

//===================
// default export
export default function getDateDefaultExport() {
  const year = new Date().getFullYear();
  const date = `${new Date()}, year: ${year}`;
  return date;
}

//Challenge data:
export function getUser() {
  return {
    name: "Clementine Bauch",
    company: "Romaguera-Jacobson",
  };
}

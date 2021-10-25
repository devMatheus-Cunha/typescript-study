// function isNotPromise(data: string) {
//   setTimeout(async () => {
//     console.log(data);
//   }, 3000);
// }
// const result = isNotPromise("3s depois sem promise...");
// // console.log(result);

// function isPromise() {
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       resolve("3s depois com promise...");
//     }, 3000);
//   });
// }

// isPromise().then((data) => console.log(data));

// consuming api
function fetchFunction() {
  fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((characters) => characters.films)
    .then((films) => fetch(films[0]))
    .then((resFilm) => resFilm.json())
    .then((film) => console.log(film));
}

fetchFunction()

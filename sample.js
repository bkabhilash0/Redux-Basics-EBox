// const getData = (url) => {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         resolve(`${url} Fetched Successfully`);
//       }, 1000);
//     } catch (e) {
//       reject("The Promise got rejected!");
//     }
//     finally {
//         console.log("Finally")
//     }
//   });
// };

// const greet = (data) => {
//   return new Promise((resolve, reject) => {
//     resolve(`Data from ${data}`);
//   });
// };

// // getData("google.com")
// //   .then((response) => greet(response))
// //   .then((x) => console.log(x))
// //   .catch((err) => console.log(err));

// const google = async() => {
//     const response = await getData("google.com");
//     const x = await greet(response);
//     console.log(x);
// }

// google();

// fetch("",{

// })

// Promise.resolve("Success")
//   .then((data) => {
//     data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   });


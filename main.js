// let student = {
//   name: "Rahul Kumar",
//   age: 18,
//   class: "12th",
//   isPass: "Passed",
//   percentage: 88,
// };
// document.querySelector(".name").innerHTML = student.name;
// document.querySelector(".age").innerHTML = student.age;
// document.querySelector(".class").innerHTML = student.class;
// document.querySelector(".result").innerHTML = student.isPass;
// document.querySelector(".percentage").innerHTML = student.percentage;

// let age = 17;
// if (age < 18) {
//   console.log("You are Junior");
// } else if (age > 60) {
//   console.log("You are Senior");
// } else {
//   console.log("You are Middle");
// }

// let age = 20;

// let result = age > 18 ? "Adult" : "Not Adult";
// console.log(result);

// let score = prompt("Enter your score (0-100)");
// let grade;

// if (score >= 90) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score <= 49) {
//   grade = "F";
// }
// console.log("According to score my grade is:", grade);

// for (let i = 1; i <= 10; i++) {
//   console.log("Hello World");
// }

// let i = 1;

// while (i <= 5) {
//   console.log("I =", i);
//   i++;
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log("Number is", i);
//   }
// }

// let i = 1;

// while (i <= 100) {
//   console.log("Number is", i);

//   i++;
// }

// let gameNum = 25;
// let userNum = prompt("Guess the number: ");

// while (userNum != gameNum) {
//   userNum = prompt("You entered wrong number. Guess again: ");
// }
// console.log("Congratulation your gussing number is correct");

// let name = "Junaid";

// console.log(name.length);
// console.log(name[0]);

// Ternary Operators

// let obj = {
//   item: "Pen",
//   price: 10,
// };

// let outPut = `The cost of the ${obj.item} is ${obj.price} rupees`;
// console.log(outPut);

// string method

// let name = "Mohd Junaid";

// let uppercase = name.toUpperCase();

// console.log(uppercase);

// let lowercase = name.toLowerCase();

// console.log(lowercase);

// let str = "     Zaroon Junaid    ";
// let removeSpace = str.trim();
// console.log(removeSpace);

// remove whitespace from two words
// let str = "Mohd Junaid";
// let removeSpace = str.replace(" ", "");
// console.log(removeSpace);

// console.log(removeSpace);

// create username to take user fullname (add @ and user's fullname length of the fullname)
// let fullName = prompt("Enter your full name");
// let removeSpace = fullName.replace(" ", "");

// let username = "@" + removeSpace + removeSpace.length;
// console.log(username);

// arrays

// let marks = [95, 83, 68, 29, 98, 97];

// console.log(marks);

//Arrays indices

// change array value

// let heroes = ["Ironman", "Thor", "Spiderman", "Black Widow", "Hulk"];

// heroes[1] = "Ragonrok";

// console.log(heroes);

// looping and arrays

// let heroes = [
//   "Ironman",
//   "Thor",
//   "Spiderman",
//   "Black Widow",
//   "Hulk",
//   "Antman",
//   "Black Panther",
// ];

// for (indx = 0; indx < heroes.length; indx++) {
//   console.log(heroes[indx]);
// }

// for (let hero of heroes) {
//   console.log(hero);
// }

// let students = [
//   "Mohd Junaid",
//   "Mohmmad Kaif",
//   "Mohd Imran",
//   "Shamsher Singh",
//   "Ankit Kharote",
//   "Abhishek Bijlani",
//   "Mahdaev Prashad Uniyal",
// ];

// for (let student of students) {
//   console.log(student.toLocaleUpperCase());
// }

// let marks = [85, 97, 44, 37, 76, 60];

// sum = 0;

// for (let val of marks) {
//   sum += val;
// }
// let avrg = sum / marks.length;
// console.log(avrg);

// let students = [58, 103, 98, 105, 120, 139, 138];

// let sum = 0;

// for (let student of students) {
//   sum += student;
// }

// let avrgStudent = sum / students.length;

// console.log(avrgStudent);

// // change the arrays final prcie after 10% off of every itmes

// let items = [250, 645, 300, 900, 50];

// // let i = 0;
// // for (let item of items) {
// //   console.log(`Value at index ${i} = ${item}`);
// //   let offer = item / 10;
// //   let finalPrice = item - offer;
// //   console.log(`Value after offer ${i} = ${finalPrice}`);
// //   i++;
// // }

// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);

// push() and pop() method in array

// let food = ["Tomato", "Potato", "Onion", "Apple"];
// // food.pop();
// console.log(food);

// console.log(food.toString());

// concat()

// let marvelHeroes = ["Ironman", "Thor", "Spiderman", "Black Panther"];
// let dcHeros = ["Superman", "Batman", "Wonder Women"];

// let heroes = marvelHeroes.concat(dcHeros);
//console.log(heroes);

// unshift()

// heroes.unshift("Antman");
// heroes.shift("Ironman");

// let companies = ["Bloomberg", "Microksoft", "Uber", "Google", "IBM", "Netflix"];

// companies.splice(0, 1);
// companies.splice(1, 1);
// companies.splice(1, 1, "Ola");
// companies.splice(5, 1, "Amazon");
// console.log(companies);

// let companies = ["Bloomberg", "Microksoft", "Uber", "Google", "IBM", "Netflix"];

// console.log(companies);
// companies.shift();
// console.log(companies);
// companies.splice(2, 1, "Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);

// console.log(companies);
// companies.splice(0, 1);
// console.log(companies);
// companies.splice(1, 1, "Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(50, 90);

// function sum(a, b) {
//   let s = a + b;
//   return s;
// }
// let val = sum(6, 7);
// console.log(val);

// const arrowSum = (a, b) => {
//   console.log(a + b);
// };
// arrowSum(5, 5);

// const arrowMult = (a, b) => {
//   console.log(a * b);
// };

// arrowMult(8, 9);

// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
//  return count;
// }
// countVowels("WelcomeJS");

// const countVowels = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
//   return count;
// };
// countVowels("thequickisveryclever");

// let arr = [3, 5, 6, 7, 3, 8, 9, 3, 5];

// arr.forEach(function printVal(val) {
//   console.log(val);
// });

// arr.forEach((val) => {
//   console.log(val);
// });

// print square from above array using forEach function

// arr.forEach(function squareVal(val) {
//   let square = val * val;
//   console.log(square);
// });

// arr.forEach((arr) => {
//   console.log(arr * arr);
// });

// map method

// let heroes = ["Ironman", "Thor", "Spiderman", "Antman", "Black Panther"];

// heroes.map((val) => {
//   console.log(val);
// });

// filter method

// let num = [24, 46, 75, 86, 93, 28, 35, 37, 89, 47, 38, 43, 22, 17, 16];

// let evenFilter = num.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenFilter);

// let arr = [1, 2, 3, 4, 5];

// const output = arr.reduce((result, currentVal) => {
//   return result + currentVal;
// });

// console.log(output);

// let marks = [78, 91, 95, 86, 98, 99, 90, 93, 65, 78, 94, 86];

// let scoreReuslt = marks.filter((score) => {
//   return score > 90;
// });
// console.log(scoreReuslt);

// let userNum = prompt("Enter the number");
// let arr = [];

// for (let i = 1; i <= userNum; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);

// const outPut = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(`sum: ${outPut}`);

// const fact = arr.reduce((prev, curr) => {
//   return prev * curr;
// });
// console.log(`factorial: ${fact}`);

// let h2 = document.querySelector("h2");

// h2.innerText = `${h2.innerText} from Apna College`;

// let divs = document.querySelectorAll(".box");

// let idx = 1;

// for (div of divs) {
//   div.innerText = `New unique value for ${idx}`;
//   idx++;
// }

// divs[0].innerText = "New unique value for 1st div";
// divs[1].innerText = "New unique value for 2nd div";
// divs[2].innerText = "New unique value for 3rd div";

// to create a button with red backround and white text, the button text is click me

// let btn = document.createElement("button");
// btn.innerText = "Click Me !";
// btn.style.background = "red";
// btn.style.color = "white";
// btn.style.border = "none";
// btn.style.padding = "10px";
// btn.style.borderRadius = "5px";
// btn.style.fontSize = "16px";
// btn.style.cursor = "pointer";

// let bodyBtn = document.querySelector("body");

// bodyBtn.prepend(btn);

// let para = document.querySelector("p");

// para.classList.add("newClass");

// events heanding, event object

// let btn = document.querySelector("button");

// btn.onclick = (evnt) => {
//   alert("hello");
//   console.log("button was clicked");
//   let boxColor = (box.style.backgroundColor = "green");
//   box.prepend(`this is a square box with ${boxColor} `);
//   console.log(evnt);
//   console.log(evnt.target);
//   console.log(evnt.clientX, evnt.clientY);
// };

// let box = document.querySelector(".box");

// box.onmouseover = () => {
//   console.log("you are inside the div");
// };

//let btn = document.querySelector("button");
// let box = document.querySelector(".box");
// btn.addEventListener("click", (e) => {
//   console.log("The button was clicked");
//   box.style.backgroundColor = "red";
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY);
// });

// removeEventListner

// btn.addEventListener("click", () => {
//   console.log("button was clicked handler 1");
// });
// btn.addEventListener("click", () => {
//   console.log("button was clicked handler 2");
// });

// const handler3 = () => {
//   console.log("button was clicked handler 3");
// };

// btn.addEventListener("click", handler3);

// btn.addEventListener("click", () => {
//   console.log("button was clicked handler 4");
// });
// btn.removeEventListener("click", handler3);

// create a toggle button that changes the screen to dark mode when clicked & light mode when clicked dark mode

// let btn = document.querySelector("button");
// let mode = "light";
// let bodyColor = document.querySelector("body");

// btn.addEventListener("click", () => {
//   if (mode == "light") {
//     mode = "dark";
//     bodyColor.style.backgroundColor = "black";
//   } else {
//     mode = "light";
//     bodyColor.style.backgroundColor = "white";
//   }
//   console.log(mode);
// });

// btn.addEventListener("click", () => {
//   if (mode == "light") {
//     mode = "dark";
//     bodyColor.classList.add("dark");
//     btn.innerText = `${mode} mode`;
//   } else {
//     mode = "light";
//     btn.innerText = `${mode} mode`;
//     bodyColor.classList.remove("dark");
//   }

//   console.log(mode);
// });

// tic tac toe game

// let btns = document.querySelectorAll(".btn");
// let resetBtn = document.querySelector(".btnReset");
// let newGame = document.querySelector(".startBtn");
// let msg = document.querySelector(".msg");
// let msgBlock = document.querySelector(".msgBlock");

// let turnO = true;

// const winningPattern = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [2, 4, 5],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const resetGame = () => {
//   turnO = true;
//   btnEnable();
//   msgBlock.classList.add("hide");
// };

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (turnO) {
//       btn.innerText = "0";
//       turnO = false;
//     } else {
//       btn.innerText = "X";
//       turnO = true;
//     }
//     btn.disabled = true;

//     checkWinner();
//   });
// });

// const btnDisable = () => {
//   for (let btn of btns) {
//     btn.disabled = true;
//   }
// };
// const btnEnable = () => {
//   for (let btn of btns) {
//     btn.disabled = false;
//     btn.innerText = "";
//   }
// };
// const showWinner = (winner) => {
//   msg.innerText = `Congratulations Winner is ${winner}`;
//   msgBlock.classList.remove("hide");
//   btnDisable();
// };

// const checkWinner = () => {
//   for (let pattern of winningPattern) {
//     let posVal1 = btns[pattern[0]].innerText;
//     let posVal2 = btns[pattern[1]].innerText;
//     let posVal3 = btns[pattern[2]].innerText;

//     if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
//       if (posVal1 === posVal2 && posVal2 === posVal3) {
//         console.log("winner ", posVal1);
//         showWinner(posVal1);
//       }
//     }
//   }
// };

// newGame.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

// class ToyotaCar {
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
// }

// let fortuner = new ToyotaCar();

//inheritance

// class Parent {
//   hello() {
//     console.log("Hello");
//   }
// }

// class Child extends Parent {}

// let obj = new Child();

// class Person {
//   eat() {
//     console.log("eat");
//   }
//   sleep() {
//     console.log("sleep");
//   }
// }

// class Engineer extends Person {
//   work() {
//     console.log("Solve problems, build something");
//   }
// }

// let junaidObj = new Engineer();

// super keyword

// class Person {
//   constructor() {
//     this.species = "home sapience";
//   }
//   eat() {
//     console.log("eat");
//   }
// }

// class Engineer extends Person {
//   constructor(branch) {
//     super();
//     this.branch = branch;
//   }
//   work() {
//     console.log("solve problems, build something");
//   }
// }

// let engObj = new Engineer("this a chemical engineer");

//Q1. you are creating a website for your college. Create a class User with 2 properties, name and email. It also has a method called viewData() that allows user to view website data.

// let data = "Secret information";
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   vewData() {
//     console.log("Data = ", data);
//   }
// }

// let studentObj1 = new User("Rohit", "rohitkumar@gmail.com");
// let studentObj2 = new User("Mohit", "mohitjatav@gmail.com");

// error handing

// let a = 5;
// let b = 6;

// console.log("a =", a);
// console.log("b =", b);
// console.log("a+b =", a + b);
// console.log("a+b =", a + b);
// console.log("a+b =", a + b);
// try {
//   console.log("a+b =", a + c);
// } catch (err) {
//   console.log(err);
// }

// console.log("a+b =", a + b);
// console.log("a+b =", a + b);
// console.log("a+b =", a + b);
// console.log("a+b =", a + b);
// console.log("a+b =", a + b);
// console.log("a+b =", a + b);

// callback hell

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data ", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// promises

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promises");
//   resolve("success");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data ", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 7000);
//   });
// }

//async await

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather Data");
//       resolve(200);
//     }, 2000);
//   });'
// }

// async function weatherData() {
//   await api();
//   await api();
// }

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getAllData() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
//   await getData(4);
//   await getData(5);
//   await getData(6);
// }

//fetch API

// const url = "https://cat-fact.herokuapp.com/facts";
// let catTxt = document.querySelector(".catTxt");
// let btn = document.querySelector(".btn");

// const getFacts = async () => {
//   let response = await fetch(url);
//   //console.log(response);

//   let dataResult = await response.json();
//   catTxt.innerText = dataResult[1].text;
// };

// btn.addEventListener("click", getFacts);

// trending movies
const movieList = document.querySelector(".movie");
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDFjMjA1ZTA2NzM1Njc5OTBkZjUxYTYwNjEwNDhkZSIsIm5iZiI6MTcyODM2MTgwMS40OTEyNzIsInN1YiI6IjY2YjBjMTU2MzU0OTk4NDA0MGY0OGU2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LL3lWhLOfrkVoh2obTE7qLxr14Rwq07Od893T-JgNB8",
  },
};
const URL = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";

const getMovies = async () => {
  let response = await fetch(URL, options);
  let movieData = await response.json();
  let movie = movieData.results;

  movie.forEach((movies) => {
    let createImg = document.createElement("img");
    createImg.classList.add("w-100");
    let createCol = document.createElement("div");
    createCol.classList.add("col-lg-4", "col-sm-6", "mt-4");
    let createTitle = document.createElement("h5");
    createTitle.classList.add("mt-2");
    let releaseDate = document.createElement("p");
    releaseDate.classList.add("mb-0");
    let rating = document.createElement("p");
    createImg.src = `https://image.tmdb.org/t/p/w500${movies.backdrop_path}`;
    createTitle.innerText = movies.original_title;
    releaseDate.innerText = `Release Date: ${movies.release_date}`;
    rating.innerText = "Rating: ";
    let span = document.createElement("span");
    if (movies.vote_average <= 6) {
      span.classList.add(
        "text-white",
        "bg-danger",
        "px-2",
        "pb-1",
        "rounded",
        "small"
      );
      span.innerText = movies.vote_average;
    } else {
      span.classList.add(
        "text-white",
        "bg-success",
        "px-2",
        "pb-1",
        "rounded",
        "small"
      );
      span.innerText = movies.vote_average;
    }
    movieList.appendChild(createCol);
    createCol.appendChild(createImg);
    createCol.appendChild(createTitle);
    createCol.appendChild(releaseDate);
    createCol.appendChild(rating);
    rating.appendChild(span);
  });
};
getMovies();

// // let fullName = prompt("Enter your full name");
// // let nameIcon = fullName[0];
// // let removeSpace = fullName.replace(" ", "");
// // let lowercase = removeSpace.toLowerCase();
// // let nameLength = lowercase.length;
// // let username = `@${lowercase}${nameLength}`;

// // document.querySelector(".icon").innerHTML = nameIcon;
// // document.querySelector(".name").innerHTML = fullName;
// // document.querySelector(".username").innerHTML = username;

// // https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl

// let numbCount = document.querySelector("h1");
// let increaseBtn = document.querySelector("#increase");
// let decreaseBtn = document.querySelector("#decrease");
// let resetBtn = document.querySelector("#reset");

// let counter = 0;

// increaseBtn.addEventListener("click", () => {
//   counter++;
//   if (counter >= 1) {
//     numbCount.innerText = counter;
//     decreaseBtn.disabled = false;
//   }
// });
// decreaseBtn.addEventListener("click", () => {
//   counter--;
//   numbCount.innerText = counter;
//   if (counter < 1) {
//     numbCount.innerText = "0";
//     decreaseBtn.disabled = true;
//   }
// });

// resetBtn.addEventListener("click", () => {
//   numbCount.innerText = "0";
//   counter = "0";
// });
// let row = document.querySelector("#testimonial");
// let testimonials = [
//   {
//     userName: "John Smith",
//     userImg:
//       "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
//     userDesignation: "Accountant",
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//   },
//   {
//     userName: "Kathre Marson",
//     userImg:
//       "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
//     userDesignation: "Accountant",
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//   },
//   {
//     userName: "Mohmmad Kaif",
//     userImg:
//       "https://www.sibinfotech.com/assets/images/team/mohammad-kaif.webp",
//     userDesignation: "Accountant",
//     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
//   },
// ];

// testimonials.forEach((testimonial) => {
//   let div = document.createElement("div");
//   div.classList.add("col-lg-4", "col-sm-6");

//   let imgTag = document.createElement("img");
//   imgTag.classList.add("w-100", "mb-4", "rounded", "object-fit-cover");
//   imgTag.style.height = "350px";
//   imgTag.src = testimonial.userImg;

//   let nameTag = document.createElement("h3");
//   nameTag.innerText = testimonial.userName;

//   let designationTag = document.createElement("h5");
//   designationTag.innerText = testimonial.userDesignation;

//   let desTag = document.createElement("p");
//   desTag.innerText = testimonial.description;

//   row.appendChild(div);
//   div.appendChild(imgTag);
//   div.appendChild(nameTag);
//   div.appendChild(designationTag);
//   div.appendChild(desTag);
// });

// // let studentObj = [
// //   {
// //     name: "Mohd Junaid",
// //     age: 29,
// //     phone: "7042860653",
// //     email: "mohdjunaid0612@gmail.com",
// //     course: "BCA",
// //   },
// //   {
// //     name: "Mohd Mohatasham",
// //     age: 20,
// //     phone: "991753385",
// //     email: "mohdmohatahsahm@gmail.com",
// //     course: "BCA",
// //   },
// // ];

// // studentObj.forEach((student) => {
// //   console.log(
// //     `Student Name: ${student.name}, Student Age: ${student.age}, Phone: ${student.phone}`
// //   );
// // });

// let tabButtons = document.querySelectorAll(".tab-button");
// let tabPanels = document.querySelectorAll(".tab-pane");

// tabButtons.forEach((buttons) => {
//   buttons.addEventListener("click", () => {
//     tabButtons.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     tabPanels.forEach((panel) => {
//       panel.classList.remove("active");
//     });

//     buttons.classList.add("active");
//     let tabId = buttons.getAttribute("data-tab");
//     document.getElementById(tabId).classList.add("active");
//   });
// });

// let dateText = document.querySelector(".dateText");
// let buttonDate = document.querySelector(".dateBtn");

// let currentDate = new Date();

// let day = currentDate.getDate();
// let month = currentDate.getMonth();
// let year = currentDate.getFullYear();

// buttonDate.addEventListener("click", () => {
//   dateText.innerText = `${day}-${month}-${year}`;
// });

// let currDay = document.querySelector("#day");

// let dayNew = currentDate.getDay();

// let dayList = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// currDay.innerText = dayList[dayNew];

// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();
// let seconds = currentDate.getSeconds();

// let prepand = hours >= 12 ? "PM" : "AM";

// hours = hours >= 12 ? hours - 12 : hours;

// if (hours === 0 && prepand === "PM") {
//   if (minutes === 0 && seconds === 0) {
//     hours = 12;
//     prepand = "Noon";
//   } else {
//     hours = 12;
//     prepand = "PM";
//   }
// }

// if (hours === 0 && prepand === "AM") {
//   if (minutes === 0 && seconds === 0) {
//     hours = 12;
//     prepand = "Midnight";
//   } else {
//     hours = 12;
//     prepand = "AM";
//   }
// }

// let currTime = document.querySelector("#time");
// currTime.innerText = `${hours} ${prepand} : ${minutes} : ${seconds}`;

let multipleBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");

let result = document.querySelector("#result");

multipleBtn.addEventListener("click", () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  result.innerHTML = num1 * num2;
});

divideBtn.addEventListener("click", () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  result.innerHTML = num1 / num2;
});

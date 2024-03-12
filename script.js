// const createSubmitBtn = document.getElementById("Create");
// const editSubmitBtn = document.getElementById("Update");
// const deleteSubmitBtn = document.getElementById("Delete");
// const readSubmitBtn = document.getElementById("Read");

// createSubmitBtn.addEventListener("click", (event) => {
//   event.preventDefault();

//   // Get the values from HTML Document and Input it inside user.json file
//   // Here we are separating the logic in a separate function but it can be done inside this same function as well
//   return create();
// });

// // Here first get the values from form of HTML Document and store it in variables
// const fName = document.getElementById("fnameid");
// const lName = document.getElementById("lnameid");
// const fullName = document.getElementById("fullnameid");
// const number = document.getElementById("numid");
// const email = document.getElementById("emailid");

// Create.onclick = function () {
//   const firstName = fName.value;
//   const LastName = lName.value;
//   const FullName = fullName.value;
//   const Number = number.value;
//   const Email = email.value;

//   if (firstName && LastName && FullName && Number && Email) {
//     localStorage.setItem(firstName, LastName, FullName, Number, Email);
//     location.reload();
//   } else {
//     alert("Must Enter Value");
//   }
// };

// // for (i = 0; i < localStorage.length; i++) {
// //     const key = localStorage.key(i);
// //     const value = localStorage.getItem(key);

// //     lsOutput.innerHTML += `
// //     <hr />
// //     Key is: ${key} <br /><br />
// //     Value is: ${value}<br />
// //     `;

// // }
// // if (localStorage.length != 0){
// //     document.getElementById('avialRecords').innerHTML += `
// //     Records available in LocalStorage
// //     `;
// // }

// // if ( localStorage.length == 0) {
// //     btnAllDelete.style.display = "none";
// //     autoFILL.innerHTML += `
// //         Add some key - value records using INSERT box
// //     `;
// // }

// Read.onclick = function () {
//   const inputRead = fName.value;
//   const readeddData = localStorage.getItem(inputRead);

//   if (inputRead) {
//     inputRead.innerHTML += `
//         Data Value of requested KEY is: ${readeddData}
//         `;
//   }
// };

// Delete.onclick = function () {
//   const inputDelKeyD = .value;

//   if (inputDelKey) {
//     localStorage.removeItem(inputDelKeyD);
//     location.reload();
//   }
// };

// btnAllDelete.onclick = function () {
//   localStorage.clear();
//   location.reload();
// };


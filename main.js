//   1-rasm

// 1

// let array = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// array.sort((a, b) => a - b);
// console.log(array);

// 2

// function sum(arr, startIndex, endIndex) {
//     let sum = 0;
//     for (let i = startIndex; i <= endIndex; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let arr = [16, 9, 5, 8, 10, 15];
// let result = sum(arr, 2, 5);
// console.log(result);

// 3

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let num = [...new Set(arr)];
// console.log(num);

// 4

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];

// let max = arr.reduce((a, b) => Math.max(a, b));
// let min = arr.reduce((a, b) => Math.min(a, b));

// console.log("Eng katta qiymat: " + max);
// console.log("Eng kichik qiymat: " + min);

// 5

// function sum(arr) {
//     let firstElement = arr.shift();
//      arr.push(firstElement);
//     return arr;
// }
// let num = [1, 5, 8, 9, 10];
// let num2 = sum(num);
// console.log(num2);

// 6

// function sum(arr) {
//     return arr.reverse();
// }

// let num = [1, 5, 8, 9, 10];
// let num2 = sum(num);

// console.log(num2);

// 7

// function sum(arr) {
//     let num = arr.filter(num => num % 2 !== 0);
//     let num2 = num.length;
//         return { num, num2 };
// }
// let array = [5, 4, 26, 7, 8, 3, 2, 9, 6, 1];
// let result = sum(array);
// console.log("Toq sonlar: " + result.num);
// console.log("Toq sonlar soni: " + result.num2);

// 8

// function son(arr) {
//     return arr.filter((_, index) => index % 2 !== 0);
// }
// let num = [2, 3, 4, 5, 7];
// let num2 = son(num);
// console.log(num2);

// 9

// function num(arr) {
//     let max = -Infinity;
//     for (let i = 1; i < arr.length; i += 2) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max === -Infinity ? null : max;
// }
// let number = [2, 3, 4, 5, 7];
// let num2 = num(number);
// console.log("Toq indekslardagi eng katta qiymat: " + num2);

// 10

// function son(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     const minIndex = arr.indexOf(min);
//     const maxIndex = arr.indexOf(max);
//     for (let i = Math.min(minIndex, maxIndex) + 1; i < Math.max(minIndex, maxIndex); i++) {
//         arr[i] = 0;
//     }
//     return arr;
// }
// let num = [2, 1, 3, 8, 4];
// let num2 = son(num);
// console.log(num2);

// 11

// function number(n) {
//     const oddNumbers = [];

//     for (let i = 0; i < n; i++) {
//         oddNumbers.push(2 * i + 1);
//     }
//     return oddNumbers;
// }
// let n = 5;
// let son = number(n);
// console.log(son);

// 12

// function son(arr) {
//     let son2 = [];
//         for (let i = arr.length - 1; i >= 0; i--) {
//         son2.push(arr[i]);
//     }
//     return son2;
// }
// let num = [22, 3, 5, 6, 3, 2, 3];
// let num2 = son(num);

// console.log(num2);

// 13

// function array(arr) {
//        const uniqueValues = new Set(arr);
//       return Array.from(uniqueValues).sort((a, b) => a - b);
// }

// let num = [3, 5, 6, 3, 2, 3];
// let num2 = array(num);
// console.log(num2);

// 14
// function findSmallestJustIndex(arr) {
//   const index = arr.map((value, index) => ({ index, value }));

//   const justNumbers = index.filter((item) => item.value % 2 === 1);

//   const smallestJust = justNumbers.reduce(
//     (min, item) => {
//       return item.value < min.value ? item : min;
//     },
//     { value: Infinity }
//   );

//   return smallestJust.index;
// }

// let array = [2, 4, 7, 1, 5, 8, 3];
// let smallestIndex = findSmallestJustIndex(array);
// console.log(smallestIndex);

// 2-rasm

// 1
// function sum(employees) {
//     const salaries = [];
//     let totalSalary = 0;

//     for (const employee of employees) {
//         if (employee.salary) {
//             salaries.push(employee.salary);
//             totalSalary += employee.salary;
//         }
//     }

//     return {
//         totalSalary: totalSalary,
//         salaries: salaries
//     };
// }
// const employees = [
//   { id: 1, name: "Ali", age: 30, salary: 5000 },
//   { id: 2, name: "Veli", age: 28, salary: 6000 },
//   { id: 3, name: "Oydin", age: 25, salary: 7000 },
//   { id: 4, name: "Aynur", age: 35 },
// ];

// const result = sum(employees);

// console.log("Yig'indisi: " + result.totalSalary);
// console.log("Salarylar: " + result.salaries);

// 2

// const number = employees.reduce((max, employee) => {
//   if (employee.salary !== undefined && employee.salary > (max.salary || 0)) {
//     return employee;
//   }
//   return max;
// }, {});

// console.log(number.name);

// 3

// function son(...fields) {
//   employees.forEach((employee) => {
//     fields.forEach((field) => {
//       if (employee[field] !== undefined) {
//         console.log(`${field}: ${employee[field]}`);
//       } else {
//         console.log(`${field}: N/A`);
//       }
//     });
//     console.log("");
//   });
// }

// son("name", "age");
// console.log("---");
// son("name", "salary");

// 4

// let array = [43, 12, 76, 23, 97, 28, 11];
// let num = array.sort((a, b) => a - b);
// console.log(num);

// 5

// let array = [43, 12, 76, 23, 97, 28, 11];
// let son = Math.min(...array);
// console.log("Minimum qiymat:", son);

// 6
// function son(size, index = 0, array = []) {
//   if (index === size) {
//     return array;
//   }
//   const name = prompt(`Obyekt ${index + 1} uchun ismingizni kiriting:`);
//   const age = prompt(`Obyekt ${index + 1} uchun yoshni kiriting:`);
//   const salary = prompt(`Obyekt ${index + 1} uchun maoshni kiriting:`);
//   const obj = {
//     name: name,
//     age: Number(age),
//     salary: Number(salary),
//   };

//   array.push(obj);
//   return son(size, index + 1, array);
// }

// function son2(arr) {
//   return arr.map((obj) => obj.name);
// }
// const size = parseInt(prompt("Array uchun elementlar sonini kiriting: "), 10);
// const objectsArray = son(size);
// const namesArray = son2(objectsArray);

// console.log("Ismlar arrayi:", namesArray);

// 7

// const inputid = Number(prompt("Xodim ID-sini kiriting: "));
// const employee = employees.find((emp) => emp.id === inputid);
// const num = employees.findIndex((emp) => emp.id === inputid);

// if (employee) {
//   console.log(`Index: ${num}`);
//   console.log("Xodim:", employee);
// } else {
//   console.log("Berilgan ID bilan xodim topilmadi.");
// }

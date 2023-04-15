/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function (empObj) {
    if (empObj.profession == "developer") {
      console.log(empObj);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function (empObj) {
    if (empObj.profession == "developer") {
      console.log(empObj);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };
  arr.push(newEmployee);
  
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

function removeAdmin() {
  //Write your code here, just console.log
  let removeItem = "admin";
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i].profession == removeItem) {
      arr.splice(i, 1);
    }
  }
  
  //print updated array
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }

}

function concatenateArray() {
  //Write your code here, just console.log

  let arr1 = [
    { id: 5, name: "bhargav", age: "21", profession: "intern" },
    { id: 6, name: "vamsi", age: "22", profession: "developer" },
    { id: 7, name: "veeranji", age: "20", profession: "admin" },
  ];

  arr=arr.concat(arr1);
  
  //print updated array
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

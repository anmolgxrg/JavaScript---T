var arr = [{name: "Anmol", course:"BS", marks:45}, {name: "Akanshal", course:"Btech", marks:90}, {name:"A1k", course:"BArch", marks:47}, {name:"Ak", course:"Btech",marks:49}];

function search(item) {
  return item.course === "Btech";
}

var btechStudents = arr.filter(search);

console.log(btechStudents);

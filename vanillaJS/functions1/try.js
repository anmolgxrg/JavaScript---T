var arr = [1, 2, 3, 4, 5, 11, 12, 15, 22];
//METHODS
// delete arr[0] 


// arr.splice(0, 5, 8, 9, 10,) //add comma at last?

// var sliced = arr.slice(2, 5)

//FUNCTIONS




var arr = [{name: "Anmol", course:"BS", marks:45}, {name: "Anmolind", course:"Btech", marks:90}, {name:"A1k", course:"BArch", marks:47}, {name:"Ak", course:"Btech",marks:49}]

// function hello(item,index,array)
// {
//   return item.course==='Btech';
// }
// var res=arr.findLastIndex(hello)
// console.log(res)

function hello1(a,b)
{
  if(a.marks>b.marks)
  return 1;
  if(a.marks<b.marks)
  return -1;

  return 0;
}

arr.sort(hello1)

console.log(arr);

// map

var arrayres = arr1.map(cube)

function cube(item, index, array){
  return Math.pow(item, 3)
}

document.write(arrayres)


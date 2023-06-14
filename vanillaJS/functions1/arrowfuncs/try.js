// var add = (a,b) => a+b;

// var addbrkts = (a,b) => {return a+b};
// var objassign = (b,d) => {return {a:b, c:d}};

// var multipara = (...a) => {return a};

// console.log(typeof(add))

// var ar = multipara(3,4,5,4);
// console.log(ar.sort((a,b)=>b-a));

//asynchronous
// function processing(url, callback){
//     setTimeout(() => {
//         console.log("2 Secs process complete")
//         callback("anmol.com")
//     }, 2000);
// }

// function loading(url) {
//     console.log("Loaded the url", url)
// }

// processing("anmol.com", loading)

// function argcheck(a,b,c) +>console.log(a,b,c)

// argcheck(1,2,3)

var aa = () => console.log(arguments[0]);
aa(8, 9, 7);

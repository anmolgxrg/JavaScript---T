// var s="1 word 2 word";
// var p=/html/g;
// console.log(s.match(p));
// var a=/word/gi;
// console.log(s.match(a));
// console.log(p.test(s));
// console.log(s.replace(/html/,"react"));
// console.log(s.replace(/html/gi,"react"));
// console.log(s.replace(a, '$& and react'));
// console.log(s.replace(a, '$`'));
// console.log(s.replace(a, "$'"));

// var s = `ak:1
// anmol:2
// Ram:3`;
// var str = "anmol";
// var a = /^a[a-z]+:\d$/gm;
// console.log(s.match(a));

//URL Find
// var url = `https://www.akan9shal.com.in
// http://www.akanshal.in
// ht//akanshal.in`;

// var val = /^(https?:\/\/)(www\.)?(\w+\.)+$/gim;

// console.log(url.match(val));
// console.log(val.test(url));

//Email
// var email = `akanshajj@9itech.com
// anmol.garg@9tech.co.in`;
// var a = /^\w*([.-]\w+)*@\w+\.[a-z]+(\.[a-z]+)?$/gim;
// console.log(email.match(a));

//html tags

// var s = "<h1>this is html</h1>";
// var exp = /<\/?\w+>/gi;

// console.log(s.match(exp));

//Hexa Check

// var hd = `AA:1F:3D:4B:22:FF`
// var exp = /^([0-9 A-F]{2}:){5}[0-9 A-F]{2}$/gi;

// console.log(hd.match(exp));

//

// var sent = `i am "anmol" and this is "ak"`;

// var exp = /"(.+?)"/gi;
// var exp2 = /"[^"]+"/gi;

// console.log(sent.match(exp2));

// Q1
// const html = '<span class="abc">';

// const exp = /<(\w+)\s+class="([^"]+)"/;

// console.log(html.match(exp)[1])
// console.log(html.match(exp)[2])

// Q2
// var a = `#ff0 #0ff01 #ecg #0001`;

// var exp = /#[a-f0-9]{6}|#[a-f0-9]{3}\b/gi;

// console.log(a.match(exp));

// Q3
// var a = `-1.5 1 3 4.5 21`;
// var exp = /(-)?\d+(\.\d)?/g;
// console.log(a.match(exp));

// Q4

// var time = `23:14 00:30 12:05 31:52`;

// var exp = /[0-23]{2}:[0-59]{2}/g;
// console.log(time.match(exp));

//Q5

// var a = `-100 + 25`;

// var exp = /((-)?\d+(\.\d+)?)\s*(?:[+-\/*])\s*((-)?\d+(\.\d+)?)/;
// k = a.match(exp);
// console.log(k[1]);
// kk = Array.from(k);
// console.log(typeof kk, kk.length);
// var i = 0;
// for (p of k) {
//   console.log("in loop");
//   console.log(p);
// }

//Succeeding 

// var a = `Rate of item is 20$ and quantity is 20 `;
// var lookahead=/\d+(?=\$)/;
//  console.log(a.match(lookahead));

 //Preceding

 var a = `Rate of item is $20 and quantity is 20 `;
var lookbehind=/(?<=\$)\d+/;
 console.log(a.match(lookbehind));
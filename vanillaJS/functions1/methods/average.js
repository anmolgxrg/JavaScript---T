function avg(...a)
{
var sum=0;
for(b of a )
sum+=b;
return sum/a.length;
}
var a=[1,2,3,4,5,6];
console.log(avg(...a));
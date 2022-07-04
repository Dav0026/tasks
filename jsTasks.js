// function min(a,b){
//     if (a<b) return a;
//     else return b;
// }
// console.log(min(5,10));
//
// let minNum=function (c,d) {
//  if (c<d) return c;
//  else return d;
// }
// console.log(minNum(9,8))
//
// var maxNum=(a,b)=>{
//   if (a>b) return a;
//   return b;
// }
// console.log(maxNum(11,12))
//
// let a=1;
// let b=12;
// function calcFunc() {
//   return a + b
// }
// console.log(calcFunc())


function randomNumFunc (count,min,max){
    let filtered=[];
    let num =[];
    min=prompt('type min number');
    max=prompt("type  max number");
    count=prompt("count");
    if (max-min >= count){
        // console.log("min < max",max,min,max-min)
        while (filtered.length<count) {
            let randomNum = Math.floor(Math.random() * (max - min) + min);
            num.push(randomNum);
            filtered = num.filter((e, number, a) => a.indexOf(e) === number);
        } console.log(filtered);
    }else {
        alert("uncorrected");
    }
}
randomNumFunc();


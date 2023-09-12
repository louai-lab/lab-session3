
/*      exercice 1   */ 

// const numberKey=prompt("enter the number key");

// switch(numberKey) {
//     case "0":
//       console.log("we sank together");
//       break;
//     case "30000":
//       console.log("we made it");
//       break;
//       default:
//         console.log("we need to swim a little bit more!")
//   }


/*      exercice 2   */ 

const array=[1,2,8,4,7,6];

var max=array[0];

var min=array[0];


for(let i=1;i<array.length;i++){
    if(array[i] > max){
        max =array[i];
    } 
    else if(array[i < min]){
        min =array[i];
    }
}
console.log(max);
console.log(min);

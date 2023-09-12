
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

// const array=[1,2,8,4,7,6];

// var max=array[0];

// var min=array[0];


// for(let i=1;i<array.length;i++){
//     if(array[i] > max){
//         max =array[i];
//     } 
//     else if(array[i < min]){
//         min =array[i];
//     }
// }
// console.log(max);
// console.log(min);

/*          exercie 3      */ 

// for (let i = 0; i < 6; i++) {
//     var star=" "
//     for (let j = 0; j <= i; j++) {
//         star+="*";
//     }
//     console.log(star);
//   }


/*         ex4      */

// var array=[1,5,4,9,8,4,6,3];
// var max=array[0];

// for(let i=1;i<=array.length / 2; i++){
//     if(array[i] > max){
//         max=array[i];
//     }
//     for(let j=array.length-1;j>=0;j--){
//         if(array[j]>max){
//             max=array[j];
//         }
//     }
//     console.log(max)
// }

/*        ex5 */

// function square(number){
//     return number * number
// }

// console.log(square(3));


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




function key(number){
    switch(number){
        case 0:
            console.log("we sank together");
            break;
        
        case 30000:
            console.log("we made it");
            break;

            default:
                console.log("we need to swim a little bit more");
    }
    return number;
}
console.log(key(3000));







  

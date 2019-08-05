// var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function( 
//     n = 0 
// ) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve({
//                 resolvedAfterNSeconds: n
//             });
//         }, n * 1000);
//     });
// });
// var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function( 
//     n = 0
// ) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             reject({
//                 rejectedAfterNSeconds: n
//             });
//         }, n * 1000);
//     });
// });
// case 1
console.time("Promise.All");
var promisesArray = [];
promisesArray.push(promiseTRSANSG(1));
promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRSANSG(2));
var handleAllPromises = Promise.all(promisesArray);
handleAllPromises.then(function(values) {
    console.timeEnd("Promise.All");
    console.log("All the promises are resolved", values);
});
handleAllPromises.catch(function(reason) {
    console.log("One of the promises failed with the following reason", reason);
});
///
// var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function( 
//     n = 0 
// ) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve({
//                 resolvedAfterNSeconds: n
//             });
//         }, n * 1000);
//     });
// });
// var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function( 
//     n = 0
// ) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             reject({
//                 rejectedAfterNSeconds: n
//             });
//         }, n * 1000);
//     });
// });
// // case 1
// console.time("Promise.All");
// var promisesArray = [];
// promisesArray.push(promiseTRSANSG(1));
// promisesArray.push(promiseTRSANSG(4));
// promisesArray.push(promiseTRSANSG(2));
// var handleAllPromises = Promise.all(promisesArray);
// handleAllPromises.then(function(values) {
//     console.timeEnd("Promise.All");
//     console.log("All the promises are resolved", values);
// });
// handleAllPromises.catch(function(reason) {
//     console.log("One of the promises failed with the following reason", reason);
// });


// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// // promise constructor
// // var promise1 = new Promise(function(resolve, reject) {
// //     setTimeout(function() {
// //         resolve('foo');
// //     }, 300);
// // });

// // promise1.then(function(value) {
// //     console.log(value);
// // });

// // console.log(promise1);

// //

// var promise3 = Promise.reject("Not interested");
// promise3.then(function(value) {
//     console.log("This will not run as it is a resolved promise. The resolved value is ", value);
// });
// promise3.catch(function(reason) {
//     console.log("This will run as it is a rejected promise. The reason is ", reason);
// });
// //
// // var promise4 = Promise.resolve(1);
// // promise4.then(function(value) {
// //     console.log("This will run it as a resolved promise. The resolved value is ", value);
// // });
// // promise4.catch(function(reason) {
// //     console.log("This will not run as it is a resolved promise", reason);
// // });
// // multiple handlers
// var promise4 = Promise.resolve(1);
// promise4.then(function(value) {
//     console.log("This will run it as a resolved promise. The resolved value is ", value);
// });
// promise4.then(function(value) {
//     console.log("This will also run as multiple handlers can be added. Printing twice the resolved value which is ", value * 2);
// });
// promise4.catch(function(reason) {
//     console.log("This will not run as it is a resolved promise", reason);
// });




// function getRandomNumber(start = 1, end = 10) {
//     //works when both start and end are >=1
//     return (parseInt(Math.random() * end) % (end - start + 1)) + start;
// }var promiseTRRARNOSG = (promiseThatResolvesRandomlyAfterRandomNumnberOfSecondsGenerator = function() {
//     return new Promise(function(resolve, reject) {
//         let randomNumberOfSeconds = getRandomNumber(2, 10);
//         setTimeout(function() {
//             let randomiseResolving = getRandomNumber(1, 10);
//             if (randomiseResolving > 5) {
//                 resolve({
//                     randomNumberOfSeconds: randomNumberOfSeconds,
//                     randomiseResolving: randomiseResolving
//                 });
//             } else {
//                 reject({
//                     randomNumberOfSeconds: randomNumberOfSeconds,
//                     randomiseResolving: randomiseResolving
//                 });
//             }
//         }, randomNumberOfSeconds * 1000);
//     });
// });var testProimse = promiseTRRARNOSG();
// testProimse.then(function(value) {
//     console.log("Value when promise is resolved : ", value);
// });
// testProimse.catch(function(reason) {
//     console.log("Reason when promise is rejected : ", reason);
// });// Let us loop through and create ten different promises using the function to see some variation. Some will be resolved and some will be rejected. 
// for (i=1; i<=10; i++) {
//     let promise = promiseTRRARNOSG();
//     promise.then(function(value) {
//         console.log("Value when promise is resolved : ", value);
//     });
//     promise.catch(function(reason) {
//         console.log("Reason when promise is rejected : ", reason);
//     });
// }


// // // // //
// function getRandomNumber(start = 1, end = 10) {
//     // works when both start and end >= 1
//     return (parseInt(Math.random() * end) % (end-start+1)) + start;
// } var promiseTRRARNOSG = (promiseThatResolvesRandomlyAfterRandomNumnberOfSecondsGenerator = function() {
//     return new Promise(function(resolve, reject) {
//         let randomNumberOfSeconds = getRandomNumber(2,10);
//         setTimeout(function() {
//             let randomiseResolving = getRandomNumber(1, 10);
//             if (randomiseResolving > 5) {
//                 resolve({
//                     randomNumberOfSeconds: randomNumberOfSeconds,
//                     randomiseResolving: randomiseResolving
//                 });
//             } else {
//                 reject({
//                     randomNumberOfSeconds: randomNumberOfSeconds,
//                     randomiseResolving: randomiseResolving
//                 });
//             }
//         }, randomNumberOfSeconds * 1000);
//     });
// }); var testProimse = promiseTRRARNOSG();
// testProimse.then(function(value) {
//     console.log("value when promise is resolved : ", value);
// });
// testPromise.catch(function(reason) {
//     console.log("Reason when promise is rejected : ", reason);
// }); 
// // Let us loop through and create ten different promises using the function to see some variation. Some will be resolved and some will be rejected. 
// for (i=1; i<=10; i++) {
//     let promise = promiseTRRARNOSG();
//     promise.then(function(value) {
//         console.log("Value when promise is resolved : ", value);
//     });
//     promise.catch(function(reason) {
//         console.log("Reason when promise is rejected : ", reason);
//     });
// }

// var momsPromise = new Promise(function(resolve, reject) {
//     momsSavings = 2000;
//     priceOfPhone = 6000;
//     if (momsSavings > priceOfPhone) {
//         resolve({
//             brand: "iphone",
//             model: "6s"
//         });
//     } else {
//         reject("not enough savings");
//     }
// }); momsPromise.then(function(value) {
//     console.log("got phone", JSON.stringify(value));
// }); momsPromise.catch(function(reason) {
//     console.log("phoneless", reason);
// }); momsPromise.finally(function() {
//     console.log("still love her nmw");
// });
    
// promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({
//             message: "does keep word",
//             code: "aManKeepsHisWord"
//         });
//     }, 10 * 1000);
// });
// console.log(promise2);

// var keepsHisWord;
// keepsHisWord = true;
// promise1 = new Promise(function(resolve, reject) {
//     if (keepsHisWord) {
//         resolve("does keep his word");
//     } else {
//         reject("does not keep his word");
//     }
// });
// console.log(promise1);

// var isMom

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i have succeeded')
//     }, 1000);
// });

// myPromise.then(value => console.log(value));

// function timesTwo(params) { return params * 2 }

// function timesTwo(params) { 
//     return params * 2 
// }

// var timesTwo = params => params * 2

// timesTwo(4)


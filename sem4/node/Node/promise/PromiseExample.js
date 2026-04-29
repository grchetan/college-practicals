const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Order Diliverd")
  },1000)

});

console.log(myPromise)
myPromise.then((result) => {

})

.then((result) => {
  
})
.catch((err) => {

})
.finally(() => {
  console.log("Code is Runn")
})

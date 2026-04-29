const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Order Diliverd")
  },1000)

});





myPromise.then((result) => {

})
.catch((err) => {

})
.finally(() => {
  console.log("Code is Runn")
})

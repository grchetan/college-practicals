let promise = new Promise((reslove, reject) => {
  let success = true; //

  if (success) {
    reslove("Task comlete");
  } else {
    reject("Task failed!");
  }
});

promise
  .then((message) => {
    console.log("THEN:", message);
  })
  .catch((error) => {
    console.log("CATCH:", error);
  })
  .finally(() => {
    console.log("FINALLY: Always runs");
  });

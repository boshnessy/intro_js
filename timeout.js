// setTimeout(function() {
//   console.log("First task done!");
// }, 2000);

// setTimeout(function() {
//   console.log("Second task done!");
// }, 4000);

// setTimeout(function() {
//   console.log("Third task done!");
// }, 6000);

setTimeout(function() {
  console.log('first');
  setTimeout(function() {
    console.log("second");
    setTimeout(function() {
      console.log("third");
    }, 2000);
  }, 2000);
}, 2000);
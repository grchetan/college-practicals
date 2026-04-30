const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your name: ', (name) => {
  if (!name.trim()) name = 'Guest';
  console.log(`Hello, ${name}! Welcome to the Movie Workshop Platform!`);
  rl.close();
});

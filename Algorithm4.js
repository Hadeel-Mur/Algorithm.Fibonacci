// 4. Fibonacci

// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...



// Pseudocode
// 1- will use a loop to generate a new number from the sum of the two preceding ones,
// 2- will use a function to store the new sum of the preceding numbers


// coding
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  console.log(fibonacci(100));




// Diagram
// 1- the array fib has the first 2 numbers (0,1)
// 2-and then usesd a loop to calculate the subsequent numbers in the sequence by 
// adding the two previous numbers
// 3- The function returns the array fib.
// 4- when i 2 => fib[2] = fib[1] + fib[0], which is fib[2] = 1 + 0 = 1
// 5- when i 3 => fib[3] = fib[2] + fib[1], which is fib[3] = 1 + 1 = 2
// 6- when i 4 => fib[4] = fib[3] + fib[2], which is fib[4] = 2 + 1 = 3
// 7- when i 5 => fib[5] = fib[4] + fib[3], which is fib[5] = 3 + 2 = 5
// 8- when i 6 => fib[6] = fib[5] + fib[4], which is fib[6] = 5 + 3 = 8 and so on
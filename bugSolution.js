const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random failure
      if (Math.random() < 0.5) {
        reject(new Error('Asynchronous operation failed'));
      } else {
        resolve('Asynchronous operation successful');
      }
    }, 1000);
  });

  asyncOperation
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch((error) => {
      console.error('Error:', error); // Log the error for debugging
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error'); // Send a proper error response
    });
})

// Use process.on to handle uncaught exceptions.  This is a last resort,
// for errors that escape the more specific error handlers above
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
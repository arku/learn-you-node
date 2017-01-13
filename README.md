# LearnYouNode

This repo hosts my solutions for the [NodeSchool](https://nodeschool.io) workshopper [learnyounode](https://www.github.com/workshopper/learnyounode)

## Solutions

1. ### Hello World
  Write a program that prints the text "HELLO WORLD" to the console (stdout).

  [Solution](helloWorld.js)

2. ### Baby Steps
  Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

  [Solution](sumOfNumbers.js)

3. ### My first I/O
  Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]). You do not need to make your own test file.

  [Solution](countLinesInFileSync.js)

4. ### My first async I/O
  Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first command-line argument.

  [Solution](countLinesInFileAsync.js)

5. ### Filtered LS
  Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

  For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

  The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

  [Solution](filterFiles.js)

6. ### Make it modular
  This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

  Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.

  You must write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to your program. Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to make your filter work.

  The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. In this exercise, the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to fs.readdir(), the callback must be called with the error, and only the error, as the first argument.

  You must not print directly to the console from your module file, only from your original program.

  In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.

  These four things are the contract that your module must follow.

   - Export a single function that takes exactly the arguments described.
   - Call the callback exactly once with an error or some data as described.
   - Don't change anything else, like global variables or stdout.
   - Handle all the errors that may occur and pass them to the callback.

  The benefit of having a contract is that your module can be used by anyone who expects this contract. So your module could be used by anyone else who does learnyounode, or the verifier, and just work.

  [Solution](make-it-modular/)

7. ### HTTP Client
  Write a program that performs an HTTP GET request to a URL provided to you  as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

  [Solution](httpClient.js)

8. ### HTTP Collect
  Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

  The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.

  [Solution](httpCollect.js)

9. ### Juggling Async
  This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

  [Solution](juggling-async/)

10. ### Time Server
  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  [Solution](timeServer.js)

11. ### HTTP File Server
  Write an HTTP server that serves the same text file for each request it receives.

  Your server should listen on the port provided by the first argument to your program.

  You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.

  [Solution](httpFileServer.js)

12. ### HTTP Uppercaserer
  Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to your program.

  [Solution](http-uppercaserer/)

13. ### HTTP JSON API Server
  Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

  Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

    { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to your program.

  [Solution](httpJsonApiServer.js)

# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections within an HTTP server. The provided code simulates an asynchronous operation that might fail.  The initial implementation only logs the error to the console, but doesn't prevent the server from crashing or responding incorrectly.

## Problem

The `asyncOperation` promise can reject.  The `catch` block logs the error, but doesn't send a proper error response to the client, and importantly, doesn't prevent the process from potentially exiting unexpectedly if the error is severe enough.

## Solution

The solution file demonstrates a robust way to handle promise rejections. Proper error handling ensures that the server continues running and sends appropriate error responses to clients.
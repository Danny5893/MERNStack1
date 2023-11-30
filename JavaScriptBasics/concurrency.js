//basically doing multiple tasks simultaneously

// restaurant or eating zones - with waiters

//example 1 - Blocking/ Non-Concurrent way of execution (Single Threaded Execution)
// Arda - 5 mins, Garcia - 10 mins, Bryan - 15 mins

//Order1(Arda) <==> Waiter <==> Kitchen (wait 5 mins)
//Order2(Garcia) <==> Waiter <==> Kitchen (wait 10 mins)
//Order3(Bryan) <==> Waiter <==> Kitchen (wait 15 mins)

//Total time to deliver order = 5 + 10 + 15 => 30 mins


//example 2 - Non-Blocking/ Concurrent way of execution (Single (Javascript)/Multi Threaded Execution)
// Arda - 5 mins, Garcia - 10 mins, Bryan - 15 mins

//Order1(Arda) <==> Waiter ==> Kitchen - doesn't wait (Token) (5min)
//Order2(Garcia) <==> Waiter ==> Kitchen - doesn't wait (Token) (10min)
//Order3(Bryan) <==> Waiter ==> Kitchen - doesn't wait (Token) (15min)

//after 15 mins ==> Kitchen ==> Waiter ==> (Order1 + Order2 + Order3) => 15 mins

//Total time to deliver order = 5 + 10 + 15 (Maximum of all the orders) ==> 15 mins


//Order4(Gauri) <==> Waiter ==> Kitchen - doesn't wait (15min)
//Order5(Danny) <==> Waiter ==> Kitchen - doesn't wait (15min)

//Asynchronous calls are non-blocking

//Callback - system present in JS makes is work multithreaded like system without using multiple threads
//Event Loop system is there to help Js for non-blocking calls - LibUV
//SetTimeout/SetInterval/XMLHttpRequest - all are registered callback api's 
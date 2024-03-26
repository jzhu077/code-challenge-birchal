1) Would your solution change if you needed to parse 1 million plus records?
- Yes, I might have to use a better way to sort the final result by weight.

2) How would you deploy this service?
- If this service needs to be accessed via HTTP request, then I would need to add an expressJS and implement
necessary components like endpoint definition controller, and service (logic in this exercise). After that,
we can create a docker container that contains this service deploy onPrem or to one of the cloud services providers.
3) How would you change this service to allow founders to have their own custom rulesets?
- Make this service dynamic by via passing a custom config into the main function.

Note: I should add tests for the logic I wrote, but I ran out of time. I have only tested a few simple changes by directly modify the input data.

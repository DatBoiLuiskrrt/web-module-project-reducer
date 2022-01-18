# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- so, when the user clicks on the button an onClick event called handleAdddOneClick is invoked, this event handler function uses the built in dispatch function to call on the addOne function located inside the actions folder which returns an object with a key called type which is assigned to a variable called ADD_ONE. This then is used inside our reducer to determine which case we'll use to determine the outcome. We see that ADD_ONE matched with out first case, therefore we return a copy of our current state and then we see that the total key is now being reassigned to itself plus one.
  ...

- TotalDisplay shows the total plus 1.

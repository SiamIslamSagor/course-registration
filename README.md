# How I managed state in my assignment project.

To change the state of something in React, you need to do it through state. My website has five states which are variable so I have to declare five states. The only event a user can organize on this website is a click. On this website, I first declare a state named Courses and Set Courses, whose function is to store the fetched data in an array named courses. Then I map that array and send it to the component named card, the component creates cards one by one with the data.The second state I used is when the user clicks on a certain button, that course will be set on the card. The third and fourth states were for setting the remaining credit and total credits on the card, and optionally a state for setting the total price, whose function was to display the prices of each selected course on the total price card. As the first state is for data load, it is loaded once by default.
Then before setting the rest of the states, I set the remaining four states after checking all the validations that were asked to be done. As a result, if there is any validation problem, nothing will change on the card. This is how I managed the states of this project. thank you.

## Features

- Through this website, any user can select and buy any course or courses of his choice available on the website.

- This website is very nicely made responsive. As a result, the website will provide a very nice user experience on mobile devices, tablet devices and desktop devices.

- The codes of this website are arranged professionally. As a result, if a programmer visits the codes, he will understand the codes very well.

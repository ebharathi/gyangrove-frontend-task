To start the project 
npm i 
npm start

Structure of my project
Navbar 
Recommend
Events

How Lazy Loading is implemented for the events
I have added a scroll event listener  "window.addEventListener('scroll', handleScroll)" . Whenever i scroll the page , i check whether the bottom of the page is reached using handleScroll() function, if so i increment page number which triggers an useEffect that call api and new data s appended.

For Responsive
I have used tailwind css for the designs and layouts. I used the lg condition to breakdown to mobile screen size.

Transition effects
I have added little transition effects on the cards by removing padding when hovered with ease transition


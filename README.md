![image](https://github.com/ebharathi/gyangrove-frontend-task/assets/76675783/3e25c35c-f1b3-47e9-b443-dda5d789e44b)<h1>FRONTEND TASK FOR GYANGROVE </h1>


SETUP AND RUNNING THE PROJECT 
<br/>
npm i
<br/>
npm start
<br/>
![image](https://github.com/ebharathi/gyangrove-frontend-task/assets/76675783/ff363bac-f5e3-4145-b5cb-55acf5d1ae88)
<br/>
STRUCTURE OF MY PROJECTS
<br/>
There are 3 components basically which contains JSX and utils that connect with API . Also helper functions to format drive url and and date.
<br/>
Navbar
<br/>
Recommend
<br/>
Events
<br/>
<br/>
<br/>
LAZY LOAD IMPLEMENTATION
<br/>
I have added a scroll event listener  "window.addEventListener('scroll', handleScroll)" . Whenever i scroll the page , i check whether the bottom of the page is reached using handleScroll() function, if so i increment page number which triggers an useEffect that call api and new data s appended.

<br/>
<br/>
<br/>
RESPONSIVENESS
<br/>
I have used tailwind css for the designs and layouts. I used the lg condition to breakdown to mobile screen size.

Transition effects
I have added little transition effects on the cards by removing padding when hovered with ease transition


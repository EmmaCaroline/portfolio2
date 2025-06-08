import sp2Image from "../assets/screenshot_treasurebid.png";
import jsfImage from "../assets/screenshot_loopyshop.png";
import pe2Image from "../assets/screenshot_projectExam2.png";

const projectData = [
  {
    id: "proj1",
    title: "Treasurebid",
    image: sp2Image,
    alt: "Screenshot of Semester Project 2",
    descriptionShort:
      "This is my Semester Project 2, built with Vite and vanilla JS, and styled with Tailwind",
    descriptionLong: `DESCRIPTION OF THE PROJECT:
    
    This is my Semester Project 2 - which is an auction app where users can register for an account and receive 
    1,000 credits to bid on listings. Once logged in, users can update their profile information, create new listings, 
    and place bids on other users’ auctions. Unregistered visitors can still browse and view all available listings.
    
    This project is built with Vite and vanilla JS, and styled with Tailwind. The project integrates with a CORS-enabled RESTful API, 
    utilizing GET, POST, PUT, and DELETE HTTP methods for full CRUD operations. It securely authenticates requests by including both a JWT 
    access token and an API key in the headers.
    
    New changes made:

    - Implemented more comprehensive API response handling by adding utility functions for fetch and error response.
    
    - Implemented unit testing for critical functions.`,
    liveUrl: "https://treasurebid.netlify.app/",
    repoUrl: "https://github.com/EmmaCaroline/semester-project-2",
  },
  {
    id: "proj2",
    title: "The Loopy Shop",
    image: jsfImage,
    alt: "Screenshot of Javascript Framworks project",
    descriptionShort:
      "This is my Javascript Frameworks project, built with Vite and React, and styled with Tailwind",
    descriptionLong: `DESCRIPTION OF THE PROJECT:
    
    This is my Javascript Frameworks project - which is a React-based online shop built to learn React fundamentals. 
    It fetches product data from an API and allows users to browse products, add multiple items to their cart, 
    view the total number of products in the cart, and see the total price during checkout.
    
    The project is built with Vite and React, and styled with Tailwind. This project marked my introduction to React; 
    learning about JavaScript frameworks revolutionized my coding experience by making it clearer, more structured, and 
    easier to maintain.
    
    New changes made:
    
    - Implemented small code fixes to make it correct and cleaner, and implemented JSDoc documentation. `,
    liveUrl: "https://theloopyshop.netlify.app/",
    repoUrl: "https://github.com/EmmaCaroline/js-frameworks",
  },
  {
    id: "proj3",
    title: "Holidaze",
    image: pe2Image,
    alt: "Screenshot of Project Exam 2",
    descriptionShort:
      "This is my Project Exam 2, built with Vite and React, and styled with Tailwind",
    descriptionLong: `DESCRIPTION OF THE PROJECT:
    
    This is my Project Exam 2 - which is an online travel agency application for browsing and booking venues.
    Users can register as either customers or venue managers. Customers can browse and search for venues, and 
    make bookings. Venue managers have all the capabilities of customers, and can also create and manage their 
    own venues, as well as view and manage bookings made to them.
    
    The project is built with Vite and React, and styled with Tailwind. The project integrates with a CORS-enabled RESTful API, 
    utilizing GET, POST, PUT, and DELETE HTTP methods for full CRUD operations. It securely authenticates requests by including both a JWT 
    access token and an API key in the headers 
    
    New changes made:
    
    - Updated README file `,
    liveUrl: "https://pe2-emma-holidaze.netlify.app/",
    repoUrl: "https://github.com/EmmaCaroline/project-exam-2",
  },
];

export default projectData;

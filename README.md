# E-Commerce App using ReactJS, Tailwind CSS, MongoDB, Express JS, Node JS, Stripe and Razorpay

## Roadmap:
 1. Install [Vite + React](https://vite.dev/guide/). Create a new folder "Frontend" and do "npm install". To run the project, "npm run dev". (Refer docs)
 2. Install [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite). (Refer docs)
 3. Clear files like App.jsx, App.css, index.css. Delete Vite & React logo to add the project's logo & title. (This will enable you to start making your project.)
 4. Change the logo & title of the project from "index.html" to add the project's  logo & title.
 5. Add the images into the "Assets" folder.
 6. Create "Pages" folder and make the following files inside it: About.jsx, Cart.jsx, Collection.jsx, Contact.jsx, Home.jsx, Login.jsx, Orders.jsx, PlaceOrder.jsx etc.
 7. Create Components" folder. Inside it, create "Navbar.jsx".
 8. Install Route & Routes from "react-router-dom" which will be used to link Pages & Components to one another.

 ## How to make "Navbar.jsx"?
 1. Create a div, inside it add the logo image and put width as 36.
 2. Afterwhich, create a ul (unordered list), in it make 4 NavLink tags to add HOME, COLLECTION, ABOUT and CONTACT US. Accordinly make the style, font size, position, font color changes to it.
 3.  Under the same div, create another div. In this add the profile logo at the right side of the navbar. Add cursor pointer to it.
 4.  Under the same div, create another div. In this. we need to create a classname with dropdown. So that when we hover on the profile icon we can get the following 3 things: My Profile, Orders and Logout.
 5.  These 3 things will be under a div (under the profile icon div).
 6.  After this, create a Link tag under which add the cart icon and a p tag with 10 written. This denotes the number of items in the cart.
 7.  Then, add the menu icon and add width as 5, put cursor pointer to it.

🍰FOOD DELIVERY APPLICATION
This project is a React-based web application that implements routing, state management, and user context. Below are the detailed instructions and explanations for understanding and running the application.

Features🛠️:-
1.Dynamic routing using react-router-dom.
2.State management with Redux.
3.Context API for managing user authentication.
4.Modular components for better scalability.
5.Error handling for invalid routes.

Technologies Used💻:-
React: Frontend library for building UI.
Redux: State management library🗂️.
React Router: For client-side routing.
JavaScript (ES6+): Programming language.
HTML/CSS: Markup and styling.

Installation📥:-
  1.Install dependencies:
     npm install
  2.Start the development server:
     npm start

Usage🚀:- 
/: Displays the main body of the application.
/about: Shows the About page.
/contact: Displays the Contact page
/restaurants/:resId: Fetches and displays the menu for a specific restaurant.
/cart: Displays the shopping cart.
Any invalid route will render the custom Error component.
        
File Structure📂:-
src/
├── components/
│   ├── Header.js
│   ├── Body.js
│   ├── About.js
│   ├── Contact.js
│   ├── Restaurantmenu.js
│   ├── Cart.js
│   └── Error.js
├── utilities/
│   ├── Usercontext.js
│   ├── appStore.js
├── App.js
├── index.js

Components🧩:-
Header🖼️:
Renders the navigation bar for the application.
Body🏠:
Serves as the landing page of the application.
About ℹ️:
Displays information about the application.
Contact✉️:
Contains the contact information of the application.
Restaurantmenu🍴:
Dynamic component to display menu items of a specific restaurant based on the resId parameter.
Cart🛒:
Displays the items added to the shopping cart.
Error ⚠️:
Handles invalid routes and displays a 404 error message.

State Management🔄:
The application uses Redux for managing the global state.
appStore: Centralized Redux store to manage the application state.
Usercontext: Implements React Context API for managing user authentication and user-specific details.

Error Handling❗:
The application includes an Error component to handle invalid routes and display a user-friendly message.


Notes:-
Ensure node and npm are installed on your system.
Customize the application by modifying the components or adding new features as needed.












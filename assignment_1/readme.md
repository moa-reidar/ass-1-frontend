Netlify Link: https://euphonious-lamington-748f10.netlify.app/
Github Link: https://github.com/moa-reidar/ass-1-frontend.git
# Star Wars API Viewer

## Project Description

The **Star Wars API Viewer** is a web application that allows users to view detailed information about various elements from the Star Wars universe, such as films, characters (people), planets, and vehicles. The data is fetched from the Star Wars API and displayed in an interactive and user-friendly manner.

The purpose of this project is to showcase how to interact with an external API, dynamically load data, and present it in a structured layout with basic styling. It is built using **JavaScript** for the functionality and **CSS** for the layout.

## Project Installation

1. Clone this repository to your local machine:
   ```bash

   git clone https://github.com/moa-reidar/ass-1-frontend.git
   

2. Navigate into the project directory:

   cd ass-1-frontend
   

3. Install the necessary dependencies:
   
   npm install
   

4. Start the development server:

   npm run dev
   

5. Open your browser and navigate to `http://localhost:(some number)/` to see the application in action.


## Usage Instructions

To use this application, simply open it in a browser. The website will display buttons that allow you to view different categories such as **Films**, **People**, **Planets**, and **Vehicles**. Clicking on any of these buttons will fetch the respective data from the Star Wars API and display it in a neat, responsive grid layout.

### Features:
- **Responsive Design**: The layout adjusts automatically for different screen sizes, providing a good experience on both desktops and mobile devices.
- **API Integration**: Dynamically loads data from the Star Wars API, including films, people, planets, and vehicles.
- **Data Display**: Displays relevant data such as title, director, release date, and more, along with images for each entity.
- **Navigation**: Simple button-based navigation to switch between different data views.


## Contact

Created by **Moa Reidar**  
Feel free to reach out via email at [moa.reidar@live.no]

---

## Technologies Used
- **HTML**: Used for the basic structure of the page.
- **CSS**: Applied for styling, with a focus on responsiveness and clean design.
- **JavaScript**: Used for fetching data from the Star Wars API and managing the dynamic content.

## Known Issues
- Currently, the image aspect ratios for some entities may not display as expected. Future improvements will address this issue.
- Asynchronous data loading can result in delays when fetching large amounts of data.

## Project Structure

- **`src/`**: Contains the JavaScript,CSS and assets files.
    - **`js/`**: JavaScript files for fetching data and rendering content, including `api.js`, `app.js`, and `ui.js`.
    - **`assets/`**: Contains images and fonts for the application.
    - **`css/`**: All CSS files, including `style.css`, `variables.css`, and `reset.css`.
- **`index.html`**: The HTML file that contains the structure of the webpage and links to the CSS and JavaScript files.

---

## Instructions for Development

### 1. Start the development server:

npm run dev

### 2. Open the application in a web browser:

http://localhost:(some number)/


### 3. Modify or extend the project:
- Modify `style.css` for design changes.
- Extend the `js` files to integrate additional data or functionality.

---

## Contributing

Feel free to fork the repository, create a new branch, and submit a pull request with your contributions. Be sure to follow the project's coding guidelines and keep the changes in line with the existing structure.

---

## Acknowledgments

- **Star Wars API**: Used to fetch data for films, people, planets, and vehicles. link: https://swapi.py4e.com/ 
- **Vite**: Used as the development server.
- **CSS Grid**: Used for responsive design and layout.



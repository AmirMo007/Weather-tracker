WEATHER TRACKER
===============

A simple web app that shows the current weather for any city.
Type a city name, click "Get Weather", and see the temperature,
weather condition, humidity, wind speed, and "feels like" temperature.

Screenshot: 
<img width="1918" height="996" alt="image" src="https://github.com/user-attachments/assets/3e5b6955-e60b-4841-bb6f-2af9a3cd864b" />



FEATURES
--------
- Search the current weather by city name
- Shows temperature, weather condition, humidity, wind speed,
  and feels-like temperature
- Friendly error message when a city is not found
- Responsive design that works on desktop and mobile
- No API key needed


BUILT WITH
----------
- Node.js and Express.js : server and routing
- EJS                    : page templates (header, footer, main page)
- Axios                  : sending requests to the weather API
- Open-Meteo API         : free weather and geocoding data
- Font Awesome           : icons
- HTML and CSS


HOW IT WORKS
------------
1. The user enters a city name and submits the form.
2. The server sends the city name to the Open-Meteo Geocoding API
   to get its latitude and longitude.
3. The server sends those coordinates to the Open-Meteo Forecast API
   to get the current weather.
4. The result is shown on the page using EJS.


GETTING STARTED
---------------
Prerequisite: Node.js installed on your computer.

Run these commands in the terminal:

1. Clone the repository:
     git clone https://github.com/AmirMo007/weather-tracker.git

2. Go into the project folder:
     cd weather-tracker

3. Install the dependencies:
     npm install

4. Start the server:
     node index.js

5. Open your browser at:
     http://localhost:3000


PROJECT STRUCTURE
-----------------
Weather-Project/
  public/
    images/          -> background image
    styles/
      main.css       -> all styles
  views/
    partials/
      header.ejs     -> navigation bar
      footer.ejs     -> footer
    index.ejs        -> main page
  index.js           -> Express server and API requests
  package.json
  README.md


FUTURE IMPROVEMENTS
-------------------
- 5-day weather forecast
- Switch between Celsius and Fahrenheit
- Detect the user's location automatically
- About page


AUTHOR
------
Amir Mohamed
GitHub: https://github.com/AmirMo007


ACKNOWLEDGEMENTS
----------------
Weather data provided by Open-Meteo (https://open-meteo.com/).

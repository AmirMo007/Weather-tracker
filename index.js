import express from "express";
import bodyParser from "body-parser";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const geocodingAPI = "https://geocoding-api.open-meteo.com/v1/search"
const forecastApi = "https://api.open-meteo.com/v1/forecast"

// Home route
app.get("/", (req, res) => {
    res.render("index.ejs", {
        weather: null,
        error: null
    });
});


app.get("/about", (req,res) => {
    res.redirect("/")
})

// Weather route
app.post("/", async (req, res) => {

    const city = req.body.city;

    try {

        // Get city coordinates
        const geoResponse = await axios.get(
            geocodingAPI,
            {
                params: {
                    name: city,
                    count: 1,
                    language: "en"
                }
            }
        );

        // Check if the city exists
        if (!geoResponse.data.results || geoResponse.data.results.length === 0) {
            return res.render("index.ejs", {
                weather: null,
                error: "City not found. Please try another city."
            });
        }

        // Extract latitude and longitude
        const location = geoResponse.data.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        // Get current weather
        const weatherResponse = await axios.get(
            forecastApi,
            {
                params: {
                    latitude: latitude,
                    longitude: longitude,
                    current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
                    temperature_unit: "celsius",
                    wind_speed_unit: "kmh",
                    timezone: "auto"
                }
            }
        );

        // Extract current weather information
        const current = weatherResponse.data.current;

        const weather = {
            city: location.name,
            country: location.country,
            temperature: current.temperature_2m,
            humidity: current.relative_humidity_2m,
            feelsLike: current.apparent_temperature,
            windSpeed: current.wind_speed_10m,
            weatherCode: current.weather_code
        };

        // Send weather data to UI
        res.render("index.ejs", {
            weather: weather,
            error: null
        });

    } catch (error) {

        console.error("API Error:", error.message);

        res.render("index.ejs", {
            weather: null,
            error: "Unable to retrieve weather information. Please try again."
        });
    }
});


app.listen(port, ()=> {
    console.log(`server is running on ${port}`)
})

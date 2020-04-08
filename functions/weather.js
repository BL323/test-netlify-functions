import fetch from "node-fetch";

const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather?q=";
const { API_KEY } = process.env;

exports.handler = async (event, context) => {
  const city = event.queryStringParameters.name || 'London';

  const request = `${API_ENDPOINT}${city},uk&APPID=${API_KEY}`

  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data.weather
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
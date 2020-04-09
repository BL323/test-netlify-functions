const fetch = require('node-fetch');
const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather?q=";
const { API_KEY } = process.env;

exports.handler = async function(event, context) {
    const city = event.queryStringParameters.city || 'London';
    const requestUrl = `${API_ENDPOINT}${city},uk&APPID=${API_KEY}`;
    
    const response = await fetch(requestUrl, {
        headers: { Accept: 'application/json' }
      })
      if (!response.ok) {
        return { statusCode: response.status, body: response.statusText }
      }
      
      const data = await response.json()
      
      return {
        statusCode: 200,
        body: JSON.stringify({ msg: data })
      }    
}
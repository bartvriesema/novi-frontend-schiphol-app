# Introductie

Als eindopdracht voor mijn bootcamp Software Development bij Novi Hogeschool heb ik een webapp ontwikkeld in React. Deze
webapp haalt informatie op bij de Schiphol API en toont deze vluchten aan de gebruiker. De Schiphol API kan gratis
gebruikt worden om actuele vluchtinformatie op te halen.\
Voor het registeren van gebruikers en het afhandelen van het inloggen wordt gebruik gemaakt van de standaard door Novi
Hogeschool aangeboden backend.Daarnaast wordt ook gebruik gemaakt van de OpenWeather API om actuele weersinformatie van
Schiphol op te halen.\

# Installatiehandleiding

Om de webapp lokaal te kunnen gebruiken kunnen de volgende stappen gevolgd worden.

1. Clone de Github repository van de webapp.
2. Gebruik het commando `npm install` om alle dependencies te downloaden.
3. Maak een bestandje aan met de naam `.env` in de root van je project. Vul de parameters zoals beschreven
   in `.env.dist` aan in het bestand `.env`. Deze parameters zijn grotendeels persoonlijke API-keys, deze moeten zelf
   aangevraagd worden. Je kunt wel van de volgende vaste parameters gebruik maken:
 

      #SchipholAPI
         REACT_APP_API_KEY=aanvragen bij Schiphol API
         REACT_APP_API_ID=aanvragen bij Schiphol API
         REACT_APP_API_BASE_URL=https://api.schiphol.nl/public-flights/ 
         REACT_APP_PROXY_BASE_URL=http://localhost:5000/schiphol/flights 
      #CORSconfiguration
         REACT_APP_API_CORS_ALLOWED=http://localhost:3000
         REACT_APP_PROXY_SERVER=http://localhost:5000/ 
      #WeatherAPI
         REACT_APP_PROXY_WEATHER_URL=http://localhost:5000/weather 
         REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather?lat=52.31&lon=4.7569444444&lang=nl&appid= 
         REACT_APP_WEATHER_API_KEY=aanvragen bij OpenWeather API 
      #NoviHogeschoolbackend
         REACT_APP_NOVI_BACKEND_API_BASE_URL=eigen backend gebruiken 
         REACT_APP_NOVI_TEST=eigen backend gebruiken 
         REACT_APP_NOVI_SIGNUP=eigen backend gebruiken 
         REACT_APP_NOVI_SIGNIN=eigen backend gebruiken
4. Start de webapp met het commando `npm run dev`. Dit start zowel de webapp als ook de proxy server die gebruikt wordt
   om CORS errors te voorkomen. Deze proxy server is opgenomen in hetzelfde project in het bestand `server.js`.

# Applicatiehandleiding
* De homepage geeft de huidige vluchten van en naar Schiphol weer in een tijdvak van 2 uur.
* Via de Login pagina kan ingelogd worden of een account aangemaakt worden.
* Voor het aanmaken van een account is een unieke gebruikersnaam, uniek e-mailadres en wachtwoord nodig.
* Na het aanmaken van een account kan ingelogd worden in de webapp.
* Via de Flights pagina kan gefilterd worden in de vluchten van het tijdvak van 2 uur.
* Indien geen filter geselecteerd is, worden alle vluchten getoond.

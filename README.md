Web-application using Weather API + Reverse Geolocation API + Node.js

Main options:
---
- Search for desired city to check current weather.
- Automatically discover your location and check weather there.
- Feel free to test it via https://simple-nodejs-weather-app.onrender.com/

Demo on local deployment:
---

![](https://github.com/swifty94/simple-nodejs-weather-app/blob/master/sample_1.png)

![](https://github.com/swifty94/simple-nodejs-weather-app/blob/master/sample_2.png)

![](https://github.com/swifty94/simple-nodejs-weather-app/blob/master/sample_3.png)

Application structure:
---

<pre>
AppRoot:.
│   .gitignore
│   app-default.json
│   package-lock.json
│   package.json
│   README.md
│   sample_1.png
│   sample_2.png
│   sample_3.png
│
├───.dist
├───public
│   ├───css
│   │       main.css
│   │
│   ├───img
│   │       city.png
│   │       cloud.png
│   │       country.jpg
│   │       country.png
│   │       feels_like.png
│   │       humidity.png
│   │       pressure.png
│   │       temp_c.png
│   │       temp_f.png
│   │       time.png
│   │       wind.jpg
│   │       wind.png
│   │
│   └───js
│           client.js
│
├───src
│       app.js
│
├───utils
│       api.js
│       settings.js
│
└───views
        404.hbs
        index.hbs
        weather.hbs
</pre>

Requirements:
---

- install NodeJS if not already installed from here https://nodejs.org/
- sign up on Weather API here https://www.weatherapi.com/pricing.aspx ang get your API key
(free, no credit card needed)

Installation:
---
<pre>
- rename your app-default.json to app.json
- open the app.json and put your WEATHER_API_KEY. APP_PORT can be left as is if you not sure what to use.
- open terminal (if you are on MacOS or Linux) or CMD/Powershell if you are on Windows.
- go to the application directory (e.g., cd /Desktop/weather-app-2.0/)
- run npm install
</pre>

Deployment:
---
After the installation in the same directory run:

<pre>

~ \weather-app-3.0>node src/app.js
----------------------------------------------------------------
Server platform: win32
Hostname: DESKTOP-Q9IEVFL
Uptime: 132052.421
Express web-server started on port: 3000
Possible URL to try: http://DESKTOP-Q9IEVFL:3000
</pre>
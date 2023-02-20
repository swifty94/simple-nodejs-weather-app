const api = require('../utils/api');
const settings = require('../utils/settings');
const path = require('path');
const express = require('express');
const os = require('os');
const publicFolder = path.join(__dirname, '../public');
const weatherToken = settings.weatherToken;
const appPort = settings.appPort

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicFolder));


app.get('', (req, res) => {
    res.render('index');
});


app.get('/weather', (req, res) => {
    const url = `https://api.weatherapi.com/v1/current.json?q="${req.query.search}"&aqi=yes&key=${weatherToken}`;
    api.getData(url, (err, data) => {
        if (err) {
            // api provides an error response in JSON format anyway
            res.send(data);
        } else {
            res.render('weather', {'data': data});
        }
    })
});

app.get('*', (req, res) => {
    badUrl = req.url.toString();
    res.render('404', {'badUrl':badUrl});
})

app.listen(appPort, () => {
    console.log('----------------------------------------------------------------');
    console.log(`Server platform: ${os.platform}`)
    console.log(`Hostname: ${os.hostname()}`);
    console.log(`Uptime: ${os.uptime()}`);
    console.log(`Express web-server started on port: ${appPort}`);
    console.log(`Possible URL to try: http://${os.hostname()}:${appPort}`)
})
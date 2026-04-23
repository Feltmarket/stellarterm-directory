const https = require('https');

function get(url, options) {
    options = options || {};
    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            let body = '';
            res.on('data', (d) => {
                body += d;
            });
            res.on('end', () => {
                resolve(body);
            });
        }).on('error', (e) => {
            reject(e);
        });
    });
}

function getJson(url, options) {
    return get(url, options)
        .then(body => {
            return JSON.parse(body);
        });
}

module.exports = {
    get,
    getJson,
};
// BonfireStellar Assets Configuration
const BonfireStellarAssets = {
  "BFIRE-GB7U643OOUENEYK5NKFPSLX432P6PMNQITDWRMU2RVG4PXBRTHAVJOJW": {
    code: "BFIRE",
    issuer: "GB7U643OOUENEYK5NKFPSLX432P6PMNQITDWRMU2RVG4PXBRTHAVJOJW",
    domain: "bonfirestellar.org",
    name: "Bfire",
    icon: "https://bonfirestellar.org/wp-content/uploads/2021/11/Header-banner-imagea2.png"
  },

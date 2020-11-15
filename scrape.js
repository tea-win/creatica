const request = require('request');
const cheerio = require('cheerio');

request('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const row = $('.row');
    //console.log(row.text());

    const output = row.find('h2').text().replace(/\s\s+/g, '');
    console.log(output);

    
}    
});


// var https = require('https');
// var http = require('http');
// var cheerio = require('cheerio');
// var util = require('util');
// var EventEmitter = require('events').EventEmitter;
// var STATUS_CODES = http.STATUS_CODES;

// // var url = "http://denver.craigslist.org/sof/5263214272.html";
// /*
//  * Scraper Constructor
// **/
// function Scraper (url) {
//     this.url = url;
//     this.init();
// }

// /*
//  * Make it an EventEmitter
// **/
// util.inherits(Scraper, EventEmitter);

// /*
//  * Initialize scraping
// **/
// Scraper.prototype.init = function () {
//     var model;
//     var self = this;
//     self.on('loaded', function (html) {
//         console.log("init loaded");
//         model = self.parsePage(html);
//         console.log(model);
//         self.emit('complete', model);
//         console.log("complete");
//     });
//     self.loadWebPage();
// };

// Scraper.prototype.loadWebPage = function () {
//   var self = this;
//   console.log('\n\nLoading ' + url);
//   http.get(self.url, function (res) {
//     var body = '';
//     if(res.statusCode !== 200) {
//       console.log("scraper prototype load !==200");
//       return self.emit('error', STATUS_CODES[res.statusCode]);
//     }
//     res.on('data', function (chunk) {
//       body += chunk;
//       // console.log("chunking data");
//     });
//     res.on('end', function () {
//       self.emit('loaded', body);
//       console.log("ended - loaded");
//     });
//   })
//   .on('error', function (err) {
//     self.emit('error', err);
//     console.log("error in loadweb");
//   });
// };

// /*
//  * Parse html and return an object
// **/
// //craigslist - not working
// Scraper.prototype.parsePage = function (html) {
//   var $ = cheerio.load(html);
//   var title = $('title').text();
//   var url = $('link').attr('href');
//   var description = $("meta[name='description']").attr("content");
//   var date = $('time').attr('datetime');
//   var content = $('#postingbody').text();
//   var imgSrc = $('img').attr('src');
//   var email = $('.mailapp').text();
//   var model = {
//     title : title,
//     url : url,
//     description : description,
//     date : date,
//     content : content,
//     imgSrc : imgSrc,
//     email : email
//   };
//   return model;
// };


// module.exports = Scraper;

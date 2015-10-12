// var Model = require('../models/listing.js');
// var Scraper = require('./scraper.js');
// var Pages = [];

// function generateUrls(limit) {
//   var url = 'http://denver.craigslist.org/search/sof?format=rss';
//   var urls = [];

//   console.log(url);
//   console.log(urls);

//   var i;
//   for (i=1; i < limit; i++) {
//     urls.push(url + i);
//   }
//   return urls;
// }
// // store all urls in a global variable
// Pages = generateUrls(5);

// function wizard() {
//   // if the Pages array is empty, we are Done!!
//   if (!Pages.length) {
//     return console.log('Done!!!!');
//   }
//   var url = Pages.pop();
//   var scraper = new Scraper(url);
//   var model;
//   console.log('Requests Left: ' + Pages.length);
//   // if the error occurs we still want to create our
//   // next request
//   scraper.on('error', function (error) {
//     console.log("Bot error:"+error);
//     wizard();
//   });
//   // if the request completed successfully
//   // we want to store the results in our database
//   scraper.on('complete', function (listing) {
//     model = new Model(listing);
//     model.save(function(err) {
//       if (err) {
//         console.log('Database err saving: ' + url);
//       }
//     });
//     wizard();
//   });
// }

// var numberOfParallelRequests = 1;
// for (var i = 0; i < numberOfParallelRequests; i++) {
//   wizard();
// }

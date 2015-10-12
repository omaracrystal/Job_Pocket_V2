$(document).ready(function () {
  //your code here
  console.log('sanitycheck');
  var maxEntries = 15; // if 0 then there will be no limit

function newFeed(file) {
 $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%22"+encodeURIComponent(file)+"%22&format=json&callback=?", function(d) {
  var count = 0;
  //grab ever rss item from the json result request
  $(d.query.results.RDF.item).each(function() {
    //if set up to be infinite or the limit is not reached, keep grabbing items
    if(maxEntries === 0 || maxEntries>count){
     var title = this.title[1];
     var link = this.link;
     var description = this.description;
     var pubDate = this.date;
     // Format however you want, I only went for link and title
     var anItem = "<table style='width:100%''><tr><td style='width:65%'><p><h3><a href="+link+" target='_blank'>"+title+"</a><</h3></p>"+description+"</td><td>"+pubDate+"<br><img ng-src='{{urlImage}}' height='150px' style='padding-top:20px;'/></td></tr></table></div>";
     //append to the div
     $("#content").append(anItem);
     count++;
    }
   });
 });
};
newFeed("http://denver.craigslist.org/search/sof?format=rss");
});


     // "<a href='"+link+"' target='_blank'>"+title+"</a><br>"+pubDate+description;

var w=new Oject
var user  //gmail/apps user name or email address
var timestamp //time extension inserts html into email
var vote //which link was selected?
var w.emailvoteIN=function(user,timestamp,vote){
    // called with the arguments in the link /user/timestamp/vote
    w.paintpage(vote);
    var w.emailvoteIN.id = w.populatepage(w.recordemailvote(user,timestamp,vote));
    };

var w.paintpage-function(vote){
    //add ui elements to page, highlight users vote choice 
    //sencha touch carousell..etc
    //statsreadout 0-9 links, voted link enlarged (how to show stats relatively easily)
    // or resize colored divs with relative to number, row beneath same thing for comments, with votes on them.. advanced version.
    
    };
var w.populatepage=function(data){
    //add comments, and vote stats to page
    //returns the serial number created 
    return data.id();
    };
var w.recordemailvote(user,timestamp,vote){
    //add object to database, return existing votes and comments
    return(data);
};
var w.paintstats=function(id,array){
    //array, 10 positions, 0-9, number of votes/weight
    //id is serial number of objet referred to, in db and on page..
    // if $(this).paintstats.. is an html element, paint it to become a stats readout, reflecting array.
    // relative size indicates number of votes..? only populate stats after vote.. on comments/./.
};
var w.recordvote=function(vote){
    // when click a 0-9 link, record vote to server
    // un-bold other 0-9, bold link 0-9 clicked,
    // update array from server callback and resize

}
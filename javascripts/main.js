// The main module (i.e. javascripts/main.js) should then use the 
// return objects from all three dependencies to populate your song list.

requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
    ["jquery", "hbs", "bootstrap", "addMember", "deleteMember"],
    function($, Handlebars, bootstrap, addfam, deletefam) {









  
 });   


  
  
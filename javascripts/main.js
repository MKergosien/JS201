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
    ["jquery", "hbs", "bootstrap", "addMember", "deleteMember", "populateMember"],
    function($, Handlebars, bootstrap, addfam, deletefam, popfam) {
      var allFamily;

      popfam.queryMember(function(data) {
        allfamily = data; 
          
        require(
          ['hbs!../templates/family'], 
          function(fbFamily){
            $("#familyList").html(fbFamily(data));
        }); 
      });  

  
      $("#addMember").click(function(){
          var newMember = {};
          addfam.queryNewMember(function(addedMember) {
            newMember = addedMember;

            newMember.firstname = $("#firstName").val();
            newMember.lastname = $("#lastname").val();
            newMember.age = $("#age").val();
            newMember.gender = $("#gender").val();
            newMember.skills = $("skills").val();
            console.log(newMember);
        });
      });  
 });   






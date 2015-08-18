define(function() {
  return {
    queryNewMember: function(callbackfunction) {
      $.ajax({
          url: "https://nss-mary-family.firebaseio.com/family.json",
          method: "POST",
          data: JSON.stringify(newMember)
        }).done(function(addedMember) {
          console.log("Your new song is", addedMember);
          callbackfunction.call(this, addedMember);
        });
    }
  };
});

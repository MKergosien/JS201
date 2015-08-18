define(function() {
  return {
    queryMember: function(callbackfunction) {
      $.ajax({ url: "https://nss-mary-family.firebaseio.com/.json" }).done(function(data) {
        console.log(data);
        callbackfunction.call(this, data);
      });
    }
  };
});


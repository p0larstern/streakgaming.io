$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 10){
      $("header").attr("id","shrink");
      $("header").attr("class","hero is-dark");
    }
    else
    {
        $("header").attr("class","hero is-medium is-dark");
        $("header").removeAttr("id");
    }
});
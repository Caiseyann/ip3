/*$(function () {
    $("form#formv").on('submit',function(event){
       event.preventDefault();
       let name = $("input#mce-FNAME").val();
       if ($("input#mce-EMAIL").val()){
           alert ("Hey " + name + ", Thanks for reaching out to us,Will get back to you");
       }
       else {
           alert("Please provide your correct name and email!");
       }
   });
});*/

$(document).ready(function(){
    $("form#formValidity").submit(function(event){
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if (name && email){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
    });
  });

$('#image').on("click",function(e){
    $('.span').toggle('slow');
    $('.imagE').toggle("click");
   });
$('#image1').on("click",function(e){
    $('.span1').toggle('slow');
    $('.images1').toggle("click");
});
$('#image2').on("click",function(e){
    $('.span2').toggle('slow');
    $('.images2').toggle("click");
});

$('#work').on("click",function(e){
    $('.span').hover('slow');
    $('.work1').hover("click");
   });
   
$('#work').on("click",function(e){
    $('.span').hover('slow');
    $('.work2').hover("click");
   });
   
$('#work').on("click",function(e){
    $('.span').hover('slow');
    $('.work3').hover("click");
   });
   
$('#work').on("click",function(e){
    $('.span').hover('slow');
    $('.work4').hover("click");
   });
   
$('#work').on("click",function(e){
    $('.span').hhover('slow');
    $('.work5').hover("click");
   });
   
$('#work').on("click",function(e){
    $('.span').hover('slow');
    $('.work6').hover("click");
   });
   
$('#work').on("click",function(e){
    $('.span').hover('slow');
    $('.work7').hover("click");
   });
   
$('#work').on("click",function(e){
    $('.span').hover('slow');
    $('.work8').hover("click");
   });
$(function () {
    $("form#mc-embedded-subscribe-form").on('submit',function(event){
       event.preventDefault();
       let name = $("input#mce-FNAME").val();
       if ($("input#mce-EMAIL").val()){
           alert ("Hey " + name + ", Thanks for reaching out to us,Will get back to you");
       }
       else {
           alert("Please provide your correct name and email!");
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
    $('.span').toggle('slow');
    $('.work1').toggle("click");
   });
   
$('#work').on("click",function(e){
    $('.span').toggle('slow');
    $('.work2').toggle("click");
   });
   
$('#work').on("click",function(e){
    $('.span').toggle('slow');
    $('.work3').toggle("click");
   });
   
$('#work').on("click",function(e){
    $('.span').toggle('slow');
    $('.work4').toggle("click");
   });
   
$('#work').on("click",function(e){
    $('.span').toggle('slow');
    $('.work5').toggle("click");
   });
   
$('#work').on("click",function(e){
    $('.span').toggle('slow');
    $('.work6').toggle("click");
   });
   
$('#work').on("click",function(e){
    $('.span').toggle('slow');
    $('.work7').toggle("click");
   });
   
$('#work').on("click",function(e){
    $('.span').toggle('slow');
    $('.work8').toggle("click");
   });
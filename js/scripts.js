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
function shagsToggle(){ 

        $("#shags-sec").removeClass("hidden");
        $("#scarves-sec").addClass("hidden");
        $("#womens-sec").addClass("hidden");

        console.log(window.location.href);

        //if(window.location.href=="")

        sessionStorage.option = 1;
        // sessionStorage.currLoc = window.location.href;

}

function womenToggle(){ 

        $("#womens-sec").removeClass("hidden");
        $("#shags-sec").addClass("hidden");
        $("#scarves-sec").addClass("hidden");

        sessionStorage.option = 2;

}


function scarvesToggle(){ 

        $("#shags-sec").addClass("hidden");
        $("#scarves-sec").removeClass("hidden");
        $("#womens-sec").addClass("hidden");

        sessionStorage.option = 3;

}


$(document).ready( function() {

   if(sessionStorage.option==1){

    shagsToggle();

   }
   if(sessionStorage.option==2){

    womenToggle();
    
   }
   if(sessionStorage.option==3){

    scarvesToggle();
    
   }

// $("#shagsDesc").on("click", function(){

//         console.log(window.location.href);

// });

    // $("#shags").on("click", function() {

       
    //     $("#shags-sec").removeClass("hidden");
    //     $("#scarves-sec").addClass("hidden");
    //     $("#womens-sec").addClass("hidden");
    // });

    //     $("#scarves").on("click", function() {
    //     $("#shags-sec").addClass("hidden");
    //     $("#scarves-sec").removeClass("hidden");
    //     $("#womens-sec").addClass("hidden");
        
    // });

    //             $("#womens").on("click", function() {
    //                 $("#womens-sec").removeClass("hidden");
    //     $("#shags-sec").addClass("hidden");
    //     $("#scarves-sec").addClass("hidden");
        
    // });

// $('#product-catalog').load('templates/grid-row.html');

$('.carousel-showmanymoveone .item').each(function(){
var itemToClone = $(this);

for (var i=1;i<6;i++) {
itemToClone = itemToClone.next();

if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}

itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});

$('#itemslider').carousel({ interval: 3000 });


$('.carousel-showmanymoveone2 .item').each(function(){
var itemToClone = $(this);

for (var i=1;i<6;i++) {
itemToClone = itemToClone.next();

if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}

itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});

$('#itemslider2').carousel({ interval: 3000 });


$('.carousel-showmanymoveone3 .item').each(function(){
var itemToClone = $(this);

for (var i=1;i<6;i++) {
itemToClone = itemToClone.next();

if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}

itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});

$('#itemslider3').carousel({ interval: 3000 });


var native_width = 0;
    var native_height = 0;
  $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

    //Now the mousemove function
    $(".magnify").mousemove(function(e){
        //When the user hovers on the image, the script will first calculate
        //the native dimensions if they don't exist. Only after the native dimensions
        //are available, the script will show the zoomed version.
        if(!native_width && !native_height)
        {
            //This will create a new image object with the same image as that in .small
            //We cannot directly get the dimensions from .small because of the 
            //width specified to 200px in the html. To get the actual dimensions we have
            //created this image object.
            var image_object = new Image();
            image_object.src = $(".small").attr("src");
            
            //This code is wrapped in the .load function which is important.
            //width and height of the object would return 0 if accessed before 
            //the image gets loaded.
            native_width = image_object.width;
            native_height = image_object.height;
        }
        else
        {
            //x/y coordinates of the mouse
            //This is the position of .magnify with respect to the document.
            var magnify_offset = $(this).offset();
            //We will deduct the positions of .magnify from the mouse positions with
            //respect to the document to get the mouse positions with respect to the 
            //container(.magnify)
            var mx = e.pageX - magnify_offset.left;
            var my = e.pageY - magnify_offset.top;
            
            //Finally the code to fade out the glass if the mouse is outside the container
            if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
            {
                $(".large").fadeIn(100);
            }
            else
            {
                $(".large").fadeOut(100);
            }
            if($(".large").is(":visible"))
            {
                //The background position of .large will be changed according to the position
                //of the mouse over the .small image. So we will get the ratio of the pixel
                //under the mouse pointer with respect to the image and use that to position the 
                //large image inside the magnifying glass
                var rx = Math.round(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
                var ry = Math.round(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
                var bgp = rx + "px " + ry + "px";
                
                //Time to move the magnifying glass with the mouse
                var px = mx - $(".large").width()/2;
                var py = my - $(".large").height()/2;
                //Now the glass moves with the mouse
                //The logic is to deduct half of the glass's width and height from the 
                //mouse coordinates to place it with its center at the mouse coordinates
                
                //If you hover on the image now, you should see the magnifying glass in action
                $(".large").css({left: px, top: py, backgroundPosition: bgp});
            }
        }
    })

    $("#prod1").on("click", function() {

        // var prod1 = window.open("product_desc/prod-sr.html");

        //     teste = function(){
        //         prod1.document.getElementById("prTitle").innerHTML="Product #1";
        //         console.log(prod1.document.getElementById("prTitle"));
        //     }

//             var teste = function(){
//     var mon = novoForm.document.getElementById("prTitle");
//     console.log(mon);
//     if(typeof(mon)!="undefined"){
//         //novoForm.alert("Achei!");
//         // var h = novoForm.innerHeight;
//         // var strh = String(h - 40 - 30)+'px';
//          // novoForm.document.getElementById("pagina").style.height = strh;
//         novoForm.document.getElementById("prTitle").innerHTML = 'Product #1';
//         clearInterval(id);
//     }
// }
 // var id = setInterval(teste, 100);

            

        
    //     $(document).ready( function() {
    //     $('#prTitle').html="Product #1";
    // });


        //$('body').load('product_description.html');

        // $('#product_view1').modal('show');

    });




        // $(".grid-font-clr").addClass("hidden");
//         $( ".gallery_product" ).mouseover(function() {
//   $this.(".grid")
// });
   
// $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
//     $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
   



$(".swatch .color1 label span").on("click", function(){



 $('#img-loc2').attr('src','../shagrugs/pic46.jpg');
  $('#img-loc3').attr('src','../shagrugs/pic46.jpg');

  $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

});    

$(".swatch .color2 label span").on("click", function(){



 $('#img-loc2').attr('src','../shagrugs/pic47.jpg');
  $('#img-loc3').attr('src','../shagrugs/pic47.jpg');
  $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

});    

$(".swatch .color3 label span").on("click", function(){



 $('#img-loc2').attr('src','../shagrugs/pic48.jpg');
  $('#img-loc3').attr('src','../shagrugs/pic48.jpg');
  $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

});    

$(".swatch .color4 label span").on("click", function(){



 $('#img-loc2').attr('src','../shagrugs/pic49.jpg');
  $('#img-loc3').attr('src','../shagrugs/pic49.jpg');
  $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

});    

$(".swatch .color5 label span").on("click", function(){



 $('#img-loc2').attr('src','../shagrugs/pic50.jpg');
  $('#img-loc3').attr('src','../shagrugs/pic50.jpg');
  $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

});    

$(".swatch .color6 label span").on("click", function(){



 $('#img-loc2').attr('src','../shagrugs/pic51.jpg');
  $('#img-loc3').attr('src','../shagrugs/pic51.jpg');
  $(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

});   



});


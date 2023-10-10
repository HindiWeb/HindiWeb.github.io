
document.getElementById('about').style.display = 'none';
document.body.style.overflow = 'auto';


document.querySelectorAll('iframe').forEach(function(ifr){ifr.height =(window.innerHeight-20) + 'px'; }); 
document.getElementById('ifr3').style.maxHeight = '600px';

function hide(x) {
var element = document.getElementById(x);
element.style.display = 'none';

    if (x == 'a1d') {
        document.getElementById('evening-dark').className = 'hidden';
        document.body.style.overflow = 'auto';
    } else {
        console.log(x);
    }
    console.log(x,':Hidden');
}
hide('popper');

document.addEventListener('DOMContentLoaded',function(){
snowfall('d-img',20,60);
});
function popIt(text){
var p = document.getElementById('popper');
    var closer = document.createElement('div');
    closer.className = 'btn close';
    closer.innerText = '×';
    closer.addEventListener('click',function(){
        p.style.display = 'none';
    });

p.innerText = text;
p.style.display = 'block';
p.appendChild(closer);
/*
setTimeout(() => {
    p.style.display = 'none';
}, 5000);*/

}

var dImg = document.getElementsByClassName('d-img').item(0);
function NoIimg(){dImg.style.borderRadius = '10px';dImg.style.borderColor='grey';}
dImg.addEventListener('click',NoIimg);
dImg.addEventListener('focus',NoIimg);
dImg.addEventListener('mouseenter',NoIimg);
dImg.addEventListener('mouseleave',function(){dImg.style.borderRadius='25px';});
var Lib = document.getElementsByClassName('div');

var codeInside = Lib.item(0).innerHTML;
const regex = /\.(html|in|com|org)"> (.*?) - /g;

// Replace only the "-" character with spaces inside the matched pattern
const newCode= codeInside.replace(regex, (_, domain, words) => {
const replacedWords = words.replace(/-/g, ' ');
return `.${domain}"> <div class=\'link-title\'>${replacedWords.trim()}</div>`;
});
Lib.item(0).innerHTML = newCode;

var bElements = document.querySelectorAll('.web');
bElements.forEach(function (element) {
var matches = element.innerHTML.match(/\b\w+\.(html|org|com|in)\b/g);

if (matches && matches.length > 0) {
    var link = matches[0];
    var lt = document.createElement('div');var a = document.createElement('a');
    lt.className = 'btn click-me';
    a.href = link; a.target = "_blank";
    a.textContent = 'Click Me!';
    lt.appendChild(a); element.appendChild(lt);
}

});



function brightClrs() {
function random(){return Math.floor( (Math.random())*10);}
var c = '#'
c = c + random() + random() + random();
return c;
}


function lightClrs(){
function random(){
    var x= Math.floor((Math.random())*200);
    if (x<50||x>250) { x=80; }
    return x;
}
var c =  `rgba(${random()},${random()},${random()},.${random()})`
return c;
}

var elements = document.querySelectorAll(".rnd");
elements.forEach(function (element) {
element.style.background = lightClrs();
});


var lb = document.querySelectorAll('.lb');
lb.forEach(function(element) {
var div1 = document.createElement('div');
var div2 = document.createElement('div');
div1.className = 'gol top';
div2.className = 'gol bottom';
element.appendChild(div1);
element.appendChild(div2);

var e = element.querySelectorAll('.descrip');
    
    if (e) {
        
        e.forEach(function (el) {
            var qm = document.createElement('div');
                qm.style = 'top:3px;right:3px;font-size:12px;text-shadow:0px 0px 0px aqua;';
                qm.innerText = '?';
                qm.className = 'btn close';
                element.appendChild(qm);
        var etext = el.textContent;
        console.log(etext);
        qm.addEventListener('click',function(){
            popIt(etext);
        });
    
    });
} 
});

lb.forEach(function(e) {
var b = brightClrs();
var l = lightClrs();
var golE = e.querySelectorAll('.gol');
e.addEventListener('mouseenter',function (){
    golE.forEach(function(gol){
        gol.style.background = 'green';
    });
});
e.addEventListener('mouseleave',function (){		
    golE.forEach(function(gol){
        gol.style.background = l; 
    });
});
});

var golElements = document.querySelectorAll('.gol');
golElements.forEach(function(element) {
element.style.background = lightClrs();
});

function hwBg(className) {
var golElements = document.querySelectorAll(className);
golElements.forEach(function(element) {
//element.style.background = lightClrs();
 
var Bi = 'linear-gradient(transparent,'+ lightClrs() +',' + lightClrs()+')';
element.style.backgroundImage = Bi;
});
}
hwBg('.lb');
hwBg('.rnd'); 
hwBg('#header div');
if (window.innerWidth > 300) {
document.getElementById('a1d').style.minWidth = '300px';
}

//--------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

var alliframes = document.querySelectorAll('iframe');
var loadingDivs = document.querySelectorAll('.loading');
var iframes = [];

// Iterate through each iframe and check if it has loading="lazy"
for (var i = 0; i < alliframes.length; i++) {
  var iframe = alliframes[i];
  if (iframe.hasAttribute('loading') && iframe.getAttribute('loading') === 'lazy') {
    iframes.push(iframe);
  }
}
// Loop through all iframes and attach event listeners
for (var i = 0; i < iframes.length; i++) {
    iframes[i].addEventListener('load', function () {
        // Find the corresponding loading message and hide it
        var index = Array.from(iframes).indexOf(this);
        /*loadingDivs[index].style.display = 'none';*/
        if (loadingDivs[index]){
            setTimeout(() => {
                loadingDivs[index].remove();
                iframes[index].style.opacity = '1';
            }, 1000); 
        }  
    });

    iframes[i].addEventListener('readystatechange', function () {
        if (this.readyState === 'loading') {
            // Find the corresponding loading message and show it
            var index = Array.from(iframes).indexOf(this);
            loadingDivs[index].style.display = 'block';
        
        }
    });
}
function changeText(element){
    var text = element.innerText;
    var newText  = text + '.';
    function changing(sec=500){
        element.innerText = text;
        setTimeout(() => {
            element.innerText = newText;
            setTimeout(() => {
                element.innerText = newText + '.';
                setTimeout(() => {
                    element.innerText = newText +'..';
                    setTimeout(() => {
                        
                        changing();
                                    
                    }, sec);
                }, sec);
            }, sec);
        }, sec);
    }
    changing(300);
}
document.querySelectorAll('.loading').forEach(function (params) {
    changeText(params);
})


//************************************************************************************* */
/*
var iframes = document.querySelectorAll('iframe');
var loading = document.getElementById('loading');
var loadedCount = 0;

// Function to check if all iframes are loaded
function checkAllIframesLoaded() {
    loadedCount++;
    if (loadedCount === iframes.length) {
        // All iframes are loaded, hide the loading message
        loading.style.display = 'none';
    }
}

for (var i = 0; i < iframes.length; i++) {
    // Add an event listener to each iframe
    iframes[i].addEventListener('load', checkAllIframesLoaded);
}

// Show the loading message initially
loading.style.display = 'block';
*/



let lastScrollPosition = 0;

function hideh3() {
  const currentScrollPosition = window.scrollY;
  const scrollDifference = currentScrollPosition - lastScrollPosition;

  if (scrollDifference > 20) {
        $('#footerHW').css('top','0px');
    }
    
   else if ((scrollDifference < -2) && (window.scrollY < 50 )) {
        $('#footerHW').css('top','-60px');
    }
  lastScrollPosition = currentScrollPosition;
	var hii = document.body.scrollHeight;
    var per = (currentScrollPosition / (hii - window.innerHeight)) * 100;
    per = Math.min(per, 100);
    
    $('.pb').eq(0).css('width',per + '%');
} 

window.addEventListener('scroll', hideh3);


//<!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
/*
function go_to(pagelink){
    var element = $("<div></div>");
    element.addClass('new');
    element.click();
    document.body.append(element);
}
*/


$(document).ready(function () {
    $('a._blank').attr('target','_blank');
    $('a.p').each(function(){
        const p = $('<p>');
        const t = $(this).text();
        p.text(t);
        $(this).html(p);
    })

    /**
    $('li[data-link]').click(function() {
        // Get the value of the data-link attribute
        var link = $(this).data('link');
        
        // Open the link in a new tab or window
        //window.open(link, '_blank');
        $('#container').css('display','none');
        $('#sub-web').attr('src',link).css({
            'display':'block',
            'height':'100vh'
        });
        //$('#static-header').css('display','block');
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        
    });  
     */

    $('li[data-link]').click(function() {
        // Get the value of the data-link attribute
        var link = $(this).data('link');

        var l = $("<span></span>");
        l.html("<img width='100px' class='loading-icon' src='dep/loading.png'>");
        l.addClass('fixedCenter').css('z-index','99');
        l.appendTo('body');

        
        setTimeout(function() {
            // Code to execute after the delay
            window.open(link, '_self' );
            console.log("new Page opened!");
        }, 1500);        

        
    });  
    /*

    $('#static-header').html($('#footerHW').html());
    $('#static-header').addClass ('footerHW').css({
        'position':'relative',
        'top':'0px',
        'display':'none',
    }); 
    */
   if (window.innerWidth < 600) {
    $('.web.waiting').parent().css('display','none');
   }

    
});
function about(){
    document.getElementById('about').style.display = 'block';
    document.getElementById('a1d').style.display = 'block';

}



/** Saving feedback */
$(document).ready(function() {				
    $("#feedback_form").submit(function(event) {

        $("#successMessage").html("<img width='30px' class='loading-icon' src='dep/loading.png'>");
        event.preventDefault(); // Prevent the default form submission 

        // Serialize the form data
        var formData = $(this).serialize();

        // Send an AJAX request to submit_feedback.php
        $.ajax({
            type: "POST",
            url: "https://neetiindia.org/wp-content/plugins/HindiWeb/save_feedback.php",
            data: formData,
            success: function(response) {
                // Display the success message in the dedicated div
                $("#successMessage").html(response);
                $("#feedback_form #name, #feedback_form #email, #feedback_form #feedback").val('');
            },
            error: function() {
                // Handle errors if needed
                $("#successMessage").html("Error: Unable to save feedback.");
            }
        });
    });





    //temp
    $('.feedback').css('background-color','rgb(201, 166, 129,.9)');
});

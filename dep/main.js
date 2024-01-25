
document.getElementById('about').style.display = 'none';
document.body.style.overflow = 'auto';


// document.querySelectorAll('iframe').forEach(function(ifr){ifr.height =(window.innerHeight-20) + 'px'; }); 
// document.getElementById('ifr3').style.maxHeight = '600px';

function hide(x) {


    if (x == 'a1d') {
        x = 'about';
        var element = document.getElementById(x);
        element.style.display = 'none';
        document.body.style.overflow = 'auto';
        var containerElement = document.getElementById("a1d");
        var snowFlakesElements = containerElement.getElementsByClassName("snowflake");
        for (var i = 0; i < snowFlakesElements.length; i++) {
            snowFlakesElements[i].style.display = "none";
        }
    } else {
        var element = document.getElementById(x);
        element.style.display = 'none';
    }
    // console.log(x,':Hidden');
}
hide('popper');

// document.addEventListener('DOMContentLoaded',function(){
// // snowfall('d-img',20,10);
// });
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

setTimeout(() => {
    p.style.display = 'none';
}, 5000);
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
    var matches = element.querySelector('a');
  // var haslink = matches.hasAttribute('href');
//var matches = element.innerHTML.match(/\b\w+\.(html|org|com|in)\b/g);
// matches.length > 0 
if (matches ) {
    // var link = matches[0];
    var link = matches;
    var lt = document.createElement('div');
    var a = document.createElement('a');
    lt.className = 'btn click-me';
    a.href = link; a.target = "_blank";
    a.textContent = 'Click!';
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

//.descrip USED for WORKING
var e = element.querySelectorAll('.descrip');
    
    if (e) {
        
        e.forEach(function (el) {
            var qm = document.createElement('div');
                qm.style = 'top:3px;right:3px;font-size:12px;text-shadow:0px 0px 0px aqua;';
                qm.innerText = '?';
                qm.className = 'btn close';
                element.appendChild(qm);
        var etext = el.textContent;
        // console.log(etext);
        qm.addEventListener('click',function(){
            //popIt(etext);
            output(this,etext,5);
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

    setInterval(() => {
        //hwBg('.lb');
//hwBg('.rnd');    

//hwBg('#header div');
$('.gol').css('background',brightClrs());
 
    }, 5000);


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
    if(window.innerWidth < 300) {
        $('#headerHW').css('top','0px');
        return
    }
  const currentScrollPosition = window.scrollY;
  const scrollDifference = currentScrollPosition - lastScrollPosition;

  if (scrollDifference > 20) {
        $('#headerHW').css('top','0px');
    }
    
   else if ((scrollDifference < -2) && (window.scrollY < 50 )) {
        $('#headerHW').css('top','-60px');
    }
  lastScrollPosition = currentScrollPosition;
	var hii = document.body.scrollHeight;
    var per = (currentScrollPosition / (hii - window.innerHeight)) * 100;
    per = Math.min(per, 100);
    
    $('.pb').eq(0).css('width',per + '%');
} 
hideh3()
window.addEventListener('scroll', hideh3);
window.addEventListener('size', hideh3);


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

    var customizeView = {
        device: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "Mobile (Android)" : "Desktop",
        os: (navigator.userAgent.match(/Windows Phone|Android|iPad|iPhone|iPod|win64|wow64|macintosh|mac os x|linux/i) || ["Unknown OS"])[0],
        browser: (navigator.userAgent.match(/MSIE|Trident|Firefox|OPR|Safari|Edge|Chrome/i) || ["Unknown Browser"])[0]
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://neetiindia.org/wp-content/plugins/HindiWeb/active_user.php?", true);
    xhr.send(customizeView);
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
            //console.log("new Page opened!");
            l.empty(); 
        }, 1500);        

        
    });  
    /*

    $('#static-header').html($('#headerHW').html());
    $('#static-header').addClass ('headerHW').css({
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
    if (document.getElementById('about').style.display == 'block') {
        hide('a1d');
        return
    }
    document.getElementById('about').style.display = 'block';
    document.getElementById('a1d').style.display = 'block';
    snowfall('d-img',20,30);
}



/** Saving feedback */
$(document).ready(function() {				
    $("#feedback_form").submit(function(event) {

        $("#successMessage").html("<img width='30px' class='loading-icon' src='dep/loading.png'>");
        event.preventDefault(); // Prevent the default form submission 

        // Serialize the form data
        var formData = $(this).serialize();

        //
        var nameValue = $("#feedback_form #name").val();
        var emailValue = $("#feedback_form #email").val();
        var feedbackValue = $("#feedback_form #feedback").val();
        $("#feedback_form #name, #feedback_form #email, #feedback_form #feedback").val('');

        // Send an AJAX request to submit_feedback.php
        $.ajax({
            type: "POST",
            url: "https://neetiindia.org/wp-content/plugins/HindiWeb/save_feedback.php",
            data: formData,
            success: function(response) {
                // Display the success message in the dedicated div
                $("#successMessage").html(response);
            },
            error: function(e) {
                // Handle errors if needed
                console.log(e);
                $("#successMessage").html("Error: Unable to save feedback.");
                $("#feedback_form #name").val(nameValue);
                $("#feedback_form #email").val(emailValue);
                $("#feedback_form #feedback").val(feedbackValue);
            }
        });
    });





    //temp
    $('.feedback').css('background-color','rgb(201, 166, 129,.9)');
});


//  Poetry 

var php_path = "https://neetiindia.org/wp-content/plugins/HindiWeb/kavita.php";


$(document).ready(function(){ 

// function flexMoveObserver(){
// 	var observer = new IntersectionObserver(function(entries) {
//     entries.forEach(function(entry) {
//       var $div = $(entry.target);
//       if (entry.isIntersecting) {
//         if ($div.is(':first-child')) {
// 		  $('.l3p').css('display','none');
//         } else if ($div.is(':last-child')) {
// 		  $('.r3p').css('display','none');
//         } else { 
// 			$('.l3p').css('display','flex'); 
// 			$('.r3p').css('display','flex'); 
// 		}
//       }
//     });
//   }, { threshold: 0.5 }); // Using a threshold of 0.5


//   $('.flexbox .Nquote').each(function() {
//     observer.observe(this);
//   });
// }

	function setPoetries(object){
		Object.values(object).flat().forEach(item => {
			var author = item.author;
			var kavita = item.kavita; 
			if (author&&kavita){
				//popup(kavita+' - '+author);
				//$('#kavitayen').append("<p>"+kavita+' - '+author+'</p>');

				var $newKavita = `<div class="Nquote">
				<div class="quote eyes-love center"><br>${kavita.replace(/\n/g,'<br>')}
					<div ><br>– ${author}</div><hr> 
				</div></div>`;

				$('#kavitaSky').append($newKavita);

			}
		});
        scroll(0);
		// setTimeout(() => {
		// 	flexMoveObserver();			
		// }, 500);
	}

	//$('#gget').on('click',function(){

function getPoetries(){
	//popup('getting poetry.');
	$.ajax({
		type: "GET",
		url: php_path,
		success: function(response) {
			var data = response;
			var object = response;
			//$('#kavitayen').empty();

			setPoetries(object);
			const cacheData = {
				data,
				timestamp: new Date().getTime()
			};
			localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));


			//popup("Data received successfully.");
			console.log("Data received successfully." , response);
		},  
		error: function(error) {
			popup('error');
			console.log(error);
			console.log("An error occurred while saving data.");
		}
	});
}

const CACHE_KEY = 'poetries';
const CACHE_EXPIRATION = 21600000;//;//6h or 86400000; // 1 day in milliseconds


// Check if the data is already cached in the browser's localStorage
const cachedData = localStorage.getItem(CACHE_KEY);
if (cachedData) {
const { data, timestamp } = JSON.parse(cachedData);
	const currentTime = new Date().getTime();
	if (currentTime - timestamp < CACHE_EXPIRATION) {
		// Use the cached data
		setPoetries(data);
		//popup('using_local');
	} else {
		// Data has expired, fetch new data from the server
		getPoetries();
	}
} else {
	//popup('active');
	getPoetries();
}
//});

});

var qot = document.querySelectorAll('.quote');
qot.forEach(qq => {
	tq = qq.innerHTML;
	tq = tq.replace(/\n/g, '<br>');
	qq.innerHTML = tq ;
});   
							
const scrollContainer = document.querySelector('.flexbox');
//const prevButton = document.getElementById('prev-button');
//const nextButton = document.getElementById('next-button');
var visibleQuote = 0;
scroll(0);  
function scroll(num,random) {
	var qts = document.getElementsByClassName("Nquote");
    if(random){
        var lastIndex = scroll.lastIndex || -1;
        var newIndex;
        do {
            newIndex = Math.floor(Math.random() * qts.length);
        } while (newIndex === lastIndex);
        
        scroll.lastIndex = newIndex; // Update the last index
        // popup(newIndex); 
        scroll(newIndex-visibleQuote);
        return;
    }

    $('.Nquote').removeClass('w3-animate-right');
    $('.Nquote').removeClass('w3-animate-left');

	if(qts[visibleQuote + num]){
		qts[visibleQuote].style.display = 'none';
		visibleQuote = visibleQuote + num;
		$('.l3p').css('display','flex');
		$('.r3p').css('display','flex');
    }

    $('#poemNum').text((visibleQuote+1) + "/" + qts.length)

    //checks and balances
	if(!qts[visibleQuote + 1]){
		$('.r3p').css('display','none');
	} 
    if (!qts[visibleQuote - 1]) {
		$('.l3p').css('display','none');	
	}
	if(num<0){
		$(qts[visibleQuote]).addClass("w3-animate-left");
	} else if (num>0) {
		$(qts[visibleQuote]).addClass("w3-animate-right");
	}	 
	qts[visibleQuote].style.display = 'block';

}

//nextButton.addEventListener('click', () => {
function scrollNext(){
	// scrollContainer.scrollBy({
    // left: window.innerWidth, // Adjust for horizontal scrolling
    // behavior: 'smooth'});
	scroll(+1);

}
//});

//prevButton.addEventListener('click', () => {
function scrollPrev(){
//   scrollContainer.scrollBy({
//     left: -window.innerWidth, // Adjust for horizontal scrolling
//     behavior: 'smooth'
//   });
	scroll(-1);

}

function randomScroll() {
    scroll("random",true);
}
//});


$(document).ready(function () {
    $("#subs").submit(function (event) {
        event.preventDefault();
		$("#responseSub").html("<img width='30px' class='loading-icon' src='https://hindiweb.github.io/dep/loading.png'>");

        $.ajax({
            type: "POST",
            url: "https://neetiindia.org/wp-content/plugins/HindiWeb/save_subscription.php",
            data: $("#subs").serialize(),
            success: function (responseSub) {
                if (responseSub === "subscribed") {
                    $("#responseSub").html("<p style='color:yellow'> Congratulations! You have <br>successfully subscribed!</p>");
                } else if (responseSub === "already_subscribed") {
                    $("#responseSub").html("<p style='color:yellow'> You have already subscribed.</p>");
                } else {
                    $("#responseSub").html("Unable to subscribe.<br> Please try again.");
                }
            },
            error:()=>{
                $("#responseSub").html("Unable to subscribe.<br> Please try again.");
            }
        });
    });


});	
var subA;
subA = new HwAlert({
        title: 'Subscribe!',
        message :` 
        <div style="position:absolute;top:-10px;right:-10px;color:#444" onclick="subA.hide()" class="btn normal"><i class="fa fa-close  "></i></div> 
        <div class="pop-join">
        <form id="subs" method="POST"> 
            <input id="name" name="name" minlength="3" placeholder="Name" required> <br>
            <input id="email" name="email" type="email" placeholder="Email" required><br>
            <div id="responseSub"></div>
            <input class="btn " type="submit" style="border:none" value="SUBSCRIBE">
        </form>
        </div>
        `,
        buttons : [],
        overlay: [true
        // ,()=>{
        // 	// subA.remove();
        // }
    ]
}).hide();		
function subscribe() {subA .open();};


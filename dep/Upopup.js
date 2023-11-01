/** 
* @author Deva Ram 
* @version 2.5
*/  

document.addEventListener("DOMContentLoaded", function() {  var styleElement = document.createElement("style"); var cssRules = `.popup{ position: fixed; padding: 10px 20px; z-index: 99; background-color: #333;color: white; opacity: 0.92;font-size: 18px; font-family:Verdana, Geneva, Tahoma, sans-serif; border-radius: 5px;border:1px inset pink; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); } #noticeboard { max-width:90%; position:fixed;bottom:10px;right:10px; } .hidden { display: none; }`;   styleElement.textContent = cssRules;document.head.appendChild(styleElement); 
//var noticeB = document.createElement('div');noticeB.id = 'noticeboard';document.body.appendChild(noticeB);
});  

/** 
* this creats popup div 
* @param {*} id of the popup by default 1 
* @param {*} pos position of the popup on the window T&B|R&L 'TL','BR' 
* @param {string} where where to append the popup 
* @returns id 
*/
function createpopup(id=1 , pos='BR',where='undefined'){ var id = 'popup'+ id; var popup = document.createElement('div');popup.id = id; popup.classList.add ('popup');popup.classList.add ('hidden'); popup.textContent = 'This is some dynamically created content using Upopup JavaScript.';  var ps = popup.style; if (pos == 'CC') { ps.top= '50%';ps.left= '50%'; ps.transform= 'translate(-50%, -50%)'; } else { if (pos[0] == 'T') { ps.top = '20px'; } else { ps.bottom = '20px';  }  if (pos[1] == 'L') { ps.left = '20px'; } else { ps.right = '20px'; } }  if (where === 'undefined'){ document.body.appendChild(popup); /*/getElementById('content') is body*/ } else { popup.style.position = 'relative'; document.getElementById(where).appendChild(popup); } return id; }

/**MAKES POP-UP VISIBLE FOR GIVEN SECONDS * first create a popup and then pop it up 
* @param {*} id of the popup via createpopup method 
* @param {*} text of the popup 
* @param {*} sec popup will be visible for 1 sec by default 
* @param {*} move like 'up', 'down', 'up 120', 'left', 'right 80' 
* @param {*} c class 
*/ 
function showpopup(id,text,sec=1,move='static',c=null){ sec = sec * 1000; id = 'popup' + id; var popup = document.getElementById(id); popup.innerText = text; popup.classList.remove('hidden'); popup.style.transform = 'translateY(0%)'; setTimeout(() => { let perse = 80; checkin = move.split(' '); move = checkin[0]; if (checkin.length == 2){ perse = checkin[1]; } if ( move != 'static' ) { popup.style.transition = 'all 1s ease-out'; if (move === 'up') { popup.style.transform = `translateY(-${perse}%)`; } else if ( move === 'down'){popup.style.transform = `translateY(${perse}%)`; } else if ( move === 'left') {popup.style.transform = `translateX(-${perse}%)`; } else if (move === 'right') {popup.style.transform = `translateX(${perse}%)`; } } }, 50); if ( c != null ){ popup.classList.add(c); } setTimeout(() => { popup.classList.add('hidden'); popup.classList.remove(c); }, sec); }
var autoid = 211;  
function popup(text='text',sec=2,move='up 20',c=null){ if (autoid ===211) { var noticeB = document.createElement('div');noticeB.id = 'noticeboard';document.body.appendChild(noticeB); noticeB.style.zIndex = 99; }; autoid += 1; createpopup(autoid,'BR','noticeboard'); showpopup(autoid,text,sec,move,c); } 

/**
 * A small popup for buttons
 * @param {*} buttonid id of button or div 
 * @param {*} text txt in popup
 * @param {*} sec visible seconds
 * @param {*} c class name
 */

function output(buttonid,text,sec=2,c=null) { autoid += 1; createpopup(autoid,'BR'); showpopup(autoid,text,sec,'static',c); var div = document.getElementById(buttonid); var p = document.getElementById("popup"+autoid); 
// Get the position of the div
var rect = div.getBoundingClientRect(); var r = rect.right.toFixed(2); var b = rect.bottom.toFixed(2); p.style.top = (b-2) +'px'; p.style.left = (r-2) + 'px'; p.style.bottom =  'auto'; p.style.right =  'auto'; }

/***
* @author Deva Ram 
* @version 3.5.2
*/  

document.addEventListener("DOMContentLoaded", function() {  var styleElement = document.createElement("style"); var cssRules = `
.popup{ position: fixed; min-width:fit-content; padding: 10px 20px; z-index: 99; background-color: #333;color: white; opacity: 0.92;font-size: 18px; font-family:Verdana, Geneva, Tahoma, sans-serif; border-radius: 5px;border:1px inset pink; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); } 
#noticeboard { max-width:90%; position:fixed;bottom:10px;right:10px; } .hidden { display: none; } .popup-closer { position:fixed;right:5px;top:2px;font-size:12px;cursor:default; } .popup-closer:hover { color:red; }

.hw-d-overlay { position: fixed; z-index:1000; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); justify-content: center; align-items: cenfter; }
.hw-d-box { background-color: white; padding:0;max-width:99%; text-align: center; border-radius:5px; border: 1px solid #27a; position:fixed; top:50%;left:50%; transform: translate(-50%,-50%); }
.hw-d-msg { padding : 30px 20px; overflow:auto;max-height:50vh;} 
.hw-d-button { margin:3px 5px; padding: 10px; display: inline-block; padding: 8px 12px; font-size: 14px; font-weight: bold; text-align: center; text-decoration: none; cursor: pointer; border: 1px solid #27a; color: #27a; background-color: #ffe; border-radius: 8px; transition: background-color 0.1s, color 0.3s, border-color 0.3s; }
.hw-d-button:hover { background-color: #ccc; color: #000; } 
.hw-d-button:active { background-color: grey;  border-color: #218c53; }
.hwModalTitle { color:white; margin:0; font-size: 20px; font-weight: bold; text-align: center;  padding: 7px; line-height:1.2; border-radius:5px 5px 0 0; background:#333; border-bottom: 2px solid #eee; border-top: 1px solid #333;  }
.hw-d-btn-div {border-radius: 0 0 5px 5px; background:#444;padding:5px;border-top:1px solid #333;}

.hw-panel { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); background-color: #ffffcc; color: rgb(0, 0, 0); text-align: center; line-height: 1.5; font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 15px; padding-top: 0; width:100%; display: none; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); box-sizing: border-box; } 
.hw-panel h3 { margin:0; padding: 10px 0; font-size: 24px; font-weight: 400; font-family: "Segoe UI",Arial,sans-serif; }
.close-btn { cursor: pointer; position: absolute; top: 1px; right: 10px; font-size: 30px; color: rgb(116, 106, 106); padding: 3px; } .close-btn:hover { color: rgb(84, 79, 79); } 

.hw-alert { display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; border: 1px solid #3498db; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); z-index: 1000; max-width: 300px; border-radius: 8px; } 
.hw-alert-content { padding: 20px; text-align: center; } .hw-alert h2 { margin-top: 0; color: #3498db; } .hw-alert p { color: #333; } .hw-alert-buttons { margin-top: 15px; } 
.hw-alert-buttons button { padding: 8px 16px; margin: 0 5px; margin-bottom:3px; cursor: pointer; background-color: #3498db; color: #fff; border: none; border-radius: 4px; outline: none; } .hw-alert-buttons button:hover { background-color: #2980b9; } 
.hw-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 999; }`;   styleElement.textContent = cssRules;document.head.appendChild(styleElement); 
//var noticeB = document.createElement('div');noticeB.id = 'noticeboard';document.body.appendChild(noticeB);
});  

/** 
* this creats popup div 
* @param {*} id of the popup by default 1 
* @param {*} pos position of the popup on the window T&B|R&L 'TL','BR' 
* @param {string} where where to append the popup 
* @returns id 
*/
function createpopup(id=1 , pos='BR',where='undefined'){ var id = 'popup'+ id; var popup = document.createElement('div');popup.id = id; popup.classList.add ('popup');popup.classList.add ('hidden'); popup.textContent = 'This is some dynamically created content using Upopup JavaScript.';  var ps = popup.style; if (pos == 'CC') { ps.top= '50%';ps.left= '50%'; ps.transform= 'translate(-50%, -50%)'; } else { if (pos[0] == 'T') { ps.top = '20px'; } else { ps.bottom = '20px';  }  if (pos[1] == 'L') { ps.left = '20px'; } else if (pos[1] === 'C') {ps.left='50%',ps.transform = 'translateX(-50%)'} else { ps.right = '20px'; } }  if (where === 'undefined'){ document.body.appendChild(popup); /*/getElementById('content') is body*/ } else { popup.style.position = 'relative'; document.getElementById(where).appendChild(popup); } return id; }

/**MAKES POP-UP VISIBLE FOR GIVEN SECONDS * first create a popup and then pop it up 
* @param {*} id of the popup via createpopup method 
* @param {*} text of the popup 
* @param {*} sec popup will be visible for 1 sec by default 
* @param {*} move like 'up', 'down', 'up 120', 'left', 'right 80' 
* @param {*} c class 
*/ 
function showpopup(id,text,sec=1,move='static',c=null){ sec = sec * 1000; id = 'popup' + id; var popup = document.getElementById(id); popup.innerText = text; popup.classList.remove('hidden');  setTimeout(() => { let perse = 80; checkin = move.split(' '); move = checkin[0]; if (checkin.length == 2){ perse = checkin[1]; } if ( move != 'static' ) { popup.style.transition = 'all 1s ease-out'; if (move === 'up') { popup.style.transform = `translateY(-${perse}%)`; } else if ( move === 'down'){popup.style.transform = `translateY(${perse}%)`; } else if ( move === 'left') {popup.style.transform = `translateX(-${perse}%)`; } else if (move === 'right') {popup.style.transform = `translateX(${perse}%)`; } } }, 50); if ( c != null ){ popup.classList.add(c); } setTimeout(() => { popup.classList.add('hidden'); popup.classList.remove(c); }, sec); }

var autoid = 211;  
function popup(text='text',sec=2,move='up 20',c=null){ if (autoid ===211) { var noticeB = document.createElement('div');noticeB.id = 'noticeboard';document.body.appendChild(noticeB); noticeB.style.zIndex = 99; }; autoid += 1; createpopup(autoid,'BR','noticeboard'); showpopup(autoid,text,sec,move,c); } 

function hidePoAG(id){   document.getElementById(id).style.display = 'none'; }
/**
 * A small popup for buttons
 * @param {*} buttonid id of button or div 
 * @param {*} text txt in popup
 * @param {*} sec visible seconds
 * @param {*} c class name
 */

function output(buttonid,text,sec=2,c=null) { autoid += 1; createpopup(autoid,'BR'); showpopup(autoid,text,sec,'up 5',c); var div = document.getElementById(buttonid); if (!div) { div = buttonid; } var p = document.getElementById("popup"+autoid); p.style.position = 'absolute'; var rect = div.getBoundingClientRect(); var r = rect.right.toFixed(2); var b = rect.bottom.toFixed(2); var availableWidth = window.innerWidth - r; p.style.top = ((b-2)+scrollY) +'px'; p.style.bottom = 'auto'; if (availableWidth > 150 || text.length < 15) { p.style.left = r-2 + 'px'; p.style.right = 'auto'; } else { p.style.left = (r-200) + 'px'; p.style.right = 'auto'; } if (text.length > 50 ){ p.innerHTML += `<div class="popup-closer" onclick=hidePoAG('popup${autoid}')>[x]<div>`; } }

class Popup { constructor( parms = {}) { this.text = parms.text || null; this.pos = parms.pos || 'BR'; this.class = parms.class || null; this.move = parms.move || 'up 20'; this.sec = parms.sec || 2 ; this.id ; if (autoid ===211) { var noticeB = document.createElement('div');noticeB.id = 'noticeboard';document.body.appendChild(noticeB); noticeB.style.zIndex = 99; autoid +=1; }; if (parms.pos) {this.where = 'undefined';this.move = 'static'} else {this.where = 'noticeboard'}; this.create(); if (parms.sec) this.show();  }; static N = 0;  create(){ var pid = Popup.N++; this.id = `_${pid}`; return createpopup(`${this.id}`,this.pos,this.where); }  show(sec=null) { if (sec) {this.sec = sec }; showpopup(`${this.id}`,this.text,this.sec,this.move,this.class); } addClass(className){ var myElement = document.getElementById(`popup${this.id}`); myElement.classList.add(className); this.class = className; } setText(string) { this.text = string; } }

class HwAlert { constructor(options) { this.options = Object.assign({ title: 'Alert', message: '', buttons: ['OK'], callback: () => {}, overlay: 'off', }, options); this.createAlert(); this.createOverlay(); } createAlert() { const { title, message, buttons, callback } = this.options; this.alertContainer = document.createElement('div'); this.alertContainer.className = 'hw-alert'; this.alertContainer.innerHTML = ` <div class="hw-alert-content"> <h2>${title}</h2> <p>${message}</p> <div class="hw-alert-buttons"> ${buttons.map(buttonText => `<button>${buttonText}</button>`).join('')} </div> </div> `; this.buttons = this.alertContainer.querySelectorAll('.hw-alert-buttons button'); this.buttons.forEach((button, index) => button.addEventListener('click', () => this.handleButtonClick(index))); document.body.appendChild(this.alertContainer); this.callback = callback; } createOverlay() { const { overlay } = this.options; if (overlay === 'on' || (Array.isArray(overlay) && overlay[0] === 'on')) { this.overlay = document.createElement('div'); this.overlay.className = 'hw-overlay'; if (!(Array.isArray(overlay) && overlay[1] === false)) { this.overlay.addEventListener('click', () => this.close()); } document.body.appendChild(this.overlay); } } updateMessage(newMessage) { this.options.message = newMessage; this.alertContainer.querySelector('.hw-alert-content p').textContent = newMessage; } updateButtons(newButtons) { this.options.buttons = newButtons; this.alertContainer.querySelector('.hw-alert-buttons').innerHTML = newButtons.map(buttonText => `<button>${buttonText}</button>`).join(''); this.buttons = this.alertContainer.querySelectorAll('.hw-alert-buttons button'); this.buttons.forEach((button, index) => button.addEventListener('click', () => this.handleButtonClick(index))); } addButton(newButton) { this.options.buttons.push(newButton); const buttonHtml = `<button>${newButton}</button>`; this.alertContainer.querySelector('.hw-alert-buttons').innerHTML += buttonHtml; const newIndex = this.options.buttons.length - 1; const newButtonElement = this.alertContainer.querySelector(`.hw-alert-buttons button:nth-child(${newIndex + 1})`); newButtonElement.addEventListener('click', () => this.handleButtonClick(newIndex)); } handleButtonClick(index) { this.close(); this.callback(index); } open() { this.alertContainer.style.display = 'block'; if (this.overlay) { this.overlay.style.display = 'block'; } } close() { this.alertContainer.style.display = 'none'; if (this.overlay) { this.overlay.style.display = 'none'; } } }

class HwDialog { constructor(options) { this.options = Object.assign({ title: 'default title', message: 'Welcome to HwDialog.', buttons: ['OK', 'Cancel'], callback: () => {}, dialogClass: 'hw-d-box', msgClass: 'hw-d-msg', overlayClass: 'hw-d-overlay', }, options); this.createDialog(); } createDialog() { const { title, message, buttons, dialogClass, overlayClass, CSS } = this.options; const createElem = (tag, classes, textContent) => { const elem = document.createElement(tag); elem.className = classes; if(textContent) elem.innerHTML = textContent; return elem; }; const applyStyles = (element, styles) => { if (styles) { Object.entries(styles).forEach(([property, value]) => { element.style[property] = value; }); } }; const dlContainer = createElem('div', `hw-d-overlay ${overlayClass}`); const dlBox = createElem('div', `hw-d-box ${dialogClass}`); const dlTitle = createElem('h3', 'hwModalTitle', title); const dlMessage = createElem('div', this.options.msgClass, message); const dlButtonContainer = createElem('div', 'hw-d-btn-div'); buttons.forEach(buttonText => { const button = createElem('button', `hw-d-button ${this.options.buttonClass}`, buttonText); button.addEventListener('click', () => this.handleButtonClick(buttonText)); dlButtonContainer.appendChild(button); }); try {    applyStyles(dlTitle, CSS.title); applyStyles(dlMessage, CSS.message); applyStyles(dlBox, CSS.dl); } catch (e) {;}  dlBox.append(dlTitle, dlMessage, dlButtonContainer); dlContainer.appendChild(dlBox); document.body.appendChild(dlContainer); this.dlContainer = dlContainer; } createOverlay() { if (!document.querySelector(`.hw-d-overlay`)) { this.overlayElement = document.createElement("div"); this.overlayElement.classList.add(this.options.overlayClass); document.body.appendChild(this.overlayElement); } } open() { if (this.dlContainer) { this.dlContainer.style.display = 'block'; } if (this.overlayElement) { this.overlayElement.style.display = 'block'; } } close() { if (this.dlContainer) { this.dlContainer.style.display = 'none'; } if (this.overlayElement) { this.overlayElement.style.display = 'none'; } } handleButtonClick(buttonText) { const index = this.options.buttons.indexOf(buttonText); this.options.callback(index); /*this.close();*/ } }

function hwPanel(title='hwPanel',msg) { var hwP = document.createElement('div'); hwP.className = 'hw-panel'; hwP.innerHTML = `<h3>${title}</h3><div>${msg}</div><span class="close-btn" onclick="this.parentNode.parentNode.removeChild(this.parentNode);"> &times;</span>`; document.body.appendChild(hwP); hwP.style.display = 'block'; }
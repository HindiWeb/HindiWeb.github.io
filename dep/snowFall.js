/**
 * @author Deva Ram
 * @version 1.1
 */
/***
 * @author Deva Ram
 * @param {string} snowHolder Div id 
 * @param {number} nSF number of snowflakes
 * @param {number} sec time
 * @param {*} inf animation iteration-count 1,2,3 infinite
 */

function snowfall(snowHolder='snowHolder',nSF= window.innerWidth/2,sec=30,inf='infinite'){
        const style = document.createElement("style");
        style.textContent = `
        #snowHolder {
            position:fixed;
            top:0px;left:0px;
            width:100%;
            z-index:-5;
            height:100vh;
            border:0px solid yellow;
            margin: 0;
            overflow: hidden;
            opacity:1;
            
        }
        
        .snowflake {
            position: absolute;
            color: #ab8;
            color: snow;
            text-shadow: .7px .7px 0px rgb(161, 238, 252);
            pointer-events: none;
            user-select: none;
            animation: fall linear ${inf};
        }

        @keyframes fall {
            0% {
                transform:  translateX(0) rotate(0deg); /*translateY(-11vh)*/
                opacity: 1;
                top:-10px;
            }
            100% {
                transform:  translateX(-30px) rotate(360deg); /*translateY(100vh)*/
                opacity: 0.1;
                top:100%;
            }
        }
        `;

        document.head.appendChild(style);
        const snowflakesholder = document.createElement("div");
        snowflakesholder.id = 'snowHolder';
        document.body.appendChild(snowflakesholder);

        const snowH = document.getElementById(snowHolder);
        snowH.style.overflow = 'hidden';      
        const numberOfSnowflakes = nSF;
        const snowflakes = [];

        // Create snowflakes
        for (let i = 0; i < numberOfSnowflakes; i++) {
            createSnowflake();
        }

        function createSnowflake() {
            const snowflake = document.createElement("div");
            snowflake.className = "snowflake";
            snowflake.innerHTML = "❄";

           
            // Randomly position the snowflake
            snowflake.style.left = Math.random() * snowH.clientWidth + "px";
            snowflake.style.top = Math.random() * snowH.clientHeight + "px";

            // Randomly set animation duration (wind speed)
            const animationDuration = 3 + Math.random() * 3 + "s";
            snowflake.style.animationDuration = animationDuration;

            // Randomly set size
            const size = Math.random() * 10 + 10 + "px";
            snowflake.style.fontSize = size;

            // Random translate x 
            const translateX = Math.random() * 600 - 30 + "px"; // Random value between -30px and 30px
            snowflake.style.transform = `translateX(${translateX}) translateY(0) rotate(0deg)`;

            snowH.appendChild(snowflake);

            // Remove snowflake after animation completes
            snowflake.addEventListener("animationiteration", () => {
                snowflake.style.left = Math.random() * snowH.clientWidth + "px";
                snowflake.style.top = -30 + "px";
            });

            // Store the snowflake for later reference
            snowflakes.push(snowflake);
        }

        // Function to remove all snowflakes
        function removeAllSnowflakes() {
            for (const snowflake of snowflakes) {
                snowflake.remove();
            }
            snowflakes.length = 0;
        }

        setTimeout(removeAllSnowflakes, sec*1000);
}

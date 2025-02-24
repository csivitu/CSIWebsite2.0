// Text animation
// (function typeEffect() {
    
//     const words = ["haos", "razy", "heerful", "omputer"];
//     let index = 0;
//     let charIndex = 0;
//     let isDeleting = false;
//     const typingElement = document.getElementById("typing");

//     (function repeatEffect() {
//         const currentWord = words[index];
//         if (!isDeleting) {
//             typingElement.textContent = currentWord.substring(0, charIndex);
//             if (charIndex <= words[index].length-1) typingElement.textContent += '_';
//             charIndex++;
//             if (charIndex > currentWord.length) {
//                 isDeleting = true;
//                 setTimeout(repeatEffect, 1200);
//                 return;
//             }
//         } else {
//             typingElement.textContent = currentWord.substring(0, charIndex);
//             if (charIndex <= words[index].length-1) typingElement.textContent += '_';
//             charIndex--;
//             if (charIndex === 0) {
//                 isDeleting = false;
//                 index = (index + 1) % words.length;
//             }
//         }
        
//         if (index == words.length-1 && isDeleting) {
//             return;
//         }
//         setTimeout(repeatEffect, isDeleting ? 50 : 100);
//     })();
// })();


// Swimming Animation
function animateSwimming(selector, moveRange = 10, rotateRange = 4) {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) {
        console.error(`No elements found for selector '${selector}'!`);
        return;
    }

    elements.forEach((el) => {
        function swim() {
            gsap.to(el, {
                x: () => gsap.utils.random(-moveRange, moveRange),
                y: () => gsap.utils.random(-moveRange, moveRange),
                duration: gsap.utils.random(2, 5),
                ease: "sine.inOut",
                onComplete: swim
            });
        }

        function rotate() {
            gsap.to(el, {
                rotation: () => gsap.utils.random(0, rotateRange),
                duration: gsap.utils.random(2, 5),
                ease: "sine.inOut",
                onComplete: rotate
            });
        }

        swim();
        rotate();
    });
}


// Drag and drop animation
(function () {
    const waitForGSAP = setInterval(() => {
        if (window.gsap && window.Draggable) {
            clearInterval(waitForGSAP);

            // Apply floating animation
            animateSwimming(".cross-1", 20, 10);
            animateSwimming(".line-1", 20, 10);
            animateSwimming(".circle-1", 10, 0);
            animateSwimming(".triangle-1", 10, 10);


            // Enable drag functionality
            Draggable.create(".draggable", {
                inertia: true,   // Smooth dragging experience
                edgeResistance: 0.7, // Adds slight resistance to dragging
                type: "x,y",    // Allows movement in all directions
                cursor: "grab",
            });
        }
    }, 100);
})();

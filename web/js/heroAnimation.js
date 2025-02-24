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


// Floating animation
// (function floatElements() {
//     gsap.to(".cross-1", {
    
//     });
    
//     gsap.to(".circle-1", {
    
//     });
    
//     gsap.to(".line-1", {
    
//     });
    
//     gsap.to(".triangle-1", {
    
//     });

// })();


// Drag and drop animation
(function () {
    const waitForGSAP = setInterval(() => {
        if (window.gsap && window.Draggable) {
            clearInterval(waitForGSAP);

            // Apply floating animation
            const elements = document.querySelectorAll(".draggable");
            elements.forEach((el) => {
                gsap.to(el, {
                    y: "random(-15, 15)",  // Subtle floating motion
                    x: "random(-10, 10)",  // Slight side-to-side motion
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

            // Enable drag functionality
            Draggable.create(".draggable", {
                inertia: true,   // Smooth dragging experience
                bounds: "body",  // Keeps elements within screen
                edgeResistance: 0.7, // Adds slight resistance to dragging
                type: "x,y",    // Allows movement in all directions
                cursor: "grab",
            });
        }
    }, 100);
})();

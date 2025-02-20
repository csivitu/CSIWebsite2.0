const words = ["haos", "razy", "heerful", "omputer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    const currentWord = words[index];
    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex);
        if (charIndex <= words[index].length-1) typingElement.textContent += '_';
        charIndex++;
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex);
        if (charIndex <= words[index].length-1) typingElement.textContent += '_';
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % words.length;
        }
    }
    
    if (index == words.length-1 && isDeleting) {
        return;
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

gsap.to(".floating-image", {
    x: "random(-30, 30)", 
    y: "random(-20, 20)", 
    duration: 3, 
    repeat: -1, 
    yoyo: true, 
    ease: "sine.inOut"
});

typeEffect();
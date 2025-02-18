const words = ["Computer", "Chaos", "Candid", "Clever", "Cool", "Crazy", "Charismatic", "Cheerful", "Clickbait", "Computer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    const currentWord = words[index];
    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex);
        charIndex++;
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex);
        charIndex--;
        if (charIndex === 1) {
            isDeleting = false;
            index = (index + 1) % words.length;
        }
    }

    if (index == words.length-1 && isDeleting) {
        return;
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();
// Part 2: Functions + Scope
let globalMessage = "💖 Sparkle power activated! 💖";

function multiply(a, b) {
    return a * b; // Demonstrates return values
}
console.log("Multiply example:", multiply(2, 3));

// Part 3: Combining CSS + JS
const card = document.getElementById("magicCard");
const sparkleBtn = document.getElementById("sparkleBtn");

function toggleFlip(elementId) {
    const el = document.getElementById(elementId);
    el.classList.toggle("flipped");
    return "🔄 Card flipped!";
}

function toggleSparkle(elementId) {
    const el = document.getElementById(elementId);
    el.classList.toggle("sparkle");
    return globalMessage;
}

// Events
card.addEventListener("click", () => {
    console.log(toggleFlip("magicCard"));
});

sparkleBtn.addEventListener("click", () => {
    console.log(toggleSparkle("magicCard"));
});

console.log("Isaac Portfolio Loaded ");

// Smooth page load animation
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "1s";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// Button click effect
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});

// Floating glow effect (mouse tracker)
document.addEventListener("mousemove", (e) => {
    let glow = document.createElement("div");

    glow.className = "mouse-glow";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 600);
});
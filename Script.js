// 1. Welcome alert
window.addEventListener("load", () => {
    alert("Welcome to Lobo Luxe Detailing 🚗✨");
  });
  
  // 2. Back to Top button
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑ Top";
  backToTop.id = "backToTop";
  document.body.appendChild(backToTop);
  
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "20px";
  backToTop.style.right = "20px";
  backToTop.style.padding = "10px 15px";
  backToTop.style.background = "#222";
  backToTop.style.color = "#fff";
  backToTop.style.border = "none";
  backToTop.style.borderRadius = "5px";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none"; // hidden at first
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
  
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // 3. Smooth scroll for nav links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
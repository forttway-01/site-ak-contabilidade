function toggleMobileMenu(){
  const el = document.getElementById("mobileMenu");
  const isOpen = el.style.display === "block";
  el.style.display = isOpen ? "none" : "block";
}

function setYear(){
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
}

setYear();
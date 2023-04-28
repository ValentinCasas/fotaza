//error
document.addEventListener("click", function(event) {
    if (event.target.id === "modal-wrapper") {
      document.getElementById("modal-wrapper").style.display = "none";
    }
  });
  
  document.getElementById("modal-close").addEventListener("click", function() {
    document.getElementById("modal-wrapper").style.display = "none";
  });
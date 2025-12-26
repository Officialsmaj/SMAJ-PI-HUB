document.getElementById("registerForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Registration successful (demo)");
});

// Normal login placeholder
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Login system will be connected to backend soon.");
});

// Pi Wallet login placeholder
document.getElementById("piLoginBtn").addEventListener("click", function(){
  alert("Pi Wallet authentication coming next.");
});

document.addEventListener("DOMContentLoaded", () => {

  const registerForm = document.getElementById("registerForm");
  const forgotForm = document.getElementById("forgotForm");

  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Account created successfully (demo).");
    });
  }

  if (forgotForm) {
    forgotForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Password reset link sent (demo).");
    });
  }

});


console.log("Auth page loaded");
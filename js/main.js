document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log([e.target.guichet.value, e.target.email.value, e.target.password.value]);
    });
  }
});

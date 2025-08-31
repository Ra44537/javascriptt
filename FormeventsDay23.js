let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.dir(form);
    alert("form submitted");

     let user = this.elements[0];// writing this form.elements[0] = this.elements[0]
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);

   alert(`Hi ${user.value}, your password is set to ${pass.value}`);
 });
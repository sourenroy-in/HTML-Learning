let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // alert("form submit");
    // let inp = document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value);

    let user = document.querySelector("#user");
    // let user = this.elements[0];
    let pass = document.querySelector("#pass");
    // let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    console.dir(form);

    form.elements[0];

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
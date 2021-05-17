// Post event
window.onload = function () {
  var registBut = document.getElementById("botaoI");
  registBut.addEventListener("click", function () {
    // Value fetching
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var name = document.getElementById("nome").value;
    var username = document.getElementById("username").value;
    var birthdate = document.getElementById("date").value;
    var booleano;

    function validateEmail(email) {
      const re = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
      booleano = re.test(String(email).toLowerCase());
      

  }
    validateEmail(email)
    if (booleano == false) {
      Swal.fire("Preencha o email corretamente", "", "error");
      return;
    }

    // Validation
    if (email && password && name && username && birthdate !== null) {

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("username", username);
      localStorage.setItem("birthdate", birthdate);

      Swal.fire("De seguida, adicione uma foto ao seu perfil", "", "info").then(
        (result) => {
          window.location = "cam_screen_reg.html";
        }
      )
      
      
    } else {
      Swal.fire("Preencha o formulário corretamente", "", "error");
      return;
    }
  });
};

function enviar2(){

      if(form.nombre.value==""){
        alert("Debe ingresar un nombre");
        return false;
      }

      else if(form.nombre.value.length<3){
        alert("El nombre debe tener al menos 3 caracteres");
        return false;
      }

      if(form.apellido.value==""){
        alert("Debe ingresar apellido");
        return false;
      }

      else if(form.apellido.value.length<3){
        alert("El apellido debe tener al menos 3 caracteres");
        return false;
      }

      if(form.edad.value==""){
        alert("Debe ingresar edad");
        return false;
      }

      else if(form.edad.value>=150){
        alert("La edad debe ser menor a 150");
        return false;
      }

      if (form.correo.value.indexOf("@") == -1) {
        alert("Debe ingresar un email válido");
        mi.email.focus();
        return false;
      }

      if(form.pass.value==""){
        alert("Debe ingresar una contraseña");
        return false;
      }

      else if(form.pass.value.length<8){
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
      }

      if(form.pass.value!=form.pass2.value){
        alert("La contraseña debe coincidir con la ingresada");
        return false;
      }

document.getElementById("form").submit();
}

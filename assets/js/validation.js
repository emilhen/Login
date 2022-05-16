$.validator.setDefaults( {
    submitHandler: function (form) {
       form.submit();
    }
 });
 
 $('#logInForm').ready(function(){

   $.validator.addMethod("alpha", function (value, element) {
      var pattern = /^[\w]+$/i;
      return this.optional(element) || pattern.test(value);
    }, "");
  
     $.validator.addMethod("formEmail", function (value, element) {
        var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        return this.optional(element) || pattern.test(value);
    }, "");


    $('#logInForm').validate({
       rules: {
          name: {
             required: true,
             minlength: 3,
             alpha: true
          },
          lastName: {
             required: true,
             minlength: 3,
             alpha: true
          },
          password: {
             required: true,
             minlength: 5,
             alpha: true
          },
          repeatPassword: {
             required: true,
             equalTo: "#password"
          },
          email: {
             required: true,
             formEmail: true
          },
          
       },
       messages: {           
          name: {
             required: '<span class="text-danger">*Ingrese un nombre</span>',
             minlength: '<span class="text-danger">*El nombre debe tener minimo 5 caracteres</span>',
             alpha: '<span class="text-danger">*El campo contiene caracteres no permitidos</span>'
          },
          lastName:{
              required: '<span class="text-danger">*Ingrese un apellido</span>',
              minlength: '<span class="text-danger">*El apellido debe tener minimo 5 caracteres</span>',
              alpha: '<span class="text-danger">*El campo contiene caracteres no permitidos</span>'
          }, 
          password: {
             required: '<span class="text-danger">*Ingresa una contraseña</span>',
             minlength: '<span class="text-danger">*La contraseña debe tener minimo 5 caracteres</span>',
             alpha: '<span class="text-danger">*El campo contiene caracteres no permitidos</span>'
          },
          repeatPassword: {
             required: '<span class="text-danger">*Confirme la contraseña</span>',
             equalTo: '<span class="text-danger">*Las contraseñas no coinciden</span>'
          },
          email:{
              required: '<span class="text-danger">*Ingrese un correo electronico</span>',
              formEmail: '<span class="text-danger">*Ingrese un correo electronico valido</span>'
          } 
          
       },
       errorElement: "span"
    });
 });

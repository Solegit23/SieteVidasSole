
    function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Comprobar el nombre de usuario y la contraseña
      if (username === 'administrador' && password === 'live') {
        alert('Inicio de sesión exitoso');
        // Aquí puedes agregar el código para redirigir al usuario a la página de inicio
      } else {
        alert('Error al iniciar sesión. Nombre de usuario o contraseña incorrectos.');
      }

      return false; // Evitar que el formulario se envíe de forma convencional
    }

function cadastro()
      {
        window.location = "https://tawk.to/chat/60807e9262662a09efc0d73d/1f3qusrad";
      }

      function reec()
      {
        window.location = "reec.html";
      }

      function Entrar()
      {
        var txtl = window.document.querySelector('input#txtlo')
        var txtp = window.document.querySelector('input#txtpa')
        var res = window.document.querySelector('div#res')
        var Usuario0 = (txtl.value)
        var password0 = (txtp.value)
        var Usuario1 = (txtl.value)
        var password1 = (txtp.value)
        var Usuario2 = (txtl.value)
        var password2 = (txtp.value)
        var Usuario3 = (txtl.value)
        var password3 = (txtp.value)
        
        
        
        
        
        if (Usuario0 == "Elvis" && password0 == "ve")
        {
          res.window = document.location  ="principal.html";
          res.innerHTML = window.innerHTML = "<strong> Bem-vindo!</strong>";
          
        } else if (Usuario0 = txtl){
          res.innerHTML = window.innerHTML = "<strong>[Error] Cadastrese por favor!</strong>";
        }
        if (Usuario1 == "Mia" && password1 == "pa")
        {
          res.window = document.location  ="principal.html";
          res.innerHTML = window.innerHTML = "<strong> Bem-vindo!</strong>";
          
        } else if (Usuario1 == txtl && password1 == txtp){

          res.innerHTML = window.innerHTML = "<strong>[Error] Cadastrese por favor!</strong>";
        }
        if (Usuario2 == "Maholi" && password2 == "ra")
        {
          res.window = document.location  ="principal.html";
          res.innerHTML = window.innerHTML = "<strong> Bem-vindo!</strong>";
          
        } else if (Usuario2 == txtl && password2 == txtp){

          res.innerHTML = window.innerHTML = "<strong>[Error] Cadastrese por favor!</strong>";
        }
        if (Usuario3 == "Invitado" && password3 == "2021")
        {
          res.window = document.location  ="principal.html";
          res.innerHTML = window.innerHTML = "<strong> Bem-vindo!</strong>";
          
        } else if (Usuario3 == txtl && password3 == txtp){

          res.innerHTML = window.innerHTML = "<strong>[Error] Cadastrese por favor!</strong>";
        }
        
      }
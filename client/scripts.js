// Modo estricto
'use strict';

// Detecta cuando el HTML DOM (Document Object Mode) está listo
document.addEventListener("DOMContentLoaded",function() {
    
    // Poner fecha por defecto a la fecha de hoy
    document.getElementById('f_fecha').valueAsDate = new Date();

    // Inicia el editor de texto en las areas seleccionadas
    const t_buenas = new Quill('#t_buenas', { theme: 'snow' });
    const msgCheckout = new Quill('#msgCheckout', { theme: 'snow' });

    // Obtiene el formulario
    const msgForm = document.getElementById("msgForm");
    
    // Escucha evento "submit" del formulario
    msgForm.addEventListener("submit", function(e) {
        // Evita que el form ejecute la acción "action"
        e.preventDefault();

        // Recupera información de formulario e inserta en plantilla de mensaje
        // Número de suite
        let f_hab = document.getElementById("f_hab").value;
        if (f_hab)
            document.getElementById("msgPrintSuite").innerHTML = f_hab;
        
        // Huésped
        let f_huesp = document.getElementById("f_huesp").value;
        if (f_huesp)
            document.getElementById("msgPrintGuest").innerHTML = f_huesp;

        // Obtiene fecha HOY
        let _date = new Date();
        let dd = String(_date.getDate()).padStart(2, '0');
        let mm = String(_date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = _date.getFullYear();
        let _today = `${dd}/${mm}/${yyyy}`; 
        document.getElementById("msgPrintDate").innerHTML = _today;

        // Agencia
        let f_agencia_index = document.getElementById("f_agencia").selectedIndex;
        let f_agencia = document.getElementById("f_agencia").options[f_agencia_index].text;
        document.getElementById("msgPrintAgency").innerHTML = f_agencia;

        // Adjuntar mensaje informacion excursion
        var message = "";
        message += (document.getElementById('messageBox').checked) ? `${t_buenas.root.innerHTML}` : "" ;
        // Adjuntar mensaje check out
        message += (document.getElementById('chkOutBox').checked) ? `${msgCheckout.root.innerHTML}` : "";

        document.getElementById("msgPrintBody").innerHTML = message;

         // Firma
         let s_firmas_index = document.getElementById("s_firmas").selectedIndex;
         let s_firmas = document.getElementById("s_firmas").options[s_firmas_index].text;
         document.getElementById("msgPrintSignature").innerHTML = s_firmas;

        // Imprime mensaje en consola de desarrollador
        console.log(`Preparando para imprimir mensaje para suite ${f_hab}`);


        // Ejecuta comando "imprimir" (CTRL+P)
        print();
    });

    
});
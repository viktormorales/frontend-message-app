// Modo estricto
'use strict';

// Implementando concepto "funciones flecha"
const messages = (() => {

    // Inicia el editor de texto en las areas seleccionadas
    const t_buenas = new Quill('#t_buenas', { theme: 'snow' });
    const msgCheckout = new Quill('#msgCheckout', { theme: 'snow' });

    // Poner fecha por defecto a la fecha de hoy
    const f_fecha = document.getElementById('f_fecha');

    // Obtiene el formulario
    const msgForm = document.getElementById("msgFormPage");

    const backBtn = document.getElementById("backBtn");

    return {
        init: () => {
            
            // Para los inputs tipo "date" la fecha debe ser "yyyy-mm-dd"
            // por esto se usa el formato de fecha en-CA
            f_fecha.value = new Date().toLocaleDateString('en-CA');
            
            // Escucha evento "submit" del formulario
            msgForm.addEventListener("submit", function(e) {
                // Evita que el form ejecute la acción "action"
                e.preventDefault();
                
                // Completa la página de impresión
                messages.fillPrintTpl();
                
                // 
                messages.togglePages();
                
            })

            backBtn.addEventListener("click", function(e) {
                e.preventDefault();
                messages.togglePages();
            })

        },
        fillPrintTpl: () => {
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
            let _today = new Date().toLocaleDateString()
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
        },
        togglePages: () => {
            let tplFormPage = document.getElementById("tplFormPage");
            tplFormPage.classList.toggle("d-none");

            let tplPrintPage = document.getElementById("tplPrintPage");
            tplPrintPage.classList.toggle("d-none");
        }
    }
})();

// Detecta cuando el HTML DOM (Document Object Mode) está listo
document.addEventListener("DOMContentLoaded", function() {
    
    messages.init();

});
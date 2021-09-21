// Modo estricto
'use strict';

// Implementando concepto "funciones flecha"
const messages = (() => {

    const tplFormPage = document.getElementById("tplFormPage");
    const tplPrintPage = document.getElementById("tplPrintPage");

    // Inicia el editor de texto en las areas seleccionadas
    const t_buenas = new Quill('#t_buenas', { theme: 'snow' });
    const msgCheckout = new Quill('#msgCheckout', { theme: 'snow' });

    return {
        init: () => {
            // Para los inputs tipo "date" la fecha debe ser "yyyy-mm-dd"
            // por esto se usa el formato de fecha en-CA
            const f_fecha = document.getElementById('f_fecha');
            f_fecha.value = new Date().toLocaleDateString('en-CA');

             // Obtiene el formulario
            const msgForm = document.getElementById("msgFormPage");
            // Escucha evento "submit" del formulario
            msgForm.addEventListener("submit", function(e) {
                // Evita que el form ejecute la acción "action"
                e.preventDefault();
                
                // Completa la página de impresión
                messages.tplFillPage();
                
                // Oculta formulario / Muestra página de impresión
                messages.togglePages();
                
            })

            // Acciones al click en "Imprimirr"
            const printBtn = document.getElementById("printBtn");
            printBtn.addEventListener("click", function(e) {
                e.preventDefault();

                //

                print();

                // Oculta página de impresion / muestra formulario de contacto
                messages.togglePages();
            })

            // Acciones al click en "Volver"
            const backBtn = document.getElementById("backBtn");
            backBtn.addEventListener("click", function(e) {
                e.preventDefault();

                // Oculta página de impresion / muestra formulario de contacto
                messages.togglePages();
            })

            // Oculta página de impresión cuando se presiona tecla Escape
            document.onkeydown = function(evt) {
                evt = evt || window.event;
                if (window.getComputedStyle(tplPrintPage, null).display == "block") {
                    if (evt.key === "Escape" || evt.key === "Esc") {
                       messages.togglePages();
                    }
                }
            };
        },
        tplFillPage: () => {
            // Recupera información de formulario e inserta en plantilla de mensaje
            // Número de suite
            const f_hab = document.getElementById("f_hab").value;
            if (f_hab)
                document.getElementById("msgPrintSuite").innerHTML = f_hab;
            
            // Huésped
            let f_huesp = document.getElementById("f_huesp").value;
            if (f_huesp)
                document.getElementById("msgPrintGuest").innerHTML = f_huesp;

            // Los input de tipo "date" devuelven formato yyyy-mm-dd
            // Con la siguiente función convertimos a formato dd/m/yyyy
            let f_fecha = new Date(document.getElementById('f_fecha').value + 'T12:00:00Z').toLocaleDateString();
            document.getElementById("msgPrintDate").innerHTML = f_fecha;

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
            tplFormPage.classList.toggle("d-none");
            tplPrintPage.classList.toggle("d-none");

            if (window.getComputedStyle(tplFormPage, null).display == "block") {
                f_hab.focus();
                f_hab.select();
            } else {
                printBtn.focus();
            }
        }
    }
})();

// Detecta cuando el HTML DOM (Document Object Mode) está listo
document.addEventListener("DOMContentLoaded", function() {
    
    messages.init();

});
window.addEventListener('load', () => {
    const navSlide = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener("click", () => {
            nav.classList.toggle('nav-active');

            navLinks.forEach((link, index) => {

                if (link.style.animation) {
                    link.style.animation = '';
                }
                else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }

            });
            burger.classList.toggle('toggle');
        });

    }

    navSlide();
    /*********************************Colocar aca el desarrollo de su ejercicio***************************/

    //1.
    var cont = 1;
    //2.
    var bitacoras = [];
    //3.
    var formulario = document.getElementById("bitacora");
    //Formulario contiene a todo el formulario
    //4.
    formulario.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let bitacora = {
            cant: cont,
            fecha: formulario[1].value,
            descripcion: formulario[2].value,
            cantidad: formulario[3].value
        }
        bitacoras.push(bitacora);
        cont++;
        mostrar();
    });
    //evt.preventDefault();  detiene una acción por omisión
    //Formulario [x] contiene cada uno de los campos de nuestro formulario
    //5.
    const crearElemento = (bitacora, tbody) => {
        let tr = document.createElement("tr");
        Object.values(bitacora).forEach(item => {
            let td = document.createElement("td");
            let content = document.createTextNode(item);
            td.appendChild(content);
            tr.setAttribute("class", "click");
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    }

    /*
    ¿Qué contienen las variables tr y td ?
    tr, almacena el nodo fila, y td almacena 
    ¿Qué contienen la variable content ?
    contiene un nuevo elemento item de nodo texto
    ¿Qué valor tendra tbody al finalizar la iteración?
    los valores que hemos ingresado en nuestros campos
    Describa en pocas palabras lo que realizara esta función
    crea un elementos recibiendo un objeto y una tabla como parametros
    */


    const eliminar = (tbody) => {
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }

    /*
    ¿Qué es lo que hace .firstChild?
    Devuelve el primer nodo secundario del nodo especificado, como un objeto Node.
    Después de realizar el while ¿Comó quedara el elemento tbody ?
    
    */


    const agregar = () => {
        var eventtr = document.querySelectorAll(".click");
        eventtr.forEach((item, index) => {
            item.addEventListener("click", () => {
                document.querySelector("#fecha").value = item.childNodes[1].textContent;
                document.querySelector("#descp").value = item.childNodes[2].textContent;
                document.querySelector("#cant").value = item.childNodes[3].textContent;
            });
        })
    }

    //¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent;
    /*Aqui seleccionamos de los id fecha, descp, cant, los valores de cada unos para agregarlos en la tabla*/


    const mostrar = () => {
        if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
            eliminar(document.querySelector(".tabla-btc tbody"));
        }
        bitacoras.forEach(item => {
            crearElemento(item, document.querySelector(".tabla-btc tbody"));
        });
        agregar();
    }

    /*
    ¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ?
    Obtenemos cada fila de la tabla bitacora
    ¿Qué hace el método childElementCount?
    Devuelve el numero de hijos que tiene
    ¿Qué se mostrara en pantalla cuando se ejecute la función agregar()?
    No se muestra nada hasta que se ejecute mostrar
    ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar?
    Muestra la tabla bitacora y llena el registro
 */

});
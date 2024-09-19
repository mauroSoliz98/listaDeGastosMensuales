let listaNombresGastos = [];
let listaValoreGastos = [];
let listaDescripcionGastos = [];
//-1 nos indica que nuestro indice no esta apuntando a ningun elemento
let indice = -1 

function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    if(valorGasto >= 150 ) {
        alert("Gasto exedente mayor a 150 USD")
    }
    if(indice !== -1){
        listaNombresGastos[indice] = nombreGasto;
        listaValoreGastos[indice] = valorGasto;
        listaDescripcionGastos[indice] = descripcionGasto;
        indice = -1
        document.getElementById('botonFormulario').textContent = 'Agregar Gasto';
    } else {
        listaNombresGastos.push(nombreGasto);
        listaValoreGastos.push(valorGasto);
        listaDescripcionGastos.push(descripcionGasto);
    }

    console.log(listaNombresGastos);
    console.log(listaValoreGastos);

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElemento = document.getElementById("totalGastos")
    let htmlLista = "";
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoreGastos[posicion])
        const descripcionGasto = listaDescripcionGastos[posicion]
        htmlLista += `
                        <li>
                             ${elemento} - ${valorGasto.toFixed(2)} USD - ${descripcionGasto}
                             <button onclick="editarGasto(${posicion});">Editar</button>
                             <button onclick="eliminarGasto(${posicion});">Eliminar</button> 
                        </li>`;
        //Calculamos los gastos
        totalGastos += Number(valorGasto)
    })

    listaElementos.innerHTML = htmlLista;
    totalElemento.innerHTML = totalGastos.toFixed(2);//manipulamos la cantidad de decimales con toFixed

    limpiar()
}
function limpiar() {
    document.getElementById("nombreGasto").value = '';
    document.getElementById("valorGasto").value = ''
    document.getElementById("descripcionGasto").value = '';
}

function eliminarGasto(posicion) {
    //la posicion en la que se encuentra y el numero de elementos
    listaNombresGastos.splice(posicion, 1) 
    listaValoreGastos.splice(posicion, 1)
    listaDescripcionGastos.splice(posicion,1)
    actualizarListaGastos()
}

function editarGasto(posicion){
    document.getElementById("nombreGasto").value = listaNombresGastos[posicion]
    document.getElementById("valorGasto").value = listaValoreGastos[posicion]
    document.getElementById("descripcionGasto").value = listaDescripcionGastos[posicion]    
    document.getElementById('botonFormulario').textContent = 'Editar Gasto';
    indice = posicion; 
}
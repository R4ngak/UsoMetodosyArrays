const radiologia =[ {
    hora: "11:00",
    Especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut:"9878782-1",
    prevision: "FONASA",
}, 
{ 
    hora: "11:30",
    Especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut:"15345241-3",
    prevision: "ISAPRE",

},
{
    hora: "15:00",
    Especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut:"16445345-9",
    prevision: "ISAPRE",
}, 
{
    hora: "15:30",
    Especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut:"17666419-0",
    prevision: "FONASA",
},
{
    hora: "16:00",
    Especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut:"14989389-K",
    prevision: "FONASA",
},
];

const traumatologia =[ {
    hora: "8:00",
    Especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut:"15554774-5",
    prevision: "FONASA",
}, 
{ 
    hora: "10:00",
    Especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut:"15444147-9",
    prevision: "ISAPRE",

},
{
    hora: "10:30",
    Especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut:"17879423-9",
    prevision: "ISAPRE",
}, 
{
    hora: "11:00",
    Especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut:"1547423-6",
    prevision: "ISAPRE",
},
{
    hora: "11:30",
    Especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut:"16554741-K",
    prevision: "FONASA",
},
{
    hora: "12:00",
    Especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut:"9747535-8",
    prevision: "ISAPRE",
},
{
    hora: "12:30",
    Especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut:"11254785-5",
    prevision: "ISAPRE",
},
];

const dental =[ {
    hora: "8:30",
    Especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut:"11123425-6",
    prevision: "ISAPRE",
}, 
{ 
    hora: "11:00",
    Especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut:"9878789-2",
    prevision: "ISAPRE",

},
{
    hora: "11:30",
    Especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut:"7998789-5",
    prevision: "FONASA",
}, 
{
    hora: "13:00",
    Especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut:"18887662-K",
    prevision: "FONASA",
},
{
    hora: "13:30",
    Especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut:"17665461-4",
    prevision: "FONASA",
},
{
    hora: "14:00",
    Especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut:"14441281-0",
    prevision: "ISAPRE",
},
];
//Constantes de botones para activar solicitudes
const btnradiologia = document.getElementById("btnradiologia")
const btndelradiologia = document.getElementById("btndelradiologia")
const btndental = document.getElementById("btndental")
const btntraumatologia = document.getElementById("btntraumatologia")
const btnlimpiar = document.getElementById("btnlimpiar")
const btnaddtraumatologia = document.getElementById("btnaddtraumatologia")
const btnprintdental = document.getElementById("btnprintdental")
const btnisapredental = document.getElementById("btnisapredental")
const btnestadisticas = document.getElementById("btnestadisticas")
const btntodospacientes = document.getElementById("btntodospacientes")
const btnfonsaTraumatologia = document.getElementById("btnfonsaTraumatologia")

//constantes de los divs para modificar el DOM
const table = document.getElementById("table")
const atenciones = document.getElementById("atenciones")
const resultado = document.getElementById("resultado")
const estadisticas = document.getElementById("estadisticas")



// boton que limpia la tabla
btnlimpiar.addEventListener("click", function() {
    atenciones.innerHTML =""
    resultado.innerHTML =""
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="rgb(239, 239, 239)"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"

})
// boton que muestra los objetos de radiologia en la tabla
btnradiologia.addEventListener("click", function() {
    atenciones.innerHTML =""
    resultado.innerHTML =""
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="rgb(239, 239, 239)"
    btnradiologia.style.backgroundColor="green"

    radiologia.forEach((item)=>{
    resultado.innerHTML +=`
          <tr>
            <th scope="row">${item.hora}</th>
            <td>${item.Especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
          </tr>`;
          })
})
// boton que muestra los objetos de dental en la tabla
btndental.addEventListener("click", function() {
    atenciones.innerHTML =""
    resultado.innerHTML =""
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="green"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"

    dental.forEach((item)=>{
    resultado.innerHTML +=`
          <tr>
            <th scope="row">${item.hora}</th>
            <td>${item.Especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
          </tr>`;
          })
})
// boton que muestra los objetos de traumatologia en la tabla
btntraumatologia.addEventListener("click", function() {
    atenciones.innerHTML =""
    resultado.innerHTML =""
    btntraumatologia.style.backgroundColor="green"
    btndental.style.backgroundColor="rgb(239, 239, 239)"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"

    traumatologia.forEach((item)=>{
    resultado.innerHTML +=`
          <tr>
            <th scope="row">${item.hora}</th>
            <td>${item.Especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
          </tr>`;
          })
})
// boton que añade elementos de traumatologia al array de traumatologia
btnaddtraumatologia.addEventListener("click", function() {
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="rgb(239, 239, 239)"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"
    traumatologia.push(
        { hora: '9:00', Especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
        { hora: '9:30', Especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
        { hora: '10:00', Especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA ', rut: '10112348-3', prevision: 'ISAPRE' },
        { hora: '10:30', Especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
        { hora: '12:00', Especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' },
    );
})
// boton que elimina primer y ultimo dato de radiologia
btndelradiologia.addEventListener("click", function() {
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="rgb(239, 239, 239)"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"
    radiologia.pop(    );
    radiologia.shift(    );
})
// boton que muestra los datos de dental en formato solicitado en desafio
btnprintdental.addEventListener("click", function() {
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="green"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"
    atenciones.innerHTML =""
    resultado.innerHTML =""
   
    
    dental.forEach((item)=>{
        resultado.innerHTML +=`<p>${item.hora} -  ${item.Especialista} -  ${item.paciente} -  ${item.rut} - ${item.prevision}<p>`

})
})
// concatena todos los array y luego imprime todos los nombres
btntodospacientes.addEventListener("click", function() {
    atenciones.innerHTML =""
    resultado.innerHTML =""
  
    btntraumatologia.style.backgroundColor="green"
    btndental.style.backgroundColor="rgb(239, 239, 239)"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"
    const todosNombres = traumatologia.concat(dental,radiologia)

    todosNombres.forEach((item)=>{
    resultado.innerHTML +=`
          <tr>
          
            <td>${item.paciente}</td>
           
          </tr>`;
          })

})
// Filtra pacientes con Isapre, de Dental
btnisapredental.addEventListener("click", function() {
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="green"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"
    atenciones.innerHTML =""
    resultado.innerHTML =""
   
    let isapreDental = dental.filter(function(isapreDent){
    return isapreDent.prevision === "ISAPRE"
      });
      console.log(isapreDental)

      isapreDental.forEach((item)=>{
        resultado.innerHTML +=`<p>${item.paciente} -  ${item.rut} - ${item.prevision}<p>`

})

})

// Filtra pacientes con fonasa, de Traumatologia
btnfonsaTraumatologia.addEventListener("click", function() {
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="green"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"
    atenciones.innerHTML =""
    resultado.innerHTML =""
   
    let fonasaTraumatologia = dental.filter(function(fonTra){
    return fonTra.prevision === "FONASA"
      });
      console.log(fonasaTraumatologia)

      fonasaTraumatologia.forEach((item)=>{
        resultado.innerHTML +=`<p>${item.paciente} -  ${item.rut} - ${item.prevision}<p>`

})

})


// ESTADISTICAS Q TRAIA EL DESAFIO 
btnestadisticas.addEventListener("click", function() {
    btntraumatologia.style.backgroundColor="rgb(239, 239, 239)"
    btndental.style.backgroundColor="green"
    btnradiologia.style.backgroundColor="rgb(239, 239, 239)"

    estadisticas.innerHTML =""
    estadisticas.innerHTML +=`
    <p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>
    <p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>
    <p>Cantidad de atenciones para Dental: ${dental.length}</p>
    <p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>
    `;
          
})



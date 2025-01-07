document.addEventListener("DOMContentLoaded",function(){
document.getElementById("submitBtn").addEventListener("click", function () {
    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("correo").value;
    const dni = document.getElementById("dni").value;    
    const telefono = document.getElementById("telefono").value;   
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const mensaje = document.getElementById("msg").value;
if (nombre && correo && dni && telefono && fecha && hora){
    const cita={nombre,correo,dni,telefono,fecha,hora,mensaje};  

    //almacenar citas en localstorage(almaceamiento en navegador)
    const citas=JSON.parse(localStorage.getItem("citas"))||[];
//crear una cita nueva
    citas.push(cita);
    //guardar en LocalStorage
    localStorage.setItem("citas",JSON.stringify(citas));
    console.log("citas guardadas:",JSON.parse(localStorage.getItem("citas")));
    alert("Cita guardada correctamente");
    document.getElementById("pedir cita").reset();
}else{
    alert("Por favor, complete todos los campos");
}
console.log(localStorage.getItem("citas"));
});
});

let form=document.querySelector('#form');
let btn=document.querySelector('#submit');
let btnable=document.getElementById('submit');

function obtenerContenido() {
    //Get the information from the form//
    let objetive = document.getElementById('message_objetive').value; 
    let challenge = document.getElementById('message_challenge').value; 
    let scope = document.getElementById('message_scope').value; 
    let affectclients = document.getElementById('message_affectclients').value; 
    let interngepp = document.getElementById('message_interngepp').value; 
    let area = document.getElementById('message_area').value; 
    let task = document.getElementById('message_task').value; 
    let team = document.getElementById('message_team').value; 
    let authorizer = document.getElementById('message_authorizer').value;


    //Validate the content and ability the button//
    if(form.doc_docname.value!='' && objetive!='' && challenge!='' && scope!=''
        && form.doc_canal.value!='' && task!='' && form.doc_ti.value!='' 
        && form.doc_comercial.value!=''  && form.doc_trimestre.value!='' && form.doc_month.value!=''
        && form.doc_budget.value!='' && affectclients!='' && interngepp!='' && area!=''
        && form.doc_costreduction.value!='' && form.doc_income.value!='' && form.doc_vpn.value!=''
        && form.doc_roi.value!='' && form.doc_username.value!='' && form.doc_lider!='' 
        && team!='' && authorizer!='' ){
            console.log('no se detecta el valor de: && form.doc_date.value!=')

        //Abed button and change button style//
        btn.disabled=false;
        console.log('Registro completo, se habilita el botón de envio')
        btnable.style.backgroundColor="orangered";
        btnable.style.border='none';
        btnable.style.color='white';
        btnable.style.cursor='pointer';
    }
}

//Execute the function//
form.addEventListener('keyup', obtenerContenido)

//Execute alert and reload page//
function alert(){
        setTimeout(() => {
        console.log("this is the first message");
        Swal.fire({
            title: "¡Registro exitoso!",
            icon: "success",
            draggable: false,
            confirmButtonText: 'Aceptar'
        }).then(resultado=>{
            if(resultado.value){
                history.go(0);
                console.log('recargar pagina')
            }
            })
        }, 1000);
}



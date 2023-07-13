const iconoBorrar = () =>{
    const borrar = document.createElement("i")
    borrar.classList.add("fas", "fa-trash-alt", "trashIcon", "icon")
    borrar.addEventListener("click", borrarTask);
    return borrar;
};

const borrarTask = (evento) =>{
    const parent = evento.target.parentElement;
    parent.remove();
};

export default iconoBorrar;

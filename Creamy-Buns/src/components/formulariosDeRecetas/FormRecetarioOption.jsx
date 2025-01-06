import FormBuscarReceta from "./FormBuscarReceta"

const FormRecetarioOption = ({option}) => {
    
    const TipoDeFormulario = () => {
       if (option == 'buscar'){
        return (
        <>
            <FormBuscarReceta />
        </>)
       } else if (option== 'agregar'){
        return (<>
            <h2>Agregar</h2>
        </>)
       } else if (option == 'eliminar'){
        return (<>
            <h2>Eliminar</h2>
        </>)
       }
    }

    return (
        <>
            <TipoDeFormulario />
        </>
    )
}

export default FormRecetarioOption;
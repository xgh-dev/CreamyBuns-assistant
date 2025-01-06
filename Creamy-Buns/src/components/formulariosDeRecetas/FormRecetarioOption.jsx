import FormBuscarReceta from "./FormBuscarReceta"
import FormAgregarReceta from "./FormAgregarReceta"

const FormRecetarioOption = ({option}) => {
    
    const TipoDeFormulario = () => {
       if (option == 'buscar'){
        return (
        <>
            <FormBuscarReceta />
        </>)
       } else if (option== 'agregar'){
        return (<>
            <FormAgregarReceta/>
        </>)
       } else if (option == 'eliminar'){
        return (<>
            <h3>eliminar</h3>
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
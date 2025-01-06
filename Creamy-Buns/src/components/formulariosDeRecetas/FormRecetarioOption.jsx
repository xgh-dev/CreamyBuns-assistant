import FormBuscarReceta from "./FormBuscarReceta"
import FormAgregarReceta from "./FormAgregarReceta"
import FormEliminarReceta from "./FormEliminarReceta"

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
            <FormEliminarReceta />
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
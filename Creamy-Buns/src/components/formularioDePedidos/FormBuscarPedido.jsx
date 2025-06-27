import { useState } from "react"
import { ContenedorBuscarPedido,ContenedorDeEtiquetasForm,Label,Formulario } from "./FormularioBuscarPedido"

const FormBuscarPedidos = () => {
    const [pedido,setPedido] = useState("")

    // este codigo es para practicar fudamentos
    if (pedido > ""){
        console.log(pedido)
    }


    return (<>
    <ContenedorBuscarPedido>
        <Formulario >
            <ContenedorDeEtiquetasForm>
            <Label htmlFor="buscarPedido">Ingrese nombre o id del pedido</Label>
            <input type="text" id="buscarPedido" value={pedido} onChange={e => setPedido(e.target.value)}/>
            <input type="submit" />
            </ContenedorDeEtiquetasForm>
        </Formulario>
    </ContenedorBuscarPedido>
    </>)
}

export default FormBuscarPedidos
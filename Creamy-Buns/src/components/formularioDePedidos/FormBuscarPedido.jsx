const FormBuscarPedidos = () => {
    return (<>
    <div>
        <form >
            <label htmlFor="buscarPedido">Ingrese nombre o id del pedido</label>
            <input type="text" id="buscarPedido"/>
            <input type="submit" />
        </form>
    </div>
    </>)
}

export default FormBuscarPedidos
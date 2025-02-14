
const FooterDeNavegacion = () => {
  return (
    <>
      <footer>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-evenly",
            padding: 0,
            margin: 0,
          }}
        >
          <li><a href="/">HomeScreen</a></li>
          <li><a href="/recetario">Recetario</a></li>
          <li><a href="/pedidos">Pedidos</a></li>
          <li>Clientes</li>
        </ul>
      </footer>
    </>
  );
};

export default FooterDeNavegacion;



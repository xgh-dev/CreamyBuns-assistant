import { useState } from "react";
import FormRecetarioOption from "./FormRecetarioOption";
import {
  EstructuraFormRecetario,
  ContenedorDeTipoDeFormulario,
  ContenedorDeEtiquetasDeTipoDeFormulario,
  Label,
  Option,
  Select,
} from "./FormRecetario.styled.js";

const FormRecetario = () => {
  //llamar al contexto
  //const {} = useContext(RecetarioContext)
  const [option, setOption] = useState("buscar");
  const optionForm = (e) => {
    e.preventDefault();
    setOption(e.target.value);
  };

  return (
    <>
      <EstructuraFormRecetario>
        <ContenedorDeTipoDeFormulario>
          <Label htmlFor="">Seleccione una opción</Label>
          <Select
            name="opciones"
            id="opciones"
            value={option}
            onChange={optionForm}
          >
            <Option value="buscar" id="buscar">
              Buscar
            </Option>
            {/*<Option value="agregar" id="agregar" >
              Agregar
            </Option>*/}
            <Option value="eliminar" id="eliminar">
              Eliminar
            </Option>
          </Select>
        </ContenedorDeTipoDeFormulario>
        <FormRecetarioOption option={option} />
      </EstructuraFormRecetario>
    </>
  );
};

export default FormRecetario;

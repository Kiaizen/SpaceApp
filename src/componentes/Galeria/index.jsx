import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";
import { useState } from "react";

const GaleriaContainer = styled.div`
  display: flex;
`;
const SecaoFluida = styled.section`
  flex-grow: 1;
`;
const ImagensContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito,procura }) => {

  const [tagId,setTagId] = useState(0)

  const filtro = (foto) => {
    const resultado = foto.tagId === tagId;
   return resultado
 }

  const fotosFiltradas = fotos.filter((foto) => {
    console.log(procura.length)
    if(tagId === 0){
      if(procura.length >= 3){
        const resultadoProcura = foto.titulo.toLowerCase().includes(procura.toLowerCase())
        return resultadoProcura
      }
      return true
    }
    const resultadoFiltro = filtro(foto)
    return resultadoFiltro
  })

  return (
    <>
      <Tags setTagId={setTagId} tagId={tagId} />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotosFiltradas.map((foto) => (
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares/>
      </GaleriaContainer>
    </>
  );
};

export default Galeria;

import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"

import fotos from './fotos.json'
import { useState } from "react"

const FundoGradiente = styled.div`
 background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosGaleria,setFotosGaleria] = useState(fotos)
  const [fotoSelecionada,setFotoSelecionada] = useState(null)
  const [procura,setProcura] = useState('')

  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }

      setFotosGaleria(fotosGaleria.map(fotoDaGaleria =>{
        return{
          ...fotoDaGaleria,
          favorita:fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
        }
      }))
  }

  const aoMudar = (texto) => {
    setProcura(texto)
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
      <Cabecalho aoMudar={aoMudar} />
      <MainContainer>
      <BarraLateral/>
      <ConteudoGaleria>
      <Banner texto="A galeria mais completa de fotos do espaço!"
        backgroundImage={bannerBackground}/>
      <Galeria 
        procura={procura}
        aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
        aoAlternarFavorito={aoAlternarFavorito}
        fotos={fotosGaleria}/>
      </ConteudoGaleria>
      </MainContainer>
      <Rodape/>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={()=>setFotoSelecionada(null)} aoAlternarFavorito={aoAlternarFavorito}/>
    </FundoGradiente>
  )
}

export default App

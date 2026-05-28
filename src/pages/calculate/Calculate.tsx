
import { Footer, Header, Slider } from "../../components"
import { SliderCalculateButton } from "../../components/slider/Slider"
import './Calculate.css'

export const Calculate = () => {
  

  return (
    <>
      <Header />
        <h1>Vill du veta hur mycket du kan få i bidrag?</h1>
          <h3>Räkna ut det med vår egna bidragsräknare!</h3>
          <h5>(Detta är bara för uppgiftens skull, inte en riktigt miniräknare som ger ordentliga mätvärden)</h5>
        <div className="calculate-content">
          <div className="questionnare">
            <h2>Hur många år har ditt bolag varit verksamt?</h2>
            <Slider valueType="År" from={0} to={20} />
            <h2>Vad är er årliga omsättning? (i tKr)</h2>
            <Slider valueType="Omsättning" from={0} to={1000000} />
            <h2>Fråga 3</h2>
            <Slider valueType="Värde" from={0} to={20} />

            <SliderCalculateButton />
          </div>
        </div>
      <Footer />
    </>
  )
}
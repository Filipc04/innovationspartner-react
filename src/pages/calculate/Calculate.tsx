import { useState } from "react"
import {
  Footer,
  Header,
  HeadingSection,
  Slider
} from "../../components"

import './Calculate.css'

export const Calculate = () => {
  const [years, setYears] = useState(10)
  const [employees, setEmployees] = useState(50)
  const [innovation, setInnovation] = useState(5)
  const [sustainability, setSustainability] = useState(5)
  const [revenue, setRevenue] = useState(500000)
  const [isGoodResult, setIsGoodResult] = useState(false);


  const [message, setMessage] = useState("")

  const calculateScore = () => {

    let goodCount = 0

    if(years < 10) goodCount++
    if(employees < 100) goodCount++
    if(innovation > 6) goodCount++
    if(sustainability > 7) goodCount++
    if(revenue < 100000) goodCount++

    if(goodCount >= 3){
      setMessage(
        "Ditt företag har goda möjligheter för ett stort bidrag! Estimation: 2,5 miljoner kr."
      )
      setIsGoodResult(true);
    } else {
      setMessage(
        "Ditt företag har tyvärr ganska dåliga möjligheter för bidrag. Estimation: högst 250 tusen kr."
      )
      setIsGoodResult(false);
    }
  }

  return (
    <>
      <Header />

      <HeadingSection
        tag="Räkna ut bidrags-potential"
        heading="Vill du veta hur mycket du kan få i bidrag?"
        subtext="Räkna ut det med vår alldeles egna bidragskalkylator!"
        note="Detta är bara för uppgiftens skull, inte en riktig räknare som ger meningsfulla värden!"
      />

      <div className="calculate-content">
        <div className="questionnare">

          <h2>Hur många år har företaget varit verksamt?</h2>
          <Slider
            valueType="År"
            from={0}
            to={20}
            value={years}
            setValue={setYears}
          />

          <h2>Hur många anställda har ni?</h2>
          <Slider
            valueType="Anställda"
            from={1}
            to={500}
            value={employees}
            setValue={setEmployees}
          />

          <h2>Hur innovativ är er produkt/tjänst?</h2>
          <Slider
            valueType="Innovationsnivå"
            from={1}
            to={10}
            value={innovation}
            setValue={setInnovation}
          />

          <h2>Hur stort fokus har ni på hållbarhet?</h2>
          <Slider
            valueType="Hållbarhet"
            from={1}
            to={10}
            value={sustainability}
            setValue={setSustainability}
          />

          <h2>Vad är er årliga omsättning? (tKr)</h2>
          <Slider
            valueType="Omsättning"
            from={0}
            to={1000000}
            value={revenue}
            setValue={setRevenue}
          />

          <button
            className="btn btn--primary"
            onClick={calculateScore}
          >
            Räkna!
          </button>

          {message && (
            <div className={isGoodResult ? 'result-box-good' : 'result-box-bad'}>
              <h2>{message}</h2>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  )
}
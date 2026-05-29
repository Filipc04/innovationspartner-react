import { useEffect, useRef, useState } from "react"
import "./Slider.css"

interface SliderProps {
  valueType: string
  from: number
  to: number
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

export const Slider = ({
  valueType,
  from,
  to,
  value,
  setValue
}: SliderProps) => {

  const trackRef = useRef<HTMLDivElement | null>(null)

  const [dragging, setDragging] = useState(false)

  const percent = ((value - from) / (to - from)) * 100

  const updateValue = (clientX: number) => {
    if (!trackRef.current) return

    const rect = trackRef.current.getBoundingClientRect()

    let x = clientX - rect.left

    x = Math.max(0, Math.min(x, rect.width))

    const newPercent = (x / rect.width) * 100

    const newValue = Math.round(
      from + (newPercent / 100) * (to - from)
    )

    setValue(newValue)
  }

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()

    setDragging(true)

    updateValue(e.clientX)
  }

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (dragging) updateValue(e.clientX)
    }

    const handleUp = () => {
      setDragging(false)
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseup", handleUp)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseup", handleUp)
    }
  }, [dragging])

  return (
    <div className="slider">
      <h2 className="slider-value">
        {valueType}: {value}
      </h2>

      <div
        ref={trackRef}
        className="slider-track"
        onMouseDown={onMouseDown}
      >
        <div
          className="slider-ball"
          style={{ left: `${percent}%` }}
        />
      </div>
    </div>
  )
}
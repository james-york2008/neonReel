import type { MouseEventHandler } from "react"
import search from '../../assets/search.png'

type Props = {
  handleRandom: MouseEventHandler
}

export default function Random ({ handleRandom }: Props) {
  return (
    <div id="random">
      <img src={search} alt="" loading="lazy" />
      <p>Can't decide what to watch?<br /><span>Let fate choose</span></p>
      <button id="randomize" onClick={handleRandom}>Surprise Me</button>
    </div>
  )
}
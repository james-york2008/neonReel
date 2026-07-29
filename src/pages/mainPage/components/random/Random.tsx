import type { MouseEventHandler } from "react"
import search from "../../../../assets/search.webp"
import styles from "../../../../css/components/mainPage/random.module.css"

type Props = {
  handleRandom: MouseEventHandler
}

export default function Random ({ handleRandom }: Props) {
  return (
    <div className={styles.random}>
      <img src={search} alt="" loading="lazy" />
      <p>Can't decide what to watch?<br /><span>Let fate choose</span></p>
      <button className={styles.randomize} onClick={handleRandom}>Surprise Me</button>
    </div>
  )
}
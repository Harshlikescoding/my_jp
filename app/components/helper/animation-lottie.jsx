"use client"

import { Player } from "@lottiefiles/react-lottie-player" // or use lottie-web + useEffect
import React from "react"

const AnimationLottie = () => {
  return (
    <Player
      autoplay
      loop
      src="/your-animation.json"
      style={{ height: "300px", width: "300px" }}
    />
  )
}

export default AnimationLottie

"use client"
import { Player } from '@lottiefiles/react-lottie-player' // or lottie-react
// or import lottie from 'lottie-web';

const ActualLottieComponent = () => {
  return (
    <Player
      autoplay
      loop
      src="/path/to/animation.json"
      style={{ height: '300px', width: '300px' }}
    />
  )
}

export default AnimationLottie;
"use client"
import dynamic from 'next/dynamic'

const LottieComponent = dynamic(() => import('./ActualLottieComponent'), {
  ssr: false,
})

export default LottieComponent

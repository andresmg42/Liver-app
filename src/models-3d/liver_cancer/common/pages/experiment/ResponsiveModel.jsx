import { useThree } from '@react-three/fiber'
import React, { useMemo } from 'react'

const ResponsiveModel = ({ children,originalScale }) => {
  const { viewport } = useThree()

  // Adjust scale based on viewport width (unit is in scene units, not pixels)
  const scale = useMemo(() => {
    console.log(viewport.width)
    if (viewport.width < 6) return originalScale*0.5  // Mobile
    if (viewport.width < 10) return originalScale*0.75 // Tablet
    return originalScale  // Desktop
  }, [viewport.width])

  return (
    <group scale={scale}>
      {children}
    </group>
  )
}

export default ResponsiveModel
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React from 'react'
import "./style.css"
import Cyl from './Cyl'

const App = () => {
  return (
    <Canvas camera={{fov:35}}>
      <OrbitControls />
      <ambientLight/>
      <Cyl/>
    </Canvas>
  )
}

export default App

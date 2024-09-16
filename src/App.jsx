import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Cyl from "./Cyl"
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


export const App = () => {

  return (
    <>
      <Canvas flat camera={{ fov: 30 }}>
        <ambientLight />
        <Cyl />
        <OrbitControls />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={1}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      <div id='main-container'>
        <h1 id='heading'>This is circular animation</h1>
        <p>A animation created with help of THREE libraries in react.js</p>
      </div>
    </>
  );
}
export default App

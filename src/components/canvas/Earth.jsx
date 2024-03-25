import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {

  const earth = useGLTF('./lowpoly_planet/scene.gltf')

  return (
    <primitive 
      object={earth.scene}
      scale={2}
      position-y={-2.5} 
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true}}
      camera={{
        fov:45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.7} />
      <spotLight position={[0, 50, 10]} angle={0.2} penumbra={1} intensity={2} castShadow shadow-mapSize={512}/>
      </mesh>
      
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
      />

      <Earth />
    </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;
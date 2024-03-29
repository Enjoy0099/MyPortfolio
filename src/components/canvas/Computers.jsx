import { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber';

import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./mario_minigame/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="black" />
      <pointLight intensity={5.7} />
      <spotLight position={[0, 50, 10]} angle={0.2} penumbra={1} intensity={2} castShadow shadow-mapSize={512}/>

      <primitive
        object={computer.scene}
        scale={ isMobile ? 0.55 : 0.65}
        position={isMobile ? [0, -1.2, 0] : [0, -1.45, 0]}
        rotation={[0,0,0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const[isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    // Add a Listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle change to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a Listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    //Remove the Listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])

  return(
    <Canvas
      frameloop = "demand"
      shadows
      camera = {{ position: [20,3,5], fov: 25 }}
      gl = {{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          />
          <Computers isMobile={isMobile}/>
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
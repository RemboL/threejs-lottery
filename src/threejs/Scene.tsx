/* eslint-disable */
import { Canvas } from '@react-three/fiber'
import Phase from '../Phase'
import Room from './Room'
import Chamber from './Chamber'
import Ball from './Ball';
import { Physics } from '@react-three/rapier';
import { Suspense } from 'react';

interface SceneProps {
  phase : Phase;
  names: string[];
}

export default function Scene(props: SceneProps) {

  const ballsPresent = props.phase != Phase.INPUTTING_DATA;

  return (
    <Canvas camera={{ position: [0, 12, 50] } }>
      <Suspense>
        <Physics gravity={[0, -9.81, 0]} interpolate={false} colliders={false}>
          <color attach="background" args={['#7f7fff']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[-10, -10, -10]}  />
          <Room />
          { ballsPresent && props.names.map((name, index) => <Ball name={name} position={[-9 + (index % 10) * 2, 20.8 - (index / 10 >> 0) * 2, -25.6643]} />)}
          <Chamber />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

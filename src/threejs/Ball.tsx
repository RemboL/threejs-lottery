/* eslint-disable */
import * as THREE from 'three'
import { useRef } from 'react'
import { RigidBody } from '@react-three/rapier'

export interface BallProps {
    name? : string
}

export default function Ball(props: JSX.IntrinsicElements['mesh'] | BallProps) {
    const ref = useRef<THREE.Mesh>(null!)

    return (
    <RigidBody colliders='ball' >
        <mesh {...props} ref={ref}>
            <sphereGeometry args={[1, 12, 6]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
      </RigidBody>
    )
  }
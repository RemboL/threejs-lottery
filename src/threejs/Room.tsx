import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube_1: THREE.Mesh
    Cube_2: THREE.Mesh
    Cube_3: THREE.Mesh
  }
  materials: {
    ['d-blue.001']: THREE.MeshStandardMaterial
    ['d-blue']: THREE.MeshStandardMaterial
    ['l-blue.001']: THREE.MeshStandardMaterial
    yellow: THREE.MeshStandardMaterial
  }
}

export default function Room(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('assets/room-transformed.glb') as GLTFResult
  return (
    <RigidBody colliders='trimesh' type='fixed'>
        <group {...props} dispose={null}>
            {/* <mesh geometry={nodes.Cube.geometry} material={materials['d-blue.001']} position={[1.19, -6.31, 1.42]} /> */}
            <group position={[22.1, -19.26, -5.94]}>
                <mesh geometry={nodes.Cube_1.geometry} material={materials['d-blue']} />
                <mesh geometry={nodes.Cube_2.geometry} material={materials['l-blue.001']} />
                <mesh geometry={nodes.Cube_3.geometry} material={materials.yellow} />
            </group>
        </group>
    </RigidBody>
  )
}

useGLTF.preload('assets//room-transformed.glb')

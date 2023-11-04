import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

type GLTFResult = GLTF & {
    nodes: {
        Cube001: THREE.Mesh
        Cube: THREE.Mesh
        Sphere001: THREE.Mesh
        Sphere: THREE.Mesh
        TunnelLeft: THREE.Mesh
        TunnelBack: THREE.Mesh
        TunnelTop: THREE.Mesh
        TunnelFront: THREE.Mesh
        TunnelRight: THREE.Mesh
    }
    materials: {
        ['Material.001']: THREE.MeshStandardMaterial
    }
}

export default function Chamber(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('assets/chamber-transformed.glb') as GLTFResult;

    materials['Material.001'].opacity = 0.2;
    materials['Material.001'].transparent = true;

    return (
        <RigidBody colliders='trimesh' type='fixed'>
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Sphere.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.TunnelLeft.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.TunnelBack.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.TunnelTop.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.TunnelFront.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.TunnelRight.geometry} material={materials['Material.001']} />
        </group>
        </RigidBody>
    )
}

useGLTF.preload('assets/chamber-transformed.glb')


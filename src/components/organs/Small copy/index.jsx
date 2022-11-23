import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Far(props) {
    const { scene } = useGLTF('/far.gltf')
    const primitive = useRef()

    useFrame((state, delta) => {
        primitive.current.rotation.x += 0.005
        primitive.current.rotation.y = 3.149999999999993
        primitive.current.rotation.z += 0.005
    })

    return (
        <primitive ref={primitive} object={scene} position={[0, 0, 0]} />
    )
}
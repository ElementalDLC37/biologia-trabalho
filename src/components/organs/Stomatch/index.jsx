import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Stomach(props) {
    const { scene } = useGLTF('/stomach.gltf')
    const primitive = useRef()

    useFrame((state, delta) => (primitive.current.rotation.y += 0.005))

    return (
        <primitive ref={primitive} object={scene} />
    )
}
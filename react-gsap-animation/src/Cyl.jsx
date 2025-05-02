import { useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from "three"

const Cyl = () => {

    let tex = useTexture("./image.jpg")
    return (
        <mesh rotation={[0,1.4,0.5]}>
            <cylinderGeometry args={[2, 2, 2, 30, 30, true]} />
            <meshStandardMaterial map={tex} transparent color="white" side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Cyl;
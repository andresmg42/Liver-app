import { useGLTF } from '@react-three/drei'


const  LiverCancer=()=> {

    const { scene } = useGLTF('src/models-3d/models/sample.glb')


    return (
        <mesh>
            <primitive object={scene} />

        </mesh>

    )
}

export default LiverCancer;

useGLTF.preload('src/models-3d/models/sample.glb')
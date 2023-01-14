import React, { useEffect, useRef } from "react";
import { OrbitControls, Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Dog(props) {
    const dogRef = useRef();
    useFrame(({ clock }, delta) => {
        const t = clock.getElapsedTime();
        dogRef.current.position.y = Math.sin(t);
    });
    const { scene, nodes, materials } = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf"
    );
    useEffect(() => {
        scene.traverse((obj) => (obj.receiveShadow = obj.castShadow = true));
    }, [scene, nodes, materials]);

    return <primitive ref={dogRef} object={scene} {...props} />;
}
useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf");

function Experience() {
    return (
        <>
            <color args={["salmon"]} attach='background' />
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight
                shadow-normalBias={0.05}
                castShadow
                shadow-mapSize={1024}
                position={[1, 4, 5]}
                intensity={2}
            />

            <Environment preset='city' />
            <Dog scale={1} position-y={0} />
            <ContactShadows resolution={512} position={[0, -0.99, 0]} opacity={0.8} scale={3} blur={10} far={4} />
        </>
    );
}

export default Experience;

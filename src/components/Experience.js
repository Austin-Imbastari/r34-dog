import React, { useEffect, useRef, useState } from "react";
import { OrbitControls, Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Dog(props) {
    const [dogRotate, setDogRotate] = useState(false);
    const dogRef = useRef();

    useFrame(({ clock }, delta) => {
        const t = clock.getElapsedTime();
        dogRef.current.position.y = Math.sin(t);

        if (dogRotate) {
            dogRef.current.rotation.y = Math.PI * t;
        } else {
            dogRef.current.rotation.y = 0;
        }
    });
    const { scene } = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf"
    );

    //Cast shadows to true
    // useEffect(() => {
    //     scene.traverse((obj) => (obj.receiveShadow = obj.castShadow = true));
    // }, [scene]);

    return <primitive onClick={() => setDogRotate(!dogRotate)} ref={dogRef} object={scene} {...props} />;
}
useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf");

function Experience() {
    return (
        <>
            <color args={["salmon"]} attach='background' />
            {/* <fog attach='fog' color='hotpink' near={2.5} far={90} /> */}
            <OrbitControls enableZoom={false} />
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
            <ContactShadows resolution={512} position={[0, -0.99, 0]} opacity={0.8} scale={3} blur={10} far={3} />
        </>
    );
}

export default Experience;

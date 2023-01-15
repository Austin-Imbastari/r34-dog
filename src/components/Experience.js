import React, { useEffect, useRef, useState } from "react";
import { OrbitControls, Environment, useGLTF, ContactShadows, useCursor, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Dog(props) {
    const [cursorHover, setCursorHover] = useState(false);
    const [dogRotate, setDogRotate] = useState(false);
    const dogRef = useRef();
    useCursor(cursorHover);

    useFrame(({ clock }, delta) => {
        const t = clock.getElapsedTime();

        if (dogRotate) {
            // dogRef.current.rotation.y = Math.PI * t;
            dogRef.current.position.y = Math.sin(t);
        } else {
            dogRef.current.rotation.y = 0;
            dogRef.current.position.y = -0.99;
        }
    });

    const { scene } = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf"
    );

    //Cast shadows to true
    // useEffect(() => {
    //     scene.traverse((obj) => (obj.receiveShadow = obj.castShadow = true));
    // }, [scene]);

    return (
        <primitive
            onPointerOver={() => {
                setCursorHover(!cursorHover ? true : false);
            }}
            onClick={() => setDogRotate(!dogRotate)}
            ref={dogRef}
            object={scene}
            {...props}
        />
    );
}

function Milk(props) {
    const { scene } = useGLTF(
        "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/carton-small/model.gltf"
    );
    //Cast shadows to true
    // useEffect(() => {
    //     scene.traverse((obj) => (obj.receiveShadow = obj.castShadow = true));
    // }, [scene]);

    return <primitive castShadow {...props} object={scene} />;
}

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

            <Dog scale={1} position-y={-0.99} />

            <Float speed={1} rotationIntensity={10} floatIntensity={1} floatingRange={[0.5, 1]}>
                <Milk scale={1} rotation-y={1} position={[-0.9, -0.5, -0.5]} />
            </Float>

            <ContactShadows resolution={512} position={[0, -0.99, 0]} opacity={0.8} scale={3.5} blur={10} far={3} />
        </>
    );
}

useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf");
useGLTF.preload("https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/carton-small/model.gltf");

export default Experience;

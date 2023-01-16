import "./App.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
    const [click, setClick] = useState(false);

    console.log(click);
    return (
        <>
            <Canvas shadows camera={{ position: [0, 4, 20], fov: 25 }}>
                <color attach='background' args={["white"]} />
                <Experience click={click} setClick={setClick} />
            </Canvas>
        </>
    );
}

export default App;

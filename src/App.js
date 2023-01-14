import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
    return (
        <>
            <Canvas shadows camera={{ position: [0, 4, 20], fov: 25 }}>
                <color attach='background' args={["white"]} />
                <Experience />
            </Canvas>
        </>
    );
}

export default App;

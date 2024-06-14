import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../public/Realshake";
import Model2 from "../public/Scene";

function App() {
  return (
    <>
    <h1>3D models & JSX</h1>

      <div className="canvas-wrapper">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight />
            <OrbitControls enablePan={false} />
            <Suspense fallback={null}>
              <Model position={[0, 0, 0]} />
            </Suspense>
          </Canvas>
          <h1 className="model-title">Berry shake</h1>
        </div>

        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight />
            <OrbitControls enablePan={false} />
            <Suspense fallback={null}>
              <Model2 position={[0, 0, 0]} />
            </Suspense>
          </Canvas>
          <h1 className="model-title">Dark spongebob</h1>
        </div>
      </div>
    </>
  );
}

export default App;

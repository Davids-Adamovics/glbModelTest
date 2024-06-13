/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/realshake-transformed.glb');
  const { actions } = useAnimations(animations, group);

  // Adjust position, rotation, and scale here
  const position = [0, 3, 0]; // Example position (modify as needed)
  const rotation = [Math.PI, Math.PI, Math.PI]; // Example rotation (modify as needed)
  const scale = 0.2; // Example scale (modify as needed)

  return (
    <group ref={group} {...props} dispose={null} position={position} rotation={rotation} scale={[scale, scale, scale]}>
      <group name="Scene">
        <group name="Sphere005">
          <mesh geometry={nodes.Sphere005_1.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Sphere005_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Sphere005_3.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Sphere005_4.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Sphere005_5.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Sphere005_6.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Sphere005_7.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Sphere005_8.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Sphere005_9.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Sphere005_10.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.Sphere005_11.geometry} material={materials['Material.009']} />
          <mesh geometry={nodes.Sphere005_12.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Sphere005_13.geometry} material={materials['Material.009']} />
          {/* Add more mesh components as needed */}
        </group>
      </group>
    </group>
  );
}

// Preload the GLTF model for better performance
useGLTF.preload('/realshake-transformed.glb');

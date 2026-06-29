"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

/**
 * Clean, theme-aligned 3D background.
 * Uses a subtle particle field that reacts gently to mouse movement.
 */
export function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    // Smoothly interpolate mouse position for a subtle parallax effect
    mousePosition.current.x = THREE.MathUtils.lerp(
      mousePosition.current.x,
      (state.mouse.x * Math.PI) / 20,
      0.05
    );
    mousePosition.current.y = THREE.MathUtils.lerp(
      mousePosition.current.y,
      (state.mouse.y * Math.PI) / 20,
      0.05
    );

    if (groupRef.current) {
      // Subtle rotation based on mouse
      groupRef.current.rotation.x = -mousePosition.current.y;
      groupRef.current.rotation.y = mousePosition.current.x;
      
      // Constant very slow rotation for life
      groupRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
      
      {/* Subtle lighting matching the website's dark/blue theme */}
      <ambientLight intensity={0.2} color="#007AFF" />

      <group ref={groupRef}>
        {/* Deep background stars/particles matching the theme */}
        <Stars
          radius={50}
          depth={50}
          count={500}
          factor={2}
          saturation={1}
          fade
          speed={0.3}
        />
      </group>
    </>
  );
}

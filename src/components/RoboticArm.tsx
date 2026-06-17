"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Float, Text } from "@react-three/drei"
import * as THREE from "three"

function Model() {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/models/robot.glb")
  const targetRotation = useRef({ x: 0, y: 0 })
  const mouseRef = useRef({ x: 0, y: 0 })
  const materialRef = useRef<THREE.MeshStandardMaterial | null>(null)

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mat = child.material.clone()
        mat.color = new THREE.Color("#1a2a4a")
        mat.metalness = 0.8
        mat.roughness = 0.2
        mat.envMapIntensity = 1
        child.material = mat
        materialRef.current = mat
      }
    })
  }, [scene])

  useFrame((state) => {
    if (!groupRef.current) return

    mouseRef.current.x += (state.pointer.x - mouseRef.current.x) * 0.02
    mouseRef.current.y += (state.pointer.y * 0.5 - mouseRef.current.y) * 0.02

    targetRotation.current.y = mouseRef.current.x * 0.3
    targetRotation.current.x = mouseRef.current.y * 0.2

    groupRef.current.rotation.y +=
      (targetRotation.current.y - groupRef.current.rotation.y) * 0.04
    groupRef.current.rotation.x +=
      (targetRotation.current.x - groupRef.current.rotation.x) * 0.04

    if (materialRef.current) {
      const hue = 0.62 + Math.sin(state.clock.elapsedTime * 0.15) * 0.04
      materialRef.current.color.setHSL(hue, 0.6, 0.25)
    }
  })

  const clonedScene = scene.clone()

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} scale={1} />
    </group>
  )
}

function GlowRings() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.4
  })

  const ringColors = ["#3B82F6", "#60A5FA", "#3B82F6"]

  return (
    <group ref={groupRef} position={[0, 0.5, 0]}>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[0, -0.5 + i * 0.5, 0]}
          rotation={[Math.PI / 2 + (i * 0.3), 0, 0]}
        >
          <ringGeometry args={[1.0 + i * 0.2, 1.05 + i * 0.2, 48]} />
          <meshBasicMaterial
            color={ringColors[i]}
            transparent
            opacity={0.12 - i * 0.03}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

const languages = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React",
  "Next.js", "Node.js", "Python", "PostgreSQL", "C",
  "C++", "MATLAB", "Docker", "Git",
]

function FloatingLanguages() {
  const groupRef = useRef<THREE.Group>(null!)

  const items = useRef(
    languages.map((lang, i) => {
      const angle = (i / languages.length) * Math.PI * 2
      const radius = 2.4 + Math.random() * 0.4
      const yOffset = (Math.random() - 0.5) * 3.5
      return { lang, angle, radius, yOffset, speed: 0.3 + Math.random() * 0.2 }
    })
  ).current

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.06
  })

  return (
    <group ref={groupRef}>
      {items.map((item, i) => (
        <Float key={i} speed={item.speed} rotationIntensity={0.1} floatIntensity={0.3}>
          <group
            position={[
              Math.cos(item.angle) * item.radius,
              item.yOffset,
              Math.sin(item.angle) * item.radius,
            ]}
          >
            <Text
              fontSize={0.15}
              color="#60A5FA"
              anchorX="center"
              anchorY="middle"
            >
              {item.lang}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  )
}

export function RoboticArm() {
  return (
    <Canvas
      camera={{ position: [7, 3.5, 7.5], fov: 30 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      className="w-full h-full"
    >
      <color attach="background" args={["#0A0A0A"]} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={0.5} />
      <directionalLight position={[-3, 2, -3]} intensity={0.15} />
      <pointLight position={[0, 3, 0]} intensity={0.3} color="#3B82F6" />

      <Model />
      <GlowRings />
      <FloatingLanguages />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  )
}

"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Item3DProps {
  type?: "donut" | "sword" | "shulker" | "totem" | "gem";
  className?: string;
}

export default function Item3DCanvas({ type = "donut", className = "w-48 h-48" }: Item3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 200;
    const height = container.clientHeight || 200;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffb703, 2.5); // Warm gold/orange light
    dirLight1.position.set(3, 4, 3);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf472b6, 1.8); // Pink rim light
    dirLight2.position.set(-3, -2, -2);
    scene.add(dirLight2);

    const group = new THREE.Group();
    scene.add(group);

    // Object creation based on type
    if (type === "donut") {
      // Donut Torus (Golden glazed donut)
      const donutGeo = new THREE.TorusGeometry(1.2, 0.52, 24, 48);
      const donutMat = new THREE.MeshStandardMaterial({
        color: 0x8a4513, // Baked pastry brown
        roughness: 0.4,
        metalness: 0.1,
      });
      const donutMesh = new THREE.Mesh(donutGeo, donutMat);
      group.add(donutMesh);

      // Frosting / Glaze (Pink icing like logo)
      const glazeGeo = new THREE.TorusGeometry(1.22, 0.44, 24, 48);
      const glazeMat = new THREE.MeshStandardMaterial({
        color: 0xff69b4, // Vibrant donut pink
        roughness: 0.2,
        metalness: 0.15,
      });
      const glazeMesh = new THREE.Mesh(glazeGeo, glazeMat);
      glazeMesh.scale.set(1.02, 1.02, 1.02);
      glazeMesh.position.z = 0.08;
      group.add(glazeMesh);

      // Little sprinkles
      const sprinkleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.18, 6);
      const sprinkleColors = [0xffffff, 0xfbbf24, 0x60a5fa, 0x34d399, 0xa78bfa];
      for (let i = 0; i < 35; i++) {
        const mat = new THREE.MeshStandardMaterial({
          color: sprinkleColors[i % sprinkleColors.length],
          roughness: 0.3,
        });
        const sprinkle = new THREE.Mesh(sprinkleGeo, mat);
        const u = Math.random() * Math.PI * 2;
        const v = (Math.random() - 0.5) * 0.9;
        const r = 1.2 + 0.46 * Math.cos(v);
        sprinkle.position.set(r * Math.cos(u), r * Math.sin(u), 0.46 * Math.sin(v) + 0.1);
        sprinkle.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        group.add(sprinkle);
      }
    } else if (type === "totem") {
      // Golden 3D Totem / Trophy
      const baseGeo = new THREE.BoxGeometry(0.9, 1.4, 0.6);
      const goldMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        metalness: 0.8,
        roughness: 0.2,
      });
      const baseMesh = new THREE.Mesh(baseGeo, goldMat);
      group.add(baseMesh);

      const wingGeo = new THREE.BoxGeometry(1.6, 0.4, 0.4);
      const wingMesh = new THREE.Mesh(wingGeo, goldMat);
      wingMesh.position.y = 0.2;
      group.add(wingMesh);

      // Emerald eyes
      const eyeGeo = new THREE.BoxGeometry(0.18, 0.18, 0.1);
      const emeraldMat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x059669,
        emissiveIntensity: 0.6,
        roughness: 0.1,
      });
      const eyeL = new THREE.Mesh(eyeGeo, emeraldMat);
      eyeL.position.set(-0.25, 0.4, 0.32);
      const eyeR = eyeL.clone();
      eyeR.position.x = 0.25;
      group.add(eyeL, eyeR);
    } else {
      // 3D Gem / Marketplace crystal
      const gemGeo = new THREE.OctahedronGeometry(1.2, 0);
      const gemMat = new THREE.MeshStandardMaterial({
        color: 0xf43f5e,
        roughness: 0.15,
        metalness: 0.5,
      });
      const gemMesh = new THREE.Mesh(gemGeo, gemMat);
      group.add(gemMesh);
    }

    // Interactive rotation with mouse hover
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
    };
    container.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Idle float & rotation
      group.rotation.y = elapsed * 0.8 + mouseX * 0.8;
      group.rotation.x = Math.sin(elapsed * 0.5) * 0.2 + mouseY * 0.5;
      group.position.y = Math.sin(elapsed * 1.5) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [type]);

  return (
    <div
      ref={mountRef}
      className={`relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
      title="Interactive 3D Preview (hover to tilt)"
    />
  );
}

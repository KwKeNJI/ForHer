import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function FloatingHeart3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth || 280
    const height = container.clientHeight || 280
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

    const probe = document.createElement('canvas')
    const canWebGL = Boolean(
      probe.getContext('webgl') || probe.getContext('experimental-webgl'),
    )
    if (!canWebGL) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    } catch {
      return
    }

    renderer.setSize(width, height)
    renderer.setPixelRatio(dpr)
    container.appendChild(renderer.domElement)

    const heartShape = new THREE.Shape()
    heartShape.moveTo(0, 0.5)
    heartShape.bezierCurveTo(0, 0.5, -0.5, 1, -1, 1)
    heartShape.bezierCurveTo(-1.5, 1, -1.5, 0.35, -1.5, 0.35)
    heartShape.bezierCurveTo(-1.5, 0, -1, -0.7, 0, -1.5)
    heartShape.bezierCurveTo(1, -0.7, 1.5, 0, 1.5, 0.35)
    heartShape.bezierCurveTo(1.5, 0.35, 1.5, 1, 1, 1)
    heartShape.bezierCurveTo(0.5, 1, 0, 0.5, 0, 0.5)

    const geometry = new THREE.ExtrudeGeometry(heartShape, {
      depth: 0.4,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 5,
    })
    const material = new THREE.MeshPhongMaterial({
      color: 0xffb6c1,
      shininess: 100,
    })
    const heartMesh = new THREE.Mesh(geometry, material)
    heartMesh.scale.set(0.2, 0.2, 0.2)
    scene.add(heartMesh)

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(5, 5, 5)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    camera.position.z = 5

    let raf = 0
    let running = true

    const animate = () => {
      if (!running) return
      heartMesh.rotation.y += 0.01
      heartMesh.position.y = Math.sin(Date.now() * 0.002) * 0.2
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }

    const start = () => {
      if (!running) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(animate)
    }

    const stop = () => {
      cancelAnimationFrame(raf)
    }

    const onVisibility = () => {
      if (document.visibilityState === 'visible') start()
      else stop()
    }

    const onResize = () => {
      const w = container.clientWidth || window.innerWidth
      const h = container.clientHeight || window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('resize', onResize)
    start()

    return () => {
      running = false
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="floating-heart-3d" />
}

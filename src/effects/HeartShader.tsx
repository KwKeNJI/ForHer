import { useEffect, useRef } from 'react'

type HeartShaderProps = {
  className?: string
}

const VERTEX = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`

const FRAGMENT = `
precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;

float heart(vec2 p) {
    p.x *= 1.2;
    p.y -= 0.25 * sqrt(abs(p.x));
    return length(p) - 0.5;
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec3 color = vec3(1.0, 0.82, 0.86) + 0.1 * cos(u_time + uv.xyx + vec3(0, 2, 4));
    for(float i = 0.0; i < 8.0; i++) {
        float t = u_time * (0.3 + i * 0.1) + i * 1.5;
        vec2 pos = vec2(sin(t) * 0.8, fract(t * 0.2) * 2.5 - 1.25);
        float h = heart((uv - pos) * (2.0 + i * 0.5));
        float mask = smoothstep(0.01, -0.01, h);
        color = mix(color, vec3(1.0, 0.4, 0.5), mask * 0.3);
    }
    color += 0.05 * sin(u_time * 0.5 + length(uv) * 10.0);
    gl_FragColor = vec4(color, 1.0);
}`

export function HeartShader({ className }: HeartShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl')
    if (!gl) return

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const program = gl.createProgram()
    if (!program) return
    const vs = compile(gl.VERTEX_SHADER, VERTEX)
    const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT)
    if (!vs || !fs) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    )
    const position = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(program, 'u_time')
    const uRes = gl.getUniformLocation(program, 'u_resolution')

    let raf = 0
    let running = true

    const syncSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = canvas.clientWidth || 1280
      const h = canvas.clientHeight || 720
      const bw = Math.floor(w * dpr)
      const bh = Math.floor(h * dpr)
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw
        canvas.height = bh
      }
    }

    const render = (t: number) => {
      if (!running) return
      syncSize()
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uTime) gl.uniform1f(uTime, t * 0.001)
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(render)
    }

    const start = () => {
      if (!running) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(render)
    }

    const stop = () => {
      cancelAnimationFrame(raf)
    }

    const onVisibility = () => {
      if (document.visibilityState === 'visible') start()
      else stop()
    }

    const observer =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(syncSize)
        : null
    observer?.observe(canvas)
    document.addEventListener('visibilitychange', onVisibility)
    syncSize()
    start()

    return () => {
      running = false
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
      observer?.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}

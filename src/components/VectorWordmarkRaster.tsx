// Vector Wordmark 4 — Originkit

"use client"

import * as React from "react"
import { useEffect, useRef } from "react"

const MAX_DPR = 2
const REF_WIDTH = 1200
const MAX_TEX = 4096

const SWEEP_RATE = 0.5
const DAMP_REF = 20
const SPEED_REF = 50
const LABEL_MAX = 0.6
const DOT_DIAMETER = 4 / 440
const DOT_PITCH = 12 / 440

const SWEEP_BAND = 0.28
const GRID_ALPHA = 0.35
const CROSS_ALPHA = 0.6

const clamp = (x: number, a: number, b: number) => (x < a ? a : x > b ? b : x)
const fract = (x: number) => x - Math.floor(x)

type RGBA = [number, number, number, number]

function parseColor(input: string | undefined, fallback: RGBA): RGBA {
    if (!input) return fallback
    let s = String(input).trim()
    if (s.slice(0, 4).toLowerCase() === "var(") {
        const comma = s.indexOf(",")
        const close = s.lastIndexOf(")")
        if (comma < 0 || close < comma) return fallback
        s = s.slice(comma + 1, close).trim()
    }
    if (s[0] === "#") {
        let h = s.slice(1)
        if (h.length === 3 || h.length === 4) {
            let x = ""
            for (const c of h) x += c + c
            h = x
        }
        if (h.length === 6) h += "ff"
        if (h.length !== 8 || /[^0-9a-f]/i.test(h)) return fallback
        return [
            parseInt(h.slice(0, 2), 16) / 255,
            parseInt(h.slice(2, 4), 16) / 255,
            parseInt(h.slice(4, 6), 16) / 255,
            parseInt(h.slice(6, 8), 16) / 255,
        ]
    }
    const m = s.match(/^(rgba?|hsla?)\(([^)]*)\)$/i)
    if (!m) return fallback
    const parts = m[2].split(/[\s,/]+/).filter((p) => p.length > 0)
    if (parts.length < 3) return fallback
    const num = (t: string, scale: number) => {
        const v = parseFloat(t)
        if (!Number.isFinite(v)) return 0
        return t.indexOf("%") >= 0 ? (v / 100) * scale : v
    }
    const alpha = parts.length > 3 ? clamp(num(parts[3], 1), 0, 1) : 1
    if (m[1].toLowerCase().slice(0, 3) === "rgb") {
        return [
            clamp(num(parts[0], 255) / 255, 0, 1),
            clamp(num(parts[1], 255) / 255, 0, 1),
            clamp(num(parts[2], 255) / 255, 0, 1),
            alpha,
        ]
    }
    const hh = fract(parseFloat(parts[0]) / 360)
    const sat = clamp(num(parts[1], 1), 0, 1)
    const li = clamp(num(parts[2], 1), 0, 1)
    const q = li < 0.5 ? li * (1 + sat) : li + sat - li * sat
    const p = 2 * li - q
    const chan = (t: number) => {
        let u = fract(t)
        if (u < 1 / 6) return p + (q - p) * 6 * u
        if (u < 1 / 2) return q
        if (u < 2 / 3) return p + (q - p) * (2 / 3 - u) * 6
        return p
    }
    return [chan(hh + 1 / 3), chan(hh), chan(hh - 1 / 3), alpha]
}

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
    vUv = aPos * 0.5 + 0.5;
    gl_Position = vec4(aPos, 0.0, 1.0);
}`

const FRAG = `
precision highp float;

uniform sampler2D uMap;
uniform vec2 uRes;
uniform vec2 uAtlas;
uniform vec2 uPtr;
uniform float uReach;
uniform float uCell;
uniform float uGap;
uniform vec3 uText;
uniform vec3 uShade;
uniform vec4 uAccent;

varying vec2 vUv;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 blurRG(vec2 uv, float e) {
    vec4 sum = vec4(0.0);
    for (int i = 0; i < 6; i++) {
        float fi = float(i);
        float th = radians(fi / 6.0 * 360.0);
        vec2 dir = vec2(cos(th), sin(th));
        vec2 off = dir * (hash(vec2(fi, uv.x + uv.y)) + e);
        sum += texture2D(uMap, uv + off * e);
    }
    return (sum / 6.0).rg;
}

float stroke(float d, float lw, float px) {
    return 1.0 - smoothstep(lw, lw + px, d);
}

vec2 atlasUv(vec2 px) {
    return (px - (uRes - uAtlas) * 0.5) / uAtlas;
}

float coverage(vec2 px) {
    vec2 e = atlasUv(px);
    float inb = step(0.0, e.x) * step(e.x, 1.0) * step(0.0, e.y) * step(e.y, 1.0);
    return texture2D(uMap, clamp(e, 0.0, 1.0)).r * inb;
}

void main() {
    float aspect = uRes.x / uRes.y;
    vec2 p = vUv * uRes;

    vec2 E = atlasUv(p);
    float inside = step(0.0, E.x) * step(E.x, 1.0) * step(0.0, E.y) * step(E.y, 1.0);
    vec2 safeUv = clamp(E, 0.0, 1.0);
    float b = clamp(1.0 - E.y * 3.5, 0.0, 1.0) * 0.008;
    float softMask = blurRG(safeUv, b).r * inside;
    vec3 fillS = mix(uShade, uText, smoothstep(0.0, 1.0, E.y));

    vec2 cell = floor(p / uCell);
    vec2 cc = (cell + 0.5) * uCell;
    float q = uCell * 0.25;
    float cov = 0.25 * (
        coverage(cc + vec2(-q, -q)) + coverage(cc + vec2(q, -q)) +
        coverage(cc + vec2(-q, q)) + coverage(cc + vec2(q, q))
    );
    vec2 f = fract(p / uCell) * uCell;
    float g = uGap * uCell * 0.5;
    vec2 sqd = min(f - g, uCell - g - f);
    float sq = smoothstep(-0.5, 0.5, min(sqd.x, sqd.y));
    float rasterMask = cov * sq;
    vec3 fillR = mix(uShade, uText, smoothstep(0.0, 1.0, atlasUv(cc).y));

    float d = length((vUv - uPtr) / vec2(1.0, aspect));
    float k = 1.0 - pow(smoothstep(0.0, max(uReach, 1e-4), d), 3.0);

    float fade = pow(clamp(E.y, 0.0, 1.0), 0.7);
    float mask = mix(softMask, rasterMask, k);
    vec3 rgbP = mix(fillS * softMask, fillR * rasterMask, k);
    vec4 card = vec4(rgbP, mask) * fade;

    vec2 edge = min(f, uCell - f);
    float grid = stroke(min(edge.x, edge.y), 0.25, 1.0) * k * ${GRID_ALPHA.toFixed(3)};
    vec2 c = uPtr * uRes;
    float cross = max(stroke(abs(p.x - c.x), 0.5, 1.0), stroke(abs(p.y - c.y), 0.5, 1.0)) * ${CROSS_ALPHA.toFixed(3)};
    vec2 pc = floor(c / uCell);
    float same = 1.0 - step(0.5, length(cell - pc));
    float hl = stroke(min(edge.x, edge.y), 0.5, 1.0) * same;
    float A = max(max(grid, cross), hl) * uAccent.a;

    gl_FragColor = vec4(uAccent.rgb * A, A) + card * (1.0 - A);
}`

function compile(gl: WebGLRenderingContext, vs: string, fs: string) {
    const make = (type: number, src: string) => {
        const sh = gl.createShader(type)!
        gl.shaderSource(sh, src)
        gl.compileShader(sh)
        return sh
    }
    const p = gl.createProgram()!
    gl.attachShader(p, make(gl.VERTEX_SHADER, vs))
    gl.attachShader(p, make(gl.FRAGMENT_SHADER, fs))
    gl.bindAttribLocation(p, 0, "aPos")
    gl.linkProgram(p)
    return p
}

type Atlas = { canvas: HTMLCanvasElement; cssW: number; cssH: number }

type FontSpec = {
    family: string
    weight: string
    style: string
    size: number
    letterSpacing: string
}

function fontString(f: FontSpec, px: number) {
    return `${f.style} ${f.weight} ${px}px ${f.family}`
}

function buildAtlas(
    text: string,
    f: FontSpec,
    drawFontPx: number,
    dpr: number
): Atlas | null {
    const probe = document.createElement("canvas").getContext("2d")
    if (!probe) return null

    const setFont = (ctx: CanvasRenderingContext2D, px: number) => {
        ctx.font = fontString(f, px)

        try {
            if ("letterSpacing" in ctx) {
                ;(ctx as unknown as { letterSpacing: string }).letterSpacing =
                    f.letterSpacing
            }
        } catch (e) {
        }
    }

    const measure = (px: number) => {
        setFont(probe, px)
        const m = probe.measureText(text)
        const asc = m.actualBoundingBoxAscent || px * 0.8
        const desc = m.actualBoundingBoxDescent || px * 0.22
        return { w: Math.max(1, m.width), asc, desc }
    }

    let fpx = Math.max(8, drawFontPx * dpr)
    let m = measure(fpx)
    let pad = fpx * 0.12
    const over = Math.max(
        (m.w + pad * 2) / MAX_TEX,
        (m.asc + m.desc + pad * 2) / MAX_TEX
    )
    if (over > 1) {
        fpx = Math.max(8, fpx / over)
        m = measure(fpx)
        pad = fpx * 0.12
    }

    const w = Math.max(1, Math.ceil(m.w + pad * 2))
    const h = Math.max(1, Math.ceil(m.asc + m.desc + pad * 2))
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext("2d")
    if (!ctx) return null

    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, w, h)
    setFont(ctx, fpx)
    ctx.textBaseline = "alphabetic"
    ctx.textAlign = "left"
    ctx.globalCompositeOperation = "lighter"

    ctx.fillStyle = "#ff0000"
    ctx.fillText(text, pad, pad + m.asc)

    const block = m.asc + m.desc
    ctx.strokeStyle = "#00ff00"
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.lineWidth = Math.max(1, block * DOT_DIAMETER)
    ctx.setLineDash([0, Math.max(2, block * DOT_PITCH)])
    ctx.strokeText(text, pad, pad + m.asc)

    const cssPerPx = drawFontPx / fpx
    return { canvas, cssW: w * cssPerPx, cssH: h * cssPerPx }
}

type GridGroup = { size: number; gap: number; labels: boolean }

const GRID_DEFAULTS: GridGroup = { size: 14, gap: 20, labels: true }

export interface VectorWordmarkRasterProps {
    text?: string
    font?: React.CSSProperties
    background?: string
    textColor?: string
    shade?: string
    accent?: string
    reach?: number
    speed?: number
    damping?: number
    grid?: Partial<GridGroup>
    style?: React.CSSProperties
}

export default function VectorWordmarkRaster(props: VectorWordmarkRasterProps) {
    const {
        text = "Raster",
        font = {"fontSize":240,"textAlign":"left","fontFamily":"Inter","fontWeight":400,"lineHeight":"1em","letterSpacing":"-0.02em"},
        background = "#000000",
        textColor = "#D9FFE9",
        shade = "#0B2A1D",
        accent = "rgba(80, 255, 160, 0.5)",
        reach = 200,
        speed = 50,
        damping = 35,
        grid = {"gap":20,"size":14,"labels":true},
        style,
    } = props

    const hg: GridGroup = { ...GRID_DEFAULTS, ...(grid ?? {}) }

    const [ready, setReady] = React.useState(false)
    const hostRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const labelRefs = useRef<(HTMLDivElement | null)[]>([null])

    const rawSize = font?.fontSize
    const fontSpec: FontSpec = {
        family: (font?.fontFamily as string) || "Inter, system-ui, sans-serif",
        weight: String(font?.fontWeight ?? 500),
        style: font?.fontStyle === "italic" ? "italic" : "normal",
        size: Math.max(8, parseFloat(String(rawSize ?? 240)) || 240),
        letterSpacing: String(font?.letterSpacing ?? "0px"),
    }

    const accentRGBA = parseColor(accent, [0.314, 1, 0.627, 0.5])
    const labelColor = `rgb(${Math.round(accentRGBA[0] * 255)}, ${Math.round(
        accentRGBA[1] * 255
    )}, ${Math.round(accentRGBA[2] * 255)})`

    const live = useRef({
        text,
        fontSpec,
        textColor,
        shade,
        accentRGBA,
        reach,
        speed,
        damping,
        hg,
    })
    live.current.text = text
    live.current.fontSpec = fontSpec
    live.current.textColor = textColor
    live.current.shade = shade
    live.current.accentRGBA = accentRGBA
    live.current.reach = reach
    live.current.speed = speed
    live.current.damping = damping
    live.current.hg = hg

    useEffect(() => {
        const host = hostRef.current
        const canvas = canvasRef.current
        if (!host || !canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

        const attrs: WebGLContextAttributes = {
            alpha: true,
            antialias: false,
            depth: false,
            stencil: false,
            premultipliedAlpha: true,
            powerPreference: "high-performance",
        }
        const gl = canvas.getContext("webgl", attrs)
        if (!gl) return
        const isGL2 =
            typeof WebGL2RenderingContext !== "undefined" &&
            gl instanceof WebGL2RenderingContext

        const prog = compile(gl, VERT, FRAG)
        const U = {
            map: gl.getUniformLocation(prog, "uMap"),
            res: gl.getUniformLocation(prog, "uRes"),
            atlas: gl.getUniformLocation(prog, "uAtlas"),
            ptr: gl.getUniformLocation(prog, "uPtr"),
            reach: gl.getUniformLocation(prog, "uReach"),
            cell: gl.getUniformLocation(prog, "uCell"),
            gap: gl.getUniformLocation(prog, "uGap"),
            text: gl.getUniformLocation(prog, "uText"),
            shade: gl.getUniformLocation(prog, "uShade"),
            accent: gl.getUniformLocation(prog, "uAccent"),
        }

        const quad = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, quad)
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW
        )
        gl.enableVertexAttribArray(0)
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
        gl.disable(gl.BLEND)

        const tex = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, tex)
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGBA,
            1,
            1,
            0,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 0, 255])
        )
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

        let alive = true

        let boxW = Math.max(1, host.offsetWidth)
        let boxH = Math.max(1, host.offsetHeight)
        let boxDirty = true
        let dpr = 1
        let bufW = 0
        let bufH = 0

        let atlasRatioW = 1
        let atlasRatioH = 1
        let atlasKey = ""

        function drawFontPx() {
            const f = live.current.fontSpec
            const desired = f.size * (boxW / REF_WIDTH)
            const probe = document.createElement("canvas").getContext("2d")
            if (!probe) return desired
            probe.font = fontString(f, 100)
            return Math.min(desired, boxW * 0.94 / (probe.measureText(live.current.text).width / 100 + 0.24))
        }

        function resize() {
            boxW = Math.max(1, host!.offsetWidth)
            boxH = Math.max(1, host!.offsetHeight)
            dpr = Math.min(MAX_DPR, window.devicePixelRatio || 1)
            const w = Math.max(1, Math.round(boxW * dpr))
            const h = Math.max(1, Math.round(boxH * dpr))
            if (w === bufW && h === bufH) return
            bufW = w
            bufH = h
            canvas!.width = w
            canvas!.height = h
        }

        function rebuildAtlas() {
            const L = live.current
            const f = L.fontSpec
            const px = Math.max(8, drawFontPx())
            const atlas = buildAtlas(L.text || " ", f, px, dpr)
            if (!atlas) return
            atlasRatioW = Math.max(1e-4, atlas.cssW / px)
            atlasRatioH = Math.max(1e-4, atlas.cssH / px)

            if (typeof document !== "undefined" && document.fonts) {
                try {
                    const probe = fontString(f, 64)
                    if (!document.fonts.check(probe)) {
                        const again = () => {
                            if (alive) atlasKey = ""
                        }
                        document.fonts.load(probe, L.text).then(again, again)
                    }
                } catch (e) {
                }
            }
            gl!.bindTexture(gl!.TEXTURE_2D, tex)
            gl!.pixelStorei(gl!.UNPACK_FLIP_Y_WEBGL, true)
            gl!.texImage2D(
                gl!.TEXTURE_2D,
                0,
                gl!.RGBA,
                gl!.RGBA,
                gl!.UNSIGNED_BYTE,
                atlas.canvas
            )
            gl!.pixelStorei(gl!.UNPACK_FLIP_Y_WEBGL, false)
            const cw = atlas.canvas.width
            const ch = atlas.canvas.height
            const pot = (cw & (cw - 1)) === 0 && (ch & (ch - 1)) === 0

            if (isGL2 || pot) {
                gl!.generateMipmap(gl!.TEXTURE_2D)
                gl!.texParameteri(
                    gl!.TEXTURE_2D,
                    gl!.TEXTURE_MIN_FILTER,
                    gl!.LINEAR_MIPMAP_LINEAR
                )
            } else {
                gl!.texParameteri(
                    gl!.TEXTURE_2D,
                    gl!.TEXTURE_MIN_FILTER,
                    gl!.LINEAR
                )
            }
        }

        const target = { x: -0.5, y: 0.5 }
        const eased = { x: -0.5, y: 0.5 }
        const prev = { x: -0.5, y: 0.5 }
        let hasPointer = false

        const onMove = (e: PointerEvent) => {
            hasPointer = true

            const r = host!.getBoundingClientRect()
            if (r.width <= 0 || r.height <= 0) return
            target.x = (e.clientX - r.left) / r.width
            target.y = 1 - (e.clientY - r.top) / r.height
        }
        host.addEventListener("pointermove", onMove)

        let raf = 0
        let last = 0
        let running = true

        function sync() {
            const L = live.current
            if (boxDirty) {
                boxDirty = false
                resize()
            }
            const f = L.fontSpec
            const key = [
                L.text,
                f.family,
                f.weight,
                f.style,
                f.letterSpacing,
                dpr,
                Math.ceil(Math.max(8, drawFontPx()) / 64),
            ].join("|")
            if (key !== atlasKey) {
                atlasKey = key
                rebuildAtlas()
            }
        }

        function step(dt: number) {
            const L = live.current
            const rate = Math.max(0, L.speed) / SPEED_REF

            if (!hasPointer) {
                const band = (atlasRatioH * Math.max(8, drawFontPx())) / boxH
                target.x += dt * SWEEP_RATE * rate
                target.y = (1 - band) / 2 + SWEEP_BAND * band
                if (target.x > 1.5) {
                    target.x = -0.5
                    eased.x = -0.5
                    prev.x = -0.5
                }
            }

            const damp = clamp((L.damping / 100) * DAMP_REF * dt, 0, 1)
            prev.x = eased.x
            prev.y = eased.y
            eased.x += (target.x - eased.x) * damp
            eased.y += (target.y - eased.y) * damp
        }

        function writeLabels() {
            const L = live.current
            const el = labelRefs.current[0]
            if (!el) return
            const cellPx = Math.max(1, L.hg.size)
            const cx = eased.x * boxW
            const cyUp = eased.y * boxH

            const col = Math.floor(cx / cellPx)
            const rowUp = Math.floor(cyUp / cellPx)
            const row = Math.max(0, Math.ceil(boxH / cellPx) - 1 - rowUp)
            el.style.transform = `translate(${(col + 1) * cellPx + 6}px, ${
                boxH - (rowUp + 1) * cellPx - 16
            }px)`
            el.textContent = `${col}, ${row}`
        }

        function draw() {
            const L = live.current
            const tc = parseColor(L.textColor, [0.859, 0.918, 0.992, 1])
            const sc = parseColor(L.shade, [0.035, 0.063, 0.102, 1])
            const ac = L.accentRGBA

            gl!.viewport(0, 0, bufW, bufH)
            gl!.useProgram(prog)
            gl!.uniform1i(U.map, 0)
            gl!.activeTexture(gl!.TEXTURE0)
            gl!.bindTexture(gl!.TEXTURE_2D, tex)
            gl!.uniform2f(U.res, boxW, boxH)
            const px = Math.max(8, drawFontPx())
            gl!.uniform2f(U.atlas, atlasRatioW * px, atlasRatioH * px)
            gl!.uniform2f(U.ptr, eased.x, eased.y)
            gl!.uniform1f(U.reach, Math.max(1, L.reach) / boxW)
            gl!.uniform1f(U.cell, Math.max(1, L.hg.size))
            gl!.uniform1f(U.gap, clamp(L.hg.gap, 0, 80) / 100)
            gl!.uniform3f(U.text, tc[0], tc[1], tc[2])
            gl!.uniform3f(U.shade, sc[0], sc[1], sc[2])
            gl!.uniform4f(U.accent, ac[0], ac[1], ac[2], ac[3])
            gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4)
        }

        const frame = (now: number) => {
            const dt = last ? Math.min(0.1, (now - last) / 1000) : 0
            last = now
            sync()
            step(dt)
            writeLabels()
            draw()
            raf = requestAnimationFrame(frame)
        }

        const gate = () => {
            if (running && !document.hidden) {
                if (!raf) {
                    last = 0
                    raf = requestAnimationFrame(frame)
                }
            } else if (raf) {
                cancelAnimationFrame(raf)
                raf = 0
            }
        }

        const ro = new ResizeObserver(() => {
            boxDirty = true
        })
        ro.observe(host)
        document.addEventListener("visibilitychange", gate)

        if (typeof document !== "undefined" && document.fonts) {
            document.fonts.ready.then(
                () => { if (alive) atlasKey = "" },
                () => {}
            )
        }

        setReady(true)
        gate()

        return () => {
            alive = false
            running = false
            if (raf) cancelAnimationFrame(raf)
            ro.disconnect()
            host.removeEventListener("pointermove", onMove)
            document.removeEventListener("visibilitychange", gate)
            gl.deleteTexture(tex)
            gl.deleteBuffer(quad)
            gl.deleteProgram(prog)

        }

    }, [])

    return (
        <div
            aria-hidden="true"
            ref={hostRef}
            style={{
                position: "relative",
                overflow: "hidden",
                background,

                minWidth: 0,
                minHeight: 0,
                width: "100%",
                height: "100%",
                ...style,
            }}
        >
            <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: fontSpec.family, fontWeight: fontSpec.weight, fontSize: "clamp(20px, 5.5vw, 100px)", letterSpacing: fontSpec.letterSpacing, color: textColor, opacity: ready ? 0 : 1 }}>
                {text}
            </span>
            <canvas aria-hidden="true"
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                }}
            />
            {hg.labels
                ? [0].map((i) => (
                      <div
                          key={i}
                          ref={(el) => {
                              labelRefs.current[i] = el
                          }}
                          style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              opacity: LABEL_MAX,
                              pointerEvents: "none",
                              whiteSpace: "nowrap",
                              fontFamily:
                                  "ui-monospace, SFMono-Regular, Menlo, monospace",
                              fontSize: 11,
                              letterSpacing: "0.08em",
                              color: labelColor,
                          }}
                      />
                  ))
                : null}
        </div>
    )
}


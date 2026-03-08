'use client'

import Scene from "@/components/canvas/Scene"

export default function Page() {
  return (
    <>
      {/* 3D Scene */}
      <Scene />

      <main>

        {/* HERO */}
        <section id="hero">
          <div className="cinematic-text">
            <h1 className="display tracking-[0.25em]">HELAS</h1>
            <p className="doto uppercase mt-4 text-sm tracking-widest">
              Speculative Future Memories
            </p>
          </div>
        </section>

        {/* PROLOGUE */}
        <section id="prologue">
          <div className="cinematic-text">
            <h2>Prologue</h2>
            <p className="mt-6 text-lg opacity-80">
              A statue facing the horizon. A figure emerging from the
              landscape of colonial memory.
            </p>
          </div>
        </section>

        {/* LANDSCAPE */}
        <section id="landscape">
          <div className="cinematic-text">
            <h2>In A Landscape</h2>
            <p className="mt-6 text-lg opacity-80">
              Works exploring the fictional presence of Helas within the
              visual culture of Mooi Indie painting.
            </p>
          </div>
        </section>

        {/* MEMORIES */}
        <section id="memories">
          <div className="cinematic-text">
            <h2>Pseudo Memories</h2>
            <p className="mt-6 text-lg opacity-80">
              Speculative archives of a future landscape where memory becomes
              architecture.
            </p>
          </div>
        </section>

      </main>
    </>
  )
}

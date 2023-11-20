"use client";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      
      {/* Favicon der Seite setzen */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      {/* Titel der Webseite festlegen */}
      <title>Wetter Wandel Wizard</title>

      {/* Überschrift der Webseite */}
      <h1 className="text-6xl font-bold">Hello World</h1>

      {/* Großes Logo der Webseite anzeigen */}
      <img src="/favicon.svg" alt="logo" width={500} height={500} />

      {/* Begrüßungstexte */}
      <p className="text-2xl font-bold">Willkommen bei Wetter Wandel Wizard</p>
      <p className="text-sm">Viel Spaß!</p>

      {/* Stilisierter Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Hier ist ein stilisierter Button
      </button>

      {/* Stilisierter Link zu einer externen Ressource */}
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-blue-500 hover:text-blue-800">
        Hier ist ein stilisierter Link
      </a>

    </main>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Billions Supermasks</h1>
        <p className="text-gray-600">Starter project deployed on Vercel</p>
        <div className="mt-6">
          <a
            className="inline-block px-4 py-2 border rounded hover:bg-gray-100"
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
          >
            Deploy on Vercel
          </a>
        </div>
      </div>
    </main>
  )
}

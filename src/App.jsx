export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      <header className="flex-grow flex items-center justify-center text-center">
        <div className="px-6">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to My Landing Page
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Built with React 19 + Vite + TailwindCSS
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </header>
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Company
      </footer>
    </div>
  )
}

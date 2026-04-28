export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center mb-10">
          <h1 className="mt-6 text-4xl text-white font-bold text-center tracking-tight">
            Prime <span className="text-red-600">Burger</span>
          </h1>
        </div>

        <main className="w-full bg-[#1e1e1e] px-3 pb-3 rounded-t-3xl">
          {children}
        </main>
    </div>
  );
}
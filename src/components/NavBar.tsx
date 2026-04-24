export const NavBar = () => {
    return (
        <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-border/50 px-3">
            <div className="container flex items-center justify-between h-16">
                <h1 className="text-white font-bold text-2xl">Prime <span className="text-red-600 font-bold">Burguer</span></h1>
            </div>
        </header>
    )
}
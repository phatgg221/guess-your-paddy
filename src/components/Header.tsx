const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <a href="/" className="flex items-center gap-2">
          <img src="logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-semibold text-crop-primary">
            Guess Your Paddy
          </span>
        </a>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <a
            href="/about"
            className="text-sm font-medium transition-colors hover:text-crop-secondary"
          >
            About
          </a>
          <a
            href="/how-it-works"
            className="text-sm font-medium transition-colors hover:text-crop-secondary"
          >
            How It Works
          </a>
          <a
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-crop-secondary"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Sprout } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Sprout className="h-6 w-6 text-crop-primary" />
          <span className="text-xl font-semibold text-crop-primary">CropScan</span>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <a 
            href="#" 
            className="text-sm font-medium transition-colors hover:text-crop-secondary"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-sm font-medium transition-colors hover:text-crop-secondary"
          >
            How It Works
          </a>
          <a 
            href="#" 
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

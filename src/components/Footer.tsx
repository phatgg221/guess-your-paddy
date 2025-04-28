
import React from 'react';
import { Sprout } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Sprout className="h-5 w-5 text-crop-primary" />
            <span className="text-lg font-semibold text-crop-primary">CropScan</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-crop-primary">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-crop-primary">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-crop-primary">Contact</a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CropScan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

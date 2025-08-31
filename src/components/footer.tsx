import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm font-light tracking-wide">
                © 2025 ByteTheCarrot.dev. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-sm font-light tracking-wide hover:text-white transition-colors flex items-center gap-1"
              >
                 <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-sm font-light tracking-wide hover:text-white transition-colors flex items-center gap-1"
              >
                 <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-sm font-light tracking-wide hover:text-white transition-colors flex items-center gap-1"
              >
                 <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
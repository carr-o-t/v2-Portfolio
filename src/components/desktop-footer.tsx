import { personalInfo } from '@/entities';
import { cn } from '@/lib/utils';
import { Copyright, Github, Linkedin, Mail } from 'lucide-react';
import React, { useState } from 'react';

const DesktopFooter: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* Desktop Vertical Footer */}
            <footer className="fixed left-0 bottom-0 z-10">
                <div className="flex flex-col items-center p-6 space-y-6">
                    {/* Social Icons */}
                    <div className="flex flex-col space-y-4">
                        <a
                            href={`mailto:${personalInfo.social_profiles.email}`}
                            className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-foreground hover:text-foreground transition-colors bg-theme-btn-beige/50 backdrop-blur-sm"
                        >
                            <Mail size={16} />
                        </a>
                        <a
                            href={personalInfo.social_profiles.linkedin}
                            className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-foreground hover:text-foreground transition-colors bg-theme-btn-beige/50 backdrop-blur-sm"
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href={personalInfo.social_profiles.github}
                            className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-foreground hover:text-foreground transition-colors bg-theme-btn-beige/50 backdrop-blur-sm"
                        >
                            <Github size={16} />
                        </a>
                        {/* TODO: Find X icon */}
                        {/* <a
                            href={personalInfo.social_profiles.twitter}
                            className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-foreground hover:text-foreground transition-colors bg-theme-btn-beige/50 backdrop-blur-sm"
                        >
                            <Twitter size={16} />
                        </a> */}
                    </div>

                    {/* Copyright with expand effect */}
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <div
                            className={cn("flex items-center cursor-pointer p-2 bg-theme-btn-beige/50 backdrop-blur-sm border rounded-full", isHovered && "border-primary")}
                            onMouseEnter={(e) => {
                                e.stopPropagation();
                                setIsHovered(true)
                            }}
                            onMouseLeave={(e) => {
                                e.stopPropagation();
                                setIsHovered(false)
                            }}
                        >
                            <Copyright size={14} className="text-muted-foreground" />
                            <div className={`absolute left-full ml-2 overflow-hidden transition-all duration-300 ease-out p-2 border bg-theme-btn-beige/50 backdrop-blur-sm rounded-full ${isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
                                }`}>
                                <span className="text-xs text-muted-foreground whitespace-nowrap">
                                    2025 ByteTheCarrot.dev. All rights reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default DesktopFooter;
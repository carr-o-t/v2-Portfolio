import { Badge } from "@/components/ui/badge";
import { V1_PORTFOLIO_URL } from "@/config";
import { comingSoonMessages, personalInfo } from "@/entities";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

interface ComingSoonProps {
    page?: 'works' | 'contact' | 'cv' | 'default';
}

const ComingSoon = ({ page = 'default' }: ComingSoonProps) => {
    const message = comingSoonMessages[page] || comingSoonMessages.default;
    return (
        <div className="min-h-screen py-12 md:py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16 space-x-4">
                    <div className="flex flex-wrap gap-4 items-center justify-center mb-6">
                        <Badge variant="outline" className="py-1 px-3 font-light border-neutral-300 text-neutral-600">
                            Coming Soon
                        </Badge>
                        <a href={V1_PORTFOLIO_URL} target="_top" className={cn("")}>
                            <Badge className="group py-1 px-3 font-light uppercase cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out ">
                                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                                    Check out my works on Portfolio V1 ↗
                                </span>
                            </Badge>
                        </a>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-light text-neutral-800 mb-6 !ml-0">
                        {message.title}
                        <span className="text-primary block"> {message.subtitle}</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl !mx-auto leading-relaxed">
                        {message.description}
                    </p>
                </div>

                <div className="text-center space-y-6">
                    {message.showContact && (
                        <div className="flex justify-center">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="inline-flex items-center gap-2 bg-primary/80 hover:bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Get in Touch
                            </a>
                        </div>
                    )}
                    <p className="text-sm text-muted-foreground">
                        Check back soon for updates
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;

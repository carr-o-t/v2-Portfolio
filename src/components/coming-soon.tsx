import { Badge } from "@/components/ui/badge";
import { comingSoonMessages, personalInfo } from "@/entities";
import { Mail } from "lucide-react";

interface ComingSoonProps {
    page?: 'works' | 'contact' | 'cv' | 'default';
}

const ComingSoon = ({ page = 'default' }: ComingSoonProps) => {
    const message = comingSoonMessages[page] || comingSoonMessages.default;
    return (
        <div className="py-12 md:py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="py-1 px-3 font-light border-neutral-300 text-neutral-600 mb-6">
                        Coming Soon
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl font-light text-neutral-800 mb-6">
                        {message.title}
                        <span className="text-primary block"> {message.subtitle}</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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

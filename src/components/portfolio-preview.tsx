import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/entities";

const PortfolioPreview = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute top-40 right-32 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
                    <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-secondary rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="py-2 px-4 font-light border-primary/30 text-primary mb-6">
                            Portfolio Preview
                        </Badge>
                        <h1 className="text-5xl lg:text-7xl font-light text-foreground mb-6 leading-tight">
                            Front-End focused
                            <span className="text-primary block">Full-Stack Developer</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                            Building fast, scalable, and user-friendly web applications with modern technologies
                        </p>

                        {/* Profile Section */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/20">
                                <img
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <h2 className="text-xl font-medium text-foreground">{personalInfo.name}</h2>
                                <p className="text-muted-foreground">{personalInfo.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPreview;

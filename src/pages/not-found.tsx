import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Home } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="min-h-screen py-12 md:py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="py-1 px-3 font-light border-neutral-300 text-neutral-600 mb-6">
                        Error 404
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl font-light text-neutral-800 mb-6">
                        Page not found
                        <span className="text-primary block"> in the wild</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        The page you're looking for seems to have wandered off.
                        Don't worry, let's get you back on track.
                    </p>
                </div>

                <div className="text-center space-y-6">
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-primary/80 hover:bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-colors"
                        >
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Go Back
                        </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Tried to access: <span className="font-mono text-neutral-600">{location.pathname}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
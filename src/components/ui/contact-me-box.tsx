import { ArrowRight, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./button"

export const ContactMeBox = () => {
    return (
        <div className="h-48 md:h-auto bg-theme-box-bg rounded-[14px] p-6 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-500">
            <Sparkles className="w-8 h-8 text-theme-btn-text mb-3" />
            <h3 className="text-lg font-light text-theme-btn-text mb-2">Have an idea?</h3>
            <p className="text-sm text-theme-btn-text font-light leading-relaxed mb-4">
                Let's turn your vision into a reality.
            </p>
            <Link to={"/contact"}>
                <Button size="sm" className="bg-primary/80 hover:bg-primary text-white">
                    Get In Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </Link>
        </div>
    )
}
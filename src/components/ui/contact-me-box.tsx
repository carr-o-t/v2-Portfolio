import { Link } from 'react-router-dom'
import { Icons } from '../Icons'
import { Button } from './button'

export const ContactMeBox = () => {
  return (
    <div className="flex h-48 flex-col items-center justify-center rounded-[14px] bg-theme-box-bg p-6 text-center transition-all duration-500 hover:shadow-lg md:h-auto">
      <Icons.Sparkles className="text-theme-btn-text mb-3 h-8 w-8" />
      <h3 className="text-theme-btn-text mb-2 text-lg font-light">
        Have an idea?
      </h3>
      <p className="text-theme-btn-text mb-4 text-sm font-light leading-relaxed">
        Let's turn your vision into a reality.
      </p>
      <Link to={'/contact'}>
        <Button size="sm" className="bg-primary/80 text-white hover:bg-primary">
          Get In Touch
          <Icons.ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}

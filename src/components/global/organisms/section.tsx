import { Link } from "react-router-dom"

import { Button } from "../atoms/button"

interface SectionProps {
  title: string
  description: string
  button?: string
  url?: string
  className?: string
}

function Section({
  title,
  description,
  button,
  url,
  className = ""
}: SectionProps) {
  return (
    <div className={`mb-8 flex items-center justify-between ${className}`}>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-secondary">{title}</h3>
        <p className="text-medium text-sm text-gray-600">{description}</p>
      </div>

      {button &&
        (url ? (
          <Link to={url}>
            <Button type="button" variant="default">
              {button}
            </Button>
          </Link>
        ) : (
          <Button type="button" variant="default">
            {button}
          </Button>
        ))}
    </div>
  )
}

export default Section

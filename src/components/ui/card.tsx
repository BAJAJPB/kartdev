import * as React from "react"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = "rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm"

    return <div ref={ref} className={`${baseClasses} ${className}`} {...props} />
  },
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = "flex flex-col space-y-1.5 p-6"

    return <div ref={ref} className={`${baseClasses} ${className}`} {...props} />
  },
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = "text-2xl font-semibold leading-none tracking-tight"

    return <h3 ref={ref} className={`${baseClasses} ${className}`} {...props} />
  },
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = "text-sm text-gray-600"

    return <p ref={ref} className={`${baseClasses} ${className}`} {...props} />
  },
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = "p-6 pt-0"

    return <div ref={ref} className={`${baseClasses} ${className}`} {...props} />
  },
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    const baseClasses = "flex items-center p-6 pt-0"

    return <div ref={ref} className={`${baseClasses} ${className}`} {...props} />
  },
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

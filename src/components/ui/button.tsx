import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function Button({ variant = "default", size = "md", className = "", children, ...props }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default: "bg-yellow-400 hover:bg-yellow-500 text-black focus:ring-yellow-400",
    outline: "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black focus:ring-yellow-400",
    ghost: "text-yellow-400 hover:bg-yellow-400/10 focus:ring-yellow-400",
  }

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

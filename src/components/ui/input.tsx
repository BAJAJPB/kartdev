import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className = "", id, ...props }: InputProps) {
  const baseStyles =
    "w-full px-4 py-3 bg-white text-black rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-500 transition-all duration-200"

  const errorStyles = error ? "ring-2 ring-red-500 focus:ring-red-500" : ""

  const classes = `${baseStyles} ${errorStyles} ${className}`

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <input id={id} className={classes} {...props} />
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  )
}

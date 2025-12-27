import React from 'react'

const Button = React.forwardRef(
  ({ className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  )
)
Button.displayName = 'Button'

export { Button }

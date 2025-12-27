import React from 'react'

const Input = React.forwardRef(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`flex h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }

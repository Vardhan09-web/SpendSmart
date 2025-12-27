import React from 'react'

const Textarea = React.forwardRef(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`flex min-h-[80px] w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400 disabled:opacity-50 disabled:cursor-not-allowed resize-none ${className}`}
      {...props}
    />
  )
)
Textarea.displayName = 'Textarea'

export { Textarea }

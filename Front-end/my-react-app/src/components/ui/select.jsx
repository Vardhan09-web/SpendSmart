import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Select = ({ children, ...props }) => {
  return <div className="select-wrapper" {...props}>{children}</div>
}

const SelectTrigger = React.forwardRef(
  ({ className = '', ...props }, ref) => (
    <button
      ref={ref}
      className={`flex items-center justify-between w-full h-10 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {props.children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  )
)
SelectTrigger.displayName = 'SelectTrigger'

const SelectValue = ({ placeholder }) => (
  <span className="text-slate-500">{placeholder}</span>
)

const SelectContent = ({ children, className = '' }) => (
  <div className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-700 bg-slate-900 text-white shadow-md animate-in fade-in-0 zoom-in-95 ${className}`}>
    {children}
  </div>
)

const SelectItem = ({ value, children, className = '' }) => (
  <button
    className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm hover:bg-slate-800 focus:bg-slate-800 focus:outline-none ${className}`}
    value={value}
  >
    {children}
  </button>
)

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }

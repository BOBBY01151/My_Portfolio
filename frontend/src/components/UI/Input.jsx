import { cn } from '../../lib/helpers'

const Input = ({ 
  className = '', 
  type = 'text', 
  error = false,
  ...props 
}) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
        error && 'border-destructive focus:ring-destructive',
        className
      )}
      {...props}
    />
  )
}

export default Input

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
        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400',
        error && 'border-red-500 focus:ring-red-500',
        className
      )}
      {...props}
    />
  )
}

export default Input

import { cn } from '../../lib/helpers'

const Section = ({ 
  children, 
  className = '', 
  id,
  ...props 
}) => {
  return (
    <section
      id={id}
      className={cn('py-16 px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </section>
  )
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  ...props 
}) => {
  return (
    <div className={cn('text-center mb-12', className)} {...props}>
      {title && (
        <h2 className={cn('text-3xl font-bold tracking-tight sm:text-4xl', titleClassName)}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={cn('mt-4 text-lg text-gray-600 dark:text-gray-400', subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

const SectionContent = ({ children, className = '', ...props }) => {
  return (
    <div className={cn('max-w-7xl mx-auto', className)} {...props}>
      {children}
    </div>
  )
}

export { Section, SectionHeader, SectionContent }

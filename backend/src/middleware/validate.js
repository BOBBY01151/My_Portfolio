const { z } = require('zod');

const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
      });
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }));
        
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: errorMessages
        });
      }
      next(error);
    }
  };
};

// Common validation schemas
const schemas = {
  login: z.object({
    body: z.object({
      username: z.string().min(3, 'Username must be at least 3 characters'),
      password: z.string().min(6, 'Password must be at least 6 characters')
    })
  }),
  
  project: z.object({
    body: z.object({
      title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
      description: z.string().min(1, 'Description is required').max(1000, 'Description too long'),
      shortDescription: z.string().min(1, 'Short description is required').max(200, 'Short description too long'),
      image: z.string().url('Invalid image URL'),
      technologies: z.array(z.string()).optional(),
      githubUrl: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
      liveUrl: z.string().url('Invalid live URL').optional().or(z.literal('')),
      finished: z.boolean().optional(),
      featured: z.boolean().optional(),
      order: z.number().int().min(0).optional()
    })
  }),
  
  experience: z.object({
    body: z.object({
      title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
      company: z.string().min(1, 'Company is required').max(100, 'Company name too long'),
      location: z.string().min(1, 'Location is required').max(100, 'Location too long'),
      startDate: z.string().datetime('Invalid start date'),
      endDate: z.string().datetime('Invalid end date').optional().or(z.literal('')),
      current: z.boolean().optional(),
      description: z.string().min(1, 'Description is required').max(2000, 'Description too long'),
      technologies: z.array(z.string()).optional(),
      type: z.enum(['full-time', 'part-time', 'contract', 'freelance', 'internship']).optional(),
      order: z.number().int().min(0).optional()
    })
  })
};

module.exports = { validate, schemas };

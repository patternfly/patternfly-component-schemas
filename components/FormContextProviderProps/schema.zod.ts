// Auto-generated Zod schema for FormContextProviderProps
import { z } from 'zod'

export const FormContextProviderPropsSchema = z.object({
  /** Any react node. Can optionally use render function to return context props. */
  children: z.any().optional(),
  /** Record of initial values */
  initialValues: z.unknown().optional()
})

export type FormContextProviderPropsProps = z.infer<typeof FormContextProviderPropsSchema>

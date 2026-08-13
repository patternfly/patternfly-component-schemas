// Auto-generated Zod schema for AboutModalBoxHeaderProps
import { z } from 'zod'

export const AboutModalBoxHeaderPropsSchema = z.object({
  /** Id to use for about modal box header */
  id: z.string(),
  /** Name of the product */
  productName: z.string().optional()
})

export type AboutModalBoxHeaderPropsProps = z.infer<typeof AboutModalBoxHeaderPropsSchema>

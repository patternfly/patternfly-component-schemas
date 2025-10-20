// Auto-generated Zod schema for AboutModalBoxHeader
import { z } from 'zod'

export const AboutModalBoxHeaderSchema = z.object({
  /** Id to use for about modal box header */
  id: z.string(),
  /** Name of the product */
  productName: z.string().optional()
})

export type AboutModalBoxHeaderProps = z.infer<typeof AboutModalBoxHeaderSchema>

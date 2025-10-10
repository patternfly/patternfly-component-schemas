// Auto-generated Zod schema for AboutModalBoxHeader
// Generated on: 2025-10-10T18:12:17.794Z
import { z } from 'zod'

export const AboutModalBoxHeaderSchema = z.object({
  /** Id to use for about modal box header */
  id: z.string(),
  /** Name of the product */
  productName: z.string().optional()
})

export type AboutModalBoxHeaderProps = z.infer<typeof AboutModalBoxHeaderSchema>

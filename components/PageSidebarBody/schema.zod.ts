// Auto-generated Zod schema for PageSidebarBody
// Generated on: 2025-10-10T18:12:17.773Z
import { z } from 'zod'

export const PageSidebarBodySchema = z.object({
  /** Content rendered inside the page sidebar body */
  children: z.any().optional(),
  /** Additional classes added to the page sidebar body */
  className: z.string().optional(),
  /** Flag indicating that the page sidebar body is for a context selector/perspective switcher */
  isContextSelector: z.boolean().optional(),
  /** Flag indicating that the page sidebar body should fill the available vertical space. */
  isFilled: z.boolean().optional(),
  /** Flag indicating that the page sidebar body should use page insets. */
  usePageInsets: z.boolean().optional()
})

export type PageSidebarBodyProps = z.infer<typeof PageSidebarBodySchema>

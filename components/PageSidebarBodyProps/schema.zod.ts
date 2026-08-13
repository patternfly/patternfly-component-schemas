// Auto-generated Zod schema for PageSidebarBodyProps
import { z } from 'zod'

export const PageSidebarBodyPropsSchema = z.object({
  /** Content rendered inside the page sidebar body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the page sidebar body */
  className: z.string().optional(),
  /** Flag indicating that the page sidebar body is for a context selector/perspective switcher */
  isContextSelector: z.boolean().optional(),
  /** Flag indicating that the page sidebar body should fill the available vertical space. */
  isFilled: z.boolean().optional(),
  /** Flag indicating that the page sidebar body should use page insets. */
  usePageInsets: z.boolean().optional()
})

export type PageSidebarBodyPropsProps = z.infer<typeof PageSidebarBodyPropsSchema>

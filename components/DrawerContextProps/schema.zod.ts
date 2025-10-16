// Auto-generated Zod schema for DrawerContextProps
// Generated on: 2025-10-16T19:02:51.749Z
import { z } from 'zod'

export const DrawerContextPropsSchema = z.object({
  drawerContentRef: z.any().optional(),
  drawerRef: z.any().optional(),
  isExpanded: z.boolean(),
  isInline: z.boolean(),
  isStatic: z.boolean(),
  onExpand: z.any().optional(),
  position: z.string().optional()
})

export type DrawerContextPropsProps = z.infer<typeof DrawerContextPropsSchema>

// Auto-generated Zod schema for NavContextProps
// Generated on: 2025-10-16T18:45:33.855Z
import { z } from 'zod'

export const NavContextPropsSchema = z.object({
  flyoutRef: z.unknown().optional(),
  isHorizontal: z.boolean().optional(),
  navRef: z.any().optional(),
  onSelect: z.any().optional(),
  onToggle: z.any().optional(),
  setFlyoutRef: z.function().optional(),
  updateIsScrollable: z.function().optional()
})

export type NavContextPropsProps = z.infer<typeof NavContextPropsSchema>

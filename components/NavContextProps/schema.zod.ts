// Auto-generated Zod schema for NavContextProps
import { z } from 'zod'

export const NavContextPropsSchema = z.object({
  flyoutRef: z.unknown().optional(),
  isHorizontal: z.boolean().optional(),
  navRef: z.any().optional(),
  onSelect: z.any().optional(),
  onToggle: z.any().optional(),
  setFlyoutRef: z.custom<(ref: React.Ref<HTMLLIElement>) => void>().optional(),
  updateIsScrollable: z.custom<(isScrollable: boolean) => void>().optional()
})

export type NavContextPropsProps = z.infer<typeof NavContextPropsSchema>

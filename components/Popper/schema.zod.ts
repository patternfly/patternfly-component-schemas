// Auto-generated Zod schema for Popper
import { z } from 'zod'

export const PopperSchema = z.object({
  animationDuration: z.unknown().optional().default(0),
  appendTo: z.unknown().optional().default('() => document.body'),
  direction: z.unknown().optional().default('down'),
  distance: z.unknown().optional().default(0),
  enableFlip: z.unknown().optional().default(true),
  entryDelay: z.unknown().optional().default(0),
  exitDelay: z.unknown().optional().default(0),
  flipBehavior: z.unknown().optional().default('flip'),
  isVisible: z.unknown().optional().default(true),
  minWidth: z.unknown().optional().default('trigger'),
  onHidden: z.unknown().optional().default('() => {}'),
  onHide: z.unknown().optional().default('() => {}'),
  onMount: z.unknown().optional().default('() => {}'),
  onShow: z.unknown().optional().default('() => {}'),
  onShown: z.unknown().optional().default('() => {}'),
  position: z.unknown().optional().default('start'),
  preventOverflow: z.unknown().optional().default(false),
  zIndex: z.unknown().optional().default(9999)
})

export type PopperProps = z.infer<typeof PopperSchema>

// Auto-generated Zod schema for Popper
// Generated on: 2025-10-10T18:12:17.761Z
import { z } from 'zod'

export const PopperSchema = z.object({
  animationDuration: z.any().optional().default(0),
  appendTo: z.any().optional().default('() => document.body'),
  direction: z.any().optional().default('down'),
  distance: z.any().optional().default(0),
  enableFlip: z.any().optional().default(true),
  entryDelay: z.any().optional().default(0),
  exitDelay: z.any().optional().default(0),
  flipBehavior: z.any().optional().default('flip'),
  isVisible: z.any().optional().default(true),
  minWidth: z.any().optional().default('trigger'),
  onHidden: z.any().optional().default('() => {}'),
  onHide: z.any().optional().default('() => {}'),
  onMount: z.any().optional().default('() => {}'),
  onShow: z.any().optional().default('() => {}'),
  onShown: z.any().optional().default('() => {}'),
  position: z.any().optional().default('start'),
  preventOverflow: z.any().optional().default(false),
  zIndex: z.any().optional().default(9999)
})

export type PopperProps = z.infer<typeof PopperSchema>

// Auto-generated Zod schema for PopoverDialog
// Generated on: 2025-10-10T18:12:17.771Z
import { z } from 'zod'

export const PopoverDialogSchema = z.object({
  /** PopoverDialog body */
  children: z.any().optional().default('null'),
  /** PopoverDialog additional class */
  className: z.string().optional().default('null'),
  /** PopoverDialog position */
  position: z.enum(['top', 'bottom', 'left', 'right']).optional().default('top')
})

export type PopoverDialogProps = z.infer<typeof PopoverDialogSchema>

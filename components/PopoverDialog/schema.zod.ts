// Auto-generated Zod schema for PopoverDialog
import { z } from 'zod'

export const PopoverDialogSchema = z.object({
  /** PopoverDialog body */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** PopoverDialog additional class */
  className: z.string().optional().default('null'),
  /** PopoverDialog position */
  position: z.enum(['top', 'bottom', 'left', 'right']).optional().default('top')
})

export type PopoverDialogProps = z.infer<typeof PopoverDialogSchema>

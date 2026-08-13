// Auto-generated Zod schema for PopoverDialogProps
import { z } from 'zod'

export const PopoverDialogPropsSchema = z.object({
  /** PopoverDialog body */
  children: z.custom<React.ReactNode>(),
  /** PopoverDialog additional class */
  className: z.string().optional(),
  /** PopoverDialog position */
  position: z.enum(['top', 'bottom', 'left', 'right']).optional()
})

export type PopoverDialogPropsProps = z.infer<typeof PopoverDialogPropsSchema>

// Auto-generated Zod schema for CardHeaderActionsObject
import { z } from 'zod'

export const CardHeaderActionsObjectSchema = z.object({
  /** Actions of the card header */
  actions: z.custom<React.ReactNode>(),
  /** Additional classes added to the actions wrapper */
  className: z.string().optional(),
  /** Flag indicating that the actions have no offset */
  hasNoOffset: z.boolean().optional()
})

export type CardHeaderActionsObjectProps = z.infer<typeof CardHeaderActionsObjectSchema>

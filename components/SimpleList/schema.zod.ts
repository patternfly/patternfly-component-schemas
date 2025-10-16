// Auto-generated Zod schema for SimpleList
// Generated on: 2025-10-16T19:25:27.752Z
import { z } from 'zod'

export const SimpleListSchema = z.object({
  /** aria-label for the <ul> element that wraps the SimpleList items. */
  'aria-label': z.string().optional(),
  /** Content rendered inside the SimpleList */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the SimpleList container */
  className: z.string().optional().default(''),
  /** Indicates whether component is controlled by its internal state */
  isControlled: z.boolean().optional().default(true),
  /** Callback when an item is selected */
  onSelect: z.any().optional()
})

export type SimpleListProps = z.infer<typeof SimpleListSchema>

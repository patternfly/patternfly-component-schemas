// Auto-generated Zod schema for SimpleListProps
import { z } from 'zod'

export const SimpleListPropsSchema = z.object({
  /** Content rendered inside the SimpleList */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the SimpleList container */
  className: z.string().optional(),
  /** Indicates whether component is controlled by its internal state */
  isControlled: z.boolean().optional(),
  /** Callback when an item is selected */
  onSelect: z.any().optional(),
  /** aria-label for the <ul> element that wraps the SimpleList items. */
  'Unknown': z.string().optional()
})

export type SimpleListPropsProps = z.infer<typeof SimpleListPropsSchema>

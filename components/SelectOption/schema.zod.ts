// Auto-generated Zod schema for SelectOption
// Generated on: 2025-10-10T18:12:17.770Z
import { z } from 'zod'

export const SelectOptionSchema = z.object({
  /** Anything which can be rendered in a select option */
  children: z.any().optional(),
  /** Classes applied to root element of select option */
  className: z.string().optional(),
  /** Description of the option */
  description: z.any().optional(),
  /** Indicates the option has a checkbox */
  hasCheckbox: z.boolean().optional(),
  /** Render option with icon */
  icon: z.any().optional(),
  /** Indicates the option is disabled */
  isDisabled: z.boolean().optional(),
  /** Render an external link icon on focus or hover, and set the link's
"target" attribute to a value of "_blank". */
  isExternalLink: z.boolean().optional(),
  /** Indicates the option is focused */
  isFocused: z.boolean().optional(),
  /** Indicates the option is selected */
  isSelected: z.boolean().optional(),
  /** Identifies the component in the Select onSelect callback */
  value: z.any().optional()
})

export type SelectOptionProps = z.infer<typeof SelectOptionSchema>

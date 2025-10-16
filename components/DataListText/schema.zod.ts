// Auto-generated Zod schema for DataListText
// Generated on: 2025-10-16T18:45:33.876Z
import { z } from 'zod'

export const DataListTextSchema = z.object({
  /** Content rendered within the data list text */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the data list text */
  className: z.string().optional().default(''),
  /** Determines which element to render as a data list text. Usually div or span */
  component: z.custom<React.ReactNode>().optional().default('span'),
  /** callback used to create the tooltip if text is truncated */
  onMouseEnter: z.function().optional().default('() => {}'),
  /** text to display on the tooltip */
  tooltip: z.string().optional().default(''),
  /** Determines which wrapping modifier to apply to the data list text */
  wrapModifier: z.enum(['nowrap', 'truncate', 'breakWord']).optional().default('null')
})

export type DataListTextProps = z.infer<typeof DataListTextSchema>

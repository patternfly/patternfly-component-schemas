// Auto-generated Zod schema for DataListTextProps
import { z } from 'zod'

export const DataListTextPropsSchema = z.object({
  /** Content rendered within the data list text */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the data list text */
  className: z.string().optional(),
  /** Determines which element to render as a data list text. Usually div or span */
  component: z.custom<React.ReactNode>().optional(),
  /** callback used to create the tooltip if text is truncated */
  onMouseEnter: z.custom<(event: any) => void>().optional(),
  /** text to display on the tooltip */
  tooltip: z.string().optional(),
  /** Determines which wrapping modifier to apply to the data list text */
  wrapModifier: z.enum(['nowrap', 'truncate', 'breakWord']).optional()
})

export type DataListTextPropsProps = z.infer<typeof DataListTextPropsSchema>

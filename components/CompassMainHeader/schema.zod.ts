// Auto-generated Zod schema for CompassMainHeader
import { z } from 'zod'

export const CompassMainHeaderSchema = z.object({
  /** Custom main header content. To opt into a default styling, use the title and toolbar props instead. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the main header */
  className: z.string().optional(),
  /** Additional props passed to the Panel that wraps the main header content when using the title or toolbar props. When using the
children prop, you should pass your own Panel. */
  panelProps: z.unknown().optional(),
  /** Styled title. If title or toolbar is provided, the children will be ignored. */
  title: z.custom<React.ReactNode>().optional(),
  /** Styled toolbar. If title or toolbar is provided, the children will be ignored. */
  toolbar: z.custom<React.ReactNode>().optional()
})

export type CompassMainHeaderProps = z.infer<typeof CompassMainHeaderSchema>

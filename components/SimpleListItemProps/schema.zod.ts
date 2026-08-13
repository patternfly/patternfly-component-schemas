// Auto-generated Zod schema for SimpleListItemProps
import { z } from 'zod'

export const SimpleListItemPropsSchema = z.object({
  /** Content rendered inside the SimpleList item */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the SimpleList <li> */
  className: z.string().optional(),
  /** Component type of the SimpleList item */
  component: z.enum(['button', 'a']).optional(),
  /** Additional classes added to the SimpleList <a> or <button> */
  componentClassName: z.string().optional(),
  /** Additional props added to the SimpleList <a> or <button> */
  componentProps: z.unknown().optional(),
  /** Default hyperlink location */
  href: z.string().optional(),
  /** Indicates if the link is current/highlighted */
  isActive: z.boolean().optional(),
  /** id for the item. */
  itemId: z.any().optional(),
  /** OnClick callback for the SimpleList item */
  onClick: z.any().optional(),
  /** Type of button SimpleList item */
  type: z.enum(['button', 'submit', 'reset']).optional()
})

export type SimpleListItemPropsProps = z.infer<typeof SimpleListItemPropsSchema>

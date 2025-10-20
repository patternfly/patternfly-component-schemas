// Auto-generated Zod schema for SimpleListItem
import { z } from 'zod'

export const SimpleListItemSchema = z.object({
  /** Content rendered inside the SimpleList item */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the SimpleList <li> */
  className: z.string().optional().default(''),
  /** Component type of the SimpleList item */
  component: z.enum(['button', 'a']).optional().default('button'),
  /** Additional classes added to the SimpleList <a> or <button> */
  componentClassName: z.string().optional().default(''),
  /** Additional props added to the SimpleList <a> or <button> */
  componentProps: z.unknown().optional(),
  /** Default hyperlink location */
  href: z.string().optional().default(''),
  /** Indicates if the link is current/highlighted */
  isActive: z.boolean().optional().default(false),
  /** id for the item. */
  itemId: z.any().optional(),
  /** OnClick callback for the SimpleList item */
  onClick: z.any().optional().default('() => {}'),
  /** Type of button SimpleList item */
  type: z.enum(['button', 'submit', 'reset']).optional().default('button')
})

export type SimpleListItemProps = z.infer<typeof SimpleListItemSchema>

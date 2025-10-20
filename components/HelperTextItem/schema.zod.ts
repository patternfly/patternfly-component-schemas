// Auto-generated Zod schema for HelperTextItem
import { z } from 'zod'

export const HelperTextItemSchema = z.object({
  /** Content rendered inside the helper text item. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the helper text item. */
  className: z.string().optional(),
  /** Sets the component type of the helper text item. */
  component: z.enum(['div', 'li']).optional().default('div'),
  /** Custom icon prefixing the helper text. This property will override the default icon when the variant property is passed in. */
  icon: z.custom<React.ReactNode>().optional(),
  /** ID for the helper text item. The value of this prop can be passed into a form component's
aria-describedby prop when you intend for only specific helper text items to be announced to
assistive technologies. */
  id: z.string().optional(),
  /** Text that is only accessible to screen readers in order to announce the variant of a helper text item.
This prop can only be used when the variant prop has a value other than "default". */
  screenReaderText: z.string().optional(),
  /** Variant styling of the helper text item. Will also render a default icon, which can be overridden
with the icon prop. */
  variant: z.enum(['default', 'indeterminate', 'warning', 'success', 'error']).optional().default('default')
})

export type HelperTextItemProps = z.infer<typeof HelperTextItemSchema>

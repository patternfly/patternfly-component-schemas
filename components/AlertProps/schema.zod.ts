// Auto-generated Zod schema for AlertProps
import { z } from 'zod'

export const AlertPropsSchema = z.object({
  /** Close button; use the alert action close button component. */
  actionClose: z.custom<React.ReactNode>().optional(),
  /** Action links; use a single alert action link component or multiple wrapped in an array
or React fragment. */
  actionLinks: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the alert. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes to add to the alert. */
  className: z.string().optional(),
  /** Sets the element to use as the alert title. Default is h4. */
  component: z.unknown().optional(),
  /** Set a custom icon to the alert. If not set the icon is set according to the variant. */
  customIcon: z.custom<React.ReactNode>().optional(),
  /** Uniquely identifies the alert. */
  id: z.string().optional(),
  /** Flag indicating that the alert is expandable. */
  isExpandable: z.boolean().optional(),
  /** Flag to indicate if the alert is inline. */
  isInline: z.boolean().optional(),
  /** Flag to indicate if the alert is in a live region. */
  isLiveRegion: z.boolean().optional(),
  /** Flag to indicate if the alert is plain. */
  isPlain: z.boolean().optional(),
  /** Function to be executed on alert timeout. Relevant when the timeout prop is set. */
  onTimeout: z.custom<() => void>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
be dismissed after that amount of time in milliseconds. */
  timeout: z.any().optional(),
  /** If the user hovers over the alert and `timeout` expires, this is how long to wait
before finally dismissing the alert. */
  timeoutAnimation: z.number().optional(),
  /** Title of the alert. */
  title: z.custom<React.ReactNode>(),
  /** Adds accessible text to the alert toggle. */
  toggleAriaLabel: z.string().optional(),
  /** Position of the tooltip which is displayed if text is truncated. */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** Truncate title to number of lines. */
  truncateTitle: z.number().optional(),
  /** Adds alert variant styles. */
  variant: z.enum(['success', 'danger', 'warning', 'info', 'custom']).optional(),
  /** Variant label text for screen readers. */
  variantLabel: z.string().optional()
})

export type AlertPropsProps = z.infer<typeof AlertPropsSchema>

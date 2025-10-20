// Auto-generated Zod schema for JumpLinks
import { z } from 'zod'

export const JumpLinksSchema = z.object({
  /** The index of the child Jump link to make active. */
  activeIndex: z.number().optional().default(0),
  /** Flag to always show the label when using `expandable` */
  alwaysShowLabel: z.boolean().optional().default(true),
  /** Adds an accessible label to the internal nav element. Defaults to the value of the label prop. */
  'aria-label': z.string().optional().default('typeof label === 'string' ? label : null'),
  /** Children nodes */
  children: z.custom<React.ReactNode>().optional(),
  /** Class for nav */
  className: z.string().optional(),
  /** When to collapse/expand at different breakpoints */
  expandable: z.record(z.unknown()).optional(),
  /** Whether to center children. */
  isCentered: z.boolean().optional(),
  /** On mobile whether or not the JumpLinks starts out expanded */
  isExpanded: z.boolean().optional().default(false),
  /** Whether the layout of children is vertical or horizontal. */
  isVertical: z.boolean().optional(),
  /** Label to add to nav element. */
  label: z.custom<React.ReactNode>().optional(),
  /** Offset to add to `scrollPosition`, potentially for a masthead which content scrolls under. */
  offset: z.number().optional().default(0),
  /** Reference to the scrollable element to spy on. Takes precedence over scrollableSelector. Not passing a scrollableRef or scrollableSelector disables spying. */
  scrollableRef: z.any().optional(),
  /** Selector for the scrollable element to spy on. Not passing a scrollableSelector or scrollableRef disables spying. */
  scrollableSelector: z.string().optional(),
  /** Whether the current entry in the navigation history should be replaced when a JumpLinksItem is clicked. By default a new entry will be pushed to the navigation history. */
  shouldReplaceNavHistory: z.boolean().optional().default(false),
  /** Aria label for expandable toggle */
  toggleAriaLabel: z.string().optional().default('Toggle jump links')
})

export type JumpLinksProps = z.infer<typeof JumpLinksSchema>

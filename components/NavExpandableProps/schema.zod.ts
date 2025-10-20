// Auto-generated Zod schema for NavExpandableProps
import { z } from 'zod'

export const NavExpandablePropsSchema = z.object({
  /** Additional props added to the NavExpandable <button> */
  buttonProps: z.unknown().optional(),
  /** Anything that can be rendered inside of the expandable list */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the container */
  className: z.string().optional(),
  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId: z.any().optional(),
  /** Identifier to use for the section aria label */
  id: z.string().optional(),
  /** If true makes the expandable list title active */
  isActive: z.boolean().optional(),
  /** Boolean to pragmatically expand or collapse section */
  isExpanded: z.boolean().optional(),
  /** allow consumer to optionally override this callback and manage expand state externally. if passed will not call Nav's onToggle. */
  onExpand: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** If defined, screen readers will read this text instead of the list title */
  srText: z.string().optional(),
  /** Title content shown for the expandable list */
  title: z.custom<React.ReactNode>()
})

export type NavExpandablePropsProps = z.infer<typeof NavExpandablePropsSchema>

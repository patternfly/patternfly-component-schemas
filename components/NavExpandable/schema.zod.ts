// Auto-generated Zod schema for NavExpandable
import { z } from 'zod'

export const NavExpandableSchema = z.object({
  /** Additional props added to the NavExpandable <button> */
  buttonProps: z.unknown().optional(),
  /** Anything that can be rendered inside of the expandable list */
  children: z.custom<React.ReactNode>().optional().default(''),
  /** Additional classes added to the container */
  className: z.string().optional().default(''),
  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId: z.any().optional().default('null'),
  /** Identifier to use for the section aria label */
  id: z.string().optional().default(''),
  /** If true makes the expandable list title active */
  isActive: z.boolean().optional().default(false),
  /** Boolean to pragmatically expand or collapse section */
  isExpanded: z.boolean().optional().default(false),
  /** allow consumer to optionally override this callback and manage expand state externally. if passed will not call Nav's onToggle. */
  onExpand: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  ouiaSafe: z.boolean().optional(),
  /** If defined, screen readers will read this text instead of the list title */
  srText: z.string().optional().default(''),
  /** Title content shown for the expandable list */
  title: z.custom<React.ReactNode>()
})

export type NavExpandableProps = z.infer<typeof NavExpandableSchema>

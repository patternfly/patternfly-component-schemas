// Auto-generated Zod schema for ExpandableSectionToggle
import { z } from 'zod'

export const ExpandableSectionToggleSchema = z.object({
  /** Content rendered inside the expandable toggle. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the expandable toggle. */
  className: z.string().optional().default(''),
  /** Id of the toggle's respective expandable section content. The value passed into this
property should match the contentId property of the main expandable section component. */
  contentId: z.string().optional(),
  /** Direction the toggle arrow should point when the expandable section is expanded. */
  direction: z.enum(['up', 'down']).optional().default('down'),
  /** Flag to determine toggle styling when the expandable content is truncated. */
  hasTruncatedContent: z.boolean().optional().default(false),
  /** Flag indicating if the expandable section is expanded. */
  isExpanded: z.boolean().optional().default(false),
  /** Callback function to toggle the expandable content. */
  onToggle: z.custom<(isExpanded: boolean) => void>().optional(),
  /** Id of the toggle. The value passed into this property should match the aria-labelledby
property of the main expandable section component. */
  toggleId: z.string().optional()
})

export type ExpandableSectionToggleProps = z.infer<typeof ExpandableSectionToggleSchema>

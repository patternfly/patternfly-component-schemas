// Auto-generated Zod schema for ExpandableSection
import { z } from 'zod'

export const ExpandableSectionSchema = z.object({
  /** Content rendered inside the expandable section. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the expandable section. */
  className: z.string().optional().default(''),
  /** Id of the content of the expandable section. When passing in the isDetached property, this
property's value should match the contentId property of the expandable section toggle sub-component. */
  contentId: z.string().optional(),
  /** Sets the direction of the expandable animation when isDetached is true. If this prop is not passed,
animation will not occur. */
  direction: z.enum(['up', 'down']).optional(),
  /** Display size variant. Set to "lg" for disclosure styling. */
  displaySize: z.enum(['default', 'lg']).optional().default('default'),
  /** Whether to show a toggle icon when variant is not truncated. If omitted, it is important to ensure the current state of the ExpandableSection is conveyed, most likely by having dynamic toggle text. */
  hasToggleIcon: z.boolean().optional(),
  /** Flag indicating that the expandable section and expandable toggle are detached from one another. */
  isDetached: z.boolean().optional().default(false),
  /** Flag to indicate if the content is expanded. */
  isExpanded: z.boolean().optional(),
  /** Flag to indicate if the content is indented. */
  isIndented: z.boolean().optional().default(false),
  /** Flag to indicate the width of the component is limited. Set to "true" for disclosure styling. */
  isWidthLimited: z.boolean().optional().default(false),
  /** Callback function to toggle the expandable section. Detached expandable sections should
use the onToggle property of the expandable section toggle sub-component. */
  onToggle: z.custom<Event>().optional().default('(event, isExpanded): void => undefined'),
  /** Accessible name via human readable string for the expandable section toggle. */
  toggleAriaLabel: z.string().optional().default('undefined'),
  /** Accessible name via space delimtted list of IDs for the expandable section toggle. */
  toggleAriaLabelledBy: z.string().optional().default('undefined'),
  /** React node that appears in the attached toggle in place of the toggleText property.
Can also be a function that receives the expanded state and returns a React node. */
  toggleContent: z.any().optional(),
  /** Icon shown in toggle when variant is not truncated. */
  toggleIcon: z.custom<React.ReactNode>().optional(),
  /** Id of the toggle of the expandable section, which provides an accessible name to the
expandable section content via the aria-labelledby attribute. When the isDetached property
is also passed in, the value of this property must match the toggleId property of the
expandable section toggle sub-component. */
  toggleId: z.string().optional(),
  /** Text that appears in the attached toggle. */
  toggleText: z.string().optional().default(''),
  /** Text that appears in the attached toggle when collapsed (will override toggleText if
both are specified; used for uncontrolled expandable with dynamic toggle text). */
  toggleTextCollapsed: z.string().optional().default(''),
  /** Text that appears in the attached toggle when expanded (will override toggleText if
both are specified; used for uncontrolled expandable with dynamic toggle text). */
  toggleTextExpanded: z.string().optional().default(''),
  /** The HTML element to use for the toggle wrapper. Can be 'div' (default) or any heading level.
When using heading elements, the button will be rendered inside the heading for proper semantics.
This is useful when the toggle text should function as a heading in the document structure. */
  toggleWrapper: z.enum(['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional(),
  /** Truncates the expandable content to the specified number of lines when using the
"truncate" variant. */
  truncateMaxLines: z.number().optional(),
  /** Determines the variant of the expandable section. When passing in "truncate" as the
variant, the expandable content will be truncated after 3 lines by default. */
  variant: z.enum(['default', 'truncate']).optional().default('default')
})

export type ExpandableSectionProps = z.infer<typeof ExpandableSectionSchema>

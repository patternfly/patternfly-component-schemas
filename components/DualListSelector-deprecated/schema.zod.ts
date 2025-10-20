// Auto-generated Zod schema for DualListSelector-deprecated
import { z } from 'zod'

export const DualListSelectorSchema = z.object({
  /** Optional callback for the dynamically built add all button */
  addAll: z.custom<React.ReactNode>().optional(),
  /** Accessible label for the dynamically built add all button */
  addAllAriaLabel: z.string().optional().default('Add all'),
  /** Tooltip content for the dynamically built add all button */
  addAllTooltip: z.custom<React.ReactNode>().optional(),
  /** Additional tooltip properties for the dynamically built add all tooltip */
  addAllTooltipProps: z.unknown().optional(),
  /** Optional callback for the dynamically built add selected button */
  addSelected: z.custom<React.ReactNode>().optional(),
  /** Accessible label for the dynamically built add selected button */
  addSelectedAriaLabel: z.string().optional().default('Add selected'),
  /** Tooltip content for the dynamically built add selected button */
  addSelectedTooltip: z.custom<React.ReactNode>().optional(),
  /** Additional tooltip properties for the dynamically built add selected tooltip */
  addSelectedTooltipProps: z.unknown().optional(),
  /** Options to display in the dynamically built available options pane. When using trees, the options should be in the DualListSelectorTreeItemData[] format. */
  availableOptions: z.any().optional().default('[]'),
  /** Actions to be displayed above the dynamically built available options pane. */
  availableOptionsActions: z.array(z.custom<React.ReactNode>()).optional(),
  /** Accessible label for the search input on the dynamically built available options pane. */
  availableOptionsSearchAriaLabel: z.string().optional().default('Available search input'),
  /** Status message to display above the dynamically built available options pane. */
  availableOptionsStatus: z.string().optional(),
  /** Title applied to the dynamically built available options pane. */
  availableOptionsTitle: z.string().optional().default('Available options'),
  /** Content to be rendered in the dual list selector. Panes & controls will not be built dynamically when children are provided. */
  children: z.custom<React.ReactNode>().optional().default(''),
  /** Options to display in the dynamically built chosen options pane. When using trees, the options should be in the DualListSelectorTreeItemData[] format. */
  chosenOptions: z.any().optional().default('[]'),
  /** Actions to be displayed above the dynamically built chosen options pane. */
  chosenOptionsActions: z.array(z.custom<React.ReactNode>()).optional(),
  /** Accessible label for the search input on the dynamically built chosen options pane. */
  chosenOptionsSearchAriaLabel: z.string().optional().default('Chosen search input'),
  /** Status message to display above the dynamically built chosen options pane. */
  chosenOptionsStatus: z.string().optional(),
  /** Title applied to the dynamically built chosen options pane. */
  chosenOptionsTitle: z.string().optional().default('Chosen options'),
  /** Additional classes applied to the dual list selector. */
  className: z.string().optional(),
  /** Accessible label for the dynamically built controls between the two panes. */
  controlsAriaLabel: z.string().optional().default('Selector controls'),
  /** Optional filter function for custom filtering based on search string. Used with a dynamically built search input. */
  filterOption: z.custom<React.ReactNode>().optional(),
  /** Id of the dual list selector. */
  id: z.string().optional(),
  /** Flag indicating if the dual list selector is in a disabled state */
  isDisabled: z.boolean().optional().default(false),
  /** Flag indicating a search bar should be included above both the dynamically built available and chosen panes. */
  isSearchable: z.boolean().optional(),
  /** Flag indicating if the dual list selector uses trees instead of simple lists */
  isTree: z.boolean().optional().default(false),
  /** A callback for when the search input value for the dynamically built available options changes. */
  onAvailableOptionsSearchInputChanged: z.custom<Event>().optional(),
  /** A callback for when the search input value for the dynamically built chosen options changes. */
  onChosenOptionsSearchInputChanged: z.custom<Event>().optional(),
  /** Callback fired every time dynamically built options are chosen or removed */
  onListChange: z.custom<React.ReactNode>().optional(),
  /** Optional callback fired when a dynamically built option is checked */
  onOptionCheck: z.any().optional(),
  /** Optional callback fired when a dynamically built option is selected */
  onOptionSelect: z.any().optional(),
  /** Optional callback for the dynamically built remove all button */
  removeAll: z.custom<React.ReactNode>().optional(),
  /** Accessible label for the dynamically built remove all button */
  removeAllAriaLabel: z.string().optional().default('Remove all'),
  /** Tooltip content for the dynamically built remove all button */
  removeAllTooltip: z.custom<React.ReactNode>().optional(),
  /** Additional tooltip properties for the dynamically built remove all tooltip */
  removeAllTooltipProps: z.unknown().optional(),
  /** Optional callback for the dynamically built remove selected button */
  removeSelected: z.custom<React.ReactNode>().optional(),
  /** Accessible label for the dynamically built remove selected button */
  removeSelectedAriaLabel: z.string().optional().default('Remove selected'),
  /** Tooltip content for the dynamically built remove selected button */
  removeSelectedTooltip: z.custom<React.ReactNode>().optional(),
  /** Additional tooltip properties for the dynamically built remove selected tooltip */
  removeSelectedTooltipProps: z.unknown().optional()
})

export type DualListSelectorProps = z.infer<typeof DualListSelectorSchema>

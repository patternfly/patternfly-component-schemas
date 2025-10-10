// Auto-generated Zod schema for DualListSelectorProps-deprecated
// Generated on: 2025-10-10T18:12:17.799Z
import { z } from 'zod'

export const DualListSelectorPropsSchema = z.object({
  /** Optional callback for the dynamically built add all button */
  addAll: z.array(z.any()).optional(),
  /** Accessible label for the dynamically built add all button */
  addAllAriaLabel: z.string().optional(),
  /** Tooltip content for the dynamically built add all button */
  addAllTooltip: z.any().optional(),
  /** Additional tooltip properties for the dynamically built add all tooltip */
  addAllTooltipProps: z.any().optional(),
  /** Optional callback for the dynamically built add selected button */
  addSelected: z.array(z.any()).optional(),
  /** Accessible label for the dynamically built add selected button */
  addSelectedAriaLabel: z.string().optional(),
  /** Tooltip content for the dynamically built add selected button */
  addSelectedTooltip: z.any().optional(),
  /** Additional tooltip properties for the dynamically built add selected tooltip */
  addSelectedTooltipProps: z.any().optional(),
  /** Options to display in the dynamically built available options pane. When using trees, the options should be in the DualListSelectorTreeItemData[] format. */
  availableOptions: z.array(z.any()).optional(),
  /** Actions to be displayed above the dynamically built available options pane. */
  availableOptionsActions: z.array(z.any()).optional(),
  /** Accessible label for the search input on the dynamically built available options pane. */
  availableOptionsSearchAriaLabel: z.string().optional(),
  /** Status message to display above the dynamically built available options pane. */
  availableOptionsStatus: z.string().optional(),
  /** Title applied to the dynamically built available options pane. */
  availableOptionsTitle: z.string().optional(),
  /** Content to be rendered in the dual list selector. Panes & controls will not be built dynamically when children are provided. */
  children: z.any().optional(),
  /** Options to display in the dynamically built chosen options pane. When using trees, the options should be in the DualListSelectorTreeItemData[] format. */
  chosenOptions: z.array(z.any()).optional(),
  /** Actions to be displayed above the dynamically built chosen options pane. */
  chosenOptionsActions: z.array(z.any()).optional(),
  /** Accessible label for the search input on the dynamically built chosen options pane. */
  chosenOptionsSearchAriaLabel: z.string().optional(),
  /** Status message to display above the dynamically built chosen options pane. */
  chosenOptionsStatus: z.string().optional(),
  /** Title applied to the dynamically built chosen options pane. */
  chosenOptionsTitle: z.string().optional(),
  /** Additional classes applied to the dual list selector. */
  className: z.string().optional(),
  /** Accessible label for the dynamically built controls between the two panes. */
  controlsAriaLabel: z.string().optional(),
  /** Optional filter function for custom filtering based on search string. Used with a dynamically built search input. */
  filterOption: z.any().optional(),
  /** Id of the dual list selector. */
  id: z.string().optional(),
  /** Flag indicating if the dual list selector is in a disabled state */
  isDisabled: z.boolean().optional(),
  /** Flag indicating a search bar should be included above both the dynamically built available and chosen panes. */
  isSearchable: z.boolean().optional(),
  /** Flag indicating if the dual list selector uses trees instead of simple lists */
  isTree: z.boolean().optional(),
  /** A callback for when the search input value for the dynamically built available options changes. */
  onAvailableOptionsSearchInputChanged: z.any().optional(),
  /** A callback for when the search input value for the dynamically built chosen options changes. */
  onChosenOptionsSearchInputChanged: z.any().optional(),
  /** Callback fired every time dynamically built options are chosen or removed */
  onListChange: z.array(z.any()).optional(),
  /** Optional callback fired when a dynamically built option is checked */
  onOptionCheck: z.array(z.any()).optional(),
  /** Optional callback fired when a dynamically built option is selected */
  onOptionSelect: z.any().optional(),
  /** Optional callback for the dynamically built remove all button */
  removeAll: z.array(z.any()).optional(),
  /** Accessible label for the dynamically built remove all button */
  removeAllAriaLabel: z.string().optional(),
  /** Tooltip content for the dynamically built remove all button */
  removeAllTooltip: z.any().optional(),
  /** Additional tooltip properties for the dynamically built remove all tooltip */
  removeAllTooltipProps: z.any().optional(),
  /** Optional callback for the dynamically built remove selected button */
  removeSelected: z.array(z.any()).optional(),
  /** Accessible label for the dynamically built remove selected button */
  removeSelectedAriaLabel: z.string().optional(),
  /** Tooltip content for the dynamically built remove selected button */
  removeSelectedTooltip: z.any().optional(),
  /** Additional tooltip properties for the dynamically built remove selected tooltip */
  removeSelectedTooltipProps: z.any().optional()
})

export type DualListSelectorPropsProps = z.infer<typeof DualListSelectorPropsSchema>

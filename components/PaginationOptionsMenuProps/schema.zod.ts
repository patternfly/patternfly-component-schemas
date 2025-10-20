// Auto-generated Zod schema for PaginationOptionsMenuProps
import { z } from 'zod'

export const PaginationOptionsMenuPropsSchema = z.object({
  appendTo: z.enum(['inline']).optional(),
  /** Custom class name added to the pagination options menu. */
  className: z.string().optional(),
  /** React ref for the container to append the options menu to. This is a static ref provided by the main pagination component. */
  containerRef: z.any().optional(),
  /** Menu will open up or open down from the options menu toggle. */
  dropDirection: z.enum(['up', 'down']).optional(),
  /** The first index of the items being paginated. */
  firstIndex: z.number().optional(),
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay: z.number().optional(),
  /** Flag indicating if pagination options menu is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag to indicate whether to show last full page of results when user selects perPage
value that is greater than remaining rows. */
  isLastFullPageShown: z.boolean().optional(),
  /** The total number of items being paginated. */
  itemCount: z.number().optional(),
  /** The title of the pagination options menu. */
  itemsPerPageTitle: z.string().optional(),
  /** The type or title of the items being paginated. */
  itemsTitle: z.string().optional(),
  /** The last index of the items being paginated. */
  lastIndex: z.number().optional(),
  /** The number of the last page. */
  lastPage: z.number().optional(),
  /** Minimum width of the pagination options menu. If set to "trigger", the minimum width will be set to the toggle width. */
  minWidth: z.enum(['trigger']).optional(),
  /** Label for the English word "of". */
  ofWord: z.string().optional(),
  /** Function called when user selects number of items per page. */
  onPerPageSelect: z.unknown().optional(),
  /** Accessible label for the options toggle. */
  optionsToggleAriaLabel: z.string().optional(),
  /** Current page number. */
  page: z.number().optional(),
  /** The number of items to be displayed per page. */
  perPage: z.number().optional(),
  /** Array of titles and values which will be the options on the options menu dropdown. */
  perPageOptions: z.array(z.unknown()).optional(),
  /** The suffix to be displayed after each option on the options menu dropdown. */
  perPageSuffix: z.string().optional(),
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus: z.boolean().optional(),
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex,
itemCount, and/or itemsTitle props. */
  toggleTemplate: z.any(),
  /** Id added to the title of the pagination options menu. */
  widgetId: z.string().optional()
})

export type PaginationOptionsMenuPropsProps = z.infer<typeof PaginationOptionsMenuPropsSchema>

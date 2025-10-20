// Auto-generated Zod schema for PaginationOptionsMenu
import { z } from 'zod'

export const PaginationOptionsMenuSchema = z.object({
  /** The container to append the pagination options menu to. Overrides the containerRef prop. */
  appendTo: z.enum(['inline']).optional(),
  /** Custom class name added to the pagination options menu. */
  className: z.string().optional(),
  /** React ref for the container to append the options menu to. This is a static ref provided by the main pagination component. */
  containerRef: z.any().optional(),
  /** Menu will open up or open down from the options menu toggle. */
  dropDirection: z.enum(['up', 'down']).optional().default('down'),
  /** The first index of the items being paginated. */
  firstIndex: z.number().optional().default(0),
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay: z.number().optional().default(0),
  /** Flag indicating if pagination options menu is disabled. */
  isDisabled: z.boolean().optional().default(false),
  /** Flag to indicate whether to show last full page of results when user selects perPage
value that is greater than remaining rows. */
  isLastFullPageShown: z.boolean().optional().default(false),
  /** The total number of items being paginated. */
  itemCount: z.number().optional(),
  /** The title of the pagination options menu. */
  itemsPerPageTitle: z.string().optional().default('Items per page'),
  /** The type or title of the items being paginated. */
  itemsTitle: z.string().optional().default(''),
  /** The last index of the items being paginated. */
  lastIndex: z.number().optional().default(0),
  /** The number of the last page. */
  lastPage: z.number().optional(),
  /** Minimum width of the pagination options menu. If set to "trigger", the minimum width will be set to the toggle width. */
  minWidth: z.enum(['trigger']).optional(),
  /** Label for the English word "of". */
  ofWord: z.string().optional().default('of'),
  /** Function called when user selects number of items per page. */
  onPerPageSelect: z.any().optional().default('() => null as any'),
  /** Accessible label for the options toggle. */
  optionsToggleAriaLabel: z.string().optional(),
  /** Current page number. */
  page: z.number().optional(),
  /** The number of items to be displayed per page. */
  perPage: z.number().optional().default(0),
  /** Array of titles and values which will be the options on the options menu dropdown. */
  perPageOptions: z.array(z.unknown()).optional().default('[]'),
  /** The suffix to be displayed after each option on the options menu dropdown. */
  perPageSuffix: z.string().optional().default('per page'),
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus: z.boolean().optional().default(true),
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex,
itemCount, and/or itemsTitle props. */
  toggleTemplate: z.any(),
  /** Id added to the title of the pagination options menu. */
  widgetId: z.string().optional()
})

export type PaginationOptionsMenuProps = z.infer<typeof PaginationOptionsMenuSchema>

// Auto-generated Zod schema for Pagination
import { z } from 'zod'

export const PaginationSchema = z.object({
  /** What should be rendered inside the pagination. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes for the pagination container. */
  className: z.string().optional().default(''),
  /** Direction of dropdown context menu. */
  dropDirection: z.enum(['up', 'down']).optional(),
  /** Page to start at. */
  firstPage: z.number().optional().default(1),
  /** Insets at various breakpoints. */
  inset: z.record(z.unknown()).optional(),
  /** Flag indicating if pagination is compact. */
  isCompact: z.boolean().optional().default(false),
  /** Flag indicating if pagination is disabled. */
  isDisabled: z.boolean().optional().default(false),
  /** Indicate whether to show last full page of results when user selects perPage value
greater than remaining rows. */
  isLastFullPageShown: z.boolean().optional().default(false),
  /** Flag indicating if pagination should not be sticky on mobile. */
  isStatic: z.boolean().optional().default(false),
  /** Flag indicating if pagination should stick to its position (based on variant). */
  isSticky: z.boolean().optional().default(false),
  /** Total number of items. */
  itemCount: z.number().optional(),
  /** Last index of items on current page. */
  itemsEnd: z.number().optional().default('null'),
  /** First index of items on current page. */
  itemsStart: z.number().optional().default('null'),
  /** The container to append the pagination options menu to. */
  menuAppendTo: z.enum(['inline']).optional(),
  /** Start index of rows to display, used in place of providing page. */
  offset: z.number().optional().default('null'),
  /** Function called when user clicks on navigate to first page. */
  onFirstClick: z.custom<Event>().optional().default('() => undefined'),
  /** Function called when user clicks on navigate to last page. */
  onLastClick: z.custom<Event>().optional().default('() => undefined'),
  /** Function called when user clicks on navigate to next page. */
  onNextClick: z.custom<Event>().optional().default('() => undefined'),
  /** Function called when user inputs page number. */
  onPageInput: z.custom<Event>().optional().default('() => undefined'),
  /** Function called when user selects number of items per page. */
  onPerPageSelect: z.any().optional().default('() => undefined'),
  /** Function called when user clicks on navigate to previous page. */
  onPreviousClick: z.custom<Event>().optional().default('() => undefined'),
  /** Function called when user sets page. */
  onSetPage: z.any().optional().default('() => undefined'),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional().default(true),
  /** Current page number. */
  page: z.number().optional().default(1),
  /** Number of items per page. */
  perPage: z.number().optional().default('defaultPerPageOptions[0].value'),
  /** Array of the number of items per page options. */
  perPageOptions: z.array(z.unknown()).optional().default('[
  {
    title: '10',
    value: 10
  },
  {
    title: '20',
    value: 20
  },
  {
    title: '50',
    value: 50
  },
  {
    title: '100',
    value: 100
  }
]'),
  /** Object with titles to display in pagination. */
  titles: z.unknown().optional().default('{
  items: '',
  page: '',
  pages: '',
  itemsPerPage: 'Items per page',
  perPageSuffix: 'per page',
  toFirstPageAriaLabel: 'Go to first page',
  toPreviousPageAriaLabel: 'Go to previous page',
  toLastPageAriaLabel: 'Go to last page',
  toNextPageAriaLabel: 'Go to next page',
  optionsToggleAriaLabel: '',
  currPageAriaLabel: 'Current page',
  paginationAriaLabel: 'Pagination',
  ofWord: 'of'
}'),
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex,
itemCount, itemsTitle, and/or ofWord props. */
  toggleTemplate: z.any().optional(),
  /** Flag indicating that pagination should use page insets. */
  usePageInsets: z.boolean().optional(),
  /** Position where pagination is rendered. */
  variant: z.enum(['top', 'bottom']).optional().default('PaginationVariant.top'),
  /** Id to identify widget on page. */
  widgetId: z.string().optional().default('options-menu')
})

export type PaginationProps = z.infer<typeof PaginationSchema>

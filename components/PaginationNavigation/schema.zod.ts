// Auto-generated Zod schema for PaginationNavigation
import { z } from 'zod'

export const PaginationNavigationSchema = z.object({
  /** Additional classes for the pagination navigation container. */
  className: z.string().optional().default(''),
  /** Accessible label for the input displaying the current page. */
  currPageAriaLabel: z.string().optional().default('Current page'),
  /** The number of first page where pagination starts. */
  firstPage: z.number().optional().default(0),
  /** Flag indicating if the pagination is compact. */
  isCompact: z.boolean().optional().default(false),
  /** Flag indicating if the pagination is disabled. */
  isDisabled: z.boolean().optional().default(false),
  /** Total number of items. */
  itemCount: z.number().optional(),
  /** The number of the last page. */
  lastPage: z.number().optional().default(0),
  /** Label for the English word "of". */
  ofWord: z.string().optional().default('of'),
  /** Function called when user clicks to navigate to first page. */
  onFirstClick: z.custom<Event>().optional().default('() => undefined as any'),
  /** Function called when user clicks to navigate to last page. */
  onLastClick: z.custom<Event>().optional().default('() => undefined as any'),
  /** Function called when user clicks to navigate to next page. */
  onNextClick: z.custom<Event>().optional().default('() => undefined as any'),
  /** Function called when user inputs page number. */
  onPageInput: z.custom<Event>().optional().default('() => undefined as any'),
  /** Function called when user clicks to navigate to previous page. */
  onPreviousClick: z.custom<Event>().optional().default('() => undefined as any'),
  /** Function called when page is changed. */
  onSetPage: z.any(),
  /** The number of the current page. */
  page: z.number(),
  /** The title of a page displayed beside the page number. */
  pagesTitle: z.string().optional().default(''),
  /** The title of a page displayed beside the page number (the plural form). */
  pagesTitlePlural: z.string().optional().default(''),
  /** Accessible label for the pagination component. */
  paginationAriaLabel: z.string().optional().default('Pagination'),
  /** Number of items per page. */
  perPage: z.number().optional(),
  /** Accessible label for the button which moves to the first page. */
  toFirstPageAriaLabel: z.string().optional().default('Go to first page'),
  /** Accessible label for the button which moves to the last page. */
  toLastPageAriaLabel: z.string().optional().default('Go to last page'),
  /** Accessible label for the button which moves to the next page. */
  toNextPageAriaLabel: z.string().optional().default('Go to next page'),
  /** Accessible label for the button which moves to the previous page. */
  toPreviousPageAriaLabel: z.string().optional().default('Go to previous page')
})

export type PaginationNavigationProps = z.infer<typeof PaginationNavigationSchema>

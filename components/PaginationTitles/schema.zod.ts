// Auto-generated Zod schema for PaginationTitles
import { z } from 'zod'

export const PaginationTitlesSchema = z.object({
  /** Accessible label for the input displaying the current page. */
  currPageAriaLabel: z.string().optional(),
  /** The type or title of the items being paginated. */
  items: z.string().optional(),
  /** The title of the pagination options menu. */
  itemsPerPage: z.string().optional(),
  /** Label for the English word "of". */
  ofWord: z.string().optional(),
  /** Accessible label for the options toggle. */
  optionsToggleAriaLabel: z.string().optional(),
  /** The title of a page displayed beside the page number. */
  page: z.string().optional(),
  /** The title of a page displayed beside the page number (plural form). */
  pages: z.string().optional(),
  /** Accessible label for the pagination component. */
  paginationAriaLabel: z.string().optional(),
  /** The suffix to be displayed after each option on the options menu dropdown. */
  perPageSuffix: z.string().optional(),
  /** Accessible label for the button which moves to the first page. */
  toFirstPageAriaLabel: z.string().optional(),
  /** Accessible label for the button which moves to the last page. */
  toLastPageAriaLabel: z.string().optional(),
  /** Accessible label for the button which moves to the next page. */
  toNextPageAriaLabel: z.string().optional(),
  /** Accessible label for the button which moves to the previous page. */
  toPreviousPageAriaLabel: z.string().optional()
})

export type PaginationTitlesProps = z.infer<typeof PaginationTitlesSchema>

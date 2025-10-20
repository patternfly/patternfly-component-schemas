// Auto-generated Zod schema for Content
import { z } from 'zod'

export const ContentSchema = z.object({
  /** Children rendered within the Content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Content. */
  className: z.string().optional().default(''),
  /** The content component. If none provided, it will be a 'div' and styling will be applied to all its child components. */
  component: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'small', 'blockquote', 'pre', 'hr', 'ul', 'ol', 'dl', 'li', 'dt', 'dd']).optional(),
  /** Flag to indicate the content has editorial styling. This styling increases the font size of body text and small text by one tier, increasing body text to large and small text to the previous body text size. */
  isEditorial: z.boolean().optional().default(false),
  /** Modifies the list (ul, ol and dl components) to have plain styling. */
  isPlainList: z.boolean().optional().default(false),
  /** Flag to indicate the link (or all links within the content) has visited styles applied if the browser determines the link has been visited. */
  isVisitedLink: z.boolean().optional().default(false),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional().default(true)
})

export type ContentProps = z.infer<typeof ContentSchema>

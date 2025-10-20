// Auto-generated Zod schema for Title
import { z } from 'zod'

export const TitleSchema = z.object({
  /** Content rendered inside the Title */
  children: z.custom<React.ReactNode>().optional().default(''),
  /** Additional classes added to the Title */
  className: z.string().optional().default(''),
  /** The heading level to use */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional().default(true),
  /** The size of the Title */
  size: z.enum(['md', 'lg', 'xl', '2xl', '3xl', '4xl']).optional()
})

export type TitleProps = z.infer<typeof TitleSchema>

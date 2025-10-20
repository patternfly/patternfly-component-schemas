// Auto-generated Zod schema for TitleProps
import { z } from 'zod'

export const TitlePropsSchema = z.object({
  /** Content rendered inside the Title */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Title */
  className: z.string().optional(),
  /** The heading level to use */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** The size of the Title */
  size: z.unknown().optional()
})

export type TitlePropsProps = z.infer<typeof TitlePropsSchema>

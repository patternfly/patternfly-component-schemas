// Auto-generated Zod schema for SSRSafeIdsProps
import { z } from 'zod'

export const SSRSafeIdsPropsSchema = z.object({
  /** Children render function receiving (generatedId, generatedOuiaId?) */
  children: z.custom<React.ReactNode>(),
  /** OUIA component type. If provided, a stable OUIA ID will be generated. */
  ouiaComponentType: z.string().optional(),
  /** Prefix for the generated component ID */
  prefix: z.string()
})

export type SSRSafeIdsPropsProps = z.infer<typeof SSRSafeIdsPropsSchema>

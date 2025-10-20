// Auto-generated Zod schema for DualListSelectorState-deprecated
import { z } from 'zod'

export const DualListSelectorStateSchema = z.object({
  availableFilteredOptions: z.array(z.custom<React.ReactNode>()),
  availableOptions: z.array(z.custom<React.ReactNode>()),
  availableOptionsSelected: z.array(z.number()),
  availableTreeFilteredOptions: z.array(z.string()),
  availableTreeOptionsChecked: z.array(z.string()),
  chosenFilteredOptions: z.array(z.custom<React.ReactNode>()),
  chosenOptions: z.array(z.custom<React.ReactNode>()),
  chosenOptionsSelected: z.array(z.number()),
  chosenTreeFilteredOptions: z.array(z.string()),
  chosenTreeOptionsChecked: z.array(z.string())
})

export type DualListSelectorStateProps = z.infer<typeof DualListSelectorStateSchema>

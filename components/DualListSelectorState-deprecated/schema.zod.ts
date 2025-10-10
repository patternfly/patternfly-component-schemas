// Auto-generated Zod schema for DualListSelectorState-deprecated
// Generated on: 2025-10-10T18:12:17.800Z
import { z } from 'zod'

export const DualListSelectorStateSchema = z.object({
  availableFilteredOptions: z.array(z.any()),
  availableOptions: z.array(z.any()),
  availableOptionsSelected: z.array(z.any()),
  availableTreeFilteredOptions: z.array(z.any()),
  availableTreeOptionsChecked: z.array(z.any()),
  chosenFilteredOptions: z.array(z.any()),
  chosenOptions: z.array(z.any()),
  chosenOptionsSelected: z.array(z.any()),
  chosenTreeFilteredOptions: z.array(z.any()),
  chosenTreeOptionsChecked: z.array(z.any())
})

export type DualListSelectorStateProps = z.infer<typeof DualListSelectorStateSchema>

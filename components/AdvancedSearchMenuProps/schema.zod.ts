// Auto-generated Zod schema for AdvancedSearchMenuProps
import { z } from 'zod'

export const AdvancedSearchMenuPropsSchema = z.object({
  /** Delimiter in the query string for pairing attributes with search values.
Required whenever attributes are passed as props. */
  advancedSearchDelimiter: z.string().optional(),
  /** Array of attribute values used for dynamically generated advanced search. */
  attributes: z.any().optional(),
  /** Additional classes added to the advanced search menu. */
  className: z.string().optional(),
  formAdditionalItems: z.custom<React.ReactNode>().optional(),
  /** Function which builds an attribute-value map by parsing the value in the search input. */
  getAttrValueMap: z.custom<() => { [key: string]: string }>().optional(),
  /** Attribute label for strings unassociated with one of the provided listed attributes. */
  hasWordsAttrLabel: z.custom<React.ReactNode>().optional(),
  /** Flag for toggling the open/close state of the advanced search menu. */
  isSearchMenuOpen: z.boolean().optional(),
  /** A callback for when the input value changes. */
  onChange: z.custom<Event>().optional(),
  /** A callback for when the user clicks the clear button. */
  onClear: z.custom<Event>().optional(),
  /** A callback for when the search button is clicked. */
  onSearch: z.custom<Event>().optional(),
  /** A callback for when the open advanced search button is clicked. */
  onToggleAdvancedMenu: z.custom<Event>().optional(),
  /** Ref of the input element within the search input. */
  parentInputRef: z.unknown().optional(),
  /** Ref of the div wrapping the whole search input. */
  parentRef: z.unknown().optional(),
  /** Label for the button which resets the advanced search form and clears the search input. */
  resetButtonLabel: z.string().optional(),
  /** Label for the button which calls the onSearch event handler. */
  submitSearchButtonLabel: z.string().optional(),
  /** Value of the search input. */
  value: z.string().optional()
})

export type AdvancedSearchMenuPropsProps = z.infer<typeof AdvancedSearchMenuPropsSchema>

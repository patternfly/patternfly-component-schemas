// Auto-generated Zod schema for SearchInputProps
import { z } from 'zod'

export const SearchInputPropsSchema = z.object({
  /** Delimiter in the query string for pairing attributes with search values.
Required whenever attributes are passed as props. */
  advancedSearchDelimiter: z.string().optional(),
  /** The container to append the menu to.
If your menu is being cut off you can append it to an element higher up the DOM tree.
Some examples:
appendTo={() => document.body}
appendTo={document.getElementById('target')} */
  appendTo: z.enum(['inline']).optional(),
  /** Flag to indicate utilities should be displayed. By default if this prop is undefined or false, utilities will only be displayed when the search input has a value. */
  areUtilitiesDisplayed: z.boolean().optional(),
  /** Array of attribute values used for dynamically generated advanced search. */
  attributes: z.any().optional(),
  /** Additional classes added to the search input. */
  className: z.string().optional(),
  /** Object that makes the search input expandable/collapsible. */
  expandableInput: z.unknown().optional(),
  formAdditionalItems: z.custom<React.ReactNode>().optional(),
  /** Attribute label for strings unassociated with one of the provided listed attributes. */
  hasWordsAttrLabel: z.custom<React.ReactNode>().optional(),
  /** A suggestion for autocompleting. */
  hint: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** Additional props to spread to the search input element. */
  inputProps: z.unknown().optional(),
  /** A flag for controlling the open state of a custom advanced search implementation. */
  isAdvancedSearchOpen: z.boolean().optional(),
  /** Flag indicating if search input is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag indicating if the next navigation button is disabled. */
  isNextNavigationButtonDisabled: z.boolean().optional(),
  /** Flag indicating if the previous navigation button is disabled. */
  isPreviousNavigationButtonDisabled: z.boolean().optional(),
  /** Name attribute for the search input */
  name: z.string().optional(),
  /** Accessible label for the button to navigate to next result. */
  nextNavigationButtonAriaLabel: z.string().optional(),
  /** A callback for when the input value changes. */
  onChange: z.custom<Event>().optional(),
  /** A callback for when the user clicks the clear button. */
  onClear: z.custom<Event>().optional(),
  /** A callback for when the user clicks to navigate to next result. */
  onNextClick: z.custom<Event>().optional(),
  /** A callback for when the user clicks to navigate to previous result. */
  onPreviousClick: z.custom<Event>().optional(),
  /** A callback for when the search button is clicked. */
  onSearch: z.custom<Event>().optional(),
  /** A callback for when the open advanced search button is clicked. */
  onToggleAdvancedSearch: z.custom<Event>().optional(),
  /** Accessible label for the button which opens the advanced search form menu. */
  openMenuButtonAriaLabel: z.string().optional(),
  /** Placeholder text of the search input. */
  placeholder: z.string().optional(),
  /** Accessible label for the button to navigate to previous result. */
  previousNavigationButtonAriaLabel: z.string().optional(),
  /** Label for the button which resets the advanced search form and clears the search input. */
  resetButtonLabel: z.string().optional(),
  /** The number of search results returned. Either a total number of results,
or a string representing the current result over the total number of results. i.e. "1 / 5". */
  resultsCount: z.any().optional(),
  /** Id for the search input */
  searchInputId: z.string().optional(),
  /** Label for the button which calls the onSearch event handler. */
  submitSearchButtonLabel: z.string().optional(),
  /** An accessible label for the search input. */
  'Unknown': z.string().optional(),
  /** Value of the search input. */
  value: z.string().optional(),
  /** z-index of the advanced search form when appendTo is not inline. */
  zIndex: z.number().optional()
})

export type SearchInputPropsProps = z.infer<typeof SearchInputPropsSchema>

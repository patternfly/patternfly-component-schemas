// Auto-generated Zod schema for FileUploadFieldProps
import { z } from 'zod'

export const FileUploadFieldPropsSchema = z.object({
  /** Flag to allow editing of a text file's contents after it is selected from disk. */
  allowEditingUploadedText: z.boolean().optional(),
  /** ID or ID's of elements that describe the browse button. Typically this should refer
to elements such as helper text when there are file restrictions. */
  browseButtonAriaDescribedby: z.string().optional(),
  /** Text for the browse button. */
  browseButtonText: z.string().optional(),
  /** Additional children to render after (or instead of) the file preview. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the file upload field container element. */
  className: z.string().optional(),
  /** Text for the clear button. */
  clearButtonText: z.string().optional(),
  /** A reference object to attach to the file upload field container element. */
  containerRef: z.unknown().optional(),
  /** Value to be shown in the read-only filename field. */
  filename: z.string().optional(),
  /** Aria-label for the read-only filename field. */
  filenameAriaLabel: z.string().optional(),
  /** Placeholder string to display in the empty filename field. */
  filenamePlaceholder: z.string().optional(),
  /** Flag to hide the built-in preview of the file (where available). If true, you can use
the children property to render an alternate preview. */
  hideDefaultPreview: z.boolean().optional(),
  /** Unique id for the text area. Also used to generate ids for accessible labels. */
  id: z.string(),
  /** Flag to disable the browse button. */
  isBrowseButtonDisabled: z.boolean().optional(),
  /** Flag to disable the clear button. */
  isClearButtonDisabled: z.boolean().optional(),
  /** Flag to show if the field is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag to show if a file is being dragged over the file upload field. */
  isDragActive: z.boolean().optional(),
  /** Flag to show if a file is being loaded. */
  isLoading: z.boolean().optional(),
  /** Flag to show if the field is read only. */
  isReadOnly: z.boolean().optional(),
  /** Flag to show if the field is required. */
  isRequired: z.boolean().optional(),
  /** Name property for the text input. */
  name: z.string().optional(),
  /** A callback for when the browse button is clicked. */
  onBrowseButtonClick: z.custom<Event>().optional(),
  /** A callback for when the clear button is clicked. */
  onClearButtonClick: z.custom<Event>().optional(),
  /** Callback for when focus is lost on the text area field. */
  onTextAreaBlur: z.custom<(event?: any) => void>().optional(),
  /** A callback for when the text area is clicked. Can also be set via the onClick property
of the file upload component. */
  onTextAreaClick: z.custom<Event>().optional(),
  /** Text area text changed. */
  onTextChange: z.custom<Event>().optional(),
  /** Aria-valuetext for the loading spinner. */
  spinnerAriaValueText: z.string().optional(),
  /** Placeholder string to display in the empty text area field. */
  textAreaPlaceholder: z.string().optional(),
  /** What type of file. Determines what is is expected by the value property (a string for
'text' and 'dataURL', or a File object otherwise). */
  type: z.enum(['text', 'dataURL']).optional(),
  /** Aria-label for the text area. */
  'Unknown': z.string().optional(),
  /** Value to indicate if the field is modified to show that validation state.
If set to success, field will be modified to indicate valid state.
If set to error,  field will be modified to indicate error state. */
  validated: z.enum(['success', 'error', 'default']).optional(),
  /** Value of the file's contents (string if text file, File object otherwise). */
  value: z.any().optional()
})

export type FileUploadFieldPropsProps = z.infer<typeof FileUploadFieldPropsSchema>

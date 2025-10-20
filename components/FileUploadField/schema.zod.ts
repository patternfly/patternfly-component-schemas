// Auto-generated Zod schema for FileUploadField
import { z } from 'zod'

export const FileUploadFieldSchema = z.object({
  /** Flag to allow editing of a text file's contents after it is selected from disk. */
  allowEditingUploadedText: z.boolean().optional().default(false),
  /** Aria-label for the text area. */
  'aria-label': z.string().optional().default('File upload'),
  /** ID or ID's of elements that describe the browse button. Typically this should refer
to elements such as helper text when there are file restrictions. */
  browseButtonAriaDescribedby: z.string().optional(),
  /** Text for the browse button. */
  browseButtonText: z.string().optional().default('Browse...'),
  /** Additional children to render after (or instead of) the file preview. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the file upload field container element. */
  className: z.string().optional().default(''),
  /** Text for the clear button. */
  clearButtonText: z.string().optional().default('Clear'),
  /** A reference object to attach to the file upload field container element. */
  containerRef: z.unknown().optional().default('null'),
  /** Value to be shown in the read-only filename field. */
  filename: z.string().optional().default(''),
  /** Aria-label for the read-only filename field. */
  filenameAriaLabel: z.string().optional().default('filename ? 'Read only filename' : filenamePlaceholder'),
  /** Placeholder string to display in the empty filename field. */
  filenamePlaceholder: z.string().optional().default('Drag a file here or browse to upload'),
  /** Flag to hide the built-in preview of the file (where available). If true, you can use
the children property to render an alternate preview. */
  hideDefaultPreview: z.boolean().optional().default(false),
  /** Unique id for the text area. Also used to generate ids for accessible labels. */
  id: z.string(),
  /** Flag to disable the browse button. */
  isBrowseButtonDisabled: z.boolean().optional().default(false),
  /** Flag to disable the clear button. */
  isClearButtonDisabled: z.boolean().optional().default('!filename && !value'),
  /** Flag to show if the field is disabled. */
  isDisabled: z.boolean().optional().default(false),
  /** Flag to show if a file is being dragged over the file upload field. */
  isDragActive: z.boolean().optional().default(false),
  /** Flag to show if a file is being loaded. */
  isLoading: z.boolean().optional().default(false),
  /** Flag to show if the field is read only. */
  isReadOnly: z.boolean().optional().default(false),
  /** Flag to show if the field is required. */
  isRequired: z.boolean().optional().default(false),
  /** Name property for the text input. */
  name: z.string().optional(),
  /** A callback for when the browse button is clicked. */
  onBrowseButtonClick: z.custom<Event>().optional().default('() => {}'),
  /** A callback for when the clear button is clicked. */
  onClearButtonClick: z.custom<Event>().optional().default('() => {}'),
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
  textAreaPlaceholder: z.string().optional().default(''),
  /** What type of file. Determines what is is expected by the value property (a string for
'text' and 'dataURL', or a File object otherwise). */
  type: z.enum(['text', 'dataURL']).optional(),
  /** Value to indicate if the field is modified to show that validation state.
If set to success, field will be modified to indicate valid state.
If set to error,  field will be modified to indicate error state. */
  validated: z.enum(['success', 'error', 'default']).optional().default('default'),
  /** Value of the file's contents (string if text file, File object otherwise). */
  value: z.any().optional().default('')
})

export type FileUploadFieldProps = z.infer<typeof FileUploadFieldSchema>

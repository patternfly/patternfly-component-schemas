// Auto-generated Zod schema for FileUpload
// Generated on: 2025-10-10T18:12:17.784Z
import { z } from 'zod'

export const FileUploadSchema = z.object({
  /** Flag to allow editing of a text file's contents after it is selected from disk. */
  allowEditingUploadedText: z.boolean().optional(),
  /** Aria-label for the text area. */
  'aria-label': z.string().optional(),
  /** ID or ID's of elements that describe the browse button. Typically this should refer
to elements such as helper text when there are file restrictions. */
  browseButtonAriaDescribedby: z.string().optional(),
  /** Text for the browse button. */
  browseButtonText: z.string().optional(),
  /** Additional children to render after (or instead of) the file preview. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the file upload container element. */
  className: z.string().optional(),
  /** Text for the clear button. */
  clearButtonText: z.string().optional(),
  /** Optional extra props to customize react-dropzone. */
  dropzoneProps: z.any().optional().default('{}'),
  /** Value to be shown in the read-only filename field. */
  filename: z.string().optional().default(''),
  /** Aria-label for the read-only filename field. */
  filenameAriaLabel: z.string().optional(),
  /** Placeholder string to display in the empty filename field. */
  filenamePlaceholder: z.string().optional(),
  /** Flag to hide the built-in preview of the file (where available). If true, you can use
the children property to render an alternate preview. */
  hideDefaultPreview: z.boolean().optional(),
  /** Unique id for the text area. Also used to generate ids for accessible labels. */
  id: z.string(),
  /** Flag to show if the field is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag to show if a file is being loaded. */
  isLoading: z.boolean().optional(),
  /** Flag to show if the field is read only. */
  isReadOnly: z.boolean().optional(),
  /** Flag to show if the field is required. */
  isRequired: z.boolean().optional(),
  /** Clear button was clicked. */
  onClearClick: z.any().optional(),
  /** Callback for clicking on the file upload field text area. By default, prevents a click
in the text area from opening file dialog. */
  onClick: z.any().optional().default('(event) => event.preventDefault()'),
  /** On data changed - if type='text' or type='dataURL' and file was loaded it will call this method */
  onDataChange: z.any().optional(),
  /** Change event emitted from the hidden \<input type="file" \> field associated with the component */
  onFileInputChange: z.any().optional().default('null'),
  /** A callback for when the FileReader API fails. */
  onReadFailed: z.any().optional().default('() => {}'),
  /** A callback for when a selected file finishes loading. */
  onReadFinished: z.any().optional().default('() => {}'),
  /** A callback for when a selected file starts loading. */
  onReadStarted: z.any().optional().default('() => {}'),
  /** Text area text changed. */
  onTextChange: z.any().optional(),
  /** Aria-valuetext for the loading spinner. */
  spinnerAriaValueText: z.string().optional(),
  /** What type of file. Determines whether 'onDataChange` is called and what is
expected by the value property (a string for 'text' and 'dataURL', or a File object otherwise. */
  type: z.enum(['text', 'dataURL']).optional(),
  /** Value to indicate if the field is modified to show that validation state.
If set to success, field will be modified to indicate valid state.
If set to error, field will be modified to indicate error state. */
  validated: z.enum(['success', 'error', 'default']).optional(),
  /** Value of the file's contents (string if text file, File object otherwise). */
  value: z.any().optional().default('type === fileReaderType.text || type === fileReaderType.dataURL ? '' : null')
})

export type FileUploadProps = z.infer<typeof FileUploadSchema>

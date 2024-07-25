import { Box, FormHelperText, Paper, Tooltip } from "@mui/material"
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import { IFileWithPreview } from "domain/models/accreditSteps/AttachmentDataStep/attachmentDataModel";
import Div from "components/Div";
import Label from "components/Label";
import FormTextField from "components/Form/FormTextField";
import FAQDrawer from "components/FAQDrawer";

const MAX_CHARACTERS = 600;

const AttachmentDataStep = () => {

    const { formState, control, setValue, getValues } = useFormContext<AccreditStepsModel>();
    const { errors } = formState

    useEffect(() => {
        setFiles(getValues('attachmentDataStep.attachmentData.files'))
    }, [])

    const [files, setFiles] = useState<IFileWithPreview[]>([]);
    const [notes, setNotes] = useState<string>(getValues('attachmentDataStep.attachmentData.observation') ?? '');
    
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*,application/pdf' as any,
        onDrop: (acceptedFiles) => {
            const filesWithPreview = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            
            setFiles((prevFiles) => [...prevFiles, ...filesWithPreview]);
            setValue('attachmentDataStep.attachmentData.files', [...files, ...filesWithPreview]);
        },
        maxFiles: 12
    });

    const removeFile = (file: IFileWithPreview) => {
        setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
        setValue('attachmentDataStep.attachmentData.files', [...files.filter((f) => f !== file)]);
        URL.revokeObjectURL(file.preview);
    };

    const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue("attachmentDataStep.attachmentData.observation", event.target.value)
        setNotes(event.target.value);
    };

    return (
        <Div spacing={4} sx={{ padding: 2 }}>
            <Paper sx={{ padding: 2 }}>
                <Div spacing={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <FAQDrawer />
                </Div>
                {
                    files.length < 12 &&
                    <Div
                        {...getRootProps({ className: 'dropzone' })}
                        sx={{
                            border: '2px dashed gray',
                            borderRadius: 2,
                            padding: 2,
                            textAlign: 'center',
                            marginBottom: 2,
                        }}
                    >
                        <input {...getInputProps()} />
                        <Label variant="h6">Anexar arquivos</Label>
                        <Label variant="body2" color="textSecondary">
                            Arraste e solte arquivos aqui, ou clique para selecionar arquivos
                        </Label>
                    </Div>
                }

                <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    {files.map((file, index) => (
                        <Box
                            key={index}
                            sx={{ display: 'inline-block', textAlign: 'center', position: 'relative', width: '150px' }}
                        >
                            <Box sx={{
                                alignSelf: 'center',
                                position: 'relative'
                            }}>
                                <Box
                                    component="img"
                                    src={file.preview}
                                    alt={file.name}
                                    sx={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 1 }}
                                />
                                <Tooltip title='Remover'>
                                    <Label
                                        variant="body2"
                                        sx={{ marginTop: 1, cursor: 'pointer' }}
                                        onClick={() => removeFile(file)}>
                                        Remover anexo
                                    </Label>
                                </Tooltip>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Label variant="body2" sx={{ textAlign: 'right', marginBottom: 2 }}>
                    {files.length}/12 arquivos anexados
                </Label>
                {
                    errors.attachmentDataStep?.attachmentData?.files && <FormHelperText error>{errors.attachmentDataStep?.attachmentData?.files.message}</FormHelperText>
                }
            </Paper>

            <Box>
                <Label bold variant="body2">Observações (Opcional)</Label>
                <FormTextField
                    name="attachmentDataStep.attachmentData.observation"
                    control={control}
                    fullWidth
                    multiline
                    fieldError={errors.attachmentDataStep?.attachmentData?.observation}
                    rows={4}
                    inputProps={{ maxLength: MAX_CHARACTERS }}
                    value={notes}
                    onChange={handleNotesChange}
                    variant="outlined"
                    placeholder="Sua mensagem..." />
                <Label variant="caption" color="textSecondary">
                    {notes.length}/600 caracteres
                </Label>
            </Box>
        </Div>
    )
}

export default AttachmentDataStep
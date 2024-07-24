import { Box, Paper, TextField, Tooltip, Typography } from "@mui/material"
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AccreditStepsModel } from "domain/models/accreditSteps/accreditStepsModel";
import { IFileWithPreview } from "domain/models/accreditSteps/AttachmentDataStep/attachmentDataModel";

const AttachmentDataStep = () => {

    const [files, setFiles] = useState<IFileWithPreview[]>([]);

    useEffect(() => {
        debugger
        setFiles(getValues('attachmentDataStep.attachmentData.files'))
    }, [])

    const [notes, setNotes] = useState<string>('');

    const { setValue, getValues } = useFormContext<AccreditStepsModel>();

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
        setNotes(event.target.value);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Paper sx={{ padding: 2 }}>
                <Box
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
                    <Typography variant="h6">Anexar arquivos</Typography>
                    <Typography variant="body2" color="textSecondary">
                        Arraste e solte arquivos aqui, ou clique para selecionar arquivos
                    </Typography>
                </Box>

                <Box sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    {files.map((file, index) => (
                        <Box
                            key={index}
                            sx={{ display: 'inline-block', textAlign: 'center', position: 'relative', width: '150px' }}
                        >
                            <Box sx={{ textAlign: 'center', position: 'relative' }}>
                                <Box
                                    component="img"
                                    src={file.preview}
                                    alt={file.name}
                                    sx={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: 1 }}
                                />
                                <Tooltip title='Remover'>
                                    <Typography
                                        variant="body2"
                                        sx={{ marginTop: 1, cursor: 'pointer' }}
                                        onClick={() => removeFile(file)}>
                                        Remover anexo
                                    </Typography>
                                </Tooltip>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Typography variant="body2" sx={{ textAlign: 'right', marginBottom: 2 }}>
                    {files.length}/12 arquivos anexados
                </Typography>
            </Paper>

            <Box>
                <Typography variant="body2">Observações (Opcional)</Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={notes}
                    onChange={handleNotesChange}
                    variant="outlined"
                    placeholder="Escreva suas observações aqui..."
                />
                <Typography variant="caption" color="textSecondary">
                    {notes.length}/600 caracteres
                </Typography>
            </Box>
        </Box>
    )
}

export default AttachmentDataStep
type MaskProps = {
    mask: string[]
}

export const phoneMask: MaskProps = {
    mask: ['(99) 9999-9999', '(99) 99999-9999']
}

export const cpfMask: MaskProps = {
    mask: ['999.999.999-99']
}

export const cnpjMask: MaskProps = {
    mask: ['99.999.999/9999-99']
}

export const mergedDocumentMask: MaskProps = {
    mask: [...cpfMask.mask, ...cnpjMask.mask]
}

export const dateMask: MaskProps = {
    mask: ['99/99/9999']
}

export const zipCodeMask: MaskProps = {
    mask: ['99999-999']
}
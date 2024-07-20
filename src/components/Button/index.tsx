import { Button as MuiButton, ButtonProps } from '@mui/material'
import { forwardRef, ForwardedRef  } from 'react'

type Props = { } & ButtonProps

const Button = forwardRef<HTMLButtonElement, Props>((props, ref:ForwardedRef<HTMLButtonElement>) => {

    const { children, ...rest } = props

    return (
        <MuiButton {...rest} ref={ref}>
            {children}
        </MuiButton>
    )
})

export default Button
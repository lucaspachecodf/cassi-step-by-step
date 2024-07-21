import { ForwardedRef, forwardRef } from 'react';
import { FieldValues } from 'react-hook-form';

type Props<T extends FieldValues> = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
} & React.PropsWithChildren<T>;

const Form = forwardRef<HTMLFormElement, Props<any>>((props, ref: ForwardedRef<HTMLFormElement>) => {

    const {
        children,
        onSubmit,
        ...rest
    } = props

    return (
        <form onSubmit={onSubmit} ref={ref} {...rest}>
            {children}
        </form>
    );
});

export default Form;
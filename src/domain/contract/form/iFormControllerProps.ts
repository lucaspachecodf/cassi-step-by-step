import { FieldError, FieldValues, UseControllerProps } from "react-hook-form";

export default interface IFormControllerProps<T extends FieldValues> extends UseControllerProps<T> {    
    fieldError?: FieldError
    label?: string    
}
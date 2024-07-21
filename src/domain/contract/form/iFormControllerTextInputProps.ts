import { FieldValues } from "react-hook-form";
import IFormControllerProps from "./iFormControllerProps";

export interface IFormControllerTextInputProps<T extends FieldValues> extends IFormControllerProps<T>  {    
    type?: React.InputHTMLAttributes<HTMLInputElement>['type']    
}
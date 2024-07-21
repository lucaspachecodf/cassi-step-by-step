import { FieldValues } from 'react-hook-form';
import { OptionsModel } from "domain/models";
import IFormControllerProps from "./iFormControllerProps";

export interface IFormControllerSelectProps<T extends FieldValues> extends IFormControllerProps<T> {    
    options: OptionsModel[]
}
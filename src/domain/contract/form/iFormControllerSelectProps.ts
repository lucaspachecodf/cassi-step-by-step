import { FieldValues } from 'react-hook-form';
import IFormControllerProps from "./iFormControllerProps";
import { IOptions } from '../base/iOptions';

export interface IFormControllerSelectProps<T extends FieldValues> extends IFormControllerProps<T> {    
    options: IOptions[]
}
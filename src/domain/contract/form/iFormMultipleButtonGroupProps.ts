import { IOptions } from "domain/contract/base/iOptions"
import IFormControllerProps from "./iFormControllerProps"
import { FieldValues } from "react-hook-form"

export interface IFormMultipleButtonGroupProps<T extends FieldValues> extends IFormControllerProps<T> {
    legend: string
    subLegend?: string
    options: IOptions[]
}
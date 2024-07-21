import { IResultDtoBase } from "./iResultDtoBase";

export interface IResultWithListDto<T> extends IResultDtoBase {
    data: T[]
}
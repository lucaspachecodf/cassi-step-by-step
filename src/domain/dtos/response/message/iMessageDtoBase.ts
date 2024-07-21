import { INotificationDto } from "./iNotificationDto"

export interface IMessageDtoBase {
    success: boolean
    message: string
    notifications: INotificationDto[]
}
import { IOptions } from "domain/contract/base/iOptions"

export class OptionsModel implements IOptions {

    description: string

    constructor(readonly value: string | number, description: string) {
        this.description = description
    }

    updateDescription(description: string) {
        this.description = description
    }
}
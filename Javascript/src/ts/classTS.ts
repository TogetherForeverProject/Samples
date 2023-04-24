export class PrintTS {
    message?: string
    
    constructor() {}

    init(message: string): this {
        this.message = message
        return this
    }

    public execute() {
        return console.log(this.message)
    }
}
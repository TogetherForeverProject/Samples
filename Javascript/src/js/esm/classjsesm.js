export class Print {
    
    constructor() {}

    init(message) {
        this.message = message
        return this
    }

    execute() {
        return console.log(this.message)
    }
}
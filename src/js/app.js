export default class Validator {
    static validateUsername(str) {
        const pattern = /^[a-z]([a-z_-]*\d{0,3}[a-z_-]*)[a-z]$/gi
        return pattern.test(str)

    }
}




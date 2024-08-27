export class Maybe {
    #value

    constructor(value) {
        this.#value = value
    }

    static of(value) {
        return new Maybe(value)
    }

    isNothing() {
        return this.#value === null || this.#value === undefined
    }

    map(fn) {
        if(this.isNothing()) return Maybe.of(null)
        return Maybe.of(fn(this.#value))
    }

    getOrElse(value) {
        if(this.isNothing()) return value
        return this.#value
    }
}
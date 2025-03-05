import Validator from "../js/app"

test("validator test", () => {
    const str = Validator.validateUsername("hello_123_world")
    expect(str).toBe(true)
})

test("not validators test", () => {
    const str = Validator.validateUsername("1hello_123_world")
    expect(str).toBe(false)
})

test("not validators test_1", () => {
    const str = Validator.validateUsername("_hello_123_world_")
    expect(str).toBe(false)
})

test("not validators test_2", () => {
    const str = Validator.validateUsername("h-1_w")
    expect(str).toBe(true)
})


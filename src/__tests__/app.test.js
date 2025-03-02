import validator from "../js/app"



test("validator test", () => {
    const str = validator.validateUsername("hello_123_world")
    expect(str).toBe("true")
})
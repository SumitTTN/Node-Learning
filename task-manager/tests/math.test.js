const {
  calculateTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
} = require("../src/math");

test("should calculate tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test('should convert 32 F to 0 C',()=>{
    expect(fahrenheitToCelsius(32)).toBe(0)
})

test('should convert 0 c to 32 F', () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
})

test('async test demo',(done)=>{
    setTimeout(()=>{
        expect(1).toBe(1)
        done()
    },2000)
})
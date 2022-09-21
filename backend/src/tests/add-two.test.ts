import { addTwo } from './add-two'

describe('adds two numbers', () => {
  it('adds', () => {
    const res = addTwo(1, 1)
    expect(res).toEqual(2)
  })
})

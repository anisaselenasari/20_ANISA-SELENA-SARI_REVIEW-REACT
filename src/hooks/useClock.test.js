import { renderHook, act } from '@testing-library/react-hooks'
import useClock from './useClock'

describe('useClock', () => {
  it('Should return current timestamp properly', () => {
    const timestapmp = renderHook(() => useClock())
    const now = new Date().toLocaleString('en-GB').split(' ')[1]

    expect(timestapmp.result.current).toStrictEqual(now)
  })
})
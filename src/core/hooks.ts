import { internals } from "./sharedInternals"

export const { useState } = (function () {
  function useState<T>(initialState: T) {
    const currentIndex = internals.hookIndex
    const state: T = internals.states[currentIndex] ?? initialState

    const useState = (newState: T | Partial<T>) => {
      internals.states[currentIndex] = newState
    }

    internals.hookIndex++

    return [state, useState] as const
  }

  return { useState }
})()

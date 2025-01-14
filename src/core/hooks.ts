import { internals } from "./sharedInternals"

type FunctionalUpdate<T> = (state: T) => T

export const { useState } = (function () {
  function useState<T>(initialState: T) {
    const currentIndex = internals.hookIndex
    const state: T = internals.states[currentIndex] ?? initialState

    const useState = (newState: T | FunctionalUpdate<T>) => {
      if (typeof newState === "function") {
        const functionalUpdate = newState as FunctionalUpdate<T>
        return (internals.states[currentIndex] = functionalUpdate(state))
      }

      internals.states[currentIndex] = newState
    }

    internals.hookIndex++

    return [state, useState] as const
  }

  return { useState }
})()

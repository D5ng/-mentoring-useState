import { internals, Renderable } from "./sharedInternals"

type Component<T> = () => T & Renderable

export const { render } = (function () {
  function render<T>(component: Component<T>) {
    internals.rootComponent = component
    internals.hookIndex = 0
    return _render() as ReturnType<Component<T>>
  }

  function _render() {
    const component = internals.rootComponent!()
    component.render()
    return component
  }

  return { render }
})()

import { useState } from "./core/hooks"
import { render } from "./core/render"

interface CounterComponent {
  increase: () => void
  render: () => void
}

function Counter() {
  const [count, setCount] = useState(1)

  return {
    increase() {
      setCount(count + 1)
    },
    render() {
      console.log("count", count)
    },
  }
}

let counter: CounterComponent = render(Counter)
counter.increase()
counter = render(Counter)
counter.increase()
counter = render(Counter)

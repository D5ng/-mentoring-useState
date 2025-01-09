export type Renderable = { render: () => void }

// Note: Internals 객체는 렌더링에 대한 중요한 내부구현 객체입니다. 직접적으로 절대 변경하지 마세요.
export interface Internals {
  rootComponent: (() => Renderable) | null
  states: any[]
  hookIndex: number
}

export const internals: Internals = {
  rootComponent: null,
  states: [],
  hookIndex: 0,
}

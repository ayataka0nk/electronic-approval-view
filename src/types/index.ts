import { ComboBoxOptions } from '../components/common'

export type Flag = '0' | '1'

type ChangePayloadVariation<T> = { [P in keyof T]: { name: P; value: T[P] } }

export type ChangePayload<T> =
  ChangePayloadVariation<T>[keyof ChangePayloadVariation<T>]

export type ValidationErrors<T> = { [P in keyof T]?: string[] }

export type GetResponseType<T> =
  | {
      status: 200
      body: T
    }
  | {
      status: 401
    }
  | {
      status: 500
      body: string[]
    }

export type PostResponseType<T> =
  | {
      status: 200
    }
  | {
      status: 422
      body: ValidationErrors<T>
    }
  | {
      status: 500
      body: string[]
    }

export type PutResponseType<T> =
  | {
      status: 200
    }
  | {
      status: 422
      body: ValidationErrors<T>
    }
  | {
      status: 500
      body: string[]
    }

export type DestroyResponseType =
  | {
      status: 200
    }
  | {
      status: 500
      body: string[]
    }

export type ComboBoxOptionsState = {
  loading: boolean
  data: ComboBoxOptions
  getName: (value: string) => string
}

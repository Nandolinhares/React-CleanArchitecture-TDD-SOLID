import { HttpResponse } from './http-response'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> { // Tipo do body e da response
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}

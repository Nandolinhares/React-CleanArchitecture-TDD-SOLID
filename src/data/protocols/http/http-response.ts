export enum HttpStatusCode {
  noContent = 204,
  unautorized = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}

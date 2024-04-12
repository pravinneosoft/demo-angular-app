export interface Libros {
  name?: string;
  author?: string;
}

export interface Respuesta {
  error: boolean;
  statusCode: number;
  data: any[];
}

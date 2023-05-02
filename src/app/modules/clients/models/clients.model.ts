export interface Client {
  name: string,
  cnpj: string,
  status: ClientStatus
}

export enum ClientStatus {
  ACTIVE = 'Ativo',
  INACTIVE = 'Inativo'
}

export interface ICustomer {
  id: number
  name: string
  username: string
  address: IAddress 
  phone: string
  website: string
  company: ICompany
  email: string
}

export interface IAddress{

  street: string
  city : string
  suite: string
  zipcode: string
  Geo: IGeo
}

export interface IGeo{
  lat: number
  lng: number
}

export interface ICompany{
  name: string
  catchPhrase: string
  bs: string
}


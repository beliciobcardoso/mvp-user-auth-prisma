import { ReactNode } from 'react'

export type Role = 'ADMIN' | 'USER' | 'ANALYST' | 'COORDINATOR'

export type User = {
  id: string
  name: string
  email: string
  role: Role
  avatar?: string | null
}

export type UserCreate = {
  name: string
  email: string
  role: Role
  password: string
}

export type UserUpdate = {
  id: string
  name: string
  email: string
  role: Role
}

export type UserForm = {
  id?: string
  name: string
  avatar?: string
  email: string
  role: Role
  createdAt: Date
}

export type ClientType = {
  id?: string
  name: string
  img?: string | null
}

export type TipoSiteType = {
  id?: number
  name: string
}

export type StructureTypeType = {
  id?: number
  name: string
}

export type TechnicianType = {
  id?: string
  name: string
}

export type SiteType = {
  id?: number
  idSite: string
  altura: string
  endereco: string
  bairro: string
  cidade: string
  numero: string
  uf: string
  idClient: string
  client: {
    id: string
    name: string
    img: string | null
  }
  siteTypeId: number
  structureTypeId: number
}

export type SiteTypeRel = {
  id: number
  idSite: string
  altura: string | null
  endereco: string
  bairro: string
  cidade: string
  numero: string
  uf: string
  client: {
    id: string
    name: string
    img: string | null
  }
  siteType: {
    id: number
    name: string
  }
  structureType: {
    id: number
    name: string
  }
}

export type ReportRelType = {
  id?: number
  siteId: number
  technicianId: string
  dateService: Date
  createdAt: Date
  updatedAt: Date | null
  finishedAt: Date | null
  sites: SiteType
  technician: {
    id: string
    name: string
  }
  user: User
  analyst: User
}

export type ReportType = {
  siteId: number
  dateService: Date
  technicianId: string
}

export type ReportCreateType = {
  siteId: number
  technicianId: string
  dateService: Date
  userId: string
}

export type ReportUpdateType = {
  id: number
  siteId: number
  technicianId: string
  dateService: Date
}

export type Relatorio = {
  id?: number
  siteId: number
  dateService: Date
  createdAt: Date
  updatedAt: Date | null
  finishedAt: Date | null
  technicianId: string
  userId: string | null
  technician: {
    name: string
  }
  user: {
    name: string
  }
  analyst: {
    name: string
  }
  sites: SiteTypeRel
}

export type DialogNewProps = {
  dialogButton: string
  dialogTitle: string
  dialogDescription: string
  dialogData?: UserForm
  openDialog?: boolean
}

export type DialogNewUserProps = {
  dialogButton: string
  dialogTitle: string
  dialogDescription: string
  dialogData?: UserForm
  openDialog?: boolean
}


export type dialogNewClientProps = {
  dialogButton: string
  dialogTitle: string
  dialogDescription: string
  openDialog?: boolean
  dialogData?: ClientType
}

export type DialogReportProps = {
  dialogButton: string
  dialogTitle: string
  dialogDescription: string
  report?: ReportRelType
  dataUser?: User
  clientData?: ClientType[]
  technicianData?: TechnicianType[]
  siteData?: SiteTypeRel[]
  onInputChange?: (value: number) => void
}

export type PersonProps = {
  person: string
}

export type PhotoAnalisysType = {
  id?: number
  idReport: number
  url: string
  name: string
  description: string
}

export type Photo = {
  id: number
  title: string
  url: string
  description: string
}

export type DescriptionAnalisysType = {
  idReport: number
  service: string
  status: string
}

export type DescriptionAnalisysFull = {
  id: number
  idReport: number
  services: string
  status: string
}

export type ModalAddCardPhotoType = {
  textButton: ReactNode | string
  textTitle: string
  textDescription: string
}

export type dialogNewTechnicianProps = {
  dialogButton: string
  dialogTitle: string
  dialogDescription: string
  dialogData?: TechnicianType
  openDialog?: boolean
}

export type dialogNewStructureTypeProps = {
  dialogButton: string
  dialogTitle: string
  dialogDescription: string
  dialogData?: StructureTypeType
  openDialog?: boolean
}

export type DialogServiceDescriptionProps = {
  dialogButton: string
  dialogTitle: string
  dialogDescription: string
  idReport: number
  openDialog?: boolean
}

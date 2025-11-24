export interface ContactFormData {
  name: string
  email: string
  message: string
  service?: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}


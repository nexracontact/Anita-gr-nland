'use client'

import React, { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ContactFormData, ContactFormErrors } from '@/types/contact'
import { validateEmail } from '@/lib/utils'
import servicesData from '@/data/services.json'

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    service: '',
  })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Navn er påkrevd'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-post er påkrevd'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ugyldig e-postadresse'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Melding er påkrevd'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Meldingen må være minst 10 tegn'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '', service: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-heading text-text-dark mb-6">
        Send oss en melding
      </h2>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md text-green-800 font-body">
          Takk for din henvendelse! Vi kommer tilbake til deg så snart som
          mulig.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800 font-body">
          Noe gikk galt. Vennligst prøv igjen senere eller kontakt oss direkte
          på e-post.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-body font-medium text-text-dark mb-2"
          >
            Navn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md font-body text-text-dark bg-white focus:outline-none focus:ring-2 focus:ring-accent-gold ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 font-body">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-body font-medium text-text-dark mb-2"
          >
            E-post *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md font-body text-text-dark bg-white focus:outline-none focus:ring-2 focus:ring-accent-gold ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 font-body">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-body font-medium text-text-dark mb-2"
          >
            Tjeneste (valgfritt)
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md font-body text-text-dark bg-white focus:outline-none focus:ring-2 focus:ring-accent-gold"
          >
            <option value="">Velg tjeneste</option>
            {servicesData.services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-body font-medium text-text-dark mb-2"
          >
            Melding *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-2 border rounded-md font-body text-text-dark bg-white focus:outline-none focus:ring-2 focus:ring-accent-gold ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 font-body">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sender...' : 'Send melding'}
        </Button>
      </form>
    </Card>
  )
}


import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'
import { ContactFormData } from '@/types/contact'
import { validateEmail } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Alle påkrevde felt må fylles ut' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Ugyldig e-postadresse' },
        { status: 400 }
      )
    }

    // Validate message length
    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Meldingen må være minst 10 tegn' },
        { status: 400 }
      )
    }

    // Check if email service is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('Email service not configured')
      return NextResponse.json(
        { error: 'E-posttjenesten er ikke konfigurert' },
        { status: 500 }
      )
    }

    // Send email
    await sendContactEmail(body)

    return NextResponse.json(
      { message: 'Meldingen er sendt!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending contact email:', error)
    return NextResponse.json(
      { error: 'Kunne ikke sende melding. Vennligst prøv igjen senere.' },
      { status: 500 }
    )
  }
}


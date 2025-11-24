# AI Chatbot Integration med n8n

## Metode 1: n8n Webhook Chatbot (Anbefalt)

### Steg 1: Sett opp n8n Workflow

1. Opprett en ny workflow i n8n
2. Legg til en **Webhook** node som trigger
3. Legg til **AI** node (OpenAI, Anthropic, etc.) for å håndtere meldinger
4. Legg til **Respond to Webhook** node for å sende svar tilbake
5. Aktiver workflow

### Steg 2: Implementer Chatbot-komponent

Se `src/components/chatbot/Chatbot.tsx` for full implementasjon.

### Steg 3: Legg til miljøvariabler (valgfritt)

I `.env.local` (hvis du vil overstyre):
```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://fredrikn05.app.n8n.cloud/webhook/anita-chat-bot
```

**Merk:** Chatboten er allerede konfigurert med webhook URL-en:
`https://fredrikn05.app.n8n.cloud/webhook/anita chat bot`

Hvis du ikke setter miljøvariabelen, vil denne URL-en brukes som standard (med URL-encoding for mellomrom).

---

## Metode 2: n8n Chat Widget (Hvis tilgjengelig)

Hvis n8n har en embeddable chat widget, kan du legge den til direkte i layout.

---

## Metode 3: Custom API Route

Opprett en API route som snakker med n8n webhook for bedre kontroll.


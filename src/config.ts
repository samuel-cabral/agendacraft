import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'pt'] as const

export const pathnames = {
  '/': '/',
  '/events': {
    en: '/events',
    pt: '/eventos',
  },
  '/events/new': {
    en: '/events/new',
    pt: '/eventos/novo',
  },
  '/events/[id]': {
    en: '/events/[id]',
    pt: '/eventos/[id]',
  },
  '/events/[id]/edit': {
    en: '/events/[id]/edit',
    pt: '/eventos/[id]/editar',
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames

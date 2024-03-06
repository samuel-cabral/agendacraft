import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { locales } from './config'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('./_messages/en.json')
        : import(`./_messages/${locale}.json`))
    ).default,
  }
})

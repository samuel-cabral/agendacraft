import { useTranslations } from 'next-intl'

import { Button } from '../ui/button'
import { Logo } from './Logo'

export function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 p-5 text-center sm:flex-row md:justify-between">
        <Logo />

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <p className="text-sm font-light leading-4 text-muted-foreground">
            {t('author', { author: 'Samuel Cabral' })}
          </p>
          <div className="border-r-1 hidden h-5  w-0 sm:block" />
          <a
            href="https://github.com/samuel-cabral/agendacraft"
            target="_blank"
          >
            <Button variant="link" size="sm" className="px-0">
              {t('sourceCode', {
                github: 'github.com/samuel-cabral/agendacraft',
              })}
            </Button>
          </a>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useTranslations } from 'next-intl'

import NavigationLink from '../NavigationLink'
import LocaleSwitcher from './LocaleSwitcher'

export function NavItems() {
  const t = useTranslations('Navigation')

  return (
    <ul className="flex w-full flex-col items-start gap-5 md:flex md:flex-row md:items-center md:justify-end">
      <NavigationLink href="/">{t('home')}</NavigationLink>
      <NavigationLink href="/events/new">{t('createEvent')}</NavigationLink>

      <LocaleSwitcher />
    </ul>
  )
}

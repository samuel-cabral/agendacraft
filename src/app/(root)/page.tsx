'use client'

import Image from 'next/image'
import Link from 'next/link'

import { EventsList } from '@/components/events/EventsList'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <section className="py-5">
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-5">
          <div className="flex flex-1 flex-col justify-center gap-8">
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-5xl lg:text-6xl">
              Manage your events with ease
            </h1>
            <p className="p-regular-20 md:p-regular-16 text-muted-foreground">
              Create, edit, and delete events with a few clicks. It&apos;s that
              easy!
            </p>
            <Button asChild className="w-full md:w-40">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.svg"
            alt="Hero"
            width={1000}
            height={1000}
            className="hidden max-h-[70vh] object-contain object-center md:block 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section id="events" className="mb-5 flex flex-col">
        <h2 className="mb-3 text-xl font-bold md:mb-6 md:text-3xl">
          Your events
        </h2>

        <div className="base:grid-cols-1 grid gap-5 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <EventsList />
        </div>
      </section>
    </>
  )
}

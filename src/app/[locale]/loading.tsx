import { Logo } from '@/components/shared/Logo'

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="size-fit animate-bounce">
        <Logo />
      </div>
    </div>
  )
}

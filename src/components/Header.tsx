interface HeaderProps {
  title: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header>
      <h1 className="text-3xl font-black tracking-tight text-black uppercase sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xs tracking-widest text-neutral-400 uppercase mt-2 sm:text-sm">
          {subtitle}
        </p>
      )}
    </header>
  )
}

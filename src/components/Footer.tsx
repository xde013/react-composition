interface FooterProps {
  text: string
}

export function Footer({ text }: FooterProps) {
  return (
    <footer className="pt-6 border-t border-neutral-100 sm:pt-8">
      <p className="text-[10px] tracking-widest text-neutral-300 uppercase sm:text-xs">
        {text}
      </p>
    </footer>
  )
}

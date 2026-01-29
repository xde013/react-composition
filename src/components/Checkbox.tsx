import { cn } from '@utils/cn'

interface CheckboxProps {
  checked: boolean
  onChange?: () => void
  label?: string
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <button
      onClick={onChange}
      className={cn(
        'w-5 h-5 border-2 flex-shrink-0 flex items-center justify-center transition-colors duration-100 cursor-pointer',
        checked ? 'bg-black border-black' : 'border-black hover:bg-neutral-100'
      )}
      aria-label={label}
      role="checkbox"
      aria-checked={checked}
    >
      {checked && (
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </button>
  )
}

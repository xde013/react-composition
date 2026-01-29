import { Icon } from '@components/Icon'
import { IconButton } from '@components/IconButton'
import { cn } from '@utils/cn'

interface QuantityStepperProps {
  value: number
  onChange: (value: number) => void
  min?: number
  step?: number
  disabled?: boolean
  className?: string
}

const stepperRoot =
  'h-9 inline-flex items-center border-2 border-black transition-colors duration-100'

const stepperButton =
  'w-9 h-full flex items-center justify-center rounded-none transition-colors duration-100 ' +
  'bg-white text-black cursor-pointer hover:bg-black hover:text-white focus:outline-none focus:border-black ' +
  'disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-300 disabled:cursor-default disabled:hover:bg-neutral-100 disabled:hover:text-neutral-400'

export function QuantityStepper({
  value,
  onChange,
  min = 0.1,
  step = 0.1,
  disabled = false,
  className,
}: QuantityStepperProps) {
  const handleDecrement = () => {
    const next = Math.max(min, Math.round((value - step) * 10) / 10)
    onChange(next)
  }

  const handleIncrement = () => {
    const next = Math.round((value + step) * 10) / 10
    onChange(next)
  }

  const canDecrement = value > min && !disabled
  const canIncrement = !disabled

  return (
    <div
      className={cn(
        stepperRoot,
        disabled && 'border-neutral-300 bg-neutral-100',
        className
      )}
    >
      <IconButton
        type="button"
        label="Decrease quantity"
        onClick={handleDecrement}
        disabled={!canDecrement}
        className={cn(stepperButton, 'border-r-2')}
      >
        <Icon name="minus" />
      </IconButton>

      <span
        className={cn(
          'w-10 flex items-center justify-center text-sm font-medium tabular-nums',
          disabled ? 'bg-neutral-100 text-neutral-400' : 'bg-white text-black'
        )}
      >
        {value}
      </span>

      <IconButton
        type="button"
        label="Increase quantity"
        onClick={handleIncrement}
        disabled={!canIncrement}
        className={cn(stepperButton, 'border-l-2')}
      >
        <Icon name="plus" />
      </IconButton>
    </div>
  )
}

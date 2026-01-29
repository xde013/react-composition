
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useAddItemForm } from '@hooks'
import { AddItemInput } from '@types'

interface AddItemFormProps {
  onAdd: (input: AddItemInput) => void
}

export function AddItemForm({ onAdd }: AddItemFormProps) {
  const { name, setName, handleSubmit } = useAddItemForm(onAdd)

  return (
    
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <div className="flex-1 min-w-0">
          <Input
            placeholder="Add item"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">Add</Button>
      </form>
   
  )
}

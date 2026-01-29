import { useState, FormEvent } from 'react'
import { AddItemInput } from '@types'

export function useAddItemForm(onAdd: (input: AddItemInput) => void) {
  const [name, setName] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return

    onAdd({
      name,
      quantity: 1,
      unit: 'pcs',
    })

    setName('')
  }

  return {
    name,
    setName,
    handleSubmit,
  }
}

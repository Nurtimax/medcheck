import { useSearchParams } from 'react-router-dom'

export const useModal = () => {
   const [search, setSearch] = useSearchParams()

   const setIsActiveModal = (isOpen) => {
      setSearch({ isOpen })
   }

   const isActive = search.get('isOpen')

   return {
      setIsActiveModal,
      isActive,
   }
}

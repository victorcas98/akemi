export interface IModal {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  children: React.ReactNode
}

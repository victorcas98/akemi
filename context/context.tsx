import React from 'react'

interface IProps {
  children: React.ReactNode
}

interface IOnboardingValues {
  
}

export interface IContext {
  values: IOnboardingValues
  setValues: React.Dispatch<React.SetStateAction<IOnboardingValues>>
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>

}

export const Context = React.createContext({} as IContext)

const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [page, setPage] = React.useState<number>(0)
  const [values, setValues] = React.useState<IOnboardingValues>(
    {
    })

  return (
    <Context.Provider
      value={React.useMemo(
        () => ({ values, setValues, page, setPage}),
        [values, setValues, page, setPage]
      )}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider

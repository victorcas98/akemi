import React from 'react'
import { MdClose } from 'react-icons/md'
import TextInput from '../../Inputs/TextInput'
import { IModal } from './interface'
import * as Styles from './styles'
import { Button } from './styles'

export default function RegiterProductModal({ isOpen, setIsOpen }: IModal): JSX.Element {
  const [value, setValue] = React.useState<string>('')
  return (
    <Styles.Background isOpen={isOpen} >
      <Styles.ContainerBorder>
        <Styles.Container>
          <Styles.Top>
            <MdClose onClick={() => setIsOpen(false)}/>
          </Styles.Top>
          <Styles.Content>
            <TextInput title='Nome' value={value} setValue={setValue} />
            <TextInput title='Tamanho' value={value} setValue={setValue} />
            <TextInput title='Quantidade' value={value} setValue={setValue} />
            <TextInput title='Preço' value={value} setValue={setValue} />
            <Button onClick={()=> {setIsOpen(false)}}>Cadastrar novo produto</Button>
          </Styles.Content>
        </Styles.Container>
      </Styles.ContainerBorder>
    </Styles.Background>
  )
}

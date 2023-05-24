import React from 'react'
import { MdClose } from 'react-icons/md'
import { IModal } from './interface'
import * as Styles from './styles'

export default function Modal ({ isOpen, setIsOpen, title, children }: IModal): JSX.Element {
  return (
    <Styles.Background isOpen={isOpen} >
      <Styles.ContainerBorder>
        <Styles.Container>
          <Styles.Top>
            <MdClose onClick={() => setIsOpen(true)}/>
          </Styles.Top>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Content>
            <span>
              {children}
            </span>
          </Styles.Content>
        </Styles.Container>
      </Styles.ContainerBorder>
    </Styles.Background>
  )
}

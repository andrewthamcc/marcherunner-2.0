import React from 'react'
import { FlatList, Modal } from 'react-native'
import { DropItem } from '../../dropdown'
import { CenteredModal } from '../../../styled-compoonents'
import { DropdownItem } from '../dropdownitem'
import { DropdownView } from './style'

interface Props {
  closeDropdown: () => void
  isOpen: boolean
  list: DropItem[]
  onChange: (value: DropItem) => void
}

export const DropdownList: React.FC<Props> = ({
  closeDropdown,
  isOpen,
  list,
  onChange,
}) => {
  return (
    <Modal
      animationType="none"
      onRequestClose={closeDropdown}
      transparent
      visible={isOpen}
    >
      <CenteredModal>
        <DropdownView>
          <FlatList
            data={list}
            keyExtractor={(item) => `${item.value}`}
            renderItem={({ item }) => (
              <DropdownItem
                closeDropdown={closeDropdown}
                item={item}
                onChange={onChange}
              />
            )}
          />
        </DropdownView>
      </CenteredModal>
    </Modal>
  )
}

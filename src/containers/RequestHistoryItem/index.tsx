import { Icon } from 'components'
import React, { FC, useState } from 'react'

import * as ST from './styled'

export type TRequestHistoryItemProps = {}

const RequestHistoryItem: FC<TRequestHistoryItemProps> = () => {
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <ST.RequestHistoryItem>
      <ST.Status success={true} />
      <ST.Action>
        pong
      </ST.Action>
      <ST.ShowDropdownIcon onClick={() => setShowDropdown(true)}>
        <Icon
          id={'dots'}
          width={'6px'}
          height={'18px'}
        />
      </ST.ShowDropdownIcon>
      {showDropdown &&
      <ST.Dropdown>

      </ST.Dropdown>
      }
    </ST.RequestHistoryItem>
  )
}

export default RequestHistoryItem

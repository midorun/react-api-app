import RequestHistoryItem from 'containers/RequestHistoryItem'
import { horizontalScroll } from 'helpers/eventListeners'
import React, { FC, useEffect, useRef } from 'react'

import { Icon } from 'components'

import * as ST from './styled'

export type TRequestHistoryProps = {}

const RequestHistory: FC<TRequestHistoryProps> = () => {
  const requestHistoryListRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    requestHistoryListRef.current?.addEventListener('wheel', function (e) {
      horizontalScroll(e, this)
    })

    return () => {
      requestHistoryListRef.current?.removeEventListener('wheel', function (e) {
        horizontalScroll(e, this)
      })
    }
  }, [requestHistoryListRef.current])

  return (
    <ST.RequestHistory ref={requestHistoryListRef}>
     <ST.RequestHistoryList >
       <RequestHistoryItem />
     </ST.RequestHistoryList>
      <ST.ClearHistory>
        <ST.IconWrapper>
          <Icon id={'cross'} />
        </ST.IconWrapper>
      </ST.ClearHistory>
    </ST.RequestHistory>
  )
}

export default RequestHistory

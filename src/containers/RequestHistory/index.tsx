import React, { FC, useEffect, useRef } from 'react'

import RequestHistoryItem from 'containers/RequestHistoryItem'
import { Icon } from 'components'
import { horizontalScroll } from 'helpers/eventListeners'
import { useActions, useAppSelector } from 'store/hooks'

import * as ST from './styled'

export type TRequestHistoryProps = {}

const RequestHistory: FC<TRequestHistoryProps> = () => {
  // console.count('RequestHistory')
  const requestHistoryListRef = useRef<HTMLDivElement | null>(null)
  const { history } = useAppSelector(state => state.request)
  const { clearHistory } = useActions()

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
    <ST.RequestHistory>
      <ST.RequestHistoryList ref={requestHistoryListRef}>
        {history?.map(item => {
          return (
            <RequestHistoryItem
              key={item.request.action}
              data={item}
            />
          )
        })}
      </ST.RequestHistoryList>
      <ST.ClearHistory onClick={() => clearHistory()}>
        <ST.IconWrapper>
          <Icon id={'cross'} />
        </ST.IconWrapper>
      </ST.ClearHistory>
    </ST.RequestHistory>
  )
}

export default RequestHistory

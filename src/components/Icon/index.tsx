import { FC } from 'react'

import iconsRoute from 'assets/icons.svg'

import * as ST from 'components/Icon/styled'

type TIconProps = {
  id: string
  className?: string
}

const Icon: FC<TIconProps> = ({ id, className }) => {
  return (
    <ST.svg className={className && className + 'icon'} xmlns="http://www.w3.org/2000/svg" >
      <use xlinkHref={`${iconsRoute}#${id}`} />
    </ST.svg>
  )
}

export default Icon

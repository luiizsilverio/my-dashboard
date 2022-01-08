import { useMemo, useState } from 'react'
import CountUp from 'react-countup'

import * as S from './styles'
import dollarImg from '../../assets/dollar.svg'
import arrowUpImg from '../../assets/arrow-up.svg'
import arrowDownImg from '../../assets/arrow-down.svg'

interface Props {
  title: string
  amount: number
  footer: string
  icon: 'dolar' | 'arrowUp' | 'arrowDown'
  color: string
}

const TotalCard = (props: Props) => {
  
  const myIcon = useMemo(() => {
    switch (props.icon) {
      case 'dolar':
        return dollarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
      default:
        return undefined;
    }
  }, [props.icon])

  return (
    <S.Container color={ props.color }>
      <span>{ props.title }</span>
      <h1>
        <strong>R$ </strong>
        <CountUp
          start={ props.amount > 100 ? props.amount - 100 : 0 }
          end={ props.amount }
          duration={1.2}
          // prefix='R$ '
          separator='.'
          decimal=','
          decimals={2}
        />
      </h1>
      <small>{ props.footer }</small>
      <img src={ myIcon } alt={ props.title } />
    </S.Container>
  )
}

export default TotalCard
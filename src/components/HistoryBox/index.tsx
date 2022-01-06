import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

import * as S from './styles'
import formatValue from '../../utils/formatValue'
import { useMemo } from 'react'

interface Props {
  data: {
    month: string
    totEntradas: number
    totSaidas: number    
  }[],
  lineColorEnt: string
  lineColorSai: string
}

const HistoryBox = ({ data, lineColorEnt, lineColorSai }: Props) => {

  const percentual = useMemo(() => {
    let totalE = 0
    let totalS = 0

    data.forEach((item) => {
      totalE += item.totEntradas 
      totalS += item.totSaidas
    })

    const total = totalE + totalS
    const perc_E = total === 0 ? 0: (totalE / total * 100)
    const perc_S = total === 0 ? 0: (totalS / total * 100)

    return {
      entradas: parseFloat(perc_E.toFixed(1)),
      saidas: parseFloat(perc_S.toFixed(1))
    }
  }, [data])

  return (
    <S.Container>
      <S.Header>
        <h2>Histórico de saldo</h2>
        <S.LegendContainer>
          <S.Legend color={ lineColorEnt }>
            <div>{ percentual.entradas }%</div>
            <span>Entradas</span>
          </S.Legend>
          <S.Legend color={ lineColorSai }>
            <div>{ percentual.saidas }%</div>
            <span>Saídas</span>
          </S.Legend>
        </S.LegendContainer>
      </S.Header>

      <S.ChartContainer>
      <ResponsiveContainer>
        <LineChart 
          data={ data }
          margin={{ top: 5, bottom: 5, left: 10, right: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <XAxis dataKey="month" stroke="#cecece" />
        
          <Tooltip 
            formatter={(value: number) => formatValue(value)}
            animationDuration={0} 
          />

          <Line 
            name="Entradas"
            type="monotone"
            dataKey="totEntradas"
            stroke={ lineColorEnt }
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line 
            name="Saídas"
            type="monotone"
            dataKey="totSaidas"
            stroke={ lineColorSai }
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />        
        </LineChart>
      </ResponsiveContainer>
      </S.ChartContainer>
    </S.Container>
  )
}

export default HistoryBox

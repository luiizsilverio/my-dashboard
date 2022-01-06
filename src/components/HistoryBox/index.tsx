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

interface Props {
  data: {
    month: string
    totEntradas: number
    totSaidas: number    
  }[],
  lineColorEnt: string
  lineColorSai: string
}

const HistoryBox = ({ data, lineColorEnt, lineColorSai }: Props) => (
  <S.Container>
    <S.Header>
      <h2>Histórico de saldo</h2>
      <S.LegendContainer>
        <S.Legend color={ lineColorEnt }>
          <div>30%</div>
          <span>Entradas</span>
        </S.Legend>
        <S.Legend color={ lineColorSai }>
          <div>70%</div>
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

export default HistoryBox

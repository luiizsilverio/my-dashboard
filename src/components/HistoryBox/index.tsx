import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

import * as S from './styles'

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
    <h2>Histórico de saldo</h2>

    <ResponsiveContainer>
      <LineChart data={ data }>
        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
        <XAxis dataKey="month" stroke="#cecece" />
        <Tooltip />
        <Line 
          name="Entradas"
          type="monotone"
          dataKey="totalEntradas"
          stroke={ lineColorEnt }
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line 
          name="Saídas"
          type="monotone"
          dataKey="totalSaidas"
          stroke={ lineColorSai }
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />        
      </LineChart>
    </ResponsiveContainer>
  </S.Container>
)

export default HistoryBox

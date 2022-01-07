import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'

import * as S from './styles'
import formatValue from '../../utils/formatValue'

interface Props {
  title: string;
  data: {
    name: string
    amount: number
    percent: number
    color: string
  }[]
}

const BarChartBox = ({ title, data }: Props) => {
  return (
    <S.Container>
      <S.SideLeft>
        <h2>{ title }</h2>
        <S.LegendContainer>
        {
          data.map(item => (
            <S.Legend color={ item.color } key={ item.name }>
              <div>{ `${ item.percent.toFixed(1) }%` }</div>
              <span>{ item.name }</span>
            </S.Legend>
          ))
        }                
      </S.LegendContainer>
      </S.SideLeft>

      <S.Main>
        <ResponsiveContainer>
          <BarChart data={ data }>            
            <Bar dataKey="amount" name="Valor">
              {
                data.map(item => (
                  <Cell
                    key={ item.name }
                    // cursor="pointer"
                    fill={ item.color }
                  />
                ))
              }
            </Bar>
            <Tooltip 
              formatter={(value: number) => formatValue(value)}
              cursor={{ fill: 'none '}}
              // animationDuration={0} 
            />
          </BarChart>
        </ResponsiveContainer>
      </S.Main>

    </S.Container>
  )
}

export default BarChartBox
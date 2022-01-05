import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import * as S from './styles'

interface IResultado {
  name: string
  value: number
  percent: number
  color: string
}

interface PizzaProps {
  data: IResultado[]
}

const PizzaChart = ({ data }: PizzaProps) => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
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
        <PieChart>
          <Pie 
            data={data}
            dataKey="percent"
            labelLine={false}
          >
            {
              data.map(item => (
                <Cell key={ item.name } fill={ item.color } />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </S.Main>
  </S.Container>
)

export default PizzaChart
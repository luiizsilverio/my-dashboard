import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import * as S from './styles'

const PizzaChart = () => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
      <S.LegendContainer>
        <S.Legend color="#f7931b">
          <div>95%</div>
          <span>Saídas</span>
        </S.Legend>
        <S.Legend color="#e44c4e">
          <div>5%</div>
          <span>Entradas</span>
        </S.Legend>
      </S.LegendContainer>
    </S.SideLeft>

    <S.Main>
      <S.ResponsiveContainer>
        <PieChart>
          <Pie 
            data={[{amount: 30, percentual: 95}]}
            labelLine={false}
            dataKey="percentual"
          >
          </Pie>
        </PieChart>
      </S.ResponsiveContainer>
    </S.Main>
  </S.Container>
)

export default PizzaChart
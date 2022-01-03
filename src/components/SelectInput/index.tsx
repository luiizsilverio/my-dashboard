import * as S from './styles'

interface Props {
  options: {
    label: string | number;
    value: string | number;
  }[],
}

const SelectInput = ({ options }: Props) => {
  return (
    <S.Container>
      <select>
        {
          options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        }
      </select>
    </S.Container>
  )
}

export default SelectInput
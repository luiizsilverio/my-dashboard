import { ChangeEvent } from 'react'
import * as S from './styles'

interface ILista {
  label: string | number;
  value: string | number;
}

interface Props {
  options: ILista[]
  defaultValue?: string | number
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void | undefined
}

const SelectInput = ({ options, defaultValue = "", onChange }: Props) => {
  return (
    <S.Container>
      <select onChange={ onChange } defaultValue={ defaultValue }>
        {
          options.map(option => (
            <option key={ option.value } value={ option.value }>
              { option.label }
            </option>
          ))
        }
      </select>
    </S.Container>
  )
}

export default SelectInput
const formatValue = (value: number): string => {
  return value.toLocaleString('pt-br', { 
    style: 'currency', 
    currency: 'BRL' 
  })
}

export default formatValue
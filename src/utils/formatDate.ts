const formatDate = (date: string): string => {
  const vdata = new Date(date)

  return Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(vdata)
}

export default formatDate
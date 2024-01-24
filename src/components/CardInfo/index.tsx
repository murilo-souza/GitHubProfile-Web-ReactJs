import { Container, Divider } from './styles'

interface CardInfoProps {
  title: string
  value: string | number
}

export function CardInfo({ title, value }: CardInfoProps) {
  return (
    <Container>
      <p>{title}</p>
      <Divider />
      <span>{value}</span>
    </Container>
  )
}

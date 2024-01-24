import { Container } from './styles'
import SearchIcon from '../../assets/Search.svg'

export function Input() {
  return (
    <Container>
      <img src={SearchIcon} alt="search" />
      <input type="text" placeholder="username" />
    </Container>
  )
}

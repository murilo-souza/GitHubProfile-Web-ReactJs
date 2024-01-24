import { CardInfo } from '../../components/CardInfo'
import {
  Container,
  Header,
  ImageBackground,
  ImageProfile,
  InfoContainer,
  PageDescription,
  PageTitle,
} from './styles'
import BgImage from '../../assets/hero-image-github-profile.png'

export function Home() {
  return (
    <>
      <ImageBackground src={BgImage} />
      <Container>
        <Header>
          <ImageProfile src="https://github.com/murilo-souza.png" />
          <InfoContainer>
            <CardInfo />
            <CardInfo />
            <CardInfo />
          </InfoContainer>
        </Header>
        <PageTitle>GitHub</PageTitle>
        <PageDescription>How people build software</PageDescription>
      </Container>
    </>
  )
}

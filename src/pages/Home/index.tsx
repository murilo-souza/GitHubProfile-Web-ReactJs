import { CardInfo } from '../../components/CardInfo'
import {
  Aligner,
  Container,
  FooterText,
  Header,
  ImageBackground,
  ImageProfile,
  InfoContainer,
  PageDescription,
  PageTitle,
  RepoContainer,
} from './styles'
import BgImage from '../../assets/hero-image-github-profile.png'
import { CardRepository } from '../../components/CardRepository'

export function Home() {
  return (
    <Aligner>
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
        <PageDescription>How people build software lo</PageDescription>
        <RepoContainer>
          <CardRepository />
          <CardRepository />
          <CardRepository />
          <CardRepository />
          <CardRepository />
          <CardRepository />
        </RepoContainer>
      </Container>
      <FooterText>View all repositories</FooterText>
    </Aligner>
  )
}

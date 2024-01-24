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
import { Input } from '../../components/Input'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

interface UserInfoProps {
  avatar_url: string
  location: string
  followers: number
  following: number
  html_url: string
}

export interface RepositoriesProps {
  node_id: string
  name: string
  description: string | null
  html_url: string
  forks_count: number
  stargazers_count: number
  license: {
    spdx_id: string
  } | null
  updated_at: string
}

export function Home() {
  const [username, setUsername] = useState('murilo-souza')
  const [userInfo, setUserInfo] = useState<UserInfoProps>({} as UserInfoProps)
  const [repositories, setRepositories] = useState<RepositoriesProps[]>([])
  const [viewAll, setViewAll] = useState(false)

  async function handleSearchRepositories() {
    const response = await api.get(
      `/${username}/repos${viewAll ? '' : '?per_page=4'}`,
    )
    setRepositories(response.data)
  }

  async function handleSearchUserInfo() {
    const response = await api.get(`/${username}`)
    setUserInfo(response.data)
  }

  useEffect(() => {
    handleSearchUserInfo()
    handleSearchRepositories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, viewAll])

  return (
    <Aligner>
      <Input
        placeholder="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* <ImageContainer> */}
      <ImageBackground src={BgImage} />
      {/* </ImageContainer> */}
      <Container>
        <Header>
          <ImageProfile src={userInfo.avatar_url} />
          <InfoContainer>
            <CardInfo title="Followers" value={userInfo.followers} />
            <CardInfo title="Following" value={userInfo.following} />
            <CardInfo title="Location" value={userInfo.location} />
          </InfoContainer>
        </Header>
        <PageTitle>GitHub</PageTitle>
        <PageDescription>How people build software lo</PageDescription>
        <RepoContainer>
          {repositories.map((repository) => (
            <CardRepository key={repository.node_id} data={repository} />
          ))}
        </RepoContainer>
      </Container>
      <FooterText onClick={() => setViewAll(!viewAll)}>
        View all repositories
      </FooterText>
    </Aligner>
  )
}

import {
  Container,
  Footer,
  FooterContent,
  RepoDescription,
  RepoTitle,
} from './styles'

import ForkIcon from '../../assets/Nesting.svg'
import LicenseIcon from '../../assets/Chield_alt.svg'
import StarIcon from '../../assets/Star.svg'
import { RepositoriesProps } from '../../pages/Home'

interface CardRepositoryProps {
  data: RepositoriesProps
}

export function CardRepository({ data }: CardRepositoryProps) {
  return (
    <Container href={data.html_url}>
      <RepoTitle>{data.name}</RepoTitle>
      <RepoDescription>
        {data.description ? data.description : 'No description'}
      </RepoDescription>
      <Footer>
        {data.license && (
          <FooterContent>
            <img src={LicenseIcon} alt="license" />
            <span>MIT</span>
          </FooterContent>
        )}
        <FooterContent>
          <img src={ForkIcon} alt="Fork" />
          <span>{data.forks_count}</span>
        </FooterContent>
        <FooterContent>
          <img src={StarIcon} alt="Star" />
          <span>{data.stargazers_count}</span>
        </FooterContent>
        <FooterContent>
          <p>updated 4 days ago</p>
        </FooterContent>
      </Footer>
    </Container>
  )
}

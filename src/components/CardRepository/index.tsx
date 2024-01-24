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

export function CardRepository() {
  return (
    <Container>
      <RepoTitle>Repository</RepoTitle>
      <RepoDescription>
        Descrição do repositório Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quidem modi magni deleniti velit obcaecati sint,
        blanditiis explicabo minus fugiat omnis qui aperiam delectus veniam
        culpa. Sequi beatae distinctio nemo in!
      </RepoDescription>
      <Footer>
        <FooterContent>
          <img src={LicenseIcon} alt="license" />
          <span>MIT</span>
        </FooterContent>
        <FooterContent>
          <img src={ForkIcon} alt="Fork" />
          <span>MIT</span>
        </FooterContent>
        <FooterContent>
          <img src={StarIcon} alt="Star" />
          <span>MIT</span>
        </FooterContent>
        <FooterContent>
          <p>updated 4 days ago</p>
        </FooterContent>
      </Footer>
    </Container>
  )
}

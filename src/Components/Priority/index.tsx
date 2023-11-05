import { IconsPriority } from "./data";
import { BoxPriority, ContainerPriority, ContentBox , Title} from "./styles";

export default function Priority() {
  return (
    <ContainerPriority>

    <Title> O que priorizo em <br />meus projetos </Title>

    <ContentBox>
      {IconsPriority.map((item, index) => (

        <BoxPriority $color={item.color} key={index}>
          <span>{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </BoxPriority>

      ))}
    </ContentBox>

  </ContainerPriority>
  )
}

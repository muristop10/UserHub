import MainTitle from "../../components/MainTitle";
import { Link } from "react-router-dom";
import {
  HomeContainer,
  HeroSection,
  FeaturesSection,
  FeatureCard,
  TechSection,
  CTASection,
  PrimaryButton,
} from '../../components/homeComponents';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <MainTitle>
          UserHub. Seu sistema de gerenciamento de usuários.
        </MainTitle>

        <p>
          Um projeto desenvolvido para estudo de React, TypeScript,
          JWT Authentication, React Router DOM e consumo de APIs HTTP.
        </p>

        <PrimaryButton to="/login">
          Começar Agora
        </PrimaryButton>
      </HeroSection>

      <FeaturesSection>
        <FeatureCard>
          <h3>CRUD Completo</h3>
          <p>
            Cadastre, edite, visualize e remova usuários facilmente.
          </p>
        </FeatureCard>

        <FeatureCard>
          <h3>Autenticação JWT</h3>
          <p>
            Controle de acesso utilizando tokens JWT.
          </p>
        </FeatureCard>

        <FeatureCard>
          <h3>API REST</h3>
          <p>
            Integração com Json Server através de requisições HTTP.
          </p>
        </FeatureCard>
      </FeaturesSection>

      <TechSection>
        <h2>Tecnologias Utilizadas</h2>

        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Styled Components</li>
          <li>React Router DOM</li>
          <li>JWT</li>
          <li>Json Server</li>
        </ul>
      </TechSection>

      <CTASection>
        <h2>Pronto para testar?</h2>

        <p>
          Faça login ou crie uma conta para começar a gerenciar usuários.
        </p>

        <PrimaryButton to="/signup">
          Criar Conta
        </PrimaryButton>
      </CTASection>
    </HomeContainer>
  );
};

export default Home;
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 3rem 1rem;
`;

export const HeroSection = styled.section`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;

  margin-bottom: 5rem;

  p {
    max-width: 700px;

    color: var(--text-secondary);

    line-height: 1.7;
  }
`;

export const PrimaryButton = styled(Link)`
  background: var(--primary);

  color: white;

  padding: .9rem 1.5rem;

  border-radius: 10px;

  font-weight: 600;

  transition: .2s;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }
`;

export const FeaturesSection = styled.section`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  gap: 1.5rem;

  margin-bottom: 5rem;
`;

export const FeatureCard = styled.article`
  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: 16px;

  padding: 1.5rem;

  box-shadow: 0 4px 15px rgba(0,0,0,.05);

  transition: .2s;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    margin-bottom: .75rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

export const TechSection = styled.section`
  text-align: center;

  margin-bottom: 5rem;

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 1rem;
  }

  li {
    background: white;

    padding: .7rem 1rem;

    border-radius: 999px;

    border: 1px solid var(--border);

    font-weight: 500;
  }
`;

export const CTASection = styled.section`
  text-align: center;

  background: white;

  border: 1px solid var(--border);

  border-radius: 20px;

  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  p {
    color: var(--text-secondary);
  }
`;
import React, { FunctionComponent, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as pokemonActions from '../../modules/pokemon/actions';
import { StyledButton } from '../../components/Card';
import { RootState } from '../../modules/reducers';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface HomePageProps {
  setPokemon?: (text: string) => void;
}

const Container = styled.div`
  background: #e9f2ff;
  height: 1080px;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > h2 {
    color: #435EBE;
    letter-spacing: 2mm;
    font-family: Roboto-Black;
    margin-top: 35px;
  }
`;

const CardList = styled.div`
  width: 90%;
  height: 600px;
  overflow: auto;
  background: #FFF;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 10mm;
  padding: 35px;
`;

type Props = HomePageProps & ReduxProps

const HomePage: FunctionComponent<Props> = (props: Props) => {
  const { getPokemonList, pokemonList } = props;
  const redirect = useNavigate();

  useEffect(() => {
    getPokemonList();
  }, [getPokemonList])

  const handleClick = (name: string) => {
    console.log(name);
    setTimeout(() => {
      redirect(`/pokemon-details?name=${name}`);
    }, 1000)
  }

  return (
    <Container>
      <h2>POKEMON LIST</h2>
      <CardList>
        {pokemonList.map((pokemon, index) => {
          return (
            <StyledButton onClick={() => handleClick(pokemon.name)} key={index}>
              {pokemon.name}  
            </StyledButton>    
          )
        })}
      </CardList>
    </Container>
  )
};

const mapStateToProps = (state: RootState) => ({
  pokemonList: state.pokemon.pokemon.list,
});

const mapDispatchToProps = {
  getPokemonList: pokemonActions.getPokemonList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(HomePage);
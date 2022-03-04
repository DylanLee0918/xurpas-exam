import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { connect, ConnectedProps } from 'react-redux';
import * as pokemonActions from '../../modules/pokemon/actions';
import { RootState } from '../../modules/reducers';
import { LinearProgress } from '@material-ui/core';

import styled from 'styled-components';

const Container = styled.div`
  background: #e9f2ff;
  height: 1080px;
  max-height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 40%;
  height: 490px;
  overflow: auto;
  background: #FFF;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 15px;
  padding: 1% 1%;

  @media screen and (min-width: 320px) and (max-width: 420px) {
    width: 90%;
    height: 540px;
  }
`;

const DetailBox = styled.div`
  height: 250px;
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;

const PokemonImage = styled.img`
  height: 200px;
  width: 200px;
  background: #e9f2ff;
  padding: 5px;
  border-radius: 15px;
  margin-top: 25px;
  margin-left: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media screen and (min-width: 320px) and (max-width: 420px) {
    width: 50%;
    height: 70%;
  }
`;

const InfoBox = styled.div`
  height: 200px;
  width: 250px;
  margin-top: 25px;
  margin-left: 45px;

  > p {
    font-family: Roboto-Medium;
  }

  > span {
    font-family: Roboto-Black;
  }

  @media screen and (min-width: 320px) and (max-width: 420px) {
    margin-top: 15px;
    margin-left: 25px;
  }
`;

const StatsBox = styled.div`
  height: 200px;
  width: 100%;
  /* border: 1px solid black; */
  margin-top: 25px;

  @media screen and (min-width: 320px) and (max-width: 420px) {
    margin-top: 75px;
    margin-left: 0px;
  }
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  > p {
    font-family: Roboto-Black;
    letter-spacing: 0.3mm;
    margin-left: 25px;
  }
`;

const ProgressBar = styled(LinearProgress)`
  height: 20px !important;
  width: 70%;
  border-radius: 5px;
  background-color: gray;
  margin-left: 10px;
`;

type Props = ReduxProps

const PokemonPage: FunctionComponent<Props> = (props: Props) => {
  const { getPokemonDetail } = props

  const details = useSelector((state: RootState) => state.pokemon.pokemonDetail.list);
  
  useEffect(() => {
    const currentUrl = new URLSearchParams(window.location.search)
    let urlparams = Object.fromEntries(currentUrl.entries())
    console.log(urlparams.name)
    getPokemonDetail(urlparams.name);
  },[getPokemonDetail])

  return (
    <>
      {details !== null ?
        <Container>
          <CardContainer>
            <DetailBox>
              <PokemonImage src={details.data.sprites.other['official-artwork'].front_default}/>
              <InfoBox>
                <p>Name: <span>{details.data.name}</span></p> 
                <p>Type: <span>{details.data.types.map((item: any) => item.type.name).join(', ')}</span></p>
                <p>Abilities: <span>{details.data.abilities.map((item: any) => item.ability.name).join(', ')}</span></p>
              </InfoBox>
            </DetailBox>
            <StatsBox>
              <Status>
                <p>{`${details.data.stats[0].stat.name}:`}</p>
                <ProgressBar variant="determinate" value={details.data.stats[0].base_stat}/>
              </Status>
              <Status>
                <p>{`${details.data.stats[1].stat.name}:`}</p>
                <ProgressBar variant="determinate" value={details.data.stats[1].base_stat}/>
              </Status>
              <Status>
                <p>{`${details.data.stats[2].stat.name}:`}</p>
                <ProgressBar variant="determinate" value={details.data.stats[2].base_stat}/>
              </Status>
            </StatsBox>
          </CardContainer>
        </Container> : null
      }
    </>
  )
};

const mapDispatchToProps = {
  getPokemonDetail: pokemonActions.getPokemonByName
}

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(PokemonPage);
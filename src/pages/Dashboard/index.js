import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Background from '../../components/Background';
import {
  Container,
  UserInformation,
  Avatar,
  UserInformationName,
  UserInformationDetails,
  UserConnected,
  UserConnectedName,
} from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <UserInformation>
          <Avatar
            source={{
              uri: 'https://api.adorable.io/avatars/100/abottadorable.png',
            }}
          />
          <UserInformationName>João Pedro Beck Land</UserInformationName>
          <UserInformationDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            pretium placerat ut platea. (Condições principais de saúde) Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium
            placerat ut platea.ipsum dolor sit amet, consectetur adipiscing
            elit. Ornare pretium placerat ut platea. (Condições principais de
            saúde)(Condições principais de saúde)
          </UserInformationDetails>
        </UserInformation>

        <UserConnected>
          <Icon name="user" size={36} />
          <UserConnectedName>
            Você está conectado com a Ana Laura Borsari DIniz
          </UserConnectedName>
        </UserConnected>
      </Container>
    </Background>
  );
}

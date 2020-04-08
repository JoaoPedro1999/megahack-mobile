import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const UserInformation = styled.View`
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.background};
  margin: 40px;
  margin-bottom: 40px;
  padding: 40px 30px;
  height: 350px;
  width: 320px;
`;

export const Avatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  position: absolute;
  top: -25%;
`;

export const UserInformationName = styled.Text`
  font-size: 18;
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
`;

export const UserInformationDetails = styled.Text`
  text-align: justify;
  font-size: 14;
  line-height: 20;
  color: ${(props) => props.theme.colors.paragraph};
  margin-top: 5px;
`;

export const UserConnected = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.background};
  padding: 40px 30px;
  height: 75px;
  width: 320px;
`;

export const UserConnectedName = styled.Text`
  font-size: 16px;
  text-align: center;
  align-self: center;
  color: ${(props) => props.theme.colors.text};
  margin-left: 5px;
`;

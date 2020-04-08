import styled from 'styled-components/native';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Separator = styled.View`
  height: 5px;
  background: rgba(97, 157, 120, 0.4);
  margin: 20px 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const ImageProfile = styled.Image`
  height: 100px;
  width: 180px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const FormTextArea = styled(TextArea)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
`;

export const CreateConnected = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  align-self: center;
  text-align: center;
  margin-top: 15px;
`;

export const CreateConnectedAction = styled.View`
  flex-direction: row;
`;

export const OptionButton = styled(Button)`
  background: rgb(97, 157, 120);
  width: 150px;
  margin: 10px;
`;

export const OptionButtonText = styled.Text``;

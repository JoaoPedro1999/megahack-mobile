import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import Background from '../../components/Background';

import {
  Container,
  Title,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
  FormTextArea,
  CreateConnected,
  CreateConnectedAction,
  OptionButton,
  OptionButtonText,
} from './styles';

export default function Profile() {
  // const dispatch = useDispatch();
  // const profile = useSelector((state) => state.user.profile);

  const cpfRef = useRef();
  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const healthRef = useRef();

  // const [name, setName] = useState(profile.name);
  // const [email, setEmail] = useState(profile.email);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [health, setHealth] = useState('');
  const [create, setCreate] = useState();

  // useEffect(() => {
  //   setOldPassword('');
  //   setPassword('');
  //   setConfirmPassword('');
  // }, [profile]);

  // function handleSubmit() {
  //   dispatch(
  //     updateProfileRequest({
  //       name,
  //       email,
  //       oldPassword,
  //       password,
  //       confirmPassword,
  //     })
  //   );
  // }

  // function handleLogout() {
  //   dispatch(signOut());
  // }

  function createConnected() {
    if (create === false) {
      setCreate(true);
      Alert.alert(create);
    } else {
      setCreate(false);
    }
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>

        <Form>
          <FormInput
            icon="user"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => cpfRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="user"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="CPF"
            returnKeyType="next"
            ref={cpfRef}
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Sua nova senha"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Confirmação de senha"
            ref={confirmPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => healthRef.current.focus()}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <FormTextArea
            placeholder="Como está a sua saúde?"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => {}}
            value={health}
            onChangeText={setHealth}
            multiline
          />

          <SubmitButton onPress={() => {}}>Atualizar perfil</SubmitButton>
          <LogoutButton onPress={() => {}}>Sair</LogoutButton>

          <Separator />

          <CreateConnected>
            Gostaria de adicionar um novo conectado?
          </CreateConnected>

          <CreateConnectedAction>
            <OptionButton onPress={() => createConnected}>
              <OptionButtonText>Claro</OptionButtonText>
            </OptionButton>
            <OptionButton onPress={() => createConnected}>
              <OptionButtonText>Não</OptionButtonText>
            </OptionButton>
          </CreateConnectedAction>

          {create ? (
            <CreateConnected />
          ) : (
            <>
              <FormInput
                icon="user"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => cpfRef.current.focus()}
                value={name}
                onChangeText={setName}
              />

              <FormInput
                icon="user"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Sobrenome"
                returnKeyType="next"
                onSubmitEditing={() => cpfRef.current.focus()}
                value={name}
                onChangeText={setName}
              />

              <FormInput
                icon="user"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="CPF"
                returnKeyType="next"
                ref={cpfRef}
                onSubmitEditing={() => emailRef.current.focus()}
                value={name}
                onChangeText={setName}
              />

              <FormInput
                icon="mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu e-mail"
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={() => oldPasswordRef.current.focus()}
                value={email}
                onChangeText={setEmail}
              />

              <Separator />

              <FormInput
                icon="lock"
                secureTextEntry
                placeholder="Sua nova senha"
                ref={passwordRef}
                returnKeyType="next"
                onSubmitEditing={() => confirmPasswordRef.current.focus()}
                value={password}
                onChangeText={setPassword}
              />

              <FormTextArea
                placeholder="Como está a sua saúde?"
                ref={confirmPasswordRef}
                returnKeyType="send"
                onSubmitEditing={() => {}}
                value={health}
                onChangeText={setHealth}
                multiline
              />

              <SubmitButton onPress={() => {}}>Criar Usuário</SubmitButton>
            </>
          )}
        </Form>
      </Container>
    </Background>
  );
}

import styled from 'styled-components/native';

export const Container = styled.View`
  height: 150px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex-direction: row;
  flex-direction: row;
  align-items: stretch;
`;

export const TArea = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(34, 33, 91, 0.6)',
})`
  align-self: flex-start;
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;

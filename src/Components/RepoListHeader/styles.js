import styled from 'styled-components/native';
import { Stack } from '../../styles';

export const Box = styled(Stack)`
  padding: 31px 16px 11px 16px;
  flex: none;
`;

export const Title = styled.Text`
  font-family: 'SF Pro Display Bold';
  font-size: 34px;
  line-height: 41px;
  padding-bottom: 16px;
`;

export const InputContainer = styled.View`
  background: rgba(118, 118, 128, 0.12);
  flex-direction: row;
  align-items: center;
  padding: 7px 8px;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  align-items: center;
  flex: 1;
  font-family: 'SF Pro Text Regular';
  font-size: 17px;
  letter-spacing: -0.408px;
  margin-left: 6px;
  color: rgba(60, 60, 67, 0.6);
`;
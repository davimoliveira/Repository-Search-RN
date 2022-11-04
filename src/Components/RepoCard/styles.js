import styled from 'styled-components/native';
import { Line, Stack } from '../../styles';

export const Avatar = styled.Image`
  height: 52px;
  width: 52px;
  border-radius: 52px;
`;

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const StackCard = styled(Stack)`
  padding: 13px 0 12px 0;
  border-bottom-color: #EBEBEB;
  border-bottom-width: 2px;
  margin-left: 12px;
`;

export const LineCard = styled(Line)`
  justify-content: space-between;
  align-items: center;
`;

export const Strong = styled.Text`
  font-family: 'SF Pro Text Semibold';
  letter-spacing: -0.38px;
  line-height: 24px;
  height: 24px;
  font-size: 16px;
  padding-right: 12px;
  flex: 1;
`;

export const CardText = styled.Text`
  font-family: 'SF Pro Text Regular';
  line-height: 24px;
  height: 24px;
  font-size: 14px;
`;

export const CardText2 = styled(CardText)`
  line-height: 18px;
  letter-spacing: -0.078px;
`
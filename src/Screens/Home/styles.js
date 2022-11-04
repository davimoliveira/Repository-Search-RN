import styled from 'styled-components/native';
import { Container } from '../../styles';
import { StatusBar } from 'react-native';

export const RepoContainer = styled(Container)`
  margin-top: ${StatusBar.currentHeight || 0}px;
`;

export const List = styled.FlatList`
  flex: 1;
  padding: 20px 16px 0 16px;
`;

export const Footer = styled.View`
  padding: 10px 0 30px 0;
`;
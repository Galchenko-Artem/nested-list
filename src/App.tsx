import React from 'react';
import TreeNode from './components/TreeNode';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
`;

const AppTitle = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const App: React.FC = () => {
  return (
    <>
    <GlobalStyle />
    <AppContainer>
      <AppTitle>Вложенный список</AppTitle>
      <TreeNode id={1} onDelete={() => {}} canDelete={false} />
    </AppContainer>
    </>
  );
};

export default App;

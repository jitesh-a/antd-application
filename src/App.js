import { BrowserRouter } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';

import Routes from './Routes';

import AppHeader from './components/header/Header';
import AppFooter from './components/footer/Footer';

import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {

  return (
    <>
      <Layout>
        <AppHeader />
        <BrowserRouter>
          <Content>
            <Routes />
          </Content>
        </BrowserRouter>
        <AppFooter />
      </Layout>
    </>
  );
}

export default App;

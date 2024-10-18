import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/admin.routes';

const { Header, Content, Footer, Sider } = Layout;


const MainLayout = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
    return (
        <Layout  style={{height: '100vh'}}>
        <Sider
    
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical " />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
          className='text-2xl'
            >
              <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
};

export default MainLayout;
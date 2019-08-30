import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';

const { Sider, Content } = Layout;
const BasicLayout: React.FC = props => {
  return (
    <Layout>
      <Sider width={256}>
        <Menu mode="inline" defaultSelectedKeys={['dashboard']}>
          <Menu.Item key="dashboard">
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="user">
            <Link to="/user">User</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content>
        {props.children}
      </Content>
    </Layout>
  );
};

export default BasicLayout;

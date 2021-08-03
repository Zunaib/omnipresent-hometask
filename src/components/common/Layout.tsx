import { Layout as AntdLayout } from "antd";
import OmniLogo from "../../svg/OmniLogo";

export interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  const { Header, Content } = AntdLayout;

  return (
    <AntdLayout className="app-layout">
      <Header className="header">
        <div className="logo">
          <OmniLogo />
        </div>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background">{children}</div>
      </Content>
    </AntdLayout>
  );
};

export default Layout;

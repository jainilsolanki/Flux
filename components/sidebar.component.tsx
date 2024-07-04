import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownloadOutlined,
  StarOutlined,
  HeartOutlined,
  BarChartOutlined,
  FundProjectionScreenOutlined,
  BookOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { ShortLogo } from "./short-logo.component";
import { LongLogo } from "./long-logo.component";
import { Input } from "antd";
import { ThemeSwitch } from "./theme-switch.component";
import { HeroComponent } from "./hero.trailer.component";
import { ImageSlider } from "./image-slider.component";
import { Footer } from "./footer.component";
const { Search } = Input;
const { Header, Sider, Content } = Layout;
const onSearch = (value, _e, info) => console.log(info?.source, value);
export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ height: "100vh", background: "#fff" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: "#fff",
          zIndex: 1000,
        }}
        onMouseOver={() => setCollapsed(false)}
        onMouseOut={() => setCollapsed(true)}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            position: "fixed",
            height: "100%",
            width: collapsed ? 80 : 200,
          }}
          items={[
            {
              key: "0",
              icon: collapsed ? (
                <ShortLogo style={{ objectFit: "cover", width: 50 }} />
              ) : (
                <LongLogo
                  style={{ objectFit: "cover" }}
                  className={undefined}
                />
              ),
              label: "",
              style: {
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Movies",
            },
            {
              key: "3",
              icon: <FundProjectionScreenOutlined />,
              label: "Shows",
            },
            {
              key: "4",
              icon: <BookOutlined />,
              label: "Mangas",
            },
            {
              key: "5",
              icon: <ControlOutlined />,
              label: "Games",
            },
            {
              key: "6",
              icon: <BarChartOutlined />,
              label: "Top Charts",
            },
            {
              key: "7",
              icon: <HeartOutlined />,
              label: "Favourites",
            },
            {
              key: "8",
              icon: <DownloadOutlined />,
              label: "Downloads",
            },
            {
              key: "9",
              icon: <StarOutlined />,
              label: "Rate Us",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // margin: 10,
            lineHeight: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Search
              placeholder="Movies, shows and more"
              allowClear
              onSearch={onSearch}
              style={{ margin: 8 }}
            />
          </div>
          {/* <ThemeSwitch style={{ margin: 8 }} /> */}
        </Header>
        <Content
          style={{
            minHeight: 280,
            display: "flex",
            flexDirection: "column",
            background: "#f5f5f5",
            height: "100vh",
          }}
        >
          <HeroComponent collapsed={collapsed} />
          <ImageSlider
            headerContent={"Latest Releases"}
            headerStyles={undefined}
          />
          <ImageSlider
            headerContent={"Popular Shows"}
            headerStyles={undefined}
          />
          <ImageSlider
            headerContent={"Top Grossing Movies"}
            headerStyles={undefined}
          />
          <ImageSlider headerContent={"Top Charts"} headerStyles={undefined} />

          <Footer />
        </Content>
      </Layout>
    </Layout>
  );
};

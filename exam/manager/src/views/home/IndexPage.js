import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import styles from './IndexPage.css';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
/**
 *
 *
 * @returns
 */
function IndexPage() {
  return (
    <div className={styles.box}>
      <div className={styles.head}>
        <div className={styles.head_main}>
           <img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
           <div  className={styles.person}>
              <div className={styles.person_icon}></div>
              <div className={styles.person_name}>chenmanjie</div>
           </div>
        </div>
      </div>
      <div className={styles.main}>
          <Layout>
            <Content>
              <Layout style={{ background: '#fff' }} className={styles.loc}>
                <Sider width={200} style={{ background: '#fff'}}>
                  <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height:'100%',backgroundColor:'#333' }}
                  >
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="user" />
                          试题管理
                        </span>
                      }
                    >
                      <Menu.Item key="1">添加试题</Menu.Item>
                      <Menu.Item key="2">试题分类</Menu.Item>
                      <Menu.Item key="3">查看试题</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="laptop" />
                          subnav 2
                        </span>
                      }
                    >
                      <Menu.Item key="5">option5</Menu.Item>
                      <Menu.Item key="6">option6</Menu.Item>
                      <Menu.Item key="7">option7</Menu.Item>
                      <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub3"
                      title={
                        <span>
                          <Icon type="notification" />
                          subnav 3
                        </span>
                      }
                    >
                      <Menu.Item key="9">option9</Menu.Item>
                      <Menu.Item key="10">option10</Menu.Item>
                      <Menu.Item key="11">option11</Menu.Item>
                      <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }} className={styles.main_content}>Content

                </Content>
              </Layout>
            </Content>
      </Layout>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

import React from 'react'
import "./globalLayout.css"
import {Affix, Layout } from 'antd'
import Navigation from '../components/Navigation'
import ConflictTest from '../views/conflictTest/index'

const { Header, Footer, Sider, Content } = Layout;

class GlobalLayout extends React.Component {

    render() {
    return <>
    <Layout>
      <Affix>
      <Sider className="sider">
        <Navigation></Navigation>
      </Sider>
      </Affix>
      <Layout>
        <Content className="content"> 
            {this.props.content}
            {console.log(this.props.content)}
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  </>
        
        }
    };

export default GlobalLayout;
import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/Common/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {Switch} from "react-router-dom";


// import {Layout, Menu, Breadcrumb, Switch} from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
//
// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;
//

type getUserAppType = {
    initializeApp: () => void
    initialized: boolean
}

const UsersContainerFC = React.lazy(() => import ("./components/Users/UserContainerFC"));

class App extends React.Component<getUserAppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            //     <div>
            //     <Layout>
            //         <Header className="header">
            //             <div className="logo" />
            //             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            //                 <Menu.Item key="1">nav 1</Menu.Item>
            //                 <Menu.Item key="2">nav 2</Menu.Item>
            //                 <Menu.Item key="3">nav 3</Menu.Item>
            //             </Menu>
            //         </Header>
            //         <Content style={{ padding: '0 50px' }}>
            //             <Breadcrumb style={{ margin: '16px 0' }}>
            //                 <Breadcrumb.Item>Home</Breadcrumb.Item>
            //                 <Breadcrumb.Item>List</Breadcrumb.Item>
            //                 <Breadcrumb.Item>App</Breadcrumb.Item>
            //             </Breadcrumb>
            //             <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            //                 <Sider className="site-layout-background" width={200}>
            //                     <Menu
            //                         mode="inline"
            //                         defaultSelectedKeys={['1']}
            //                         defaultOpenKeys={['sub1']}
            //                         style={{ height: '100%' }}
            //                     >
            //                         <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            //                             <Menu.Item key="1">option1</Menu.Item>
            //                             <Menu.Item key="2">option2</Menu.Item>
            //                             <Menu.Item key="3">option3</Menu.Item>
            //                             <Menu.Item key="4">option4</Menu.Item>
            //                         </SubMenu>
            //                     </Menu>
            //                 </Sider>
            //                 <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
            //             </Layout>
            //         </Content>
            //         <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            //     </Layout>,
            //         mountNode,
            // );
            //     </div>

            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Switch>

                            <Route exact path='/'                           // exact - показывай эту страницу только если адрес полностью совпадает. Это для того,
                                                                              //чтобы при загрузке сразу открывался профайл наш
                                   render={() => <Redirect to={"/profile"}/>}/>


                            <Route path='/dialogs'
                                   render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/users'
                                   render={withSuspense(UsersContainerFC)}/>

                            <Route path='/login'
                                   render={() => <LoginPage/>}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>

        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App)

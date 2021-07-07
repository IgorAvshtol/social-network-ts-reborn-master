import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/Common/Preloader";
import {Layout, Menu, Breadcrumb, Avatar, Row, Col} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {NavLink, Redirect, Switch, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginPage from "./components/Login/Login";
import ProfileContainer from "./components/Profile/Profile/ProfileContainer";
import {withSuspense} from "./hoc/withSuspense";
import {Header} from "./components/Header/Header";



const {SubMenu} = Menu;
const {Content, Sider} = Layout;

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
            <div>
                <Layout>
                        <Header/>
                        {/*<Row>*/}
                        {/*    <Col span={22}> </Col>*/}
                        {/*    <Col span={2}><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></Col>*/}
                        {/*</Row>*/}
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', borderRight: 0}}
                            >

                                <SubMenu key="sub1" icon={<UserOutlined/>} title="Main">
                                    <Menu.Item key="1"><NavLink to="/profile">Profile</NavLink></Menu.Item>
                                    <Menu.Item key="2"><NavLink to="/dialogs">Dialogs</NavLink></Menu.Item>
                                    <Menu.Item key="3"><NavLink to="/users">Users</NavLink></Menu.Item>
                                    <Menu.Item key="4"><NavLink to="/news">News</NavLink></Menu.Item>
                                    <Menu.Item key="5"><NavLink to="/music">Music</NavLink></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="More">
                                    <Menu.Item key="6"><NavLink to="/setting">Settings</NavLink></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content className="site-layout-background" style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                            >
                                <Switch>
                                    <Route exact
                                           path='/'                           // exact - показывай эту страницу только если адрес полностью совпадает. Это для того,//чтобы при загрузке сразу открывался профайл наш
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

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>

            // <HashRouter>
            //     <div className='app-wrapper'>
            //         <HeaderContainer/>
            //         <Navbar/>
            //         <div className='app-wrapper-content'>
            //             <Switch>
            //
            //                 <Route exact path='/'                           // exact - показывай эту страницу только если адрес полностью совпадает. Это для того,
            //                                                                   //чтобы при загрузке сразу открывался профайл наш
            //                        render={() => <Redirect to={"/profile"}/>}/>
            //
            //
            //                 <Route path='/dialogs'
            //                        render={() => <DialogsContainer/>}/>
            //                 <Route path='/profile/:userId?'
            //                        render={() => <ProfileContainer/>}/>
            //                 <Route path='/users'
            //                        render={withSuspense(UsersContainerFC)}/>
            //
            //                 <Route path='/login'
            //                        render={() => <LoginPage/>}/>
            //             </Switch>
            //         </div>
            //     </div>
            // </HashRouter>

        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App)

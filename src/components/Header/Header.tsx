import React from 'react';
import {Avatar, Button, Col, Layout, Row, Image} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/auth-reducer";


// type HeaderAuthType = {
//     login: string
//     isAuth: boolean
//     logout: () => void
// }

export const Header = () => {

    const isAuth = useSelector<AppStateType>(state => state.auth.isAuth)
    const login = useSelector<AppStateType>(state => state.auth.login)


    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    const {Header} = Layout;
    return <Header className="header" style={{backgroundColor: '#629e74'}}>
        <Row>
            <Col span={20}> </Col>
            <Col span={4}> {isAuth
                ? <div>
                    <Avatar
                        style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    {login}-<Button onClick={logoutCallback}>Logout</Button>
                </div> : <NavLink to={"/login"}>Login</NavLink>}
            </Col>
        </Row>
    </Header>

    // <header className={s.header}>
    //     <img src='https://s.starladder.com/uploads/team_logo/7/7/c/1/thumb_270_2eb66ca0fa0345cc85ad134e7bad0789.jpeg'/>
    //     <div className={s.loginBlock}>
    //         {props.isAuth
    //             ? <div>{props.login}-<button onClick={props.logout}>Logout</button></div>: <NavLink to={"/login"}>Login</NavLink>}
    //     </div>
    // </header>

}

// export default Header;
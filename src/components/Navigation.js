import React from 'react';
import 'antd/dist/antd.less';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {BrowserRouter,Link} from 'react-router-dom'


function getItem(label,pkey, key, icon, children,type) {
  let route='/';
  if(pkey!=null){
    route+=pkey+'/'+key;
  }
  else{
    route+=key;
  }
  return {
    pkey,
    key,
    icon,
    children,
    label,
    type,
    route
  };
}
const {SubMenu}=Menu;
const items = [
  getItem('Navigation One',null, 'sub1', <MailOutlined />, [
    getItem('冲突检测','sub1', '1')
    // getItem('上传界面', '9'),
  ]),
  getItem('Navigation Two', null,'sub2', <AppstoreOutlined />, [
    getItem('O1', 'sub2','2'),
    getItem('O2', 'sub2','3'),
    getItem('O3', 'sub2','4'),
  ]),
  getItem('Navigation Three', null,'sub3', <SettingOutlined />, [
    getItem('O4', 'sub3', '5'),
    getItem('O5','sub3',  '6')
  ]),
];

const Nav = () => {
  const onClick = () => {

  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      //items={items}
    >
        {
            items.map((item)=>{
                return(
                    <SubMenu key={item.key} title={item.label} icon={item.icon}>
                        {/*以下用于呈现折叠菜单的children，同时插入连接*/}
                        <Menu.ItemGroup>
                        {item.children.map((it)=>(
                            <Menu.Item key={it.key}>
                          
                            <Link to={it.route}>{it.label}</Link>
                          
                            </Menu.Item>
                        ))
                        }
                        </Menu.ItemGroup>
                    </SubMenu>
                )
             }
            )
        }
    </Menu>
  );
};

export default Nav;
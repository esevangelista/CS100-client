import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Input, Image, Icon, Header } from 'semantic-ui-react';
import something from '../../assets/profpics/somepicture.jpg'

const trigger = (
    <div>
        <Image avatar src={something} size='mini'/>
    </div>
)


const NavBar = ({
    search,
    handleSearchChange,
    logout,
    image,
}) => (
    <Menu attached = 'top' tabular>
        <Menu.Item as={Link} to='/'> 
            <h4 style={{'color':'teal'}}>Home</h4>
        </Menu.Item>
        <Menu.Item as={Link} to='/'>
            <h4 style={{'color':'teal'}}>Friend Requests</h4>
        </Menu.Item>
        <Menu.Item as={Link} to='/' position = 'right'>
            <Header as='h3' color='teal' textAlign='left'>
                Ping Pong
            </Header>
        </Menu.Item>
        <Menu.Menu position = 'right'>

            <Menu.Item>
              <Input 
                transparent
                icon={<Icon
                        name = 'search'
                        link = 'true'
                        // onClick = {}
                    />}
                placeholder='Search Users'
                value = {search}
                onChange = {e =>{
                    handleSearchChange(e.target.value);
                }}
                />
            </Menu.Item>
            <Menu.Item>
                <Dropdown trigger={trigger} icon ={null}>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/profile'>
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/editprofile'>
                            Edit
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to='/' onClick={logout}>
                            Sign Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Menu.Menu>
    </Menu>

);

export default NavBar
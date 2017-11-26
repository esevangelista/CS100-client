import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Input, Image, Icon, Header } from 'semantic-ui-react';

const NavBar = ({
    search,
    handleSearchChange,
    handleTabChange,
    handleGetSearch,
    logout,
    image,
}) => (
    <Menu attached = 'top' tabular>
        <Menu.Item as={Link} to='/' onClick={handleTabChange('Home')}> 
            <h4 style={{'color':'teal'}}>Home</h4>
        </Menu.Item>
        <Menu.Item as={Link} to='/' onClick={handleTabChange('Friend Request')}>
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
                        // as={Link} to='/search/:search'
                        onClick = {handleGetSearch(search)}
                    />}
                placeholder='Search Users'
                value = {search}
                onChange = {e =>{
                    handleSearchChange(e.target.value);
                }}
                />
            </Menu.Item>
            <Menu.Item>
                <Dropdown trigger={<Image avatar src={image} size='mini'/>} icon ={null}>
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
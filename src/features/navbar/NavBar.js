import React, { Component } from 'react';
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
        <Menu.Item> 
            <a href = '#'>Home</a>
        </Menu.Item>
        <Menu.Item>
            <a href = '#'>Friend Requests</a>
        </Menu.Item>
        <Menu.Item position = 'right'>
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
                        <Dropdown.Item
                            // onClick = {}
                            >
                            <a href = '#'> Profile </a>
                        </Dropdown.Item>
                        <Dropdown.Item
                            // onClick = {}
                            >
                            <a href = '#'> Edit </a>
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick = {logout}
                            >
                            <a href='/'> Sign Out </a>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Menu.Menu>
    </Menu>

);

export default NavBar
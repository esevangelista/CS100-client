import React, { Component } from 'react';

import { Header, Grid, Button, Form, Segment, Card, Image, TextArea, Message } from 'semantic-ui-react';

import something from '../../assets/profpics/somepicture.jpg';

const array = [
        {
            name: 'Harold Roxas',
            image: something,
            description: 'traydor'
        },
        {
            name: 'Harold Roxas',
            image: something,
            description: 'traydor'
        },
        {
            name: 'Harold Roxas',
            image: something,
            description: 'traydor'
        },
        {
            name: 'Harold Roxas',
            image: something,
            description: 'traydor'
        },
        {
            name: 'Harold Roxas',
            image: something,
            description: 'traydor'
        },
        {
            name: 'Harold Roxas',
            image: something,
            description: 'traydor'
        }

    ]

const Search = ({

}) => (
    <Segment>
        <Card.Group itemsPerRow = {2} stackable>
            {
                array.map((result, key)=>{
                    return (
                             <Card>
                                <Card.Content>
                                    <Image floated='right' size='mini' src={result.image} />
                                <Card.Header>
                                    {result.name}
                                </Card.Header>
                                <Card.Description>
                                   {result.description}
                                </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button color='teal'>Add Friend</Button>
                                    </div>
                                </Card.Content>
            </Card>
                        )
                })
            }
           
        </Card.Group>
    </Segment>
);

export default Search;
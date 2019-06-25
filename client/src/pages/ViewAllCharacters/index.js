import React from 'react';
import {Col,Row,Container,Jumbotron} from 'reactstrap';

export default class ViewAllCharacters extends React.Component {
    state = {
        characters: [
            {
                "name": "Zirani",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e0mig7zWh62FmIuujZWExTb5x81BKqXiz9v9Otk8Yv6pxQCY",
                "race": "Elf",
                "class": "Warrior",
                "level": 1,
                "STR": 15,
                "DEX": 18,
                "CON": 13,
                "INT": 12,
                "WIS": 16,
                "CHA": 13,
                "equipment": []
            },
            {
                "name": "Fariz",
                "imageUrl": "https://live.staticflickr.com/5174/5415327544_1faa6ff276_z.jpg",
                "race": "Dwarf",
                "class": "Mystic",
                "level": 1,
                "STR": 12,
                "DEX": 12,
                "CON": 15,
                "INT": 15,
                "WIS": 12,
                "CHA": 17,
                "equipment": []
            },
        ]
    }

    componentDidMount () {

    }
    render () {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                    <Jumbotron>
                        <h1>Welcome to D20Folio!</h1>
                        <p>Here are all the characters</p>
                    </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        {
                            this.state.characters.map( (characters, id) => (
                                <div>
                                    {characters.name}
                                    <img src={characters.imageUrl} alt=""></img>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}
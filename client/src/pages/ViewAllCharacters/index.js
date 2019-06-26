import React from 'react';
import {Col,Row,Container,Jumbotron} from 'reactstrap';
import CharacterCard from "../../components/CharacterCard/index";
import seeds from "./charSeeds.json";
import API from "../../util/API";
export default class ViewAllCharacters extends React.Component {
    state = {
        characters: []
    };
    fetchCharacters = () => (
        API.getAllCharacters()
            .then(characters => this.setState({characters: characters}))
    )

    componentDidMount () {
        this.fetchCharacters();
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
                                <CharacterCard characters={characters} key={id} />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}
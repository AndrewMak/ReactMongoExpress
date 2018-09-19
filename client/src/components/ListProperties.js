import React, {
    Component
} from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import uuid from 'uuid';

class ListProperties extends Component {
    state = {
        items: [{
                id: uuid(),
                name: 'Eggs'
            },
            {
                id: uuid(),
                name: 'Milk'
            },
            {
                id: uuid(),
                name: 'Steak'
            },
            {
                id: uuid(),
                name: 'Water'
            }
        ]
    }
    render() {
        const { items } = this.state;
        return(
            <Container>
                <Button color="dark" style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if(name){
                        this.setState(state => ({
                            items: [...state.items, {id: uuid(), name}]
                        }));
                    }
                }}
                >Add Item</Button>

                <ListGroup>
                    <TransitionGroup className="list-properties">
                    {items.map(({id, name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ListProperties;
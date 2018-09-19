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
                name: 'Casa do Neymar'
            },
            {
                id: uuid(),
                name: 'Apartamento em Santos'
            },
            {
                id: uuid(),
                name: 'Casa do Ronaldinho'
            },
            {
                id: uuid(),
                name: 'Apartamento do Romário'
            }
        ]
    }
    render() {
        const { items } = this.state;
        return(
            <Container>
                <Button color="primary" style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Insira o nome do Imóvel');
                    if(name){
                        this.setState(state => ({
                            items: [...state.items, {id: uuid(), name}]
                        }));
                    }
                }}
                >Adicionar Imóvel</Button>

                <ListGroup>
                    <TransitionGroup className="list-properties">
                    {items.map(({id, name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>            
                  {name}
                  <Button
                    className="remove-btn float-right"
                    color="danger"
                    size="sm"
                    onClick={() => {
                       this.setState(state =>({
                            items: state.items.filter(item => item.id !== id)
                        }));
                      }}
                  >
                    &times;
                  </Button>
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
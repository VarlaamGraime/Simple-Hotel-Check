import React from 'react';
import { Container, Form, Card  } from 'react-bootstrap';
import App from '../App.css';
import styleAuth from '../style/styleAuth.css';

const Auth = () => {
    return (
        <Container
            style={{ height: window.innerHeight  }}
        >
                
            <div className="background-image authForm justify-content-center ">
                <Card className='cardAuth' style={{ width: 409, height: 382 }}>
                    <div className='blockText'>
                        <p className='textCard'>Simple Hotel Check</p>
                    </div>
                    <div className='blockInputs'>
                        <h4 className='textInputAuth'>Логин</h4>
                        <input className='inputAuth'></input>
                        <h4 className='textInputAuth'>Пароль</h4>
                        <input className='inputAuth'></input>
                        <div className='blockButtonAuth'>
                            <button className='buttonAuth'>Войти</button>
                        </div>
                    </div>
                </Card>
            </div>
            
        </Container>
    );
};

export default Auth;
import React, { useContext, useState } from 'react';
import { Badge, Button, Container } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Login from './Login';
import Registration from './Registration';

const Authentication = () => {
    const { handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext)
    const [login, setLogin] = useState(true);

    // const handleToggle = (e) => {
    //     setLogin(e.target.checked);
    // }

    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center  vh-100">
                <div className="p-3 shadow border bg-white rounded-3" style={{ width: '18rem', marginTop: '-10%' }}>
                    <h2>{login ? 'Login' : 'Register Now'}</h2>

                    {/* dynamic login / reg  */}
                    {
                        login ?
                            <Login />
                            :
                            <Registration />
                    }

                    <br />
                    <div>
                        <Badge bg="primary" onClick={() => setLogin(!login)}>
                            {login ? 'Create an account' : 'Already have an account?'}
                        </Badge>
                        {/* social login  */}
                        <br />
                        <br />
                        <div className="text-center">
                            <Badge pill bg="primary">
                                OR
                            </Badge>
                        </div>

                        <div className='d-flex  justify-content-between'>
                            <Button onClick={handleGoogleSignIn} size='sm' variant="outline-primary">Google</Button>
                            <Button onClick={handleGithubSignIn} size='sm' variant="outline-secondary">GitHub</Button>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Authentication;
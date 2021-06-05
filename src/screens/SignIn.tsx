import { Col, Divider, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import { useCallback } from 'react';
import SignInForm from '../components/auth/SignInForm';

const SignIn = () => {

  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/application');
  }, []);

  return (
    <Row className="mt-4">
      <Col offset={4} span={12}>
        <Title level={2} className="text-center">Sign in</Title>
        <Divider />
        <SignInForm onSubmit={handleSubmit} />
      </Col>
    </Row>
  )
}

export default SignIn;
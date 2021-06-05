import { Col, Divider, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import ApplicationForm from '../components/application/ApplicationForm';

const ApplicationScreen = () => {
  return (
    <Row className="mt-4">
      <Col offset={4} span={12}>
        <Title level={2} className="text-center">Application form</Title>
        <Divider />
        <ApplicationForm />
      </Col>
    </Row>
  )
}

export default ApplicationScreen;
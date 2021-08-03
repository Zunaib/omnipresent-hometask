import { Col, Row, Form, Input, Button, Typography } from "antd";

const AddEmployeeForm = () => {
  const { Title } = Typography;

  return (
    <Form className="add-emp-form" layout="horizontal">
      <Row>
        <Col offset={1}>
          <Title level={4}>Basic</Title>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={12}>
          <Row justify="center">
            <Form.Item label="Country Of Work">
              <Input />
            </Form.Item>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center">
            <Form.Item label="First Name">
              <Input />
            </Form.Item>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center">
            <Form.Item label="Last Name">
              <Input />
            </Form.Item>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center">
            <Form.Item label="Date Of Birth">
              <Input />
            </Form.Item>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center">
            <Form.Item label="Holiday Allowance">
              <Input />
            </Form.Item>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col offset={1}>
          <Title level={4}>Additional</Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>Conditional Form Fields Go Here</Col>
      </Row>
      <Row className="btn-row" justify="center">
        <Button type="primary">Add Employee</Button>
      </Row>
    </Form>
  );
};

export default AddEmployeeForm;

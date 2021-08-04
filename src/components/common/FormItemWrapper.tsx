import { Col, Form, Row } from "antd";
import { ReactNode } from "react";

export interface FormItemWrapperProps {
  children: ReactNode;
  label: string;
  error: any;
  labelCol?: number;
  wrapperCol?: number;
}

const FormItemWrapper = ({
  children,
  label,
  error,
  labelCol,
  wrapperCol,
}: FormItemWrapperProps) => {
  return (
    <Col className="field-col" xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
      <Row justify="center">
        <Form.Item
          labelCol={{ span: labelCol }}
          wrapperCol={{ span: wrapperCol }}
          className="form-item"
          label={label}
          validateStatus={error ? "error" : "success"}
          help={error ? error.message : ""}
        >
          {children}
        </Form.Item>
      </Row>
    </Col>
  );
};

export default FormItemWrapper;

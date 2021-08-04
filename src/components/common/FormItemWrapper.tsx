import { Col, Row } from "antd";
import { ReactNode } from "react";

export interface FormItemWrapperProps {
  children: ReactNode;
}

const FormItemWrapper = ({ children }: FormItemWrapperProps) => {
  return (
    <Col className="field-col" span={12}>
      <Row justify="center">{children}</Row>
    </Col>
  );
};

export default FormItemWrapper;

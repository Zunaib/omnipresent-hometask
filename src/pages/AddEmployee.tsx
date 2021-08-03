import { Col, Divider, PageHeader, Row } from "antd";
import AddEmployeeForm from "../components/AddEmployee/Form";
const AddEmployee = () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Add Employee"
        subTitle="This is a form to add a new employee"
      />
      <Divider />
      <Row className="page-content" justify="center">
        <Col span={24}>
          <AddEmployeeForm />
        </Col>
      </Row>
    </>
  );
};

export default AddEmployee;

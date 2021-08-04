import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Typography,
  Select,
  DatePicker,
} from "antd";
import { Controller, useForm } from "react-hook-form";
import FormItemWrapper from "../common/FormItemWrapper";
import CountrySpecificForm from "./CountrySpecificForm";

const AddEmployeeForm = () => {
  const {
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      countryOfWork: "",
      dateOfBirth: "",
      holidayAllowance: "",
      maritalStatus: "",
      socialInsuranceNumber: "",
      numberOfChildren: "",
      workingHours: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);

  const { Title } = Typography;
  const country = watch("countryOfWork");
  const showCountrySpecificForm = country?.length > 0;

  return (
    <Form
      className="add-emp-form"
      layout="horizontal"
      onFinish={handleSubmit(onSubmit)}
    >
      {/* Basic Fields */}
      <Row>
        <Col offset={1}>
          <Title level={4}>Basic</Title>
        </Col>
      </Row>
      <Row justify="start">
        <FormItemWrapper>
          <Form.Item
            className="form-item"
            label="First Name"
            validateStatus={errors.firstName ? "error" : "success"}
            help={errors.firstName ? errors.firstName.message : ""}
          >
            <Controller
              name="firstName"
              control={control}
              render={(props) => <Input {...props.field} />}
              rules={{
                required: "Required",
              }}
            />
          </Form.Item>
        </FormItemWrapper>
        <FormItemWrapper>
          <Form.Item
            className="form-item"
            label="Last Name"
            validateStatus={errors.lastName ? "error" : "success"}
            help={errors.lastName ? errors.lastName.message : ""}
          >
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={(props) => <Input {...props.field} />}
              rules={{
                required: "Required",
              }}
            />
          </Form.Item>
        </FormItemWrapper>
        <FormItemWrapper>
          <Form.Item
            className="form-item"
            label="Country Of Work"
            validateStatus={errors.countryOfWork ? "error" : "success"}
            help={errors.countryOfWork ? errors.countryOfWork.message : ""}
          >
            <Controller
              name="countryOfWork"
              control={control}
              render={(props) => (
                <Select
                  {...props.field}
                  style={{ width: "200px" }}
                  placeholder="Select a country"
                  onChange={(country: string) => {
                    props.field.onChange(country);
                    reset({
                      ...getValues(),
                      maritalStatus: "",
                      socialInsuranceNumber: "",
                      numberOfChildren: "",
                      workingHours: "",
                    });
                  }}
                >
                  <Select.Option value="spain">Spain</Select.Option>
                  <Select.Option value="ghana">Ghana</Select.Option>
                  <Select.Option value="brazil">Brazil</Select.Option>
                </Select>
              )}
              rules={{
                required: "Required",
              }}
            />
          </Form.Item>
        </FormItemWrapper>
        <FormItemWrapper>
          <Form.Item
            className="form-item"
            label="Date Of Birth"
            validateStatus={errors.dateOfBirth ? "error" : "success"}
            help={errors.dateOfBirth ? errors.dateOfBirth.message : ""}
          >
            <Controller
              name="dateOfBirth"
              control={control}
              defaultValue=""
              render={(props) => (
                <DatePicker
                  placeholder="From"
                  {...props}
                  onChange={(date: moment.Moment | any) => {
                    props.field.onChange(date.toDate().toUTCString());
                  }}
                />
              )}
              rules={{
                required: "Required",
              }}
            />
          </Form.Item>
        </FormItemWrapper>
        <FormItemWrapper>
          <Form.Item
            className="form-item"
            label="Holiday Allowance"
            validateStatus={errors.holidayAllowance ? "error" : "success"}
            help={
              errors.holidayAllowance ? errors.holidayAllowance.message : ""
            }
          >
            <Controller
              name="holidayAllowance"
              control={control}
              defaultValue=""
              render={(props) => <Input {...props.field} />}
              rules={{
                required: "Required",
              }}
            />
          </Form.Item>
        </FormItemWrapper>
      </Row>

      {/* Extra Fields */}
      {showCountrySpecificForm && (
        <>
          <Row>
            <Col offset={1}>
              <Title level={4}>Extra</Title>
            </Col>
          </Row>
          <Row justify="start">
            <CountrySpecificForm
              country={country}
              control={control}
              errors={errors}
            />
          </Row>
        </>
      )}

      {/* Submit */}
      <Row className="btn-row" justify="center">
        <Button type="primary" htmlType="submit">
          Add Employee
        </Button>
      </Row>
    </Form>
  );
};

export default AddEmployeeForm;

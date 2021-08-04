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
  const defaultValues = {
    firstName: "",
    lastName: "",
    countryOfWork: "",
    dateOfBirth: "",
    holidayAllowance: "",
    maritalStatus: "",
    socialInsuranceNumber: "",
    numberOfChildren: "",
    workingHours: "",
  };

  const {
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset(defaultValues);
  };

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
        {/* First Name */}
        <FormItemWrapper
          labelCol={8}
          wrapperCol={16}
          label="First Name"
          error={errors.firstName}
        >
          <Controller
            name="firstName"
            control={control}
            render={(props) => (
              <Input placeholder="Enter first name" {...props.field} />
            )}
            rules={{
              required: "First name is required",
            }}
          />
        </FormItemWrapper>

        {/* Last Name */}
        <FormItemWrapper
          labelCol={8}
          wrapperCol={16}
          label="Last Name"
          error={errors.lastName}
        >
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={(props) => (
              <Input placeholder="Enter last name" {...props.field} />
            )}
            rules={{
              required: "Last name is required",
            }}
          />
        </FormItemWrapper>

        {/* Country Of Work */}
        <FormItemWrapper
          labelCol={10}
          wrapperCol={14}
          label="Country Of Work"
          error={errors.countryOfWork}
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
              required: "Country is required",
            }}
          />
        </FormItemWrapper>

        {/* Date Of Birth */}
        <FormItemWrapper
          labelCol={10}
          wrapperCol={14}
          label="Date Of Birth"
          error={errors.dateOfBirth}
        >
          <Controller
            name="dateOfBirth"
            control={control}
            defaultValue=""
            render={(props) => (
              <DatePicker
                placeholder="Select a date"
                {...props}
                onChange={(date: moment.Moment | any) => {
                  props.field.onChange(date.toDate().toUTCString());
                }}
              />
            )}
            rules={{
              required: "DOB is required",
            }}
          />
        </FormItemWrapper>

        {/* Holiday Allowance */}
        <FormItemWrapper
          labelCol={10}
          wrapperCol={14}
          label="Holiday Allowance"
          error={errors.holidayAllowance}
        >
          <Controller
            name="holidayAllowance"
            control={control}
            render={(props) => (
              <Input placeholder="Enter no. of days" {...props.field} />
            )}
            rules={{
              required: "Holidays are required",
              validate: {
                checkValidAllowance: (value: string) => {
                  const days = parseInt(value);
                  if (country === "spain" && days < 30) {
                    return "Minimum 30 days";
                  } else if (country === "brazil" && days > 40) {
                    return "Maximum 40 days";
                  }
                  return true;
                },
              },
            }}
          />
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

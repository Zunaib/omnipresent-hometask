import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

export interface MaritalStatusInputProps {
  control: any;
  errors: any;
}

const MaritalStatusInput = ({ control, errors }: MaritalStatusInputProps) => {
  return (
    <Form.Item
      className="form-item"
      label="Marital Status"
      validateStatus={errors.maritalStatus ? "error" : "success"}
      help={errors.maritalStatus ? errors.maritalStatus.message : ""}
    >
      <Controller
        name="maritalStatus"
        control={control}
        defaultValue=""
        render={(props) => (
          <Select
            {...props.field}
            style={{ width: "200px" }}
            placeholder="Select a country"
          >
            <Select.Option value="married">Married</Select.Option>
            <Select.Option value="single">Single</Select.Option>
          </Select>
        )}
        rules={{
          required: "Required",
        }}
      />
    </Form.Item>
  );
};

export default MaritalStatusInput;

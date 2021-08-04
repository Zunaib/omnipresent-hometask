import { Select } from "antd";
import { Controller } from "react-hook-form";
import FormItemWrapper from "../../../common/FormItemWrapper";

export interface MaritalStatusInputProps {
  control: any;
  errors: any;
}

const MaritalStatusInput = ({ control, errors }: MaritalStatusInputProps) => {
  return (
    <FormItemWrapper
      labelCol={10}
      wrapperCol={14}
      label="Marital Status"
      error={errors.maritalStatus}
    >
      <Controller
        name="maritalStatus"
        control={control}
        defaultValue=""
        render={(props) => (
          <Select
            {...props.field}
            style={{ width: "200px" }}
            placeholder="Select a marital status"
          >
            <Select.Option value="married">Married</Select.Option>
            <Select.Option value="single">Single</Select.Option>
          </Select>
        )}
        rules={{
          required: "Required",
        }}
      />
    </FormItemWrapper>
  );
};

export default MaritalStatusInput;

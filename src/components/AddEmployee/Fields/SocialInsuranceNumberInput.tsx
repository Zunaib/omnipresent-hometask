import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

export interface SocialInsuranceNumberInputProps {
  control: any;
  errors: any;
}

const SocialInsuranceNumberInput = ({
  control,
  errors,
}: SocialInsuranceNumberInputProps) => {
  return (
    <Form.Item
      className="form-item"
      label="Social Insurance Number"
      validateStatus={errors.socialInsuranceNumber ? "error" : "success"}
      help={
        errors.socialInsuranceNumber ? errors.socialInsuranceNumber.message : ""
      }
    >
      <Controller
        name="socialInsuranceNumber"
        control={control}
        defaultValue=""
        render={(props) => <Input {...props.field} />}
        rules={{
          required: "Required",
        }}
      />
    </Form.Item>
  );
};

export default SocialInsuranceNumberInput;

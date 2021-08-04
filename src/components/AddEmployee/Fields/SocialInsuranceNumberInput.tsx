import { Input } from "antd";
import { Controller } from "react-hook-form";
import FormItemWrapper from "../../common/FormItemWrapper";

export interface SocialInsuranceNumberInputProps {
  control: any;
  errors: any;
}

const SocialInsuranceNumberInput = ({
  control,
  errors,
}: SocialInsuranceNumberInputProps) => {
  return (
    <FormItemWrapper
      labelCol={14}
      wrapperCol={10}
      label="Social Insurance Number"
      error={errors.socialInsuranceNumber}
    >
      <Controller
        name="socialInsuranceNumber"
        control={control}
        render={(props) => (
          <Input placeholder="Enter social insurance number" {...props.field} />
        )}
        rules={{
          required: "Required",
        }}
      />
    </FormItemWrapper>
  );
};

export default SocialInsuranceNumberInput;

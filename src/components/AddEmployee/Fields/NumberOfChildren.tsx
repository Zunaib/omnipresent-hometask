import { Input } from "antd";
import { Controller } from "react-hook-form";
import FormItemWrapper from "../../common/FormItemWrapper";

export interface NumberOfChildrenProps {
  control: any;
  errors: any;
}

const NumberOfChildren = ({ control, errors }: NumberOfChildrenProps) => {
  return (
    <FormItemWrapper
      labelCol={14}
      wrapperCol={10}
      label="Number Of Children"
      error={errors.numberOfChildren}
    >
      <Controller
        name="numberOfChildren"
        control={control}
        render={(props) => (
          <Input placeholder="Enter no. of children" {...props.field} />
        )}
        rules={{
          required: "Required",
        }}
      />
    </FormItemWrapper>
  );
};

export default NumberOfChildren;

import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

export interface NumberOfChildrenProps {
  control: any;
  errors: any;
}

const NumberOfChildren = ({ control, errors }: NumberOfChildrenProps) => {
  return (
    <Form.Item
      className="form-item"
      label="Number Of Children"
      validateStatus={errors.numberOfChildren ? "error" : "success"}
      help={errors.numberOfChildren ? errors.numberOfChildren.message : ""}
    >
      <Controller
        name="numberOfChildren"
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

export default NumberOfChildren;

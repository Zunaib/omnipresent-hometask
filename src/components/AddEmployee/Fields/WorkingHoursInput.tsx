import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

export interface WorkingHoursInputProps {
  control: any;
  errors: any;
}

const WorkingHoursInput = ({ control, errors }: WorkingHoursInputProps) => {
  return (
    <Form.Item
      className="form-item"
      label="Working Hours"
      validateStatus={errors.workingHours ? "error" : "success"}
      help={errors.workingHours ? errors.workingHours.message : ""}
    >
      <Controller
        name="workingHours"
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

export default WorkingHoursInput;

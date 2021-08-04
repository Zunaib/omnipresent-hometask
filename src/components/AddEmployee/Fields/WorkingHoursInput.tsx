import { Input } from "antd";
import { Controller } from "react-hook-form";
import FormItemWrapper from "../../common/FormItemWrapper";

export interface WorkingHoursInputProps {
  control: any;
  errors: any;
}

const WorkingHoursInput = ({ control, errors }: WorkingHoursInputProps) => {
  return (
    <FormItemWrapper
      labelCol={10}
      wrapperCol={14}
      label="Working Hours"
      error={errors.workingHours}
    >
      <Controller
        name="workingHours"
        control={control}
        render={(props) => (
          <Input placeholder="Enter working hours" {...props.field} />
        )}
        rules={{
          required: "Required",
        }}
      />
    </FormItemWrapper>
  );
};

export default WorkingHoursInput;

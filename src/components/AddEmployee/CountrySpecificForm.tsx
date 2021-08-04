import FormItemWrapper from "../common/FormItemWrapper";
import MaritalStatusInput from "./Fields/common/MaritalStatusInput";
import NumberOfChildren from "./Fields/NumberOfChildren";
import SocialInsuranceNumberInput from "./Fields/SocialInsuranceNumberInput";
import WorkingHours from "./Fields/WorkingHoursInput";

export interface CountrySpecificFormProps {
  country: string;
  control: any;
  errors: any;
}

const CountrySpecificForm = ({
  country,
  control,
  errors,
}: CountrySpecificFormProps) => {
  return (
    <>
      {country === "spain" ? (
        <>
          <FormItemWrapper>
            <MaritalStatusInput control={control} errors={errors} />
          </FormItemWrapper>
          <FormItemWrapper>
            <SocialInsuranceNumberInput control={control} errors={errors} />
          </FormItemWrapper>
        </>
      ) : country === "brazil" ? (
        <FormItemWrapper>
          <WorkingHours control={control} errors={errors} />
        </FormItemWrapper>
      ) : (
        country === "ghana" && (
          <>
            <FormItemWrapper>
              <MaritalStatusInput control={control} errors={errors} />
            </FormItemWrapper>
            <FormItemWrapper>
              <NumberOfChildren control={control} errors={errors} />
            </FormItemWrapper>
          </>
        )
      )}
    </>
  );
};

export default CountrySpecificForm;

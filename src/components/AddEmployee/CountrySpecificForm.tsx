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
          <MaritalStatusInput control={control} errors={errors} />
          <SocialInsuranceNumberInput control={control} errors={errors} />
        </>
      ) : country === "brazil" ? (
        <WorkingHours control={control} errors={errors} />
      ) : (
        country === "ghana" && (
          <>
            <MaritalStatusInput control={control} errors={errors} />
            <NumberOfChildren control={control} errors={errors} />
          </>
        )
      )}
    </>
  );
};

export default CountrySpecificForm;

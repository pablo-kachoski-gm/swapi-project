import { Resident } from '@/commons/types';
import { ResidentProp } from './ResidentProp';
import { ResidentTitle } from './ResidentTitle';
import { useTranslation } from './useTranslation';

interface ResidentInfoProps {
  resident: Resident;
}

export function ResidentInfo({ resident }: ResidentInfoProps) {
  const { name, birth_year, gender, hair_color, eye_color } = resident;

  const { birthLabel, genderLabel, hairLabel, eyeColorLabel } =
    useTranslation();

  return (
    <div className="p-16 pb-32 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <ResidentTitle className="mb-16">{name}</ResidentTitle>
      <ResidentProp>{`${birthLabel}: ${birth_year}`}</ResidentProp>
      <ResidentProp>{`${genderLabel}: ${gender}`}</ResidentProp>
      <ResidentProp>{`${hairLabel}: ${hair_color}`}</ResidentProp>
      <ResidentProp>{`${eyeColorLabel}: ${eye_color}`}</ResidentProp>
    </div>
  );
}

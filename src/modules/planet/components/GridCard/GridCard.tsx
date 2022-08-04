import { DetailsButton } from '../DetailsButton';
import { ResidentProp } from './ResidentProp';
import { ResidentTitle } from './ResidentTitle';
import { useTranslation } from './useTranslation';
import { useCallback } from 'react';
import { ResidentWithId } from '@/planet/types';

interface GridCardProps {
  resident: ResidentWithId;
  onClick: (id: string) => void;
}

export function GridCard({ resident, onClick }: GridCardProps) {
  const { id, name, birth_year, gender, hair_color, eye_color } = resident;

  const { birthLabel, genderLabel, hairLabel, eyeColorLabel } =
    useTranslation();

  const onDetailsClick = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
    <div className="text-center py-6 px-16 h-72 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-sky-800 dark:border-sky-700">
      <ResidentTitle>{name}</ResidentTitle>
      <ResidentProp>{`${birthLabel}: ${birth_year}`}</ResidentProp>
      <ResidentProp>{`${genderLabel}: ${gender}`}</ResidentProp>
      <ResidentProp>{`${hairLabel}: ${hair_color}`}</ResidentProp>
      <ResidentProp>{`${eyeColorLabel}: ${eye_color}`}</ResidentProp>
      <DetailsButton onClick={onDetailsClick} />
    </div>
  );
}

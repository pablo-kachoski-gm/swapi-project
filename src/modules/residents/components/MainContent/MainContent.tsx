import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { RESIDENT_QUERY_KEY } from '@/commons/constants';
import { Resident } from '@/commons/types/models';
import { getResidentById } from '@/commons/services';
import { ResidentInfo } from '../ResidentInfo';

export function MainContent(): JSX.Element {
  const router = useRouter();
  const { residentId } = router.query;

  const { data: resident } = useQuery(
    [RESIDENT_QUERY_KEY],
    () => getResidentById(residentId as string),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return <ResidentInfo resident={resident as Resident} />;
}

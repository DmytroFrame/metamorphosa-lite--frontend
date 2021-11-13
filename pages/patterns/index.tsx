import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { PatternsList } from '../../src/components/PatternsList/PatternsList';
import { Wrapper } from '../../src/containers/Wrapper/Wrapper';

const PatternsListPage: NextPage = () => {

  const [trainingId, settrainingId] = useState<string>('');
  const router = useRouter();

  const grabDataFromRoute = () => {
    const result = router.asPath.split('id=')[1];
    return result;
  }

  useEffect(() => {
    settrainingId(grabDataFromRoute());
    grabDataFromRoute();
  }, []);

  return (
    <Wrapper mode={'development'}>
      <PatternsList trainingId={trainingId}/>
    </Wrapper>
  )
};

export default PatternsListPage;

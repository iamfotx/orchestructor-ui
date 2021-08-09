import { useRecoilValue } from 'recoil';
import Code from './code';
import { originState, computedState, destinationState } from './atoms';

export default function App(): JSX.Element {
  const origin = useRecoilValue(originState);
  const computed = useRecoilValue(computedState);
  const destination = useRecoilValue(destinationState);

  return (
    <>
      <h1 className="mt-10 ml-10 text-3xl">Orchestructor UI</h1>
      <div className="flex mt-10">
        <Code title="Origin" code={origin} mode="origin" />
        <Code
          title="JSONATA (Computed Schema)"
          code={computed}
          mode="jsonata"
        />
        <Code title="Destination" code={destination} />
      </div>
    </>
  );
}

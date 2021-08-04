import { useRef, useEffect, useState } from 'react';
import jsonata from 'jsonata';

export default function App(): JSX.Element {
  const [destination, setDestination] = useState<string | null>(null);
  const originRef = useRef(
    JSON.stringify(
      {
        first: 'Ahmad',
        last: 'Raza',
        age: 20,
      },
      null,
      2,
    ),
  );
  const queryRef = useRef(
    `   {
      "name": first & ' ' & last,
      "title": "Software Engineer"
    }`,
  );

  useEffect(() => {
    const origin = JSON.parse(originRef.current);
    const expression = jsonata(queryRef.current);
    const result = expression.evaluate(origin);
    const evaluated = JSON.stringify(result, null, 2);
    setDestination(evaluated);
  }, []);

  return (
    <>
      <h1 className="mt-10 ml-10 text-3xl">Orchestructor UI</h1>
      <div className="flex mt-10">
        <section className="ml-5">
          <h1 className="text-xl">Origin</h1>
          <pre className="mt-10">{originRef.current}</pre>
        </section>
        <section className="ml-5">
          <h1 className="text-xl">JSONATA (Computed Schema)</h1>
          <pre className="mt-10">{queryRef.current}</pre>
        </section>
        <section className="ml-5">
          <h1 className="text-xl">Destination</h1>
          <pre className="mt-10">{destination}</pre>
        </section>
      </div>
    </>
  );
}

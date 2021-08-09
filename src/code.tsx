import { DragEvent } from 'react';
import { useSetRecoilState } from 'recoil';

import { computedState } from './atoms';

type modeType = 'origin' | 'jsonata' | undefined;

interface CodeProps {
  code: Record<string, unknown>;
  title: string;
  mode?: modeType;
}

type valueType = string | unknown;
function formatStringValue(value: valueType): valueType {
  if (typeof value === 'string') {
    return `"${value}"`;
  }
  return value;
}

interface CodeFace {
  mode: modeType;
  onDragStart: (event: DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: DragEvent<HTMLDivElement>) => void;
  onDrop: (event: DragEvent<HTMLDivElement>) => void;
}

function getCodeProps({ mode, onDrop, onDragStart, onDragOver }: CodeFace) {
  const props = {
    jsonata: {
      onDrop,
      onDragOver,
      className: 'no-pointer-event ml-4 ',
    },
    origin: {
      className: 'ml-4 w-max cursor-grab',
      onDragStart,
      draggable: true,
    },
  };
  return mode ? props[mode] : null;
}

export default function Code({ code, title, mode }: CodeProps): JSX.Element {
  const setComputedState = useSetRecoilState(computedState);

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    const {
      dataset: { key = '' },
    } = event.target as HTMLDivElement;
    const targetKey = event.dataTransfer.getData('text/plain');
    setComputedState((state) => ({ ...state, [key]: targetKey }));
  };

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    const {
      dataset: { key = '' },
    } = event.target as HTMLDivElement;
    event.dataTransfer.setData('text/plain', key);
  };

  return (
    <section className="ml-5 w-80">
      <h1 className="text-xl">{title}</h1>
      <div className="ml-2 inline-block">
        <div>{`{`}</div>
        {Object.entries(code).map(([key, value]) => (
          <div
            className="ml-4 w-max"
            key={key}
            data-key={key}
            {...getCodeProps({
              mode,
              onDrop,
              onDragStart,
              onDragOver,
            })}
          >
            {`"${key}"`}:{' '}
            <span className="ml-1">
              {' '}
              {mode === 'jsonata' ? value : formatStringValue(value)}{' '}
            </span>
          </div>
        ))}
        {`}`}
      </div>
    </section>
  );
}

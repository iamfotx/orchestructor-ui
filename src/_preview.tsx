// import { Dispatch, SetStateAction, ChangeEvent } from 'react';
// import { LiveProvider, LiveEditor } from 'react-live';

// interface PreviewProps {
//   title: string;
//   data: Record<string, unknown>;
//   setOrigin?: Dispatch<SetStateAction<Record<string, unknown>>>;
// }

// function Preview({ title, data }: PreviewProps): JSX.Element {
//   const handleSubmit = (event: unknown) => {
//     event.preventDefault();
//     const [editor] = event.target.elements;
//     console.log(editor.value);
//   };
//   return (
//     <section className="ml-5">
//       <h1 className="text-xl">{title}</h1>
//       <form onSubmit={handleSubmit}>
//         <LiveProvider code={JSON.stringify(data, null, 2)} language={'json'}>
//           <LiveEditor className="bg-white" />
//         </LiveProvider>
//         <button className="mt-5 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
//           Submit
//         </button>
//       </form>
//       {/* <textarea
//         className="form-textarea mt-1 block resize w-80"
//         rows={8}
//         value={JSON.stringify(data, null, 2)}
//         onChange={handleOnChange}
//       ></textarea> */}
//     </section>
//   );
// }

// export default Preview;

import { SWRProvider } from "./providers";

function App(props: { children: React.ReactNode }) {
  return <SWRProvider>{props.children}</SWRProvider>;
}

export default App;

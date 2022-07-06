import Title from '../components/title'
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
    SandpackReactDevTools,
  } from "@codesandbox/sandpack-react"
export default () => {
    
    return (
        <>
            <Title title={'JavaScript-继承'} />
            继承
            <SandpackProvider template="react">
                <SandpackLayout>
                <SandpackCodeEditor />
                <SandpackPreview />
                <SandpackReactDevTools />
                </SandpackLayout>
            </SandpackProvider>
        </>
    )
}
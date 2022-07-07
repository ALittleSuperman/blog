import Title from '../../components/title'
import { useRouter } from 'next/router'
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
    SandpackReactDevTools,
  } from "@codesandbox/sandpack-react"
export default () => {
    const router = useRouter()
    const { postId } = router.query
    return (
        <>
            <Title title={'JavaScript-继承'} />
            继承{postId}
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
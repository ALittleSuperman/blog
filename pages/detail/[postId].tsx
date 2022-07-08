import Title from '../../components/title'
import { useRouter } from 'next/router'
import { Sandpack } from "@codesandbox/sandpack-react"
import { nightOwl } from "@codesandbox/sandpack-themes";
import {useEffect, useState} from "react";
export default () => {
    const router = useRouter()
    const { postId } = router.query
    const [code, setCode] = useState<string>('')
    const [css, setCss] = useState<string>('')
    useEffect(() => {
        setCss(`div {
            color: red;
        }`)
        setCode(`
        import './style.css'
        export default function App() {
          return <h1>Hello Sandpack</h1>
        }`)
    })
    return (
        <>
            <Title title={'JavaScript-继承'} />
            继承{postId}
            <Sandpack
                theme={nightOwl}
                template="react"
                files={{
                    "/App.js": code,
                    "/style.css": css
                }}
                options={{
                    showNavigator: true,
                    autorun: false
                }}
            />
        </>
    )
}
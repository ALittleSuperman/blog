import Navbar from './navbar'
export default ({ children }) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        </>
    )
}
import Style from './navbar.module.css'
import Link from 'next/link'
export default () => {
    return (
        <>
            <header className={Style.navbarContainer}>
                道阻且长，行则将至
            </header>
            <nav className={Style.navContainer}>
                <div className={Style.navItem}>
                    <Link href="/">About</Link>
                </div>
                <div className={Style.navItem}>
                    <Link href="/posts">Blog</Link>
                </div>
                <div className={Style.navItem}>
                    <Link href="/other">Other</Link>
                </div>
            </nav>
        </>
    )
}
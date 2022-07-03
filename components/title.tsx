import Style from './title.module.css'
export default ( { title } ) => {

    return (
        <div className={Style.titleContainer}>
            { title }
        </div>
    )
}
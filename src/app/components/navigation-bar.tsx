export default function NavigationBar() {
    return (
        <div className={'flex flex-row justify-between'}>
            <div>
                Logo
            </div>
            <div className={'flex flex-row items-center'}>
                icon
                <div className={" text-white"}>Home</div>
            </div>
            <div>
                menu
            </div>
        </div>
    )
}
export default function NavigationBar() {
    return (
        <div className={'flex flex-row justify-between'}>
            <div>
                <img src={"/icons/logo.svg"} alt="logo" height={29.09} width={29.55}/>
            </div>
            <div className={'flex flex-row items-center gap-[9px]'}>
                <img src={"/icons/home.svg"} alt="home" height={16} width={16}/>
                <div className={"text-sm font-bold text-white"}>Home</div>
            </div>
            <div>
                <img src={"/icons/menu.svg"} alt="home" height={12} width={18}/>
            </div>
        </div>
    )
}
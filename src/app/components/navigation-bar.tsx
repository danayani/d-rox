export default function NavigationBar() {
    return (
        <div>
            <div className={' sm:hidden flex flex-row justify-between items-center'}>
                <img src={"/icons/logo.svg"} alt="logo" height={29.09} width={29.55}/>

                <div className={'flex flex-row items-center gap-[9px]'}>
                    <img src={"/icons/home.svg"} alt="home" height={16} width={16}/>
                    <div className={"text-sm font-bold text-white"}>Home</div>
                </div>
                <div>
                    <img src={"/icons/menu.svg"} alt="manu" height={12} width={18}/>
                </div>
            </div>

            <div className={'hidden sm:flex flex-col '}>
                <div className={' flex flex-row items-center gap-2'}>
                    <img src={"/icons/logo.svg"} alt="logo" height={34.14} width={34.58}/>
                    <img src={"/icons/logo-name.svg"} alt="logo" height={17} width={100}/>
                </div>
                <Tabs/>
            </div>
        </div>
    )
}

function Tabs() {
    return <div className={"flex flex-row justify-between"}>
        < Tab label={"Home"} icon={"home"} active={true}/>
        < Tab label={"My Activity"} icon={"activity"}/>
        < Tab label={"Settings"} icon={"setting"}/>
    </div>
}

function Tab(props: { icon: string, label: string, active?: boolean }) {
    return (
        <div
            className={`w-full flex flex-row gap-2 justify-center items-center ${props.active ? "border-b-4 border-solid border-amber-200" : "border-b-[1px] border-solid border-LightGray"}`}>
            <img src={`/icons/${props.icon}.svg`} alt={props.label} height={16} width={16}/>
            <a href={"#"} className={"text-LightGray"}>{props.label}</a>
        </div>
    )
}

"use client"
import {Game, OperatingSystem} from "@/app/types";
import {useEffect, useState} from "react";
import {UIEvent} from 'react';

export default function GamesCards() {
    const [page, setPage] = useState<number>(0)
    const [gamesShows, setGamesShows] = useState<Game[]>([])
    const [loadMoreVisibility, setLoadMoreVisibility] = useState<boolean>(true)


    useEffect(() => {
        updateGamesData()
    }, [])

    if (gamesShows.length == 0) return <div>Loading...</div>
    return <div className={`w-full pt-6 h-screen overflow-y-scroll`}
                onScroll={(event) => {
                    if (loadMoreVisibility) {
                        setLoadMoreVisibility(false)
                    }
                    handleScroll(event)
                }}>
        <div className={`justify-center flex flex-wrap gap-4`}>
            {gamesShows.map((game) => (
                <Card game={game} key={game.id}/>
            ))}
        </div>

        {/*
        TODO: hot-fix for a bigger screen edge case.
        In this case, the 'onScroll' event does not fire (when the wrapper container of the games cards is too big and the scroll is hidden)
        Below there is a 'load more' button, to initiate the first scrolling.
        After the first click / scroll it disappear.
        */}
        {loadMoreVisibility &&
            <button onClick={() => {
                setLoadMoreVisibility(false)
                updateGamesData()
            }}
                    className={"flex justify-self-center m-4 p-2 rounded-full text-white bg-Purple"}>Load more
            </button>}
    </div>

    function updateGamesData() {
        const path = "http://localhost:3000/api/games"
        //todo: check is there is more games, no sent redundant request
        fetch(`${path}?page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setGamesShows([...gamesShows, ...data])
                setPage(page + 1)
            })
            .catch(() => {
                console.warn("Error in fetch data from ", path)
            })
    }

    function handleScroll(event: UIEvent<HTMLDivElement>) {
        const ratioThreshold = 0.9
        const {scrollTop, scrollHeight, clientHeight} = event.target as HTMLDivElement

        const ratio = scrollTop / (scrollHeight - clientHeight)

        if (ratio > ratioThreshold) {
            updateGamesData()
        }
    }
}


function Card(props: { game: Game }) {
    return <div className={"p-4 flex flex-col gap-3 rounded-[18px] bg-DarkBlue "}>
        <div className={"flex flex-row gap-3.5"}>
            <div className={'size-[60px] sm:size-[66px] rounded-2xl'}>
                <img src={`/images/${props.game.img_url}`} alt="home" height={70} width={70}/>
            </div>
            <div className={"flex flex-col w-[253px] sm:w-[390px] "}>
                <div className={'text-sm sm:text-lg truncate font-semibold text-white '}>
                    {props.game.title}
                </div>
                <div className={'h-[40px] text-xs sm:text-[13px] font-medium line-clamp-2 text-white/60'}>
                    {props.game.description}
                </div>
            </div>
        </div>

        <div className={"flex flex-row justify-between items-center"}>
            <div className={"flex flex-row gap-2"}>
                <OsIcon os={props.game.os}/>
                <Badges badgesNames={props.game.badges}/>
            </div>
            <Payout payout={props.game.payout} bonusPayout={props.game.bonusPayout}/>
        </div>

    </div>
}

function OsIcon(props: { os: OperatingSystem }) {
    let iconUrl
    switch (props.os) {
        case OperatingSystem.android:
            iconUrl = "android.svg"
            break
        case OperatingSystem.ios:
            iconUrl = "ios.svg"
            break
        default:
            iconUrl = "web.svg"
    }

    return (
        <div className={"flex items-center"}>
            <img src={`/icons/${iconUrl}`} alt="home" height={24} width={24}/>
        </div>

    )
}

function Badges(props: { badgesNames: string[] }) {
    return (
        <div className={"flex flex-row gap-1"}>
            {props.badgesNames.map((name, index) => {
                return <div key={index}
                            className={"py-1.5 px-2.5 text-xs font-medium bg-white text-DarkBlue rounded-full font-RobotoSlab"}>
                    {name}
                </div>
            })
            }
        </div>
    )
}

//todo: improve the text-line-through
function Payout(props: { payout: number, bonusPayout?: number }) {
    const totalPayout = (props.bonusPayout) ? props.bonusPayout + props.payout : props.payout
    return (
        <div className={"flex flex-row rounded-full text-DarkBlue bg-LightGreen items-center p-1.5 gap-1"}>
            {props.bonusPayout &&
                <div className={"text-xs line-through line font-medium"}>
                    {props.payout}
                </div>
            }
            <img src={`/icons/payout.svg`} alt="home" height={18} width={18}/>
            <div className={"text-sm font-bold "}>
                {totalPayout}
            </div>
        </div>
    )
}

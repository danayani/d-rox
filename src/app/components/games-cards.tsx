"use client"
import {Game} from "@/app/types";
import {useEffect, useState} from "react";
import { UIEvent } from 'react';

export default function GamesCards() {
    const [page, setPage] = useState<number>(0)
    const [gamesShows, setGamesShows] = useState<Game[]>([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        updateGamesData()
    }, [])

    if (isLoading) return <p>Loading...</p>
    return <div className={`w-full justify-center flex flex-row flex-wrap gap-4 pt-6 h-screen overflow-y-scroll`}
     onScroll={handleScroll}>
        {gamesShows.map((game) => (
            <div key={game.id}>
                <Card game={game}/>
            </div>
        ))}
        {/*todo: change button to event onScroll*/}
        <button onClick={updateGamesData}>load more</button>
    </div>

    function updateGamesData() {
        // setLoading(true)
        fetch(`http://localhost:3000/api/games?page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("more games = ", data)
                setGamesShows([...gamesShows, ...data])
                setPage(page + 1)
                setLoading(false)
            })
    }

    function handleScroll(event: UIEvent<HTMLDivElement>) {
        console.log("scrolling...")
        const ratioThreshold = 0.9
        const {scrollTop, scrollHeight, clientHeight} = event.target as HTMLDivElement

        const ratio = scrollTop / (scrollHeight - clientHeight)

        if (ratio > ratioThreshold) {

            updateGamesData()
            console.log("its time for more")
        }
    }
}


function Card(props: { game: Game }) {
    return <div className={"flex flex-col"}>
        <div className={"flex flex-row"}>
            <div>image</div>
            <div className={"flex flex-col"}>
                <div>
                    {props.game.title}
                </div>
                <div>
                    {props.game.description}
                </div>
            </div>
        </div>

        <div className={"flex flex-row justify-between"}>
            <div className={"flex flex-row"}>
                <div>
                    {props.game.os}
                </div>
                <div>
                    props.item.badges
                </div>
            </div>

            <div>
                {props.game.payout}
            </div>
        </div>

    </div>
}
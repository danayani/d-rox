"use client"
import {Game} from "@/app/types";
import {useEffect, useState} from "react";



export default function GamesCards() {
    const [gamesShows, setGamesShows] = useState<Game[]>([])
    const [isLoading, setLoading] = useState(true)
    console.log(gamesShows)

    useEffect(() => {
        fetch(`http://localhost:3000/api/games`)
            .then((res) => res.json())
            .then((data) => {
                console.log("data = ", data)
                setGamesShows([...gamesShows, ...data])
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    return <div className={`w-full justify-center flex flex-row flex-wrap gap-4 pt-6`}
     >
        {gamesShows.map((game) => (
            <div key={game.id}>
                <Card game={game}/>
            </div>
        ))}
    </div>
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
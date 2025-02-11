"use client"
import {Game} from "@/app/types";



export default function GamesCards(props:{games:Game[]}) {
    return <div className={`w-full justify-center flex flex-row flex-wrap gap-4 pt-6`}
     >
        {props.games.map((item) => (
            <div key={item.id}>
                <Card game={item}/>
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
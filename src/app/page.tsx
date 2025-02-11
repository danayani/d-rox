import GamesCards from "@/app/components/games-cards";

export default async function Home() {
    const data = await fetch(`http://localhost:3000/api/games`)
    const allGames = await data.json()
    console.log(allGames)

  if(!allGames) return <div>Loading...</div>
  return (
    <div>
      <GamesCards games={allGames}/>
    </div>
  )
}

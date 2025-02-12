import GamesCards from "@/app/components/games-cards";
import NavigationBar from "@/app/components/navigation-bar";

export default async function Home() {

  return (
    <div>
        <NavigationBar />
      <GamesCards/>
    </div>
  )
}

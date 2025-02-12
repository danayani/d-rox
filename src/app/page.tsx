import GamesCards from "@/app/components/games-cards";
import NavigationBar from "@/app/components/navigation-bar";

export default async function Home() {

  return (
      <div className={"w-full px-4 pt-6"}>
          <NavigationBar/>
          <GamesCards/>
      </div>
  )
}

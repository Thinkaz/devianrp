import Cards from "@/components/cards";
import Card from "@/components/card";
import Divider from "@/components/divider";
import Title from "@/components/title";
import Callout from "@/components/callout";
import Button from "@/components/button";
import Boosters from "@/components/boosters";

export default function Home() {
  return (
    <div className=" flex flex-col">
      <div id="container"></div>
      <div className=" pt-28 relative z-10">
        <div>
          <h1 className=" text-7xl font-bold tracking-wide font-space-grotesk">
            Un roleplay
            <br />
            où
            <span className="bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent font-bold">
              {" "}
              vous{" "}
            </span>
            comptez
          </h1>
          <div className=" mt-7">
            <p className=" text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              Assez des serveurs où l{"'"}on vous prend pour des cons ?<br />
            </p>
          </div>
          <div className=" pt-14">
            <Cards />
          </div>
          <Button
            text={"Nous rejoindre"}
            lien={"https://discord.gg/pxXEzdcHrw"}
          />
          <Divider />
          <div className="flex flex-col justify-center -mt-5">
            <Title
              title="Liens utiles"
              subtitle="Ah oui c'est totalement un truc fourre-tout, mais bon, c'est pas grave, c'est pas comme si vous alliez lire ça"
              color1="from-red-500"
              color2="to-red-300"
            />
            <div className="grid grid-cols-3 gap-10 w-full -mt-3">
              <Card
                title="Stream"
                subtitle="Les streams de la communauté"
                icon="faTwitch"
                to="/streams"
              />
              <Card
                title="Posts"
                subtitle="Pour les nouveaux ou les anciens, c'est toujours utile"
                icon="faBook"
                to="/posts"
              />
              <Card
                title="ChangeLogs"
                subtitle="Les nouveautés des dernières mises à jour"
                icon="faCode"
                to="/changelogs"
              />
            </div>
            <div className="mt-16">
              <Callout
                emoji="ℹ️"
                text="À savoir : Le site est en constante évolution (enfin tant que Saw_6 travaille dessus) donc certaines fonctionnalités des blogs risquent de changer"
              />
            </div>
          </div>
          <Divider />
          <div className="flex flex-col justify-center">
            <Title
              title="Ils nous soutiennent"
              subtitle="Merci les gars (et les filles) pour votre soutien, c'est grâce à vous que le serveur est ce qu'il est aujourd'hui ! (On vous aime 🥹)"
              color1="from-purple-400"
              color2="to-violet-800"
            />
            <Boosters />
          </div>
          <Divider />
          <div className="flex flex-col justify-center">
            <Title
              title="L'équipe"
              subtitle="L'équipe de cracks qui gère le serveur, et qui fait en sorte que tout se passe bien (ou pas, et oui j'ai la flm de la faire mtn) "
              color1="from-orange-400"
              color2="to-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

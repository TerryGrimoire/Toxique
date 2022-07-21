import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <article className="flex justify-start items-center">
        <div>
          <iframe
            src="https://giphy.com/embed/3iCz9DIVVIjuPmsAs1"
            width="480"
            height="320"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="fragile masculinity"
          />
        </div>
        <section className="flex flex-col items-around">
          <h2>Bonjour les masculins fragiles, bonjour à tous les autres !</h2>
          <p>
            Bien que ce site internet traite d'un sujet masculin, il ne
            s'adresse pas qu'aux garçons. Il s'adresse également aux femmes
            souffrant de masculinité toxique/patriarcat, aux parents actuels se
            posant des questions sur l'éducation de leurs enfants, aux
            acteur.rice.s de l'éducation qui souhaitent combattre un modèle
            archaïque. Bref, ce site s'adresse à toute personne de la société
            directement ou indirectement impactée par nos amis les masculins
            toxiques.
          </p>
        </section>
      </article>

      <article className="flex justify-start items-center">
        <section className="flex flex-col items-around">
          <h2>Ouin-Ouin, ça va trop loin !</h2>
          <p>
            Une nouvelle fois, le contenu de ce site peut choquer certaines
            personnes et ça tombe bien, il est fait pour ça ! L'objectif est de
            tirer la sonnette d'alarme sur un modèle éducatif qui n'a plus lieu
            d'être. L'objectif est de faire prendre conscience de la toxicité
            actuelle de nos modèles masculins. Plus tôt vous serez dépisté et
            plus vite vous aurez des chances d'en être soigné.
          </p>
        </section>
        <div>
          <iframe
            src="https://giphy.com/embed/mFLwhK78MiU0GpsJvY"
            width="406"
            height="480"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="boys tears"
          />
        </div>
      </article>
      <article className="flex justify-start items-center">
        <div>
          <iframe
            src="https://giphy.com/embed/IblcONgsnHWrtbGU5Q"
            width="480"
            height="480"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="destroy patriarchy not the planet"
          />
        </div>
        <section className="flex flex-col items-around">
          <h2> Le patriarcat doit être détruit pas la planète !</h2>
          <p>
            Vous pensez sans doute qu'il n'y a aucun rapport entre la planète et
            le patriarcat ? Et bien, vous vous trompez ! Une étude corrélée par
            les chiffres de l’Insee a montré qu'en Europe, les émissions CO2
            d’un homme sont 20% supérieures à celles d’une femme. En France les
            hommes achètent plus de viande et utilisent moins les transports en
            commun que les femmes. Entretien et carburant liés à l’utilisation
            d’une voiture (grosse voiture = virilité ?) ou encore consommation
            plus importante de viande, les clichés qui, dans l’imaginaire
            collectif, sont associé à la virilité d’un homme ont des
            conséquences directes sur l’environnement.
          </p>
        </section>
      </article>

      <section className="flex flex-col justify-center items-center choice">
        Maintenant, c'est à vous de choisir
        <div className="flex">
          <Link to="/Education">
            <button type="button" className="btn educate">
              S'éduquer
            </button>
          </Link>
          <Link to="/Error404">
            <button type="button" className="btn boomer">
              Boomer et fier
            </button>
          </Link>
        </div>
      </section>

      {/** <iframe src="https://giphy.com/embed/5C2d0RRxx5hvq9blM3" width="480" height="290" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/chJhmOrQaAYPWDmULG" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/1fjGzt1zIO9A9FnWAh" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/svsKIGiRjuiKCKL4Gk" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/1YLHVyLfKYSZyZgzfI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/cueX7HBTz5Fz8FDj0x" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/WUTv0h7TfsBpRL0yuT" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
  * */}
    </div>
  );
}

export default Home;


--
-- Base de données :  toxique
--

-- --------------------------------------------------------

DROP TABLE IF EXISTS `toxique`.`faq`;
DROP TABLE IF EXISTS `toxique`.`articles`;
DROP TABLE IF EXISTS `toxique`.`comment` ;
DROP TABLE IF EXISTS `toxique`.`subject` ;

CREATE TABLE IF NOT EXISTS `toxique`.`faq` (
  `faq_id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NOT NULL UNIQUE,
  `response` VARCHAR(1500) NOT NULL,
  PRIMARY KEY (`faq_id`));
  
  CREATE TABLE IF NOT EXISTS `toxique`.`articles` (
  `articles_id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(255) NOT NULL,
  `titre` VARCHAR(255) NOT NULL,
  `text` VARCHAR(1500) NOT NULL,
  PRIMARY KEY (`articles_id`));
  
 CREATE TABLE IF NOT EXISTS `toxique`.`subject` (
  `subject_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL UNIQUE,
  `description` VARCHAR(500) NOT NULL,
  `image` VARCHAR(255) NULL,
  PRIMARY KEY (`subject_id`));
  
   CREATE TABLE IF NOT EXISTS `toxique`.`comment` (
  `comment_id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(500) NOT NULL UNIQUE,
  `subject_id` INT NOT NULL,
   CONSTRAINT `FK_subjectComment` 
   FOREIGN KEY (`subject_id`)
    REFERENCES `toxique`.`subject`(`subject_id`),
  PRIMARY KEY (`comment_id`));
  
INSERT INTO `faq` (`question`,`response`)
VALUES
("C'est quoi la masculinité toxique ?", "La masculinité toxique est un concept utilisé en psychologie et dans les études sur le genre en référence à certaines normes du comportement masculin qui ont un impact négatif sur la société et sur les hommes eux-mêmes."),
("Quelles sont les conséquences de la masculinité toxique ?", "Les stéréotypes traditionnels dépeignant les hommes comme socialement dominants, accompagnés de traits liés comme la misogynie et l'homophobie, peuvent être considérés comme « toxiques » en raison de leur promotion de la violence, incluant l'agression sexuelle et la violence domestique. D'autres traits masculins stéréotypés, tels que l'autonomie et la répression des émotions, peuvent être mis en corrélation avec l'augmentation des problèmes psychologiques chez les hommes tels que la dépression, l'augmentation du stress, et l'abus de substances."),
("La masculinité rime-t-elle toujours avec toxicité ?", "Non, d'autres traits traditionnellement masculins tels que le dévouement au travail, la fierté d'exceller dans les sports, et de pourvoir aux besoins de sa famille, ne sont pas considérés comme « toxiques ». Le concept de masculinité toxique était à l'origine utilisé par des auteurs associés au mythopoetic men's movement, en contraste avec une masculinité « vraie » ou « profonde » avec laquelle les hommes auraient perdu le contact dans la société moderne."), 
("Quels sont les effets sur la santé ?", "Les hommes qui adhèrent aux normes culturelles traditionnellement masculines, telles que la prise de risque, la violence, la domination, la primauté du travail, le dédain de l'homosexualité, la nécessité du contrôle des émotions, le désir de gagner, et la recherche d'un statut social élevé, ont tendance à être plus susceptibles d'éprouver des problèmes psychologiques tels que la dépression, le stress, des problèmes de perception de leur corps, l'abus de substance, et des comportements sociaux inadaptés17. L'effet tend à être plus fort chez les hommes qui adhèrent également aux normes masculines toxiques, telles que l'autosuffisance, la recherche de pouvoir sur les femmes, et la promiscuité sexuelle"),
("La masculinité toxique, est-ce un truc d'hétérosexuels cisgenre ?", "Absolument pas ! La masculinité toxique n'a rien à voir avec l'orientation sexuelle, elle découle souvent d'une éducation ou d'un environnement qui promeut la virilité et la toxicité. Les gays, bis, pansexuels ou autres peuvent également être toxique"),
("Comment sortir de la masculinité toxique ?", "Dans un premier temps, il ne faut pas hésiter à remettre en question l'éducation que l'on a pu recevoir qui date probablement d'une autre époque. Ne pas hésiter non plus à demander à nos amies, nos soeurs, nos conjointes ce qui est toxique chez nous et ce que l'on pourrait changer pour être moins dans la toxicité. Il faut bien comprendre que ce travail peut être long et difficile mais il est primordial ! "),
("Quelques clichés à abolir dès aujourd'hui pour une masculinité plus saine !", "Un homme ne pleure jamais ! Le rose, c'est pour les pédés ! Un homme, un vrai, c'est fort et viril ! Montrer ses sentiments, c'est pour les faibles ! Je dois toujours être le meilleur et montrer que je suis le meilleur dans toutes les circonstances !");

INSERT INTO `articles` (`image`, `titre`, `text`)
VALUES 
("https://giphy.com/embed/3iCz9DIVVIjuPmsAs1","Bonjour les masculins fragiles, bonjour à tous les autres !","Bien que ce site internet traite d'un sujet masculin, il ne s'adresse pas qu'aux garçons. Il s'adresse également aux femmes souffrant de masculinité toxique/patriarcat, aux parents actuels se posant des questions sur l'éducation de leurs enfants, aux acteur.rice.s de l'éducation qui souhaitent combattre un modèle archaïque. Bref, ce site s'adresse à toute personne de la société directement ou indirectement impactée par nos amis les masculins toxiques."),
("https://giphy.com/embed/mFLwhK78MiU0GpsJvY","Ouin-Ouin, ça va trop loin !","Une nouvelle fois, le contenu de ce site peut choquer certaines personnes et ça tombe bien, il est fait pour ça ! L'objectif est de tirer la sonnette d'alarme sur un modèle éducatif qui n'a plus lieu d'être. L'objectif est de faire prendre conscience de la toxicité actuelle de nos modèles masculins. Plus tôt vous serez dépisté et plus vite vous aurez des chances d'en être soigné."),
("https://giphy.com/embed/IblcONgsnHWrtbGU5Q","Le patriarcat doit être détruit pas la planète !","Vous pensez sans doute qu'il n'y a aucun rapport entre la planète et le patriarcat ? Et bien, vous vous trompez ! Une étude corrélée par les chiffres de l’Insee a montré qu'en Europe, les émissions CO2 d’un homme sont 20% supérieures à celles d’une femme. En France les hommes achètent plus de viande et utilisent moins les transports en commun que les femmes. Entretien et carburant liés à l’utilisation d’une voiture (grosse voiture = virilité ?) ou encore consommation plus importante de viande, les clichés qui, dans l’imaginaire collectif, sont associé à la virilité d’un homme ont des conséquences directes sur l’environnement.");

INSERT INTO `subject` (`title`, `description`)
VALUES 
("Pleurer quand on est un garçon","J'ai toujours été éduqué à ne jamais pleurer, avec la fameuse phrase 'Un garçon, ça ne pleure pas' et du coup, je suis incapable de pleurer devant les autres même quand je suis ultra triste, je reste de marbre. Est-ce que c'est pareil pour vous ? "),
("La mauvaise influence des potes ","Quand je suis avec mes potes, je ne suis plus le même et j'ai tendance à faire des choses que je ne ferai pas si j'étais seul (vol, harcèlement de rue, etc.)"),
("Partenaires sexuels dans un couple","Ma copine a eu plus de partenaires sexuels que moi et je me sens pas à l'aise avec cette idée, qu'en pensez-vous ? "),
("La charge mentale dans le foyer","Ça fait 10 ans que je suis avec ma femme et depuis quelques temps, elle me reproche de lui laisser toute la charge mentale du foyer, pourtant j'ai l'impression de participer aux tâches ménagères et de l'aider, je ne comprends pas ce que je dois faire ?"),
("La danse c'est pour les gays ?","J'aimerais faire de la danse contemporaine, mais j'ai peur de passer pour un gay auprès de mes proches"),
("Toujours au dessus de tout le monde","Je veux toujours être le meilleur, j'ai un besoin compulsif d'être au dessus de tout le monde et de montrer constamment que c'est moi le coq de la basse-cour. Ça me pose des problèmes socialement parlant mais je ne peux pas m'en empêcher. Que faire ? "),
("L'homme de la maison","Je suis le seul homme à la maison et j'ai la pression de devoir veiller sur ma mère et mes soeurs. Je dois être fort moralement et physiquement pour elle et cela me pèse."),
("Gestion de la colère","Je m'emporte très vite et je peux même devenir violent dans certains cas. Je regrette toujours mes actes une fois calmé mais à chaque fois, c'est pareil, jes suis incapable de contenir ma colère quand ça monte. Avez-vous des astuces ? ");

INSERT INTO `comment`(`content`,`subject_id`)
VALUES 
("Même éducation mais depuis que je suis avec ma copine, j'ai appris à m'ouvrir plus et à montrer mes sentiments. J'étais comme toi avant, mais quand on tombe sur la bonne personne et qu'on est bien entouré, ça peut tout changer. N'aies pas peur d'être sensible, c'est ce qui fait ta force !", 1),
("Grave d'accord avec ce qui a été dit avant, c'est pas toujours facile mais les sentiments et nptamment la tristesse fait partie de nous. Faut pas tout garder pour soi ! Un garçonm c'est avant tout un humain et tous les humains pleurent ! ",1),
("Perso, je suis pas capable de pleurer non plus en public. Je préfère garder tout pour moi et le faire quand je suis en privé et seul.", 1),
("L'effet de masse et les fameuses conneries de jeunesse, attention à ne pas trop te perdre non plus parce que parfois c'est difficile de se retrouver",2),
("Ne te laisse pas influencer par le groupe, surtout si tu sais que ce que tu fais es mauvais ! Ça n'amène nulle part de jouer les caïds, à part peut-être en prison ! lol  ",2),
("Vaut mieux être seul que mal accompagné et ça marche aussi pour les amis. Ne fais pas aux autres ce que tu ne voudrais pas qu'on te fasse, c'est la seule chose que tu dois garder en tête !",2),
("Mets de côté ta fierté, si tu l'aimes et que tu es heureux avec elle, le nombre de partenaires sexuels, on s'en fout !",3),
("J'avoue que je serais pas super à l'aise non plus à ta place, tu lui en as parlé ? ",3),
("C'est quoi le problème en fait ? C'est pas une compétition aux dernières nouvelles ? ",3),
("La charge mentale ne s'arrête pas qu'aux tâches ménagères, c'est aussi penser à payer les factures, la préparation des vacances, la gestion du budget et toutes ces choses auxquelles Madame pense constamment mais que tu pourrais aussi très bien faire ! ",4),
("Attention aussi à ne pas prendre ton couple pour acquis après toutes ces années ! Les efforts ne doivent jamais s'arrêter dans un couple ! Courage en tout cas et surtout communique avec ta femme pour savoir ce que tu peux faire de plus :)",4),
("Faites une liste des choses dont vous avez la charge mentale respectivement et ensuite, une fois que la liste est établie, faites en sorte de mieux répartir cette charge ! Je l'ai testé récemment avec mon mari et ça marche du tonnerre !",4),
("La danse c'est pas un truc de fille ni un truc de gay ! Encore une fois, c'est un truc d'humain ! Fonce, osef de ce que peuvent penser tes proches, si ça te rend heureux !",5),
("Pendant longtemps, je n'ai pas osé faire ce qui me plaît vraiment dans la vie parce que j'avais peur d'être jugé par mes proches et de ne pas être assez viril pour eux. On a qu'une seule vie, ne la gâche pas à jouer un rôle et à faire plaisir aux autres ! Fonce et fais ce que tu aimes ! ",5),
("Il y a beaucoup d'hommes qui font de la danse et qui sont hétéros et même très virils ! Il ne faut pas t'enfermer dans les clichés et te priver parce que ça fait gay ! On est au 21eme siècle, on s'en fout si ça fait gay !",5),
("La vraie question c'est, est-ce que tu es heureux comme ça ? Si tu n'as pas besoin des autres pour être heureux, alors pas de soucis, vis ta vie et ne tiens pas compte des autres. Sinon... C'est peut-être le moment de discuter avec tes proches pour voir ce que tu peux changer et comment tu peux faire en sorte d'être plus adapté socialement",6),
("Arrête de te comparer aux autres et commence à te comparer à toi même ! Peut-être que ça te permettra d'arr^ªeter de vouloir te mettre en avant ! Tes réussites, tu les fais pour toi, pas pour les autres ! La basse-cour n'a pas besoin de coq, les poules se sufissent à elles-même ! ",6),
("Parfois les problèmes d'égo cachent un mal encore plus profond, as-tu songé à consulter ?",6),
("Homme ou pas, la maison ne doit pas et ne peut pas reposer sur tes épaules ! Aies un peu confiance en ta mère et fais confiance à tes soeurs aussi, tu verras que les femmes sont bien plus fortes et indépendantes que tu ne le penses ! ",7),
("Je pense que le principe d'être l'homme de la maison est totalement archaïque. Ton penis ne te rend pas plus légitime que ta mère pour diriger ou protéger la maison.",7),
("Ne te mets pas tant de pression, sois un fils et un frère, tu n'es pas et tu n'as pas besoin d'être en plus un père...",7),
("Je compatis totalement et je suis grave dans le même cas que toi donc je prends aussi les conseils ! ",8),
("La seule chose qui a fonctionné pour moi, c'est la méditation ! Il y a une super série sur Netflix et des applis pour vous aider à mieux gérer ses émotions !",8),
("La vraie solution c'est de passer par un psy et d'oser admettre qu'on a un problème !",8);
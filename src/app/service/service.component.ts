import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  public services =[
    {"text":"<p>En tant que développeur Full-Stack passionné, je possède une expertise approfondie tant côté front-end que back-end. Ma maîtrise des langages tels que HTML, CSS, JavaScript, ainsi que des frameworks comme React et Node.js, me permet de créer des expériences utilisateur fluides et des fonctionnalités robustes.<br>\n" +
        "\n" +
        "<br>Mon parcours inclut la conception et le déploiement d'applications web complètes, de la planification initiale à la mise en production. Je m'efforce constamment de rester à jour avec les dernières technologies, ce qui me permet d'apporter des solutions innovantes aux défis de développement.<br>\n" +
        "\n" +
        "<br>Avec une solide compréhension des bases de données, des API et de la gestion de projet, je suis capable de livrer des produits logiciels de haute qualité. Ma passion pour la résolution de problèmes et ma créativité me motivent à créer des solutions élégantes et efficaces.\n <br>" +
        "\n" +
        "<br>N'hésitez pas à me contacter pour discuter de la façon dont je peux contribuer à votre projet ou équipe !</p>\n"
        ,
      "image":"dev.png"
    },

    {"text":"<p>En tant que développeur web passionné, je mets en œuvre mes compétences techniques et ma créativité pour concevoir des sites web exceptionnels. Ma maîtrise des langages comme HTML, CSS et JavaScript me permet de créer des interfaces utilisateur interactives et esthétiquement agréables.\n <br>" +
        "\n" +
        "<br>Fort de mon expérience dans le développement front-end, je suis spécialisé dans l'utilisation de frameworks tels que React et Vue.js pour garantir une expérience utilisateur optimale. De plus, ma compréhension approfondie des principes de conception et des normes d'accessibilité me permet de créer des sites web intuitifs et inclusifs.\n <br>" +
        "\n" +
        "<br>En parallèle, mes compétences back-end, notamment avec des technologies telles que Node.js, me permettent de mettre en place des fonctionnalités robustes et des interactions serveur-client fluides. J'ai une expérience significative dans la création et la gestion de bases de données, assurant ainsi la stabilité et la sécurité des applications.\n <br>" +
        "\n" +
        "<br>Ayant travaillé sur une variété de projets, je suis capable de m'adapter rapidement aux nouvelles technologies et de résoudre efficacement les défis de développement. Si vous recherchez un développeur web passionné et polyvalent, n'hésitez pas à me contacter pour discuter de vos besoins spécifiques.</p>\n"
,
      "image":"dev9.jpg"
    },

    {"text":"<p>En tant que développeur dédié à la formation et au tutorat, j'ai à cœur de partager mes connaissances et d'inspirer la prochaine génération de développeurs. Fort de mon expertise technique dans des domaines tels que HTML, CSS, JavaScript et divers frameworks, je suis passionné par la transmission de compétences pratiques et la création d'un environnement d'apprentissage stimulant.\n <br>" +
        "\n" +
        "<br>Ma méthode pédagogique repose sur des cours interactifs et des projets pratiques, permettant aux apprenants de développer des compétences concrètes et une compréhension approfondie des concepts. J'ai travaillé avec divers publics, des débutants aux développeurs intermédiaires, en personnalisant mes approches pour répondre aux besoins spécifiques de chaque apprenant.\n <br>" +
        "\n" +
        "<br>En plus de mon engagement dans la formation, je suis également impliqué dans la création de ressources pédagogiques telles que des tutoriels, des guides et des vidéos éducatives. Mon objectif est de faciliter l'apprentissage autonome et de fournir des outils pratiques pour le développement professionnel.\n <br>" +
        "\n" +
        "<br>Si vous cherchez un formateur passionné et engagé, prêt à guider vos équipes ou à encadrer vos apprenants, je serais ravi de discuter de la manière dont je peux contribuer à vos objectifs de formation.</p>\n"
,"image":"dev5.PNG"
    }
  ];
  public textParent={"text":"","image":""};


  constructor() { }

  ngOnInit(): void {

  }

  onLearnMre(number: number) {
    this.textParent = this.services[number];
  }
}

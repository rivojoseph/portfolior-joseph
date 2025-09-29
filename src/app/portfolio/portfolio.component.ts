import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {EffectCoverflow, Navigation, Pagination} from "swiper";
import Swiper from "swiper";


SwiperCore.use([Navigation,Pagination,EffectCoverflow]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  public project={categorie:"",titre:"",description:"",image:[{"image":""}],"resource":"","projet":"","date":""};
  public projets=[
    {
      "categorie":"Web Developer",
      "titre":"Système de gestion de projet (Java, Spring boot, Angular)",
      "description":"Développement du backend avec java et Hibernate pour assure des opéérations de base de donnéés rapides est sécurisées.\n <br>" +
        "Implémentation du frontend avec Angular, offrant une navigation conviviale et des foctionalités de panier avancées.",
      "image":[
        {"image":"assets/images/image1.jpg"},
        {"image":"assets/images/image2.jpg"},
        {"image":"assets/images/image3.jpg"},
        {"image":"assets/images/image4.jpg"},
        {"image":"assets/images/image5.jpg"},
        {"image":"assets/images/image6.jpg"},
        {"image":"assets/images/image7.jpg"},
      ],
      "resource":"#",
      "projet":"#",
      "date":"07-03-2023"
    },
    {
      "categorie":"Web Developer",
      "titre":"Application E-commerce (Java, Hibernate, Angulat)",
      "description":"Conçu et mis en œuvre un système de gestion de projet complet, permettant une collaboration efficace au sein de l’équipe.\n <br>" +
        "Intégration d’une interface utilisateur intuitive avec Angular, offrant une expérience utilisateur fluide.",
      "image":[
        {"image":"assets/images/image1.jpg"},
        {"image":"assets/images/image2.jpg"},
        {"image":"assets/images/image3.jpg"},
        {"image":"assets/images/image4.jpg"},
        {"image":"assets/images/image5.jpg"},
        {"image":"assets/images/image6.jpg"},
        {"image":"assets/images/image7.jpg"},
      ],
      "resource":"#",
      "projet":"#",
      "date":"07-03-2023"
    },
    {
      "categorie":"Web Developer",
      "titre":"Application de Getion des Tache (Java, Spring Boot, Angular)",
      "description":"Mise en place d’une architecture microservices avec Spring Boot, permettant une évolutivité optimale.\n <br>" +
        "Développent d’une frontend réactif avec Angular, facilitation la gestion efficace des tâches et des échéants.",
      "image":[
        {"image":"assets/images/image1.jpg"},
        {"image":"assets/images/image2.jpg"},
        {"image":"assets/images/image3.jpg"},
        {"image":"assets/images/image4.jpg"},
        {"image":"assets/images/image5.jpg"},
        {"image":"assets/images/image6.jpg"},
        {"image":"assets/images/image7.jpg"},
      ],
      "resource":"#",
      "projet":"#",
      "date":"07-03-2023"
    },
    {
      "categorie":"Web Developer",
      "titre":"Système de réservation de salle de conférence(Java,Hibernate,Angula)",
      "description":"Conception d’une base de données efficace avec Hibernate pour gérer les réservations de salles en temps réel. \n <br>" +
        "Intégration d’une interface utilisateur intuitive avec Angular, permettant aux utilisateur de réserver des salles facillement.",
      "image":[
        {"image":"assets/images/image1.jpg"},
        {"image":"assets/images/image2.jpg"},
        {"image":"assets/images/image3.jpg"},
        {"image":"assets/images/image4.jpg"},
        {"image":"assets/images/image5.jpg"},
        {"image":"assets/images/image6.jpg"},
        {"image":"assets/images/image7.jpg"},
      ],
      "resource":"#",
      "projet":"#",
      "date":"07-03-2023"
    },
    {
      "categorie":"Web Developer",
      "titre":"",
      "description":". Conçu et mis en œuvre un système de gestion de projet complet, permettant une collaboration efficace au sein de l’équipe.\n <br>" +
        ". Intégration d’une interface utilisateur intuitive avec Angular, offrant une expérience utilisateur fluide.",
      "image":[
        {"image":"assets/images/image1.jpg"},
        {"image":"assets/images/image2.jpg"},
        {"image":"assets/images/image3.jpg"},
        {"image":"assets/images/image4.jpg"},
        {"image":"assets/images/image5.jpg"},
        {"image":"assets/images/image6.jpg"},
        {"image":"assets/images/image7.jpg"},
      ],
      "resource":"#",
      "projet":"#",
      "date":"07-03-2023"
    },
    {
      "categorie":"Web Developer",
      "titre":"Système de gestion de projet (Java, Spring boot, Angular)",
      "description":". Conçu et mis en œuvre un système de gestion de projet complet, permettant une collaboration efficace au sein de l’équipe.\n <br>" +
        ". Intégration d’une interface utilisateur intuitive avec Angular, offrant une expérience utilisateur fluide.",
      "image":[
        {"image":"assets/images/image1.jpg"},
        {"image":"assets/images/image2.jpg"},
        {"image":"assets/images/image3.jpg"},
        {"image":"assets/images/image4.jpg"},
        {"image":"assets/images/image5.jpg"},
        {"image":"assets/images/image6.jpg"},
        {"image":"assets/images/image7.jpg"},
      ],
      "resource":"#",
      "projet":"#",
      "date":"07-03-2023"
    },
  ];
  constructor() { }

  ngOnInit(): void {
    const swiper = new Swiper('.mySwiper', {
      // configure Swiper to use modules
      autoplay:true,
      loop:true,
      grabCursor: true,
      // Optional parameters
      direction: 'horizontal',


      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

    });
  }

  onGetProject(numero:number):void{
    this.project= this.projets[numero];
  }

}

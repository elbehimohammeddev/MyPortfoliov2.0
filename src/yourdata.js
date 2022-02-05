import myPhoto from "./images/myphoto.jpg"

// Work Icons
import movieApp from "./images/movieapp2.png"
import youarehere from "./images/youarehere.jpg"
import todolist from "./images/todolist.png"
import myportfolio1 from "./images/myportfolio11.png"
import gomyforum from "./images/gomyforum.png"
import encours from "./images/encours.png"

// Skills Icons
import htmlIcon from "./images/html.png"
import cssIcon from "./images/css.png"
import reactIcon from "./images/react.png"
import jsIcon from "./images/js.png"
import dockerIcon from "./images/docker.png"
import mongodbIcon from "./images/mongodb.png"
import nodejsIcon from "./images/nodejs.png"
import expressIcon from "./images/expressjs.png"
import umlIcon from "./images/uml.png"
import vscodeIcon from "./images/vscode.png"
import gitIcon from "./images/git.png"
import scrumIcon from "./images/scrum.png"

// Social Icon
import githubIcon from "./images/github.png"
import instagramIcon from "./images/instagram.png"
import facebookIcon from "./images/facebook.png"
import linkedinIcon from "./images/linkedin.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "ELBEHI Mohammed",
  headerTagline: [
    //Line 1 For Header
    "Developpeur Web",
    //Line 2 For Header
    "FullStack JS,",
    //Line 3 For Header
    "Ingénieur Industriel",
  ],
  //   Header Paragraph
  headerParagraph:
    "Après avoir occupé un poste de Responsable Production dans le domaine industriel comme l’automobile,  pendant 4 ans, j’ai décidé de devenir développeur web. J’ai donc suivi une formation certifiée de 6 mois en Développement Web FullStack JS auprès de GoMyCode et ai réalisé des projets web durant cette période d’apprentissage. Aujourd’hui, je souhaite mettre mes connaissances et mon expérience en pratique.",

  //Contact Email
  contactEmail: "bahi.mohammed.1992@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Site E-Commerce", //Project Title - Add Your Project Title Here
      para:
        "Un site de vente de produits , avec une interface admin et une interface visiteur. Technologies Utilisées : ReactJs, NodeJS, Express, MongoDB, HTML, CSS, JavaScript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        encours ,
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      title: "Site Vitrine Commercial", //Project Title - Add Your Project Title Here
      para:
        "Un site de publicité pour une boutique en ligne ou société de services. Technologies Utilisées : ReactJS, HTML, CSS, JavaScript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        encours ,
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      title: "Portfolio v2.1", //Project Title - Add Your Project Title Here
      para:
        "Un site personnel dans lequel les acquis de formation et les acquis de l'expérience sont définis. Technologies Utilisées : ReactJS, HTML, CSS, JavaScript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        youarehere ,
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      title: "Portfolio v1.1", //Project Title - Add Your Project Title Here
      para:
        "Un site personnel dans lequel les acquis de formation et les acquis de l'expérience sont définis. Technologies Utilisées : ReactJS, HTML, CSS, JavaScript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        myportfolio1,
      //Project URL - Add Your Project Url Here
      url: "https://myportfolio2021.herokuapp.com/",
    },
    {
      title: "Forum App", //Project Title - Add Your Project Title Here
      para:
        "Site de Forum et de partage de blogs : Inscription et publication de blogs entre utilisateurs. Technologies Utilisées : ReactJs, NodeJS, Express, MongoDB, HTML, CSS, JavaScript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        gomyforum,
      //Project URL - Add Your Project Url Here
      url: "",
    },
    {
      title: "Movie App", //Project Title - Add Your Project Title Here
      para:
        "Une interface Front pour les films (recherche et ajout) Technologies Utilisées : ReactJS, HTML, CSS, Bootstrap", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        movieApp,
      //Project URL - Add Your Project Url Here
      url:"",
    },
    {
      title: "Todo List", //Project Title - Add Your Project Title Here
      para:
        "Application CRUD , une application de liste de taches. Technologies Utilisées : HTML, CSS, JavaScript", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        todolist,
      //Project URL - Add Your Project Url Here
      url: "",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Section --------------
  aboutParaOne:
    "Diplômé de l’école d’ingénieurs UAS Tunis, je souhaite appliquer mes connaissances techniques. Je peux aider à innover et optimiser les procédés et les produits. Durant mon expérience de plus que 3 ans dans l’industrie, j’ai participé au démarrage de production d’une société de câblage automobile et à l’optimisation de la production et des indicateurs de qualité (temps d’arrêt réduit, efficacité augmentée), tout en ayant une équipe de techniciens et chef d’équipe avec qui ma collaboration portait sur l’avancement et l’optimisation. Bilingue français-anglais, je suis créatif, force de proposition et doté d’une grande capacité d’analyse.",
  aboutParaTwo:
    "Etant passionné du développement web, et ayant la force et la volonté de changer de carrière, j’ai opté pour une reconversion professionnelle en Développement web fullstack JS chez l’école de formation GoMyCode, après 6 mois de BootCamp en développement web, j’ai enfin acquis les compétences et connaissances nécessaires afin de participer à de nouveaux défis et challenges dans ce domaine qui est toujours en avance continu et amélioration sur tous les niveaux.",
  aboutParaThree:
    "Motivé à l’idée de rejoindre un établissement spécialisé dans le développement web, je suis à la recherche d’une première expérience qui permettra de mettre en avant ma passion et mes connaissances.",
  aboutImage: myPhoto,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: mongodbIcon,
      para:
        "mongoDB",
    },
    {
      img: nodejsIcon,
      para:
        "NodeJS",
    },
    {
      img: expressIcon,
      para:
        "ExpressJS",
    },
    {
      img: dockerIcon,
      para:
        "DOCKER",
    },
    {
      img: umlIcon,
      para:
        "UML",
    },
    {
      img: gitIcon,
      para:
        "git",
    },
    {
      img: vscodeIcon,
      para:
        "Vscode",
    },
    {
      img: scrumIcon,
      para:
        "Scrum",
    },
    
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Want to get in touch ? Contact me on any of the platform :",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon,
      url: "https://github.com/elbehimohammeddev" },  
    { 
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/mohammed-el-behi-060466136/" },
    { 
      img: facebookIcon,
      url: "https://www.facebook.com/Mouda.Mohammed.elbehi/" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/elbehi_mohammed/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com

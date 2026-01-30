import type { Drawing, PersonalProject, PhotoAlbum, Poem } from "./OtherTypes";



export const aeProjects: PersonalProject[] = [
  { 
    title: "Effet de disparition de poussière", 
    category: "After Effects", 
    videoSrc: "assets/video/departure snap thanos.MP4",
    poster: "assets/video/poster_thanos.png" 
  },
  { 
    title: "Intro motion Marne et Gondoire", 
    category: "After Effects", 
    videoSrc: "assets/video/MAG.MP4",
    poster: "assets/video/poster_mag.png" 
  },
  { 
    title: "Motion sphère en rotation", 
    category: "After Effects", 
    videoSrc: "assets/video/rotation.MP4",
    poster: "assets/video/poster_rotation.png" 
  }
];

export const photoAlbums: PhotoAlbum[] = [
  {
    title: "Potit chat",
    category: "Photographie (Coucou Gaëlle !)",
    cover: "assets/photos/potit_chat/chat.jpg",
    images: [
      "assets/photos/potit_chat/chat.jpg", "assets/photos/potit_chat/chat2.jpg",
      "assets/photos/potit_chat/chat3.jpg", "assets/photos/potit_chat/chat4.jpg",
      "assets/photos/potit_chat/chat5.jpg", "assets/photos/potit_chat/chat6.jpg",
      "assets/photos/potit_chat/chat7.jpg", "assets/photos/potit_chat/chat8.jpg",
    ]
  },
  {
    title: "Ciel",
    category: "Photographie",
    cover: "assets/photos/ciel/avion.jpg",
    images: [
      "assets/photos/ciel/avion.jpg", "assets/photos/ciel/jour3.jpg",
      "assets/photos/ciel/jour1.jpg", "assets/photos/ciel/jour2.jpg",
      "assets/photos/ciel/jour.jpg", "assets/photos/ciel/jour5.jpg",
    ]
  },
  {
    title: "Asie 2024",
    category: "Photographie",
    cover: "assets/photos/asie_2024/asie10.jpg",
    images: [
      "assets/photos/asie_2024/asie10.jpg", "assets/photos/asie_2024/asie1.jpg",
      "assets/photos/asie_2024/asie2.jpg", "assets/photos/asie_2024/asie3.jpg",
      "assets/photos/asie_2024/asie4.jpg", "assets/photos/asie_2024/asie5.jpg",
      "assets/photos/asie_2024/asie6.jpg", "assets/photos/asie_2024/asie7.jpg",
      "assets/photos/asie_2024/asie8.jpg", "assets/photos/asie_2024/asie9.jpg",
      "assets/photos/asie_2024/asie.jpg",
    ]
  },
  {
    title: "Paris 2025",
    category: "Photographie",
    cover: "assets/photos/paris_2025/paris10.jpg",
    images: [
      "assets/photos/paris_2025/paris10.jpg", "assets/photos/paris_2025/paris1.jpg",
      "assets/photos/paris_2025/paris2.jpg", "assets/photos/paris_2025/paris3.jpg",
      "assets/photos/paris_2025/paris4.jpg", "assets/photos/paris_2025/paris5.jpg",
      "assets/photos/paris_2025/paris6.jpg", "assets/photos/paris_2025/paris7.jpg",
      "assets/photos/paris_2025/paris8.jpg", "assets/photos/paris_2025/paris9.jpg",
      "assets/photos/paris_2025/paris.jpg", "assets/photos/paris_2025/paris11.jpg",
    ]
  }
];

export const drawings: Drawing[] = [
  { title: "Pose 1", category: "dessin d'anatomie", imageSrc: "assets/dessins/dessin.jpeg" },
  { title: "Pose 2", category: "dessin d'anatomie", imageSrc: "assets/dessins/dessin1.jpeg" },
  { title: "Pose 3", category: "dessin d'anatomie", imageSrc: "assets/dessins/dessin5.jpeg" },
  { title: "Bras 1", category: "dessin d'anatomie", imageSrc: "assets/dessins/dessin3.jpeg" },
  { title: "Représentation du voyage", category: "illustration imaginative", imageSrc: "assets/dessins/dessin2.jpeg" },
  { title: "Représentation de l'insomnie", category: "illustration imaginative", imageSrc: "assets/dessins/dessin4.jpeg" }
];

export const poems: Poem[] = [
  {
    title: "Moitié d'existence",
    category: "Les carnets BF",
    content: `On m’a parlé du passé aujourd’hui et ça m’a fait penser à vous et des tonnes de souvenirs de toutes sortes ont ressurgi et comme d’habitude c’est bizarre et fouillis.

Quand je pense à vous,
Je ne me reconnais pas,
j’ai beau connaître par cœurs chaque trait de vos portraits
Il y a toujours cette distance qui m’empêche d’en apprécier les couleurs.

Quand je regarde l’album de vos exploits,
Un brasier me consume et me dit,
De masquer les photos,
D’arracher ces photos,
De découper nos photos,
D’arranger mes photos.

Quand je revisionne le film de notre vie,
Je ne peux plus y jouer le rôle principal,
Vos peaux sont devenues trop différentes,
Trop étroites,
je revois tout mais le son, le goût et le toucher sont étouffées,
Évaporés et je ne peux plus que les imaginer.

Vous êtes morts
c’est aujourd’hui que je l’ai compris
Tout ce que vous étiez s’est dissous silencieusement
Et aujourd’hui j’ai pris votre place,
Mais je ne me souviens plus de quand je l’ai prise.

Vous me manquez,
Je rembobine, fait remonter vos aspirations et je les admire une par une,
Toi tu voulais t’assoir avec ton père pour compter des voitures rouges et bleues,
Toi être au côté de ta mère et l’appeler comme tel,
Et toi tout faire pour rentrer chez toi et retrouver ton royaume.

Je vous rejoindrai bientôt,
Moi aussi je vais mourir,
Je perd et je gagne un peu plus chaque jour,
Je ne me rendrai même pas compte de ma propre disparition,
Mais tout ce que je vis,
Tout ce que je possède m’appartiendra à jamais,
Et celui qui prendra ma place ne les possédera qu’à moitié comme moi avec vous,
Mais c’est peut être là,
Dans cette moitié d’appartenance, Que je vivrai encore,
Et que vous vivez aussi.`
  },
  {
    title: "La porte",
    category: "Les carnets BF",
    content: `Je crois que je suis tombé amoureux,
c’est un sentiment merveilleux et douloureux.
Maintenant, j’ai des millions de pensées qui explosent.
Et comme d’habitude c’est bizarre et fouillis.

C’est cliché :
je suis tombé amoureux sans prévenir,
J’ai reçu un coup à la tête,
Et quand je me suis relevé cétait elle qui tenait la batte.

C’est cliché :
Elle est à côté de moi à chaque seconde, là où avant il n’y avait qu’un visage flou,
Le sien a pris place et illumine tous mes instants.

C’est cliché :
La rivière de mon esprit ne coule plus vers l’horizon,
Elle reste au même endroit et s’enfonce en un tourbillon chaotique,
Cette calamité me paralyse,
Elle me fait voir le crépuscule et l’aube sans pause,
Malgré tout,
je saute dans ce typhon le sourire au lèvres,
À chaque lever et chaque coucher.

C’est cliché :
Depuis que son visage est apparu,
Une nouvelle sensation s’est installée dans mon cœur,
Un poids,
lourd mais confortable,
Une pression,
douce mais constante.

C’est cliché :
Tout son être me fait fondre,
La douceur de ses traits : des étoiles,
La grandeur de son esprit : une fractale,
La chaleur de son âme : l’astre du matin,
Le flot infini de sa créativité : l’océan,
Pourtant je ne peux rien dire à haute voix,
c’est trop dur,
c’est trop grand,
c’est une responsabilité trop lourde pour ma parole.

C’est audacieux :
Je veux suivre le chemin qu’elle emprunte,
Je veux grandir, m’élever, pour atteindre sa hauteur,
Mais il y a autre chose sur cette route,
Une porte elle m’est destinée à moi et moi seule,
je veux l’ouvrir et marcher à ses côtés pour elle et moi.

C’est audacieux :
Avant elle j’étais dans le brouillard,
Aujourd’hui une lumière éclaire mon chemin,
Et bien que le chemin semble long,
Je vois bien que je peux l’achever et enfin l’embrasser.

C’est effrayant :
Plus je commence à poser mes pas,
moins je ressens cette masse imposante et rassurante,
moins je sens le devoir de mon amour sur ma voix,
je perds tout mes repères et ça me terrifie,
Est ce que mes sentiments peuvent toujours brûler ?
Est ce que la lumière n’est qu’une illusion ?
Est ce que je sortirai du brouillard ?
Mais je vois la porte,
Elle est devant moi et je n’ai envie que de dire une chose : 
La lune est belle.`
  }
];
export interface PersonalProject {
  title: string;
  category: string;
  videoSrc: string;
  poster: string;
}

export interface PhotoAlbum {
  title: string;
  category: string;
  cover: string;
  images: string[];
}

export interface Drawing {
  title: string;
  category: string;
  imageSrc: string;
}

export interface Poem {
  title: string;
  category: string;
  content: string;
}
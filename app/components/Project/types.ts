import { StaticImageData } from 'next/image';

export interface Technology {
  icon: string | StaticImageData;
  color: string;
}

export interface Image {
  src: string | StaticImageData;
}

export interface Project {
  id: string;
  technologies: Technology[];
  title: string;
  preview: string;
  desc: string;
  imgs: Image[];
  repository: string;
  live: string;
  icon: React.ReactElement;
  bg: string;
  scale: number;
}

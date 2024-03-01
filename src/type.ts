export interface OptionsType {
  download: string;
}

export interface ContextType {
  screenSize: number;
  isOpenModal: boolean;
  setIsOpenModal: (v: boolean) => void;
  setIsOpenProfile: (v: boolean) => void;
  setCertificate: (v: string | null) => void;
  setProjectId: (v: number | null) => void;
  setIsPlanTree: (v: boolean) => void;
}

export interface GalleryType {
  id: number;
  image: string;
}

export interface ProjectType {
  id: number;
  title: string;
  url: string;
  thumnail: string;
  gallery: GalleryType[];
  desc: string;
  readme: string;
}

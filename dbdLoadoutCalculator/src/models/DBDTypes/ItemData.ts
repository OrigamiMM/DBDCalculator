export type ItemData = {
  type: string;
  description: string;
  name: string;
  imgUrl: string;
  stats?: { charges: number; speed: number };
};

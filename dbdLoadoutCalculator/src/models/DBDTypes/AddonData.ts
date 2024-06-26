export type AddonData = {
  type: string;
  description: string;
  name: string;
  imgUrl: string;
  stats?: { charges: number; speed: number };
};
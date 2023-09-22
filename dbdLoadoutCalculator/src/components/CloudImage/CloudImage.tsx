import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";
// import { fill } from "@cloudinary/url-gen/actions/resize";

type Props = { cloudImgID: string };

export const CloudImage = ({ cloudImgID }: Props) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "duyigualz",
    },
  });
  const myImage = cld.image(cloudImgID);
  // myImage.resize(fill().width(250).height(250));
  try {
    return <AdvancedImage cldImg={myImage} />;
  } catch (error) {
    console.log('Bad name '+ cloudImgID);
    return <img src="" alt="" />
  }
  
};

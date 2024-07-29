import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { NewProductType } from '../../../../../../lib/Types';

export  const getInputTextsConfig =( newProduct : NewProductType)=>  [
    {
      id:"0",
      name:"title",
      placeholder:"Nom du produit (ex: Super Burger)",
      value:newProduct.title,
      Icon:FaHamburger,
    },
    {
      id: "1",
      name: "imageSource",
      placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      value: newProduct.imageSource,
      Icon:  BsFillCameraFill,
    },
    {
      id: "2",
      name: "price",
      placeholder: "Prix",
      value: newProduct.price ? newProduct.price.toString() : "",
      Icon: MdOutlineEuro,
    }
  ]
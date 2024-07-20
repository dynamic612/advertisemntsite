/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import BottomBar from "./components/bottomBar";
import styles from './components/CustomText.module.css';

export default function Home() {
  const [bestMattress, setBestMattress] = useState<object[]>([
    {
      company: 'Sensoreve Elekctra',
      description: 'Meilleur matelas dans l’ensemble',
    },
    {
      company: 'Helix',
      description: 'Meilleur matelas hybride',
    },
    {
      company: 'Nectar',
      description: 'Matelas au meilleur rapport qualité-prix',
    },
    {
      company: 'DreamCloud',
      description: 'Meilleur matelas hybride pour le soutient',
    },
    {
      company: 'Plank Firm',
      description: 'Meilleur matelas ferme',
    },
    {
      company: 'Nolah Evolution',
      description: 'Idéal pour les dormeurs sur le dos',
    },
    {
      company: 'Plank Firm',
      description: 'Meilleur matelas pour dormeurs latéraux',
    },
    {
      company: 'Bear',
      description: 'Idéal pour les couples',
    },
    {
      company: 'Brooklyn Bedding Signature',
      description: 'Idéal pour le soulagement de la pression',
    },
    {
      company: 'Emma Hybrid Comfort',
      description: 'Meilleur matelas rafraîchissant',
    },
  ]);
  const [mattressData, setMattressData] = useState<any[]>([
    {
      description: "Meilleur dans l'ensemble",
      size: "Twin, Twin XL, Full, Queen, King, Cal King",
      material: "Construction hybride de mousse à mémoire de forme et de ressorts emballés individuellement",
      firmness: "Moyen-doux : 6/10",
      shipping: "Livraison gratuite",
      trialperiod: "365 nuits",
      warranty: "Garantie à vie",
      bestfor: "Side sleepers, hip pain, joint pain, & back sleepers",
      financing: "Un TAEG aussi bas que 0 % avec Affirm",
      img: "/img/product/Sensoreve.png",
      mark: "/img/product/Sensoreve_mark.png",
      rate: 4.4,
      url:"https://sensoreve.com/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm"
    },
    {
      description: "Meilleur hybride",
      size: "Twin, Twin XL, Full, Queen, King, Cal King",
      material: "Construction hybride de mousse à mémoire de forme et de ressorts emballés individuellement",
      firmness: "Mi-ferme : 7/10",
      shipping: "Livraison gratuite",
      trialperiod: "100 nuits",
      warranty: "Garantie 10 ans",
      bestfor: "Dormeurs sur le dos et sur le côté",
      financing: "Un TAEG aussi bas que 0 % avec Affirm",
      img: "/img/product/Helix.png",
      mark: "/img/product/Helix_mark.png",
      rate: 4.3,
      url:""
    },
    {
      description: "Meilleure valeur",
      size: "Twin, Twin XL, Full, Queen, King, Split king, Cal King",
      material: "Matelas entièrement en mousse doté d'une couche de mousse à mémoire de forme gel",
      firmness: "Moyennement doux : 6/10",
      shipping: "Livraison gratuite",
      trialperiod: "365 nuits",
      warranty: "Garantie à vie",
      bestfor: "Dormeurs latéraux, douleurs à la hanche, douleurs articulaires et dormeurs sur le dos",
      financing: "Un TAEG aussi bas que 0 % avec Affirm",
      img: "/img/product/Nectar.png",
      mark: "/img/product/Nectar_mark.png",
      rate: 4.4,
      url:""
    },
    {
      description: "Meilleur soutien",
      size: "Twin, Twin XL, Full, Queen, King, Cal King",
      material: "Matelas à ressorts avec support zoné et plateau-coussin",
      firmness: "Ferme : 7/10",
      shipping: "Livraison gratuite",
      trialperiod: "365 nuits",
      warranty: "Garantie à vie",
      bestfor: "Dormeurs qui surchauffent, dormeurs latéraux, personnes âgées et dormeurs sur le dos",
      financing: "Un TAEG aussi bas que 0 % avec Affirm",
      img: "/img/product/DreamCloud.png",
      mark: "/img/product/DreamCloud_mark.png",
      rate: 4.3,
      url:""
    },
    {
      description: "Meilleure entreprise",
      size: "Twin, Twin XL, Full, Queen, King, Cal King, Split Cal King, RV",
      material: "Mousses haute densité et confort avec couches matelassées",
      firmness: "Plusieurs options de fermeté",
      shipping: "Livraison gratuite",
      trialperiod: "120 nuits",
      warranty: "Garantie 10 ans",
      bestfor: "Stomach sleepers, back sleepers, & combination sleepers",
      financing: "Un TAEG aussi bas que 0 % avec Affirm",
      img: "/img/product/Plank.png",
      mark: "/img/product/Plank_mark.png",
      rate: 4.4,
      url:""
    },
    {
      description: "Meilleurs dormeurs sur le dos",
      size: "Twin, Twin XL, Full, Queen, King, Cal King, Split King",
      material: "Combinaison de couches de mousse et de ressorts avec une housse en coton biologique",
      firmness: "Plusieurs options de fermeté",
      shipping: "Livraison gratuite",
      trialperiod: "120 nuits",
      warranty: "Garantie à vie",
      bestfor: "Dormeurs sur le côté, couples et dormeurs sur le dos",
      financing: "Un TAEG aussi bas que 0 % avec Affirm",
      img: "/img/product/Nolah.png",
      mark: "/img/product/Nolah_mark.png",
      rate: 4.4,
      url:""
    },
    {
      description: "Meilleurs dormeurs sur le côté",
      size: "Twin, Twin XL, Full, Queen, King, Split King, Cal King",
      material: "Matelas entièrement en mousse avec un équilibre entre refroidissement et confort",
      firmness: "Mi-doux : 6/10",
      shipping: "Livraison gratuite",
      trialperiod: "365 nuits",
      warranty: "Garantie à vie",
      bestfor: "Dormeurs sur le côté et sur le dos",
      financing: "Un TAEG aussi bas que 0 % avec Affirm",
      img: "/img/product/Premier.png",
      mark: "/img/product/Premier_mark.png",
      rate: 4.2,
      url:""
    },
    {
      description: "Meilleurs couples",
      size: "Twin, Twin XL, Full, Queen, King,Split King, Cal King",
      material: "Construction hybride de mousse à mémoire de forme et de ressorts emballés individuellement",
      firmness: "Plusieurs options de fermeté",
      shipping: "Livraison gratuite",
      trialperiod: "120 nuits",
      warranty: "Garantie à vie",
      bestfor: "Dormeurs sur le côté, couples et dormeurs sur le dos",
      financing: "Un TAEG aussi bas que 0 % avec Affirm",
      img: "/img/product/Bear.png",
      mark: "/img/product/Bear_mark.png",
      rate: 4.3,
      url:""
    },
    {
      description: "Meilleur soulagement de la pression",
      size: "Twin, Twin XL, Full, Queen, King, Split King, Cal King, Split Cal King",
      material: "Combinaison de mousse à mémoire de forme et de mousse de latex",
      firmness: "Plusieurs options de fermeté",
      shipping: "Livraison gratuite",
      trialperiod: "365 nuits",
      warranty: "Garantie 10 ans",
      bestfor: "Dormeurs sur le dos et couples",
      financing: "Un TAEG aussi bas que 0 % avec Affirm",
      img: "/img/product/BrooklynBedding.png",
      mark: "/img/product/BrooklynBedding_mark.png",
      rate: 4.4,
      url:""
    },
    {
      description: "Meilleur refroidissement",
      size: "Twin, Twin XL, Full, Queen, King, Cal King",
      material: "Matelas hybride ultra-respirant avec un soutien amélioré",
      firmness: "Ferme : 7,5/10",
      shipping: "Livraison gratuite",
      trialperiod: "365 nuits",
      warranty: "Garantie 10 ans",
      bestfor: "Dormeurs sur le ventre, dormeurs chauds et dormeurs sur le dos",
      financing: "Aussi bas que 0 % de TAEG",
      img: "/img/product/EmmaHybrid.png",
      mark: "/img/product/EmmaHybrid_mark.png",
      rate: 4.3,
      url:""
    }
  ]);
  const [compareData, setCompareData] = useState<any[]>([
    {
      model: "Sensoreve Elekctra",
      material: "Hybride",
      firmness: "Moyen-doux : 6/10",
      shipping: "Livraison gratuite",
      warranty: "Durée de vie",
      bestfor: "Meilleur dans l'ensemble",
      mark: "/img/product/Sensoreve_mark.png",
      rate: 4,
      cooling: '✓',
    },
    {
      model: "Helix Midnight",
      material: "Hybride",
      firmness: "Mi-ferme : 7/10",
      trialperiod: "100 nuits",
      warranty: "10 années",
      bestfor: "Meilleur hybride",
      mark: "/img/product/Helix_mark.png",
      rate: 4,
      cooling: '✓',
    },
    {
      model: "Nectar Mattress",
      material: "Mousse",
      firmness: "Doux : 6/10",
      trialperiod: "365 nuits",
      warranty: "Durée de vie",
      bestfor: "Valeur",
      mark: "/img/product/Nectar_mark.png",
      rate: 4,
      cooling: '-',
    },
    {
      model: "The DreamCloud",
      material: "Hybride",
      firmness: "Mi-ferme : 7/10",
      trialperiod: "365 nuits",
      warranty: "Durée de vie",
      bestfor: "Soutien",
      mark: "/img/product/DreamCloud_mark.png",
      rate: 4,
      cooling: '✓',
    },
    {
      model: "Plank Firm",
      material: "Mousse",
      firmness: "Plusieurs options",
      trialperiod: "120 nuits",
      warranty: "10 années",
      bestfor: "Meilleure entreprise",
      mark: "/img/product/Plank_mark.png",
      rate: 4,
      cooling: '✓',
    },
    {
      model: "Nolah Evolution",
      material: "Hybride",
      firmness: "Plusieurs options",
      trialperiod: "120 nuits",
      warranty: "Durée de vie",
      bestfor: "Dormeurs sur le dos",
      mark: "/img/product/Nolah_mark.png",
      rate: 4,
      cooling: '✓',
    },
    {
      model: "Nectar Premier",
      material: "Mousse",
      firmness: "doux : 6/10",
      trialperiod: "365 nuits",
      warranty: "Durée de vie",
      bestfor: "Couchettes Latérales",
      mark: "/img/product/Premier_mark.png",
      rate: 4,
      cooling: '✓',
    },
    {
      model: "Bear Elite Hybrid",
      material: "Hybride",
      firmness: "Plusieurs options",
      trialperiod: "120 nuits",
      warranty: "Durée de vie",
      bestfor: "Des couples",
      mark: "/img/product/Bear_mark.png",
      rate: 4,
      cooling: '✓',
    },
    {
      model: "Brooklyn Bedding Signature Hybrid",
      material: "Hybride",
      firmness: "Ferme : 7.5/10",
      trialperiod: "365 nuits",
      warranty: "10 années",
      bestfor: "L'allègement de la pression",
      mark: "/img/product/BrooklynBedding_mark.png",
      rate: 4,
      cooling: '✓',
    },
    {
      model: "Emma Hybrid Comfort",
      material: "Hybride",
      firmness: "Ferme : 7.5/10",
      trialperiod: "365 nuits",
      warranty: "10 années",
      bestfor: "Refroidissement",
      mark: "/img/product/EmmaHybrid_mark.png",
      rate: 4,
      cooling: '✓',
    }
  ]);
  const [starState, setStarState] = useState<string>('flex');
  // const [handleState, setHandleState] = useState<string>(null);
  // const [topstate, setTopState] = useState<any>(700);
  // const [topstatepx, setTopStatePx] = useState<any>('700px');
  // const [bottomstate, setBottomState] = useState<any>(0);

  // useEffect(() => {
    
  //   const handleScroll = () => {
  //     const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
  //     if (scrollTop<700) {
  //       setTopState(700-scrollTop);
  //     }
  //     else setTopState(60);
  //     setTopStatePx(topstate+'px');
  //     console.log('topstatepx', topstatepx);
  //     console.log('Scroll Top:', scrollTop)
  //     console.log('Scroll Height:', scrollHeight)
  //     console.log('Client Height:', clientHeight)
  //     const specialDiv = document.getElementById('bot');
  //     // Get the position and size of the special div relative to the viewport
  //     if (specialDiv) {
  //       // Get the position and size of the special div relative to the viewport
  //       const rect = specialDiv.getBoundingClientRect();
  //       const bottom_position = rect.top + rect.height;

  //       if (bottom_position < clientHeight) {
  //         setBottomState(clientHeight - rect.top - rect.height);
  //       }
  //       else setBottomState(0)
  //     } else {
  //       // Handle the case when the element with ID 'bot' is not found
  //       console.error("Element with ID 'bot' not found");
  //     }

  //     // Log the position and size information
  //     console.log('Special div position (top, left):', rect.top, rect.left);
  //     console.log('Special div width:', rect.width);
  //     console.log('Special div height:', rect.height);
  //     console.log(topstate, '<----------->', bottomstate)
  //   };

  //   window.addEventListener('scroll', handleScroll);
  // })

  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full">
      <div className="w-full h-[45vw] lg:h-[40vw] bg-[#F1F1F1] flex justify-center items-center">
        <div className="flex flex-col items-start justify-between font-marcellus pl-[5%]">
          <p className={`${styles.manropeFont} text-[#87806A] text-[2.5vw] md:text-[16px] font-bold text-left w-[100%] pt-[5%] text-wrap`}>QUEL EST LE MEILLEUR MATELAS</p>
          <p className={`${styles.manropeFont} text-[#1A1D20] text-[5vw] md:text-[3vw] xl:text-[67px] font-bold text-center text-wrap w-[90%] py-[10%] pl-[5%]`}>Matelas les mieux notés 2024</p>
          <p className={`${styles.robotoFont} text-[#69747F] text-[3vw] md:text-[16px] font-bold 
          text-left text-wrap w-[100%]`}>Mis à jour en avril 2024</p>
        </div>
        <img
          src="/img/awesome_mattress.jpg"
          alt="Description of the image"
          className="hidden md:block w-[40%] xl:w-[600px] cover rounded-[20px]"
        />
      </div>
      <div className="flex flex-col text-center my-[20px] w-[80%] overflow-x-auto">
        <div className="flex items-center justify-start gap-[30px] xl:justify-between mt-5 w-[100%] px-[10px] pb-5">
          <Image
            src="/img/Feature1.png" // Replace with the path to your image file
            alt="Mark"
            width={100} // Set the width of the image
            height={50} // Set the height of the image
            className="w-[200px]"
          />
          <Image
            src="/img/Feature2.png" // Replace with the path to your image file
            alt="Mark"
            width={80} // Set the width of the image
            height={50} // Set the height of the image
            className="w-[140px]"
          />
          <Image
            src="/img/Feature3.svg" // Replace with the path to your image file
            alt="Mark"
            width={90} // Set the width of the image
            height={50} // Set the height of the image
            className="w-[140px]"
          />
          <Image
            src="/img/Feature4.png" // Replace with the path to your image file
            alt="Mark"
            width={200} // Set the width of the image
            height={50} // Set the height of the image
            className="w-[180px]"
          />
          <Image
            src="/img/Feature6.png" // Replace with the path to your image file
            alt="Mark"
            width={200} // Set the width of the image
            height={50} // Set the height of the image
            className="w-[180px]"
          />
          <Image
            src="/img/Feature7.svg" // Replace with the path to your image file
            alt="Mark"
            width={80} // Set the width of the image
            height={50} // Set the height of the image
            className="w-[100px]"
          />
        </div>
      </div>
      <div className="block text-center w-full mb-[20px] pl-[10%] lg:flex">
        <div className="w-full lg:w-[65%]">
          <div className="flex flex-col w-[90%] items-start justify-center bg-[#F7E4D6] rounded-[30px] py-[20px] px-[5%] mb-[50px]">
            <p className={`${styles.manropeFont} text-3xl font-bold w-full pb-[20px] text-left`}>&nbsp; Meilleur matelas en 2024 : &nbsp;</p>
            
            <div className="flex flex-col justify-between items-start text-[18px] text-left w-full pl-[3%]">
              {
                bestMattress.map((item:any, index:any) =>
                  <div key={index} className="block lg:flex leading-10">
                    <p className={`${styles.robotoFont} font-bold text-[#151160]`}>
                      - {item.company} :
                    </p>
                    <p className={`${styles.rubikFont} `}>
                      &nbsp; {item.description}
                    </p>
                  </div>
                )
              }
            </div>
          </div>
          {
            mattressData.map((item:any, index:any) =>
            <div key={index} className={`${styles.manropeFont} flex flex-col text-center my-[10px] border-[1px] ${index === 0 ? 'border-[#FFBF00]' : 'border-[#4F4F4F]'} justify-center items-center rounded-[10px]  w-[90%] mb-[50px]`} >
              <div className={`${styles.manropeFont} flex flex-col w-full items-center justify-center ${index === 0 ? "bg-[#FFBF00]" : "bg-[#4F4F4F]"} rounded-t-[8px]`}>
                <span className="text-3xl font-bold w-full text-center text-white flex flex-row justify-center mt-[5px]">&nbsp; {item.description} &nbsp;</span>
              </div>
              <div className="block md:flex justify-around items-start text-left w-full pl-[10px] pr-[10px] pt-[2%] bg-white pb-[20px] rounded-[10px]">
                <div className="w-2/9 flex flex-col justify-start items-center mt-[50px] ">
                  <Image
                    src={item.mark} // Replace with the path to your image file
                    alt="Mark"
                    width={100} // Set the width of the image
                    height={50} // Set the height of the image
                    className={`mb-[30px] margin-left ${index===1 ? "w-1/4" : "w-1/3"} md:${index===1 ? "w-1/2" : "w-2/3"}`}
                  />
                  <Image
                    src={item.img} // Replace with the path to your image file
                    alt="Sample"
                    width={200} // Set the width of the image
                    height={50} // Set the height of the image
                    className="hidden md:block rounded-[10px] w-[80%] md:w-full mb-5"
                  />
                </div>
                <div className="flex flex-col pl-[5%] pr-[5%] w-full md:w-[56%]">
                  <p className={`${styles.manropeFont} font-bold text-[#151160] text-[16px] md:text-[18px] pl-[10px]`}>
                    Descriptions
                  </p>
                  <div className="mt-2">
                    <table className="w-full divide-y divide-gray-200 border border-grey-200  bg-grey-100 text-[12px] md:text-[14px]">
                      <tbody className="divide-y divide-gray-200" >
                        <tr>
                          <td className={`${styles.robotoFont} px-6 py-2 whitespace-no-wrap w-[27%] border border-gray-200`}>Taille</td>
                          <td className={`${styles.rubikFont} px-6 py-2 whitespace-no-wrap w-[73%]`}>{item.size}</td>
                        </tr>
                        <tr className="bg-[#F1F1F1]">
                          <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Matériel</td>
                          <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.material}</td>
                        </tr>
                        <tr>
                          <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Fermeté</td>
                          <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.firmness}</td>
                        </tr>
                        <tr className="bg-[#F1F1F1]">
                          <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Expédition</td>
                          <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.shipping}</td>
                        </tr>
                        <tr>
                          <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Période d'essai</td>
                          <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.trialperiod}</td>
                        </tr>
                        <tr className="bg-[#F1F1F1]">
                          <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Garantie</td>
                          <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.warranty}</td>
                        </tr>
                        <tr>
                          <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Meilleur pour</td>
                          <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.bestfor}</td>
                        </tr>
                        <tr className="bg-[#F1F1F1]">
                          <td className={`${styles.robotofont} px-6 py-2 whitespace-no-wrap border border-gray-200`}>Financement</td>
                          <td className={`${styles.rubikfont} px-6 py-2 whitespace-no-wrap`}>{item.financing}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className = "flex flex-col justify-center items-center w-2/9 mr-[10px] pt-[50px]">
                  <div className={starState}>
                    {/* {
                      index == handleState ?  */}
                      <div className="filter invert-85 sepia-22 saturate-857 hue-rotate-336 brightness-95 contrast-109 flex flex-row flex-nowrap items-center my-[10px] text-[#FDCC80]">
                        <span className={`${styles.robotoFont} text-[18pt] md:text-[2vw] lg:text-[1vw] text-[#1A1D20]`}>{item.rate}/5.0</span>
                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                        <span ><img src={`${item.rate>4.7 ? "/img/star_half.svg" : "/img/star_empty.svg"}`} alt="My SVG Image"  className="w-[30px] h-full"/></span>						
                      </div>
                      {/* :
                      <></>
                    } */}
                  </div>
                  <a href="/reviews" className={`${styles.manropeFont} bg-[#FFBF00] hover:bg-[#e2b222] text-blue font-bold px-4 rounded-[10px] w-full py-4 text-center`} onClick={() => {
                    setStarState('flex');
                    // setHandleState(index);
                  }
                  }>
                    Vérifier les avis
                  </a>
                  <a href={item.url} className={`${styles.manropeFont} bg-[#FFFFFF] hover:bg-[#F1F1F1] text-blue font-bold px-4 rounded-[10px] w-full py-4 mt-[20px] md:mt-[50px] border border-[#F7e4D6] text-center`}>
                    Visit Site
                  </a>
                </div>
              </div>
            </div>)
          }
          <div className="overflow-scroll overflow-y-scroll mt-2 w-[90%]">
            <table className="min-w-full divide-y divide-gray-200 border border-grey-200  bg-grey-100 mb-[20px]">
              <thead>
                  <tr className={`${styles.manropeFont}bg-white leading-3`}>
                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Modèle</th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Fermeté</th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Matérielle</th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Refroidissement</th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Garantie</th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Période d'essai</th>
                    <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-200">Meilleur pour</th>
                  </tr>
              </thead>
              <tbody className={`${styles.rubikFont} divide-y divide-gray-200`} >
                {
                  compareData.map((item:any, index:any) => 
                    <tr key={index} className="bg-white  leading-3 text-xs">
                      <td className="px-6 py-2 border border-gray-200">
                        <Image
                          src={item.mark} // Replace with the path to your image file
                          alt="Sample"
                          width={200} // Set the width of the image
                          height={50} // Set the height of the image
                          className="w-[100px]"
                        />
                      </td>
                      <td className={`px-6 py-2 whitespace-no-wrap border border-gray-200 text-center ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>{item.model}</td>
                      <td className={`px-6 py-2 whitespace-no-wrap border border-gray-200 text-center ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>{item.firmness}</td>
                      <td className={`px-6 py-2 whitespace-no-wrap border border-gray-200 text-center ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>{item.material}</td>
                      <td className={`px-6 py-2 whitespace-no-wrap border border-gray-200 text-center ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>{item.cooling}</td>
                      <td className={`px-6 py-2 whitespace-no-wrap border border-gray-200 text-center ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>{item.warranty}</td>
                      <td className={`px-6 py-2 whitespace-no-wrap border border-gray-200 text-center ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>{item.trialperiod}</td>
                      <td className={`px-6 py-2 whitespace-no-wrap border border-gray-200 text-center ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>{item.bestfor}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        <div id="sidePos" className="md:-webkit-sticky md:sticky w-[80%] lg:w-[32%] right-[2vw] lg:h-[90vh] top-[10vh] flex items-start flex-col lg:border-l pl-[2%] border-none lg:border-[#1A1D20] pb-[20px]  overflow-y-auto mt-[50px]">
          <a href="https://senoreve.com" className="w-full flex justify-center items-center">
            <img
              src="/img/mark.png" // Replace with the path to your image file
              alt="Mark"
              className="lg:w-[18vw] lg:h-[3vw] w-[60%]"
            />
          </a>
          <video
            className="w-[70%] rounded-lg border border-[#FFBF00] my-[10px] mx-[15%]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-full flex items-center justify-center">
            
            <span className={`${styles.robotoFont} text-[3vw] lg:text-[1vw] text-[#1A1D20]`}>4.4/5.0 </span>
            <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>
            <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>
            <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>
            <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>
            <span ><img src="/img/star_empty.svg" alt="My SVG Image"  className="w-[3vw] lg:w-[1.5vw] h-full"/></span>		
          </div>
          <div className="w-full flex flex-col justify-start align-start">
            <div className="w-full flex justify-center items-center">
              <span ><img src="/img/Reviewer.jpg" alt="évaluateur"  className="lg:w-[3.5vw] lg:h-[3.5vw] w-[10vw] rounded-[50px] border-[2px] border-[#F7E4D6]"/></span>
              <p className={`${styles.robotoFont} text-[14px] md:text-[18px] ml-[5%] text-left`}>Écrit par<br></br>Logan Block, évaluateur de matelas</p>
            </div>
            <div className="flex w-[90%] mx-[5%] justify-start align-start flex-col">
              <p className={`${styles.manropeFont} w-full text-center text-[16pt] lg:text-[18pt] font-bold mt-[10px]`}>Notre meilleur choix de matelas</p>
              <p className={`${styles.rubikFont} w-[90%] ml-[5%] text-left text-[16px]`}>Le matelas&nbsp; <a href="https://sensoreve.com/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm" className="text-blue-500">Sensoreve Elekctra</a> &nbsp;occupe la première place en raison de sa sensation moyennement ferme qui peut plaire à une variété de dormeurs différents, quelle que soit la position de sommeil ou le type de corps. De plus, la couche de support composée de ressorts emballés individuellement fournit un soulèvement qui peut soulager la pression sur vos épaules et le bas du dos.</p>
            </div>
            <a href="https://sensoreve.com/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm">
              <button className={`${styles.manropeFont} bg-[#FFBF00] hover:bg-[#F7E4D6] text-blue font-bold px-4 rounded-[10px] w-[80%] mx-[10%] py-4 mt-[20px] border border-[#F7e4D6]`}>Visit Site
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full pl-[10%]">
      </div>
      <div className="w-full pl-[10%] mb-[50px]" id="bot">
      </div>
      <BottomBar/>
    </main>
  );
}

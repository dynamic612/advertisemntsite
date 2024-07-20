/* eslint-disable @next/next/no-img-element */
'use client'
/* eslint-disable react/jsx-key */
import Image from "next/image";
import { useState, useEffect } from "react";
import BottomBar from "../components/bottomBar";
import styles from '../components/CustomText.module.css';
import Link from 'next/link';

export default function Home() {
    interface LookBestItem {
        state: boolean;
        title: string;
        content: JSX.Element;
    }

    const [faq, setFAQ] = useState<LookBestItem[]>([
        {
            state: true,
            title: "Quel est le prix d'un matelas ?",
            content: <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Il n'y a pas de "coût unique". Le coût d'un matelas dépend de nombreux facteurs, dont la taille, les matériaux, le type de matelas, etc. Le prix moyen d'un matelas queen-size de marques en ligne bien connues est d'environ 1 500 $, mais il est possible de trouver de bonnes options à des prix inférieurs.
            </p>
        },
        {
            state: false,
            title: "Quelle est la meilleure période de l'année pour acheter un matelas ?",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Les week-ends suivants sont généralement ceux où les ventes sont les plus importantes : Presidents Day, Memorial Day, Independence Day, Labor Day et Black Friday. Cela dit, de nombreuses entreprises proposent des offres en permanence, alors consultez la page des coupons sur Somnopolis pour trouver des réductions exclusives.
            </p>
        },
        {
            state: false,
            title: "Quelle est la durée de vie d'un matelas bon marché ?",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                De nombreux matelas de qualité sont construits pour durer aussi longtemps que des lits plus chers. En cas de doute, demandez à un représentant de l'entreprise de matelas et vérifiez la garantie. La durée et les conditions de la garantie peuvent vous donner une bonne idée de la fiabilité du matelas. Veillez à suivre les instructions d'entretien pour que votre matelas fonctionne comme prévu à long terme.
            </p>
        },
        {
            state: false,
            title: "Je n'ai pas un budget strict. Pourquoi devrais-je acheter un matelas moins cher ?",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Un matelas à bas prix peut être une excellente option dans certaines circonstances pour certains acheteurs, même ceux qui n'ont pas besoin de chasser les bonnes affaires. Vous pouvez acheter un matelas économique si vous devez meubler une chambre d'amis, si votre enfant a besoin d'un nouveau lit, si vous envoyez un enfant à l'université ou si vous avez besoin d'un matelas supplémentaire.
            </p>
        },
        {
            state: false,
            title: "Quel est le type de matelas le moins cher ?",
            content: <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Un lit à ressorts de base ou un matelas en mousse à mémoire de forme sont deux options moins coûteuses. Vous pourrez peut-être opter pour un matelas de meilleure qualité, qui durera plus longtemps et offrira du confort pendant des années.
            </p>
        },
        {
            state: false,
            title: "Comment rendre un matelas bon marché plus confortable ?",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Le moyen le plus simple de rendre un matelas bon marché plus confortable est d'acheter un sur-matelas. Vous pouvez même trouver des surmatelas de qualité pour moins de 100 $. Ces accessoires sont conçus pour modifier la fermeté de votre matelas, qu'il soit plus doux ou plus ferme. Cela vous permet de créer un niveau de fermeté qui est confortable pour vous et pour vos besoins de sommeil individuels.
            </p>
        },
    ]);

    const [compareData, setCompareData] = useState<any[]>([
        {
            model: "Sensoreve Elekctra Matelas",
            firmness: "Moyen-doux : 6/10",
            mark: "/img/sensoreve/elekctra.jpg",
            rate: 4.4,
        },
        {
            model: "Matelas hybride Bear Elite",
            firmness: "Plusieurs options de fermeté",
            mark: "/img/review/bear_best.jpg",
            rate: 4.6,
        },
        {
            model: "Matelas Helix Midnight Luxe",
            firmness: "Moyennement souple : 6/10",
            mark: "/img/review/helix_best.jpg",
            rate: 4.3,
        },
        {
            model: "Matelas DreamCloud Original",
            firmness: "Ferme : 7/10",
            mark: "/img/review/dreamCloud_best.jpg",
            rate: 4.4,
        },
    ]);

    const [starState, setStarState] = useState<string>('flex');
    interface ComponentProps {
        index: number;
        setLookBestState: React.Dispatch<React.SetStateAction<LookBestItem[]>>;
    }

    const [order, setOrder] = useState<object []>([
        {
            img: "/img/review/topBrand.png",
            content: "Meilleures marques"
        },
        {
            img: "/img/review/sleep_position.png",
            content: "Position de sommeil"
        },
        {
            img: "/img/review/type.png",
            content: "Type de matelas"
        },
        {
            img: "/img/review/sleep_preference.png",
            content: "Préférences de sommeil"
        },
        {
            img: "/img/review/budget.png",
            content: "Budget"
        },
    ]);
    
    const [mattressType, setMattressType] = useState<object []>([
        {
            img: "/img/review/memoryFoam.png",
            content: "Mousse à mémoire de forme"
        },
        {
            img: "/img/review/innerspring.png",
            content: "Ressort intérieur"
        },
        {
            img: "/img/review/latex.png",
            content: "Mousse de latex"
        },
        {
            img: "/img/review/hybrid.png",
            content: "Hybride"
        },
        {
            img: "/img/review/organic.png",
            content: "Naturel/Biologique"
        },
    ]);

    const [sleepPosition, setSleepPosition] = useState<object []>([
        {
            img: "/img/review/sideSleeper.jpg",
            title: "Dormeurs latéraux",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] md:w-[45%] mt-3 md:mt-[0px]`}>
                Si vous dormez strictement sur le côté, vous aurez probablement besoin d'un lit plus souple, qui soulage la pression au niveau des épaules et des hanches. Je vous conseille de rechercher des matelas comprenant une mousse à mémoire de forme épaisse et amortissante, un matériau connu pour ses propriétés de modelage du corps.
                <br/><br/>
                Les matelas plus fermes ne vous conviendront probablement pas, car l'absence d'enfoncement peut entraîner la formation de points de pression lorsque votre corps s'enfonce dans la structure.
            </p>
        },
        {
            img: "/img/review/backSleeper.jpg",
            title: "Dormeurs sur le dos",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] md:w-[45%] mt-3 md:mt-[0px]`}>
                Les dormeurs sur le dos préféreront un matelas moyennement ferme à ferme, avec un peu de relief pour maintenir la colonne vertébrale dans un alignement neutre et un peu de souplesse pour soulager la région lombaire. Les lits hybrides dotés d'une couche supérieure en mousse douce (mousse à mémoire de forme ou latex) font souvent des merveilles pour les personnes qui dorment sur le dos. 
                <br/><br/> 
                En général, l'alignement de la colonne vertébrale est essentiel dans toutes les positions, et pas seulement pour les personnes qui dorment principalement sur le dos.
            </p>
        },
        {
            img: "/img/review/stomachSleeper.jpg",
            title: "Dormeurs sur l'estomac",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] md:w-[45%] mt-3 md:mt-[0px]`}>
                Pour ceux qui s'en tiennent à la position couchée, la fermeté est le mot d'ordre. Les lits plus fermes aident à positionner les hanches au-dessus de la structure de manière à ce qu'elles soient alignées avec les épaules. Il en résulte un alignement sain de la colonne vertébrale et une réduction des risques de douleurs dorsales. 
                <br/><br/> 
                Tout lit comportant une fine section de mousse sur un noyau de soutien composé de ressorts ensachés ou de mousse de polyéthylène haute densité conviendra probablement aux personnes qui dorment sur le ventre.
            </p>
        },
    ]);

    const [review, setReview] = useState<object []>([
        {
            name: "Matériaux de matelas",
            intro:
                <div className="flex flex-row w-full items-start justify-left">
                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                    text-left text-wrap`}>
                        En premier lieu, nous nous intéressons aux matériaux utilisés. Un bon matelas aura une couche de confort suffisamment épaisse pour rester confortable pour les dormeurs de la plupart des tailles. Selon nous, un design impeccable et une sélection réfléchie des matériaux vont de pair.
                    </p>
                </div>,
            title: "Matériaux 101",
            content: [
                "Types les plus courants : mousse à mémoire de forme, mousse de latex, ressorts internes et mousse de polyéthylène.",
                "Sensations : elles vont de l'allègement de la pression (mousse à mémoire de forme) au rebond rafraîchissant (mousse de latex), à la portance (ressort) et au soutien ferme (mousse de polyéthylène).",
                "Influence sur : l'enfoncement, la fermeté et l'allègement de la pression"
            ],
            img: "/img/review/material.jpg"
        },
        {
            name: "Confort",
            intro:
                <div className="flex flex-row w-full items-start justify-left">
                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                    text-left text-wrap`}>
                        En ce qui concerne le confort, nous voulons nous assurer qu'un lit est agréable dès l'instant où vous vous y allongez : Soulage-t-il la pression ? Réduit-il la douleur ? Le dormeur se sentira-t-il coincé dans les couches ?
                        <br/><br/>
                        Pour répondre à ces questions, nous utilisons différents outils, dont mon préféré mesure la pression exercée par un dormeur lorsqu'il est allongé sur un matelas.
                    </p>
                </div>,
            title: "Conseils de confort",
            content: [
                "Soyez attentif à la sensation du matelas au niveau des épaules et des hanches, deux des parties les plus sensibles du corps.",
                `Vous dormez avec un partenaire ? Envisagez un lit à "fermeté partagée", qui offre deux sensations différentes côte à côte.`,
            ],
            img: "/img/review/comfort.jpg"
        },
        {
            name: "Soutien",
            intro:
                <div className="flex flex-row w-full items-start justify-left">
                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                    text-left text-wrap`}>
                        Vouloir qu'un lit soit confortable ne signifie pas que nous ne voulons pas qu'il ait un soutien fantastique. Il est important de ne pas confondre soutien et fermeté, car un matelas peut être incroyablement moelleux tout en offrant un excellent soutien. Après tout, le soutien signifie simplement qu'un lit maintient la colonne vertébrale du dormeur dans l'alignement lorsqu'il est dans une position de sommeil normale, comme le montre la photo ci-dessous.
                    </p>
                </div>,
            title: "Points d'appui",
            content: [
                "Types les plus courants : mousse à mémoire de forme, mousse de latex, ressorts internes et mousse poly.",
                "Sensations : elles vont de l'allègement de la pression (mousse à mémoire de forme) au rebond rafraîchissant (mousse de latex), à la portance (ressort) et au soutien ferme (mousse de polyéthylène).",
                "Influence sur : l'enfoncement, la fermeté et l'allègement de la pression"
            ],
            img: "/img/review/support.jpg"
        },        
        {
            name: "Refroidissement",
            intro:
                <div className="flex flex-row w-full items-start justify-left">
                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                    text-left text-wrap`}>
                        Nous voulons également savoir si le lit est frais. Bien que de nombreuses entreprises vantent les mérites de leurs matelas en disant qu'ils permettent de "dormir au frais", ce qu'elles veulent dire en réalité, c'est qu'ils ne chauffent pas plus que la température ambiante. C'est pourquoi nous recherchons des infusions de gel dans la mousse à mémoire de forme qui absorbe la chaleur (voir photo ci-dessous), des fibres à changement de phase dans les housses et l'inclusion de matériaux naturellement rafraîchissants tels que la mousse de latex ou les ressorts.
                    </p>
                </div>,
            title: "Perspectives de la réfrigération",
            content: [
                "Types les plus courants : mousse à mémoire de forme, mousse de latex, ressorts internes et mousse poly.",
                "Sensations : elles vont de l'allègement de la pression (mousse à mémoire de forme) au rebond rafraîchissant (mousse de latex), à la portance (ressort) et au soutien ferme (mousse de polyéthylène).",
                "Influence sur : l'enfoncement, la fermeté et l'allègement de la pression"
            ],
            img: "/img/review/cooling.jpg"
        },
        {
            name: "Marques",
            intro:
                <div className="flex flex-row w-full items-start justify-left">
                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                    text-left text-wrap`}>
                        Mis à part ces petits détails de conception, nous nous engageons également à en apprendre le plus possible sur chaque entreprise que nous incluons dans notre site. Quels types de périodes d'essai offrent-elles ? Leurs garanties sont-elles légitimes ou ne sont-elles que de la poudre aux yeux ? Contribuent-ils à des causes caritatives ? Est-il facile de retourner un matelas dont vous ne voulez plus ? En découvrant la vérité derrière les affirmations, nous vous redonnons le pouvoir.
                        <br/><br/>
                        Après tout, votre expérience de magasinage de matelas devrait (et doit) être centrée sur vous.
                    </p>
                </div>,
            title: "Faits sur la marque",
            content: [
                "Types les plus courants : mousse à mémoire de forme, mousse de latex, ressorts internes et mousse poly.",
                "Sensations : elles vont de l'allègement de la pression (mousse à mémoire de forme) au rebond rafraîchissant (mousse de latex), à la portance (ressort) et au soutien ferme (mousse de polyéthylène).",
                "Influence sur : l'enfoncement, la fermeté et l'allègement de la pression"
            ],
            img: "/img/review/brand.jpg"
        }
    ]);

    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-start w-full">
                <div className="w-full h-[450px] 2h-[40vw] xl:h-[650px] lg:h-[550px] md:h-[500px] sm:h-[650px] bg-[#F1F1F1] flex justify-center items-start mb-20">
                    <div className="flex flex-col items-start justify-between font-marcellus pl-[5%] w-full">
                        {/* <Link href='/' className={`${styles.manropeFont} text-[#87806A] sm:text-[16px] text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] font-bold text-left w-[100%] pt-[5%] text-wrap`}>
                            Accueil et meilleur matelas
                        </Link> */}
                        <div className="w-[90%] flex flex-col justify-start items-start pb-[5%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[48px] xl:text-[44px] md:text-[32px] sm:text-[32px] text-[24px] font-bold text-wrap w-[90%] py-[2%] pl-[5%] text-center mt-[5%]`}>
                                Critiques de matelas
                                {/* <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] sm:text-[14px] text-[12px] md:text-[16px] font-bold 
                                text-left text-wrap w-[100%]`}>
                                    Par Bridget Chapman | Mise à jour : 30 avril 2024
                                </p> */}
                            </div>
                            <div className="w-full flex justify-start items-start pl-[5%]">
                                <span className="border-[2px] border-[#78c2ef] rounded-full">
                                    <img src="/img/cheap/Reviewer.png" alt="évaluateur"  className="lg:w-[4vw] lg:h-[4vw] md:w-[5vw] md:h-[5vw] w-[34px] rounded-[50px] border-[2px] border-[#F7E4D6]"/>
                                </span>
                                <p className={`${styles.robotoFont} 2xl:text-[20px] sm:text-[14px] md:text-[18px] text-[14px] ml-[3%] text-left flex items-center lg:h-[4vw] md:h-[5vw] h-[34px]`}>Rédigé par<br></br>
                                    Bridget Chapman, rédactrice en chef des produits
                                </p>
                            </div>
                            <div className="w-full flex flex-col justify-start items-start pt-[1%] mt-[3%] pl-[5%] gap-[3%] md:flex-row">
                                <div className="flex justify-start items-start w-[100%] md:w-[50%] my-[20px] md:my-[0px]">
                                    <span >
                                        <img src="/img/method.png" alt="évaluateur"  className="lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[32px] mt-[5px]"/>
                                    </span>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[36px] text-[20px] lg:text-[28px] md:text-[21px] font-bold text-wrap w-[90%] pl-[5%]`}>
                                        Méthodologie
                                        <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] md:text-[14px] lg:text-[16px] font-bold 
                                        text-left text-wrap w-[100%] sm:text-[16px] text-[12px]`}>
                                            Nos coachs certifiés en science du sommeil ont examiné plus de 220 matelas dans notre laboratoire, testant chacun d'entre eux sur les matériaux, le confort, le refroidissement, le soutien et d'autres catégories.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-start items-start w-[90%] md:w-[50%]">
                                    <span >
                                        <img src="/img/check.png" alt="évaluateur"  className="lg:w-[40px] lg:h-[40px] md:w-[30px] w-[28px] md:h-[30px] mt-[5px]"/>
                                    </span>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[36px] text-[20px] lg:text-[28px] md:text-[21px] font-bold text-wrap w-[90%] pl-[5%]`}>
                                        Dans cet article
                                        <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] md:text-[14px] lg:text-[16px] sm:text-[16px] text-[12px] font-bold 
                                        text-left text-wrap w-[100%]`}>
                                            Nous vous présentons quelques-unes des meilleures offres sur le marché des matelas aujourd'hui.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] xl:text-[20px] lg:text-[18px] md:text-[16px]
                text-left text-wrap w-[80%] mb-20`}>
                    L'achat d'un matelas peut être un processus accablant, car il est difficile de savoir si le modèle que vous choisissez répondra à vos besoins. En tant que testeurs de matelas, notre équipe Somnopolis comprend cela. Je passe mon temps dans le laboratoire de matelas à tester des centaines de matelas et d'accessoires de matelas différents afin que vous ayez plus de facilité à choisir celui qui vous convient le mieux.
                    <p>&nbsp;</p>
                    Sur cette page, j'ai rassemblé quelques ressources pour vous aider dans votre démarche d'achat de matelas. Vous y trouverez des conseils pour trouver le matelas idéal, un aperçu des meilleures marques en ligne, des offres et des critiques de matelas impartiales, ainsi qu'un guide des différentes positions de sommeil et des lits qui leur conviennent le mieux.
                </div>
                <div className="block text-center w-full mb-[20px] pl-[10%] lg:flex">
                    <div className="w-full lg:w-[65%]">

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[32px] lg:text-[44px] text-wrap text-center pt-[5%] mb-5`}>
                                <p className=" pb-2 font-bold">
                                    Comment trouver votre matelas
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Il y a un certain nombre de choses à prendre en compte lors du choix d’un nouveau matelas. Tout d’abord, dans quelle position dormez-vous habituellement ? Les besoins des dormeurs sur le dos diffèrent de ceux des dormeurs sur le côté et des dormeurs sur le ventre, de sorte que le « meilleur matelas » est différent pour chacun. Vous pouvez également considérer la sensation de différents matériaux comme la mousse à mémoire de forme ou des matériaux naturels comme le latex. Peut-être dormez-vous chaud ou froid, partagez-vous votre lit avec un partenaire ou avez-vous une fourchette de prix particulière en tête.
                                    <br></br><br></br>
                                    Et c’est là que nos experts Somnopolis interviennent pour vous guider tout au long de votre parcours.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row ml-[5%] w-[90%] items-center justify-center gap-[5%] py-20 ">
                                {
                                    order.map((item:any, index:number) => 
                                        <div key={index} className = "flex flex-col items-center justify-center border-[1px] border-[#c3f5c3] rounded-lg py-3 px-3 hover:bg-[#b0b9c6] my-3">
                                            <img src={item.img} alt="Lucid Mattress" className="text-center w-[50%]"/>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                            text-center text-wrap `}>
                                                {item.content}
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        
                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[32px] lg:text-[44px] text-wrap text-center pt-[5%] mb-5`}>
                                <p className=" pb-2 font-bold">
                                    Meilleures offres de matelas
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Vous avez peut-être vu des publicités Helix sur Instagram ou regardé des publicités YouTube de marques populaires comme Emma, Saatva et Nectar. Bien que la réputation puisse procéder de certaines des entreprises de matelas les plus prospères dans le jeu, nous ne laissons jamais les marques se reposer sur leurs lauriers seules.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row ml-[5%] w-[90%] items-center justify-center gap-[5%] py-20 ">
                                <img src="/img/review/mark.jpg" alt="Lucid Mattress" className="text-center w-full"/>
                            </div>
                        </div>
                        
                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[32px] lg:text-[44px] text-wrap text-center pt-[5%] mb-5`}>
                                <p className=" pb-2 font-bold">
                                    Grandes marques
                                </p>
                            </div>
                            <p className={`${styles.manropeFont} text-2xl font-bold pb-2 mb-10 text-left w-[90%]`}>
                                Meilleures offres &nbsp;
                            </p>
                        
                            <div className="mt-2 w-[90%] overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 border border-grey-200  bg-grey-100 mb-[20px]">
                                <thead>
                                    <tr className={`${styles.manropeFont}bg-white leading-3`}>
                                        <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                        <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider ">Produit</th>
                                        <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider ">Fermeté</th>
                                        <th className="px-6 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider ">Score</th>
                                    </tr>
                                </thead>
                                <tbody className={`${styles.rubikFont} divide-y divide-gray-200`} >
                                    {
                                    compareData.map((item:any, index:any) => 
                                        <tr key={index} className={`leading-3 text-md  ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>
                                        <td className="px-2 py-2 ">
                                            <Image
                                            src={item.mark} // Replace with the path to your image file
                                            alt="Sample"
                                            width={200} // Set the width of the image
                                            height={50} // Set the height of the image
                                            className="w-[200px]"
                                            />
                                        </td>
                                        <td className={`px-6 py-2 whitespace-no-wrap  text-center leading-6 ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>
                                            {item.model}
                                        </td>
                                        <td className={`px-6 py-2 whitespace-no-wrap  text-center leading-6 ${index % 2 === 0 ? "bg-white" : "bg-[#F1F1F1]"}`}>
                                            {item.firmness}
                                        </td>
                                        <td className="px-2 py-2 text-center">
                                                <div className="filter invert-85 sepia-22 saturate-857 hue-rotate-336 brightness-95 contrast-109 flex flex-row flex-nowrap justify-center items-center my-[10px] text-[#FDCC80]"> 
                                                    <span className="text-black">{item.rate}/5.0</span>
                                                    <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                    <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                    <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                    <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                    <span><img src={`${item.rate > 4.5 ? "/img/star_half.svg" : "/img/star_empty.svg"}`} alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                    }
                                </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[32px] lg:text-[44px] text-wrap text-center pt-[5%] mb-5`}>
                                <p className=" pb-2 font-bold">
                                    Meilleures offres de matelas
                                </p>
                            </div>
                            {
                                sleepPosition.map((item:any, index:number) => 
                                    <div key={index} className="mb-10">
                                        <p className={`${styles.manropeFont} text-2xl font-bold pb-2 mb-10 text-left w-[90%]`}>
                                            {item.title} &nbsp;
                                        </p>
                                        <div className={`flex-col ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex w-full gap-[5%] justify-center items-center`}>
                                            <img src={item.img} alt="Lucid Mattress" className="text-center w-[90%] md:w-[50%]"/>
                                            {item.content}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        
                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[32px] lg:text-[44px] text-wrap text-center pt-[5%] mb-5`}>
                                <p className=" pb-2 font-bold">
                                    Type de matelas
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Une autre façon de classer les lits est de les classer en fonction de leur construction générale. Cette stratégie peut s'avérer utile pour ceux qui connaissent déjà les matériaux qu'ils aiment, qu'il s'agisse de mousse à mémoire de forme qui soulage la pression, de latex rafraîchissant, de poly mousse ferme, de ressorts rebondissants ou d'une combinaison hybride. Il existe également des matelas entièrement composés de matériaux organiques, parfaits pour les dormeurs respectueux de l'environnement.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row ml-[5%] w-[90%] items-center justify-center gap-[5%] py-20 ">
                                {
                                    mattressType.map((item:any, index:number) => 
                                        <div key={index} className = "flex flex-col items-center justify-center border-[1px] border-[#c3f5c3] rounded-lg py-3 px-3 hover:bg-[#b0b9c6] my-3">
                                            <img src={item.img} alt="Lucid Mattress" className="text-center w-[50%]"/>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                            text-center text-wrap `}>
                                                {item.content}
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[32px] lg:text-[44px] text-wrap text-center  mb-5`}>
                                <p className=" pb-2 font-bold">
                                    Préférences en matière de sommeil
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Il y a un certain nombre d'autres préférences de sommeil à prendre en compte en plus de votre position de sommeil et de la structure idéale de votre matelas. Il est possible de réduire considérablement le nombre de préférences en suivant simplement ce qui vous fait du bien ou en tenant compte de vos besoins. Que vous dormiez avec un partenaire, que vous aimiez une sensation plus ferme, que vous souffriez de maux de dos ou que vous dormiez à la chaleur, j'ai des recommandations pour vous. Chacun de ces tours d'horizon a été élaboré par nos experts du sommeil Sleepopolis, listant les meilleures marques que nous avons testées de première main dans notre laboratoire de matelas.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[32px] lg:text-[44px] text-wrap text-center  mb-5 mt-10`}>
                                <p className=" pb-2 font-bold">
                                    Notre processus d'évaluation et de notation des matelas
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    We want to be as honest and transparent with our readers as possible, so we thought it might be helpful to provide you with some insight into our mattress review process. While we definitely do our fair share of lounging around on these beds, a mattress review entails a lot more than simply stretching out on a new model.
                                    <br/><br/>
                                    Over the course of testing hundreds of different mattresses, we’ve developed a system that allows us to understand a bed from the inside out so that you, by proxy, can too. Below are some of the things we look for.
                                </p>
                            </div>
                            
                            {
                                review.map((item:any, index:number) => 
                                    <div key={index} className="my-10">
                                        <p className={`${styles.manropeFont} text-2xl font-bold pb-2 mb-10 text-left w-[90%]`}>
                                            {item.name} &nbsp;
                                        </p>
                                        {item.intro}
                                        <div className={`flex-col ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex w-full gap-[5%] justify-center items-center my-5 bg-[#eef5f9] py-6 px-6 md:px-0`}>
                                            <img src={item.img} alt="Lucid Mattress" className="text-center w-[50%]"/>
                                            <div className= "w-45% flex flex-col">
                                                <p className={`${styles.manropeFont} text-xl font-bold pb-2 mb-5 text-left w-[90%]`}>
                                                    {item.title} &nbsp;
                                                </p>
                                                {
                                                    item.content.map((it:any, idx:number)=>
                                                        <div key={idx} className="flex flex-row w-full items-start justify-left">
                                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                                            text-left px-5`}>
                                                                • &nbsp;
                                                            </p>
                                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                                            text-left text-wrap`}>
                                                                {it}
                                                            </p>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
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
                                <span >
                                    <img src="/img/Reviewer.jpg" alt="évaluateur"  className="lg:w-[3.5vw] lg:h-[3.5vw] w-[10vw] rounded-[50px] border-[2px] border-[#F7E4D6]"/>
                                </span>
                                <p className={`${styles.robotoFont} text-[14px] md:text-[18px] ml-[5%] text-left`}>Écrit par<br></br>
                                    Logan Block, évaluateur de matelas
                                </p>
                            </div>
                            <div className="flex w-[90%] mx-[5%] justify-start align-start flex-col">
                                <p className={`${styles.manropeFont} w-full text-center text-[16pt] lg:text-[18pt] font-bold mt-[10px]`}>
                                    Notre meilleur choix de matelas
                                </p>
                                <p className={`${styles.rubikFont} w-[90%] ml-[5%] text-left text-[16px]`}>
                                    Le matelas&nbsp;
                                    <a href="https://sensoreve.com/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm" className="text-blue-500">
                                        Sensoreve Elekctra
                                    </a> 
                                    &nbsp;occupe la première place en raison de sa sensation moyennement ferme qui peut plaire à une variété de dormeurs différents, quelle que soit la position de sommeil ou le type de corps. De plus, la couche de support composée de ressorts emballés individuellement fournit un soulèvement qui peut soulager la pression sur vos épaules et le bas du dos.
                                </p>
                            </div>
                            <a href="https://sensoreve.com/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm">
                                <button className={`${styles.manropeFont} bg-[#FFBF00] hover:bg-[#F7E4D6] text-blue font-bold px-4 rounded-[10px] w-[80%] mx-[10%] py-4 mt-[20px] border border-[#F7e4D6]`}>Visit Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <BottomBar/>
            </div>

        </div>
    );
}


/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
'use client'
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
    const [lookBestState, setLookBestState] = useState<LookBestItem[]>([
        {
            state: false,
            title: "Notre méthodologie",
            content: <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Le "meilleur matelas" ultime n’aura pas le même aspect pour tout le monde, mais il y a quelques facteurs qui devraient rester absolument excellents quelle que soit la marque, les matériaux, la valeur et le soutien.
                <br></br><br></br>
                Un matelas fabriqué avec des matériaux de qualité garantit la durée de vie d'un matelas et crée un environnement de sommeil plus sûr, sans émissions toxiques.
                <br></br><br></br>
                Les matelas ayant une juste valeur ne sont pas nécessairement les moins chers, mais ils sont proposés à un prix raisonnable compte tenu de leur construction globale, de la qualité des matériaux et de leurs caractéristiques particulières.
                <br></br><br></br>
                Lorsqu’un matelas offre un soutien solide, cela ne signifie pas qu’il est ferme. Un lit de soutien est capable de soulever le corps dans un alignement neutre de la colonne vertébrale, évitant ainsi les douleurs.
            </p>
        },
        {
            state: false,
            title: "Fermeté et position de sommeil",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                <span className="font-bold">L'échelle de fermeté de l'industrie du matelas mesure les matelas sur une échelle de 1 à 10,</span> où 1 est le matelas le plus doux possible et 10 le plus ferme. Un 6,5 sur 10 est considéré comme un véritable matelas mi-ferme, offrant une sensation équilibrée de confort et de soutien. Lorsque vous décidez quelle fermeté vous convient le mieux, vous devrez tenir compte de votre position de sommeil préférée.
                <br></br><br></br>
                Les <span className="font-bold">dormeurs latéraux stricts,</span> ou ceux qui dorment principalement uniquement sur le côté, voudront un matelas plus doux entre 5 et 6,5 sur l’échelle de fermeté. Ils ont besoin d’une surface plus moelleuse pour épouser les hanches et les épaules, les zones sur lesquelles ces personnes exercent le plus de pression lorsqu’elles dorment dans cette position.
                <br></br><br></br>
                Les <span className="font-bold">dormeurs stricts sur le ventre</span> ne fonctionnent pas bien avec un matelas moelleux, car cela provoque un désalignement des hanches. Nous recommandons donc un matelas plus ferme, entre 7 et 10 sur l’échelle de fermeté. De cette façon, leurs hanches seront plus susceptibles de rester soulevées et alignées avec le reste de la colonne vertébrale tout au long de la nuit.
                <br></br><br></br>
                Les <span className="font-bold">dormeurs stricts sur le dos nécessitent</span> un équilibre entre confort et soutien, de sorte que les mousses souples remplissent la région lombaire et que la couche de service maintient les hanches soulevées. Pour cette raison, nous recommandons à ces acheteurs d’acquérir un matelas d’une fermeté moyenne, soit 6,5 sur 10 sur l’échelle de fermeté.
                <br></br><br></br>
                Les <span className="font-bold">dormeurs mixtes</span>, ou ceux qui changent de position de sommeil tout au long de la nuit, devront aborder les choses un peu différemment. Avant tout, ils voudront envisager un matelas réactif, ou un matelas qui les maintient soulevés et facilite le passage du sommeil sur le dos au sommeil sur le côté au sommeil sur le ventre. En ce qui concerne la fermeté, ils voudront trouver quelque chose qui s’adapte à leurs deux ou à la totalité de leurs positions de sommeil préférées.
            </p>
        },
        {
            state: false,
            title: "Types de matelas les plus courants",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Bien qu'il existe des centaines et des centaines de matelas différents sur le marché, notre équipe de Somnopolis aime les regrouper en quatre types.
                <br></br><br></br>
                Les <span className="font-bold">matelas à ressorts</span> mettent l’accent sur le service et utilisent des ressorts pour obtenir une sensation de soutien et de rebond. Les couches de confort sont plus fines sur les modèles à ressorts, ce sont donc généralement des lits plus fermes, idéaux pour dormir sur le ventre ou pour dormir ensemble.
                <br></br><br></br>
                Les <span className="font-bold">matelas en mousse à mémoire de forme</span> n’utilisent pas de ressorts pour le soutien, ils utilisent des mousses haute densité. Vous pouvez trouver des lits en mousse à mémoire de forme de toutes sortes de fermetés, mais généralement, leurs propriétés de contour et de soulagement de la pression sont plus utiles pour les dormeurs latéraux et ceux souffrant de douleurs articulaires.
                <br></br><br></br>
                Les <span className="font-bold">matelas hybrides</span> sont le meilleur des deux mondes et adoptent les caractéristiques des lits à ressorts et en mousse à mémoire de forme. À la base, il y a des ressorts pour le soutien, mais le dessus du lit est recouvert d'une mousse de confort plus moelleuse. La fermeté de ces matelas varie également selon le modèle, et leurs sensations varient considérablement.
                <br></br><br></br>
                Les <span className="font-bold">matelas en latex</span> utilisent de la mousse de latex Dunlop ou Talalay pour créer une surface de couchage naturellement rafraîchissante et réactive. De nombreux dormeurs sexy et acheteurs soucieux de l’environnement ont tendance à se tourner vers ce type.
            </p>
        }
    ]);
    const [faq, setFAQ] = useState<LookBestItem[]>([
        {
            state: true,
            title: "Combien dois-je dépenser pour un matelas ?",
            content: <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Bien que cela dépende de votre budget personnel, on considère généralement qu'un matelas de qualité est un matelas de moins de 1 000 $ pour une taille Queen. C'est donc votre limite de dépenses si vous cherchez à économiser de l'argent. Nous pensons que le Bear est un excellent matelas bon marché, et vous pouvez souvent obtenir le luxueux DreamCloud pour moins de 1 000 $ après réductions.
            </p>
        },
        {
            state: false,
            title: "Quel est le meilleur moment pour acheter un matelas ?",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                De nombreuses marques de literie lancent d’énormes ventes pendant les jours fériés fédéraux, alors gardez un œil sur les offres autour du President’s Day, du Memorial Day et même de la fête du Travail. Vous trouverez aussi naturellement une tonne d’offres autour du Black Friday. Consultez notre page de coupons et de codes promotionnels pour matelas toute l’année pour rester au courant des dernières réductions.
            </p>
        },
        {
            state: false,
            title: "À quelle fréquence dois-je remplacer mon matelas ?",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                En général, vous devriez remplacer votre vieux matelas tous les 7 à 10 ans. Toutefois, un matelas peut s'affaisser prématurément si vous ne le placez pas sur une base adéquate ou si vous ne le traitez pas correctement. Vous pouvez également prolonger la durée de vie d'un vieux matelas de quelques mois en y ajoutant un surmatelas.
                <br></br><br></br>
                Lors de l'achat d'un nouveau lit, il est important de prendre connaissance de sa garantie, qui peut également vous donner une bonne idée de sa durée de vie.
            </p>
        },
        {
            state: false,
            title: "Quel est le meilleur matelas pour le mal de dos ?",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                La plupart des personnes souffrant de maux de dos trouvent qu'un matelas ferme ou moyennement ferme leur convient le mieux. Ce type de lit vous aidera à maintenir votre colonne vertébrale droite pendant la nuit, ce qui peut soulager de nombreuses douleurs.
            </p>
        },
        {
            state: false,
            title: "Quel est le meilleur matelas pour les dormeurs sur le ventre ?",
            content: <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                De toutes les positions de sommeil, les personnes qui dorment sur le ventre sont celles qui ont le plus besoin de soutien. C'est pourquoi il est préférable d'opter pour un lit renforcé par des ressorts ensachés. Parmi les matelas de cette liste, le WinkBeds Plus et le Saatva pourraient être de bonnes options.
            </p>
        },
        {
            state: false,
            title: "Quel est le meilleur matelas pour les personnes qui dorment sur le côté ?",
            content: 
            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                Les dormeurs sur le côté sont à l'opposé des dormeurs sur le ventre. Bien qu'ils aient toujours besoin d'un certain soutien, ils ont tendance à préférer les matelas plus souples (ou moyennement fermes) qui offrent beaucoup de rembourrage pour leurs épaules et leurs hanches. La plupart des matelas de cette liste devraient convenir aux dormeurs latéraux, notamment le Sensoreve Elekctra.
            </p>
        },
    ]);
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
        rate: 4.4
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
        rate: 4.3
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
        rate: 4.4
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
        rate: 4.3
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
        rate: 4.4
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
        rate: 4.4
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
        rate: 4.2
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
        rate: 4.3
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
        rate: 4.4
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
        rate: 4.3
        }
    ]);
    const [compareData, setCompareData] = useState<any[]>([
        {
            model: "Sensoreve Elekctra Matelas",
            material: "Hybride",
            firmness: "Moyen-doux : 6/10",
            mark: "/img/product/Sensoreve.png",
            rate: 4.4,
            cooling: '✓',
            sleep_position: "Dos et côté",
            title: "Sensoreve Elekctra",
            sort: "Meilleur Matelas Global",
            content: "L’Sensoreve Elekctra a un niveau de soutien et un rebond moyens qui séduiront un large éventail de préférences de sommeil. Le Midnight fait également un travail exceptionnel en isolant les mouvements, ce qui en fait un excellent choix pour les couples qui se déplacent la nuit.",
            review: "/reviews",
            site: "https://sensoreve.com/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/couple.svg",
                    title: "Des couples",
                    content: "Ce lit offre une excellente isolation des mouvements, vous ne sentirez donc pas votre partenaire se retourner et se retourner la nuit."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs sur le dos légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "100 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Moyennement ferme : 6.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Sensorve propose une vaste sélection de matelas, et l'Elekctra se situe en plein milieu en termes de fermeté. Il a une sensation moyenne qui plaira à un large éventail de dormeurs, c'est pourquoi nous l'avons choisi comme notre meilleur choix global. L’un des domaines dans lesquels Sensoreve Elekctra excelle est sa réduction de pression. En vous allongeant dessus, vous obtiendrez un soulagement immédiat au niveau du bas du dos et des épaules, tout en bénéficiant d'un léger soulèvement grâce à la couche de support composée de ressorts emballés individuellement. \n\n Nous le savons parce que nous avons soumis le Sensoreve Elekctra à notre test de cartographie de pression, qui consiste à poser un tapis sur le matelas et à l'utiliser pour suivre les zones où la pression s'accumule le plus. Alors que nous étions allongés sur le tapis, notre carte indiquait principalement du bleu et du vert, indiquant une accumulation de basse pression. Il y avait un peu de jaune au niveau de la hanche, ce qui montre que le Sensoreve Elekctra n’est peut-être pas idéal pour les dormeurs latéraux souffrant de douleurs à la hanche. Mais comme la carte ne montre ni orange ni rouge, la plupart des dormeurs sur le dos et sur le côté devraient être à l’aise sur ce lit.",
            testersay: [
                "Ce que dit notre testeur :",
                "J’aime le fait que le Sensoreve Elekctra offre un support de bord solide – vous pouvez utiliser tout le lit ! Il offre également une excellente isolation des mouvements, ce qui en fait une option intéressante pour les couples. J’aime aussi beaucoup ce lit pour les dormeurs mixtes. Le matelas est gonflable, ce qui vous permet de vous retourner ou de changer de position facilement la nuit sans craindre de rester « coincé » dans le lit.",
                "– Bridget Chapman, ancienne rédactrice produit senior"
            ],
            customersay: "De nombreuses critiques mentionnent le Helix Sleep Quiz, qui dure 30 secondes et aide les acheteurs à trouver le meilleur modèle Helix pour leurs besoins. De nombreux acheteurs ont acheté le Sensoreve Elekctra à cause du quiz sur le sommeil, et beaucoup d’entre eux ont des critiques positives.",
            pros: [
                "Le transfert de mouvement fait référence à la quantité de mouvement qui se répercute sur un matelas. Nous le déterminons en laissant tomber une bille d'acier sur le lit et en mesurant ses vibrations avec un sismomètre. Le Sensoreve Elekctra a un faible transfert de mouvement, ce qui signifie que les partenaires ne se sentiront probablement pas bouger la nuit.",
                "Les dormeurs sur le dos devraient apprécier l’équilibre entre confort et soutien du Sensoreve Elekctra. Ils bénéficieront d’un certain rembourrage dans la région lombaire et les ressorts aideront à maintenir leur colonne vertébrale alignée de manière neutre.",
                "Les dormeurs latéraux nécessitent également un mélange de confort et de soutien. Ils devraient bénéficier d’un certain soulagement de la pression et d’un contour au niveau de leurs épaules et de leurs hanches. Ce sont les zones sur lesquelles ils exercent le plus de pression pendant leur sommeil. Pour un soulagement supplémentaire de la pression, nous recommandons le Sensoreve Elekctra."
            ],
            cons: "De toutes les positions de sommeil, les dormeurs sur le ventre ont besoin de plus de soutien, et ils ne l’obtiendront probablement pas sur le Sensoreve Elekctra.",
            reviewName: "Évaluation du matelas Sensoreve Elekctra"
        },
        {
            model: "Helix Midnight Matelas",
            material: "Hybride",
            firmness: "Mi-ferme : 6.5/10",
            mark: "/img/best/helix_best.jpg",
            rate: 4.1,
            cooling: '- -',
            sleep_position: "Dos et côté",
            title: "Helix Midnight",
            sort: "Meilleur matelas hybride",
            content: "L’Helix Midnight a un niveau de soutien et un rebond moyens qui séduiront un large éventail de préférences de sommeil. Le Midnight fait également un travail exceptionnel en isolant les mouvements, ce qui en fait un excellent choix pour les couples qui se déplacent la nuit.",
            review: "/reviews",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            expert_opinionState: false,
            recommendation: [
                {
                    img:"/img/best/couple.svg",
                    title: "Des couples",
                    content: "Ce lit offre une excellente isolation des mouvements, vous ne sentirez donc pas votre partenaire se retourner et se retourner la nuit."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs sur le dos légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "100 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Moyennement ferme : 6.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Helix propose une vaste sélection de matelas, et l'Midnight se situe en plein milieu en termes de fermeté. Il a une sensation moyenne qui plaira à un large éventail de dormeurs, c'est pourquoi nous l'avons choisi comme notre meilleur choix global. L’un des domaines dans lesquels Helix Midnight excelle est sa réduction de pression. En vous allongeant dessus, vous obtiendrez un soulagement immédiat au niveau du bas du dos et des épaules, tout en bénéficiant d'un léger soulèvement grâce à la couche de support composée de ressorts emballés individuellement. \n\n Nous le savons parce que nous avons soumis le Helix Midnight à notre test de cartographie de pression, qui consiste à poser un tapis sur le matelas et à l'utiliser pour suivre les zones où la pression s'accumule le plus. Alors que nous étions allongés sur le tapis, notre carte indiquait principalement du bleu et du vert, indiquant une accumulation de basse pression. Il y avait un peu de jaune au niveau de la hanche, ce qui montre que le Helix Midnight n’est peut-être pas idéal pour les dormeurs latéraux souffrant de douleurs à la hanche. Mais comme la carte ne montre ni orange ni rouge, la plupart des dormeurs sur le dos et sur le côté devraient être à l’aise sur ce lit.",
            testersay: [
                "Ce que dit notre testeur :",
                "J’aime le fait que l’Helix Midnight offre un support de bord solide – vous pouvez utiliser tout le lit ! Il offre également une excellente isolation des mouvements, ce qui en fait une option intéressante pour les couples. J’aime aussi beaucoup ce lit pour les dormeurs mixtes. Le matelas est gonflable, ce qui vous permet de vous retourner ou de changer de position facilement la nuit sans craindre de rester « coincé » dans le lit.",
                "– Bridget Chapman, ancienne rédactrice produit senior"
            ],
            customersay: "De nombreuses critiques mentionnent le Helix Sleep Quiz, qui dure 30 secondes et aide les acheteurs à trouver le meilleur modèle Helix pour leurs besoins. De nombreux acheteurs ont acheté le Helix Midnight à cause du quiz sur le sommeil, et beaucoup d’entre eux ont des critiques positives.",
            pros: [
                "Le transfert de mouvement fait référence à la quantité de mouvement qui se répercute sur un matelas. Nous le déterminons en laissant tomber une bille d'acier sur le lit et en mesurant ses vibrations avec un sismomètre. Le Helix Midnight a un faible transfert de mouvement, ce qui signifie que les partenaires ne se sentiront probablement pas bouger la nuit.",
                "Les dormeurs sur le dos devraient apprécier l’équilibre entre confort et soutien du Helix Midnight. Ils bénéficieront d’un certain rembourrage dans la région lombaire et les ressorts aideront à maintenir leur colonne vertébrale alignée de manière neutre.",
                "Les dormeurs latéraux nécessitent également un mélange de confort et de soutien. Ils devraient bénéficier d’un certain soulagement de la pression et d’un contour au niveau de leurs épaules et de leurs hanches. Ce sont les zones sur lesquelles ils exercent le plus de pression pendant leur sommeil. Pour un soulagement supplémentaire de la pression, nous recommandons le Helix Midnight."
            ],
            cons: "De toutes les positions de sommeil, les dormeurs sur le ventre ont besoin de plus de soutien, et ils ne l’obtiendront probablement pas sur le Helix Midnight.",
            reviewName: "Évaluation du matelas Helix Midnight"
        },
        {
            model: "Nectar Matelas",
            material: "Mousse",
            firmness: "Doux : 6/10",
            mark: "/img/best/nectar_best.jpg",
            rate: 4.3,
            cooling: '- -',
            sleep_position: "Dos et côté",
            title: "Nectar",
            sort: "Meilleur matelas pour dormeurs latéraux",
            content: "Le matelas Nectar original est un lit qui soulage la pression tout en offrant un bon soutien. Il est composé d’une épaisse couche de mousse à mémoire de forme gel, qui permet au dormeur de vraiment s’enfoncer dans sa surface.",
            review: "/reviews",
            site: "",
            productState: false,
            overviewState: false,
            recommendationState: false,
            recommendation: [
                {
                    img:"/img/best/joint.svg",
                    title: "Douleur articulaire",
                    content: "Ce lit est parfait pour toute personne souffrant de douleurs articulaires."
                },
                {
                    img:"/img/best/hip.svg",
                    title: "Douleur à la hanche",
                    content: "Ce lit est parfait pour toute personne souffrant de douleurs à la hanche."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs sur le dos légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Mousse"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "365 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Moyennement ferme : 6/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Tout au long de la nuit, dormir sur le côté exerce une forte pression sur deux zones, l’épaule et la hanche. Si votre matelas est trop ferme, cela peut entraîner un inconfort supplémentaire et même des douleurs inutiles dans ces zones. Pour éviter cela, vous avez besoin d’un matelas anti-pression comme le Nectar Original. \n\n En fait, le Nectar est tellement amorti qu’il a été parfaitement testé pour les douleurs aux épaules et aux hanches. Au cours de ces tests, nous avons également déterminé que ce matelas devait supporter les dormeurs latéraux de moins de 250 livres. Ces résultats ont tous été déterminés par notre carte de pression, qui montrait une pression très faible (uniquement bleue et verte) pendant le sommeil sur le dos et sur le côté.",
            testersay: [
                "Ce que dit notre testeur :",
                "Ce que je préfère à propos du Nectar Premier, c’est son excellent soulagement de la pression. Ce matelas mi-doux convient parfaitement aux dormeurs latéraux à la recherche d’un confort moelleux. Cela pourrait également convenir aux dormeurs souffrant de douleurs à l’épaule. Si vous dormez sur le dos et recherchez un nouveau matelas pour remplacer votre ancien Nectar Lush (dont la production a été abandonnée), j’envisagerais également le Premier.",
                "– Bridget Chapman, ancienne rédactrice produit senior"
            ],
            customersay: "Dans les commentaires, il y a quelques catégories de personnes qui semblent avoir le plus de succès avec le Nectar : les dormeurs sur le dos, les dormeurs sur le côté et les couples. Nous pensons que cela est probablement dû à la sensation équilibrée du Nectar, à son excellent soulagement de la pression et à ses bons résultats de transfert de mouvement.",
            pros: [
                "Nous avons constaté que la sensation moyenne du Nectar (6 sur 10 sur notre échelle de fermeté) devrait offrir une sensation équilibrée aux dormeurs sur le dos pesant moins de 250 livres.",
                "C’est l’un de nos matelas préférés sur le marché aujourd’hui. Vous pouvez actuellement trouver une reine pour moins de 700 $ après réductions.",
                "La société propose un essai généreux de 365 nuits et une garantie à vie pour protéger les achats de ses clients."
            ],
            cons: "Les dormeurs sur le ventre trouveront que le Nectar est beaucoup trop mou pour soutenir correctement leur position de sommeil tout au long de la nuit.",
            reviewName: "Examen du matelas Nectar"
        },
        {
            model: "DreamCloud Original Matelas",
            material: "Hybride",
            firmness: "Mi-ferme : 7/10",
            mark: "/img/best/dreamCloud_best.jpg",
            rate: 4.4,
            cooling: '✓',
            sleep_position: "Dos",
            title: "DreamCloud",
            sort: "Meilleur matelas pour les dormeurs mixtes.",
            content: "Le matelas DreamCloud est un matelas hybride de luxe composé de couches de mousse à mémoire de forme et de ressorts ensachés. Il offre une excellente combinaison de soutien et de soulagement de la pression que les dormeurs sur le dos apprécieront vraiment.",
            review: "/reviews",
            site: "",
            productState: false,
            overviewState: false,
            recommendationState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Dormeurs chauds",
                    content: "Si vous surchauffez souvent pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
                {
                    img:"/img/best/seniors.svg",
                    title: "Personnes âgées",
                    content: "Ce lit est parfait pour les personnes âgées."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dormir à l'arrière",
                    content: "Idéal pour les dormeurs sur le dos de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "365 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Ferme : 7/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Les dormeurs mixtes changent de position tout au long de la nuit, ils ont donc besoin d'un matelas réactif qui leur permette de se déplacer facilement. Un matelas trop enfoncé rend difficile le passage du couchage sur le ventre au couchage sur le côté et ainsi de suite. \n\n Dans notre laboratoire de matelas, le DreamCloud Original a obtenu des résultats exceptionnels. Nous l'avons trouvé très réactif, avec une sensation de rebond et d'être " sur le dessus ". Lorsque nous étions allongés sur le matelas, nous avons pu passer d'une position à l'autre sans nous sentir coincés dans le matériau. Nous attribuons cela à la construction hybride du DreamCloud, qui comprend une couche élastique de ressorts enveloppés individuellement.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Grâce à son soutien et à sa réactivité, je pense que le DreamCloud est un choix solide pour les dormeurs combinés, ainsi que pour les dormeurs sur le dos qui ont besoin d'un alignement neutre de la colonne vertébrale.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: `Le site de l'entreprise DreamCloud compte environ 8 700 avis, et un certain nombre d'acheteurs vérifiés parlent de la réactivité du matelas et du confort qu'il offre lorsqu'il s'agit de changer de position de sommeil. Dans un contexte différent, le mot "réactif" est également utilisé lorsqu'il s'agit de faire l'éloge de l'excellent service clientèle de DreamCloud.`,
            pros: [
                "Les politiques offertes par DreamCloud sont difficiles à battre, avec un essai extrêmement généreux de 365 nuits, ainsi qu'une garantie à vie.",
                "Grâce aux infusions de gel rafraîchissant dans la mousse et au grand nombre de spires dans sa construction, le DreamCloud offre beaucoup de place pour la circulation de l'air, de sorte qu'il dort bien et au frais."
            ],
            cons: "Sa grande hauteur lui confère une durabilité accrue, mais elle en fait également un lit en boîte plus lourd. Nous vous recommandons de vous faire aider par un ami pour le déballage et le déménagement.",
            reviewName: "Examen du matelas DreamCloud"
        },
        {
            model: "WinkBed Matelas",
            material: "Hybride",
            firmness: "Plusieurs options de fermeté",
            mark: "/img/best/winkBed_best.jpg",
            rate: 4.7,
            cooling: '✓',
            sleep_position: "Combinaison",
            title: "WinkBed",
            sort: "Meilleur matelas pour le mal de dos",
            content: "Le WinkBed est un matelas hybride qui se décline en trois niveaux de fermeté, de sorte que la plupart des dormeurs devraient trouver un modèle adapté à leurs besoins. Il pourrait également convenir aux couples, grâce à un soutien renforcé des bords.",
            review: "/reviews",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Les dormeurs chauds",
                    content: "Si vous avez souvent trop chaud pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
                {
                    img:"/img/best/back.svg",
                    title: "Mal de dos",
                    content: "Ce lit est idéal pour les personnes souffrant de douleurs dorsales."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs sur le dos légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Sommeil de l'estomac",
                    content: "Idéal pour les personnes de poids moyen qui dorment sur le ventre."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "120 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Plusieurs options de fermeté"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Le meilleur matelas pour le mal de dos est quelque peu subjectif, car les différents types de corps et de positions de sommeil trouveront un soulagement de différentes manières. Mais un aspect des meilleurs matelas pour le mal de dos que nos experts considèrent comme standard est le besoin d'un équilibre suffisant entre le confort et le soutien. Par exemple, les personnes qui dorment sur le côté ont besoin d'une sensation plus moelleuse pour amortir les épaules, mais elles ont également besoin d'une base de soutien pour soulever les hanches dans un alignement sain. \n\n Nous pensons que le WinkBed est idéal pour offrir une sensation équilibrée, quelle que soit la personne. Sa construction hybride permet une sensation plus douce sur le dessus et des tonnes de soutien de la colonne vertébrale au niveau de la base. Nous apprécions également le fait qu'il existe trois options de fermeté (Softer, Luxury Firm, Firmer), ainsi qu'un modèle légèrement plus cher appelé Plus, conçu pour les dormeurs plus lourds. \n\n Pour nous assurer que nous donnons aux acheteurs la meilleure recommandation possible pour leur mal de dos, nous avons soumis le WinkBed (comme nous le faisons pour des centaines d'autres matelas) à notre test de carte de pression. Sur le modèle Luxury Firm, l'option moyenne du WinkBed, nous avons vu tous les bleus et les verts (faible pression) en position de couchage sur le dos. Les mousses de confort souples devraient remplir la région lombaire et soulager ou prévenir les maux de dos de ces personnes.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Je suis fan de la sensation de rebond et de soutien du WinkBed Plus, qui convient particulièrement aux dormeurs mixtes et aux dormeurs sur le dos. Je recommanderais également le Plus aux couples, car il offre une bonne isolation des mouvements.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Le WinkBed est commercialisé comme une option idéale pour les maux de dos, et de nombreux commentaires de clients le confirment, quelle que soit la fermeté choisie.",
            pros: [
                "La plupart des personnes qui dorment sur le côté devraient trouver dans le modèle Softer un soulagement suffisant de la pression au niveau des hanches et des épaules, sans avoir à sacrifier un soutien adéquat.",
                "Grâce à ses grands ressorts, le WinkBed offre une sensation traditionnelle de ressort : rebondissement, réactivité et soutien.",
                "Les matelas hybrides et les matelas à ressorts conviennent souvent aux personnes qui ont le sommeil chaud, car les ressorts laissent beaucoup d'espace pour circuler dans le lit. Le WinkBed n'est pas différent."
            ],
            cons: "Il s'agit d'un matelas de luxe abordable, mais qui n'est pas encore tout à fait une option budgétaire.",
            reviewName: "Examen du matelas WinkBed"
        },
        {
            model: "Saatva Matelas",
            material: "Ressort intérieur",
            firmness: "Plusieurs options de fermeté",
            mark: "/img/best/saatva_best.jpg",
            rate: 4.8,
            cooling: '✓',
            sleep_position: "Dos et ventre",
            title: "Saatva Classic",
            sort: "Meilleur matelas de luxe abordable",
            content: `La construction à ressorts sur ressorts du Saatva offre une sensation de ressort classique. Il s'agit d'une bonne option pour les dormeurs combinés, qui veulent se sentir libres de changer de position et éviter de se sentir "coincés" dans le matelas. Il est disponible en trois niveaux de fermeté, de sorte que vous devriez pouvoir en trouver un qui corresponde à vos besoins.`,
            review: "/reviews",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Les dormeurs chauds",
                    content: "Si vous avez souvent trop chaud pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
                {
                    img:"/img/best/back.svg",
                    title: "Mal de dos",
                    content: "Ce lit est idéal pour les personnes souffrant de douleurs dorsales."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs sur le dos légers et de poids moyen."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Sommeil de l'estomac",
                    content: "Idéal pour les personnes de poids moyen qui dorment sur le ventre."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Ressort"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "365 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite en gants blancs",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Plusieurs options de fermeté"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Lorsque vous testez autant de lits que nous le faisons, il est difficile de choisir un favori. Mais le Saatva Classic est un matelas robuste et de haute qualité qui offre une sensation de luxe à un prix plus abordable. Il ne faisait donc aucun doute qu'il devait prendre la place de meilleur matelas de luxe à prix abordable. En termes de sensation, il s'agit d'un matelas à ressorts qui se décline en trois options de fermeté : Plush Soft, Luxury Firm et Firm. En testant le Luxury Firm, nous avons trouvé qu'il était rebondissant, réactif et qu'il offrait un bon soutien. Nous effectuons notre test de transfert de mouvement principalement pour les couples ; un faible transfert de mouvement montre qu'ils ne seront pas dérangés par les mouvements de l'autre pendant leur sommeil. Nous avons laissé tomber une bille d'acier de 10 livres sur la surface du matelas à des hauteurs de 4, 8 et 12 pouces. Nous avons obtenu des résultats élevés en matière de transfert de mouvement sur le Saatva, ce qui montre que même s'il n'est pas le meilleur pour les couples, il s'agit d'une option très réactive. Nous attribuons cela à sa construction bobine sur bobine, c'est-à-dire deux couches distinctes de ressorts. Cela indique que le Saatva est une option fantastique pour les dormeurs mixtes et pour le sexe, car le changement de position et l'activité sexuelle nécessitent tous deux de pouvoir bouger facilement.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Le Saatva classic est un matelas rebondissant, de haute qualité, durable et doté d'un excellent soutien des bords. Je pense que c'est une bonne option pour les dormeurs sur le dos et les dormeurs mixtes. J'apprécie le fait que le Saatva Classic soit disponible en trois niveaux de fermeté et deux hauteurs différentes, afin que les dormeurs puissent choisir le modèle qui répond le mieux à leurs besoins.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Il n'est pas surprenant que de nombreux commentaires de clients soulignent la livraison et le service à la clientèle de Saatva. Saatva est l'une des rares entreprises de matelas à offrir la livraison et l'installation gratuites des matelas. Ils enlèveront même votre ancien matelas et s'en débarrasseront.",
            pros: [
                "Parce qu'il est disponible en trois niveaux de fermeté très différents, le Saatva a un modèle pour les dormeurs sur le côté (Plush Soft), les dormeurs sur le dos (Luxury Firm) et les dormeurs sur le ventre (Firm). Les dormeurs mixtes devraient pouvoir changer facilement de position sur l'un ou l'autre de ces lits.",
                "Avec autant de serpentins dans sa construction, il y a beaucoup d'espace pour la circulation de l'air dans le Saatva, de sorte qu'il dort bien et au frais.",
                "Saatva offre un service de livraison en gants blancs gratuit avec chaque matelas. Cela signifie qu'une équipe de livraison apportera le lit (non compressé) dans la pièce de votre choix, l'installera et enlèvera votre ancien matelas sans frais supplémentaires."
            ],
            cons: "En raison de son caractère rebondissant, le Saatva a un transfert de mouvement assez élevé. Ce n'est probablement pas un problème pour la plupart des couples, mais si vous ou votre partenaire avez le sommeil léger, vous risquez de vous réveiller l'un l'autre avec vos mouvements. La plupart des meilleurs matelas à mémoire de forme offrent une meilleure isolation des mouvements.",
            reviewName: "Examen du matelas Saatva"
        },
        {
            model: "Brooklyn Bedding Aurora Luxe Matelas",
            material: "Hybride",
            firmness: "Plusieurs options de fermeté",
            mark: "/img/best/brooklyn_best.jpg",
            rate: 4.7,
            cooling: '✓',
            sleep_position: "Dos et côté",
            title: "Brooklyn Bedding Aurora Luxe",
            sort: "Meilleur matelas rafraîchissant",
            content: `Le matelas Aurora Luxe de Brooklyn Bedding est un matelas hybride de type "bed-in-a-box". Il est disponible en trois niveaux de fermeté et avec un Cloud Pillow Top en option, ce qui permet aux dormeurs de choisir le modèle le mieux adapté à leurs besoins. Il est également doté d'une technologie de refroidissement dans presque toutes les couches, ce qui signifie qu'il permet de dormir au frais !`,
            review: "/reviews",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Les dormeurs chauds",
                    content: "Si vous avez souvent trop chaud pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
                {
                    img:"/img/best/back.svg",
                    title: "Mal de dos",
                    content: "Ce lit est idéal pour les personnes souffrant de douleurs dorsales."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "120 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Plusieurs options de fermeté"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie de 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Lorsque nous posons la main sur le matelas Brooklyn Bedding Aurora Luxe, sa housse est littéralement fraîche au toucher. Mais les capacités de refroidissement du matelas ne s'arrêtent pas là. Lorsque nous nous allongeons, nous n'avons pas du tout l'impression que nous allons surchauffer. L'air circule abondamment entre les ressorts de la couche de soutien, et les mousses du lit contiennent des infusions de gel et de cuivre, qui absorbent la chaleur corporelle et la libèrent, au lieu de l'emprisonner dans les couches. Les personnes qui ont le sommeil chaud devraient être particulièrement à l'aise sur ce matelas.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Ce que je préfère dans ce lit, c'est son caractère rafraîchissant. Les dormeurs qui ont chaud et qui apprécient une sensation de douceur devraient apprécier le matériau à changement de phase et les ressorts ensachés respirants. J'apprécie également la douceur de ce lit. Il ressemble à beaucoup d'hybrides de luxe sur le marché actuellement, mais il est un peu moins cher que ces lits.",
                "– Bridget Chapman, ancienne rédactrice produit senior"
            ],
            customersay: "De nombreux couples font remarquer à quel point l'Aurora Luxe est rafraîchissant, malgré la chaleur corporelle supplémentaire dégagée par les deux personnes qui dorment ensemble. De nombreux commentaires recommandent aux acheteurs d'opter pour l'oreiller Cloud Pillow Top, qui offre un rembourrage et un rafraîchissement supplémentaires.",
            pros: [
                "Bien que l'Aurora Luxe soit un matelas hybride de luxe, Brooklyn Bedding possède sa propre usine, de sorte que vous pouvez souvent trouver ce lit à un prix avantageux.",
                "L'Aurora Luxe est disponible en différentes fermetés, de sorte que la plupart des dormeurs devraient trouver une version adaptée à leurs besoins. Nous avons testé le modèle Medium et nous l'avons préféré pour les dormeurs sur le dos et sur le côté, car ses couches de confort offrent un bon amorti et soulagent les douleurs articulaires.",
                "Les couches de confort isolent bien les mouvements, mais le matelas reste suffisamment réactif pour les rapports sexuels. Il convient toutefois de noter que le soutien des bords de l'Aurora Luxe n'est pas des plus solides."
            ],
            cons: "Les personnes plus corpulentes qui pèsent plus de 250 livres ont tout intérêt à consulter notre liste des meilleurs matelas pour personnes corpulentes.",
            reviewName: "Examen du matelas Brooklyn Bedding Aurora Luxe"
        },
        {
            model: "Bear Elite Hybrid Matelas",
            material: "Hybride",
            firmness: "Plusieurs options de fermeté",
            mark: "/img/best/bear_best.jpg",
            rate: 4.6,
            cooling: '✓',
            sleep_position: "Dos et ventre",
            title: "Bear Elite Hybrid",
            sort: "Meilleur matelas pour l'allègement de la pression",
            content: "Le Bear Elite Hybrid est le modèle « ultra-luxueux » de Bear avec une sensation de matelas traditionnelle, ainsi qu'une technologie avancée de refroidissement et de soutien. Il est disponible en trois niveaux de fermeté différents : Doux, Moyen et Ferme.",
            review: "/reviews",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Les dormeurs chauds",
                    content: "Si vous avez souvent trop chaud pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs sur le dos légers et de poids moyen."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Sommeil de l'estomac",
                    content: "Idéal pour les personnes de poids moyen qui dorment sur le ventre."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "120 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Plusieurs options de fermeté"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Les matelas anti-escarres sont des options fantastiques pour les personnes souffrant de douleurs articulaires ou souhaitant un amortissement maximal. Nous leur recommandons d'opter pour des matelas plus souples, dotés de couches de confort plus épaisses et plus efficaces, qui soulagent la pression sur les zones sensibles. De nombreux dormeurs latéraux se tournent également vers les matelas souples, car les couches de confort plus épaisses réduisent l'accumulation de pression et allègent le poids exercé sur les hanches et les épaules. Le Bear Elite Hybrid offre trois options de fermeté différentes, mais le modèle Soft est notre matelas préféré pour le soulagement de la pression sur le marché. \n\nLors de notre test d'allègement de la pression, nous avons constaté que les couches de mousse à mémoire de forme nous aidaient à rester amortis, mais que les deux couches de ressorts nous apportaient le soutien nécessaire pour un alignement neutre de la colonne vertébrale. Lors de notre test de pression, le Bear Elite Hybrid s'est avéré être une option solide pour les douleurs au dos, aux épaules et aux hanches ; nous n'avons pas vu d'indications d'accumulation de pression dans ces zones.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Je recommanderais le Bear Elite Hybrid à la plupart des personnes qui dorment sur le côté. Je pense qu'ils obtiendront l'allègement de la pression et les contours nécessaires au niveau des épaules et des hanches sur ce lit. Mais s'ils veulent encore plus de rembourrage, j'opterais pour le modèle Soft.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "De nombreux clients soulignent la capacité du Bear Elite Hybrid à être moelleux tout en offrant un bon soutien, ce qui en fait une excellente option pour les douleurs articulaires et dorsales.",
            pros: [
                "Le Bear Elite Hybrid a une housse en Celliant, un matériau rafraîchissant qui peut favoriser la circulation sanguine et la récupération (les études à ce sujet sont encore peu nombreuses, mais prometteuses). Bien que nous n'ayons pas vérifié cela nous-mêmes (sauf pour le refroidissement), ces facteurs font du Bear un choix populaire parmi ceux qui ont un style de vie actif.",
                "Les personnes souffrant de douleurs articulaires devraient se sentir bercées par les deux couches de mousse à mémoire de forme du modèle Soft.",
                "Le Bear Elite Hybrid isole bien les mouvements, mais reste suffisamment réactif pour les rapports sexuels. Il offre un sommeil plutôt agréable et obtient même un score décent en matière de soutien des bords. Cela signifie qu'il s'agit d'une option solide pour de nombreux couples, qui devraient être en mesure de s'étendre et d'utiliser toute la surface du matelas."
            ],
            cons: "Même si le Bear Elite Hybrid bénéficie du soutien de ses ressorts, nous recommandons toujours le modèle Firm plutôt que le modèle Soft pour les dormeurs sur le ventre.",
            reviewName: "Examen du matelas Bear Elite Hybrid"
        },
        {
            model: "DreamCloud Premier Matelas",
            material: "Hybride",
            firmness: "Plusieurs options de fermeté",
            mark: "/img/best/dreamCloud.jpg",
            rate: 4.6,
            cooling: '- -',
            sleep_position: "Dos et côté",
            title: "DreamCloud Premier",
            sort: "Meilleur matelas pour les dormeurs sur le dos",
            content: `Le DreamCloud Premier est un matelas hybride de type "bed-in-a-box", très luxueux au toucher, qui offre un soutien ferme et un soulagement souple de la pression. C'est un excellent choix pour les dormeurs sur le dos et les dormeurs mixtes, qui devraient apprécier sa réactivité.`,
            review: "/reviews",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Les dormeurs chauds",
                    content: "Si vous avez souvent trop chaud pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs sur le dos légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "365 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Ferme : 7/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Lorsqu'il s'agit de trouver un bon matelas pour le sommeil dorsal, nous pensons que la chose la plus importante à retenir est qu'il doit y avoir une sensation d'équilibre. Le matelas doit être suffisamment amortissant pour soulager la tension au niveau des hanches, mais il doit également offrir le soutien nécessaire pour maintenir les hanches soulevées et correctement alignées avec le reste de la colonne vertébrale. \n\n Le DreamCloud Premier excelle dans cet équilibre, et c'est pourquoi il est notre matelas préféré pour les dormeurs sur le dos. Lors de nos tests, nous avons constaté qu'il fonctionnait particulièrement bien pour les dormeurs sur le dos pesant moins de 250 livres. Pour ces personnes, il devrait avoir une sensation légèrement plus ferme que la moyenne (environ 7 sur 10 sur notre échelle de fermeté). Notre test de pression a également révélé une faible pression au niveau des hanches pour les personnes dormant sur le dos, ce qui nous indique que le DreamCloud Premier est un bon choix pour les personnes souffrant de maux de dos.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Ce que je préfère à propos du Nectar Premier, c’est son excellent soulagement de la pression. Ce matelas mi-doux convient parfaitement aux dormeurs latéraux à la recherche d’un confort moelleux. Cela pourrait également convenir aux dormeurs souffrant de douleurs à l’épaule. Si vous dormez sur le dos et recherchez un nouveau matelas pour remplacer votre ancien Nectar Lush (dont la production a été abandonnée), j’envisagerais également le Premier.",
                "– Bridget Chapman, ancienne rédactrice produit senior"
            ],
            customersay: "Sur le site web de DreamCloud, le Premier a plus de 5 500 avis et une note moyenne de 4,5 étoiles sur 5.",
            pros: [
                "Le DreamCloud Premier a une structure hybride composée de mousse dans sa partie supérieure et de ressorts robustes dans sa partie inférieure. Cela permet au matelas de dormir au frais, car les ressorts laissent beaucoup d'espace pour la circulation de l'air.",
                "Le Premier, l'un des modèles les plus luxueux de DreamCloud, présente plusieurs caractéristiques haut de gamme, dont une housse en doux mélange de cachemire.",
                "Les personnes de poids moyen qui dorment sur le ventre devraient bénéficier du soutien dont elles ont besoin pour garder leurs hanches soulevées et alignées avec leurs épaules, ce qui est essentiel pour prévenir les maux de dos."
            ],
            cons: "Lors de nos tests, nous avons constaté que ce lit n'offrait pas un soutien adéquat pour les personnes pesant plus de 250 livres. Pour des lits super-durables qui peuvent supporter un poids supplémentaire, jetez un coup d'œil à notre tour d'horizon des meilleurs matelas pour les personnes corpulentes.",
            reviewName: "Examen du matelas DreamCloud Premier"
        },
        {
            model: "Nolah Evolution Hybrid Matelas",
            material: "Hybride",
            firmness: "Ferme : 7.5/10",
            mark: "/img/best/nolah_best.jpg",
            rate: 4.4,
            cooling: '- -',
            sleep_position: "Dos et ventre",
            title: "Nolah Evolution",
            sort: "Meilleur matelas hybride",
            content: "Le Nolah Evolution offre un bon soulagement de la pression et un bon modelage du corps. C'est un excellent choix pour les dormeurs sur le côté, et les dormeurs sur le dos qui aiment un matelas plus doux l'apprécieront également. Le dessus d'oreiller moelleux est également un atout pour les douleurs d'épaules ou de hanches.",
            review: "/reviews",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs sur le dos légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers et de poids moyen."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Matériel",
                    content: "Hybride"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Période d'essai",
                    content: "120 nuits",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "shipping",
                    content: "Livraison gratuite",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Plusieurs options de fermeté",
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "warranty",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "En tant que matelas hybride, le Nolah Evolution combine différentes mousses avec une couche inférieure de ressorts pour un mélange de confort et de soutien. Il est disponible en trois niveaux de fermeté différents : Plush, Luxury Firm et Firm. Nous avons testé le Luxury Firm et l'avons trouvé un peu plus doux, avec une note de 6 sur 10 sur notre échelle de fermeté (à titre indicatif, la fermeté moyenne est de 6,5 sur 10). Nous pensons qu'il pourrait convenir à une grande variété de dormeurs. Et comme tout bon hybride, il dispose de plusieurs fonctions de refroidissement.",
            testersay: [
                "Ce que dit notre testeur :",
                "Ce que je préfère à propos du Nectar Premier, c’est son excellent soulagement de la pression. Ce matelas mi-doux convient parfaitement aux dormeurs latéraux à la recherche d’un confort moelleux. Cela pourrait également convenir aux dormeurs souffrant de douleurs à l’épaule. Si vous dormez sur le dos et recherchez un nouveau matelas pour remplacer votre ancien Nectar Lush (dont la production a été abandonnée), j’envisagerais également le Premier.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Customers praise the customer service at Nolah, saying that the company representatives were patient and accommodating. Many folks had good experiences with returns and refunds as well.",
            pros: [
                "Comme il existe trois fermetés différentes, nous pensons qu'il y en a pour tous les goûts. Les personnes qui dorment sur le côté et sur le dos seront probablement plus à l'aise sur le modèle Plush ou Luxury Firm, en fonction de leurs préférences en matière de fermeté, et le modèle Firm peut convenir aux personnes qui dorment sur le ventre.",
                "Les mousses exclusives du matelas sont conçues pour être une alternative plus fraîche à la mousse à mémoire de forme, et les ressorts permettent à beaucoup d’air de circuler à travers la construction du lit. Cela signifie que le Nolah Evolution devrait être un bon choix pour la plupart des dormeurs sexy.",
                "During testing, we found that the Nolah Evolution had decent motion isolation, which muffles smaller movements. Also, couples can stretch out because of the bed’s exceptional edge support. At eight inches tall, the Nolah Evolution’s springs are wrapped in Edge-Tech support foam, which holds up the sides of the bed, as well as the middle."
            ],
            cons: "Les dormeurs sur le ventre trouveront que le Nectar est beaucoup trop mou pour soutenir correctement leur position de sommeil tout au long de la nuit.",
            reviewName: "Examen du matelas Nolah Evolution"
        },


        // {
        //     model: "Helix Dawn Matelas",
        //     material: "Hybride",
        //     firmness: "Plusieurs options de fermeté",
        //     mark: "/img/best/nolah_best.jpg",
        //     rate: 4,
        //     cooling: '- -',
        //     sleep_position: "Dos et côté"
        // },
        // {
        //     model: "Titan Plus",
        //     material: "Hybride",
        //     firmness: "Ferme : 7.5/10",
        //     mark: "/img/best/titan_best.jpg",
        //     rate: 4,
        //     cooling: '- -',
        //     sleep_position: "Dos et ventre"
        // },
        // {
        //     model: "Leesa Original Matelas",
        //     material: "Mousse",
        //     firmness: "Doux : 5.5/10",
        //     mark: "/img/best/lessa_best.jpg",
        //     rate: 4,
        //     cooling: '- -',
        //     sleep_position: "Combinaison"
        // },
        // {
        //     model: "Briiklyn Bedding Plank Firm Matelas",
        //     material: "Mousse",
        //     firmness: "Plusieurs options de fermeté",
        //     mark: "/img/best/brooklyn_plank_best.jpg",
        //     rate: 4,
        //     cooling: '✓',
        //     sleep_position: "Dos et ventre"
        // },
        // {
        //     model: "Saatva Matelas",
        //     material: "Hybride",
        //     firmness: "Mi-ferme : 7/10",
        //     mark: "/img/best/birch_best.jpg",
        //     rate: 4,
        //     cooling: '✓',
        //     sleep_position: "Dos et ventre"
        // }
    ]);
    const [starState, setStarState] = useState<string>('flex');
    interface ComponentProps {
        index: number;
        setLookBestState: React.Dispatch<React.SetStateAction<LookBestItem[]>>;
    }
    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-start w-full">
                <div className="w-full h-[700px] 2xl:h-[40vw] xl:h-[650px] lg:h-[600px] md:h-[500px] sm:h-[650px] bg-[#F1F1F1] flex justify-center items-start mb-20">
                    <div className="flex flex-col items-start justify-between font-marcellus pl-[5%] w-full">
                        <Link href='/' className={`${styles.manropeFont} text-[#87806A] sm:text-[16px] text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] font-bold text-left w-[100%] pt-[5%] text-wrap`}>
                            Accueil et meilleur matelas
                        </Link>
                        <div className="w-[90%] flex flex-col justify-start items-start pb-[5%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[48px] xl:text-[44px] md:text-[32px] sm:text-[32px] text-[24px] font-bold text-wrap w-[90%] py-[2%] pl-[5%] text-center`}>
                                Matelas les mieux notés 2024
                                <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] sm:text-[14px] text-[12px] md:text-[16px] font-bold 
                                text-left text-wrap w-[100%]`}>
                                    de Logan Block | Mis à jour en 5/4
                                </p>
                            </div>
                            <div className="w-full flex justify-start items-start pl-[5%]">
                                <span >
                                    <img src="/img/Reviewer.jpg" alt="évaluateur"  className="lg:w-[4vw] lg:h-[4vw] md:w-[5vw] md:h-[5vw] w-[34px] rounded-[50px] border-[2px] border-[#F7E4D6]"/>
                                </span>
                                <p className={`${styles.robotoFont} 2xl:text-[20px] sm:text-[14px] md:text-[18px] text-[14px] ml-[3%] text-left flex items-center lg:h-[4vw] md:h-[5vw] h-[34px]`}>Écrit par<br></br>
                                    Logan Block, évaluateur de matelas
                                </p>
                            </div>
                            <div className="w-full flex flex-col justify-start items-start pt-[1%] pl-[5%] gap-[3%] md:flex-row">
                                <div className="flex justify-start items-start w-[100%] md:w-[50%] my-[20px] md:my-[0px]">
                                    <span >
                                        <img src="/img/method.png" alt="évaluateur"  className="lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[32px] mt-[5px]"/>
                                    </span>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[36px] text-[20px] lg:text-[28px] md:text-[21px] font-bold text-wrap w-[90%] pl-[5%]`}>
                                        Notre méthodologie
                                        <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] md:text-[14px] lg:text-[16px] font-bold 
                                        text-left text-wrap w-[100%] sm:text-[16px] text-[12px]`}>
                                            Nos coachs certifiés en sciences du sommeil ont examiné plus de 300 matelas dans notre laboratoire, testant chacun d'eux sur ses matériaux, son confort, son refroidissement, son soutien et d'autres catégories.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-start items-start w-[90%] md:w-[50%]">
                                    <span >
                                        <img src="/img/check.png" alt="évaluateur"  className="lg:w-[40px] lg:h-[40px] md:w-[30px] w-[28px] md:h-[30px] mt-[5px]"/>
                                    </span>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[36px] text-[20px] lg:text-[28px] md:text-[21px] font-bold text-wrap w-[90%] pl-[5%]`}>
                                        Je viens de mettre à jour
                                        <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] md:text-[14px] lg:text-[16px] sm:text-[16px] text-[12px] font-bold 
                                        text-left text-wrap w-[100%]`}>
                                            Nous avons récemment réexaminé nos choix pour les meilleurs matelas de l’année et ajouté des informations supplémentaires de nos testeurs en laboratoire. Si un lit figure sur cette liste, vous pouvez être sûr que nous l’avons personnellement testé et lui avons obtenu une note de 4 sur 5 ou plus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] xl:text-[20px] lg:text-[18px] md:text-[16px]
                text-left text-wrap w-[80%] mb-20`}>
                    Vous souhaitez donc trouver le matelas le mieux adapté à vos besoins, mais vous ne savez pas par où commencer. Non seulement il existe des choix dans les établissements physiques, mais il en existe des centaines d’autres dans le monde des marques numériques. Alors, quels sont les meilleurs matelas de 2024 ?
                    <p>&nbsp;</p>
                    Gardez à l’esprit que le mot « meilleur » est subjectif. Différents dormeurs nécessitent des caractéristiques différentes d’un lit, donc ce qui fonctionne pour une personne peut ne pas fonctionner pour une autre. C’est pourquoi nous avons gardé à l’esprit un large éventail de catégories lors de la présentation de nos meilleurs matelas. Nous espérons que la plupart des gens trouveront non seulement le « meilleur » matelas, mais aussi le matelas qui leur convient le mieux.
                    <p>&nbsp;</p>
                    Pour sélectionner les meilleurs matelas, nous soumettons les modèles à une série de tests afin de déterminer leurs performances dans certains domaines tels que le refroidissement, la réactivité, etc. Puisqu’il n’existe pas de matelas unique, nous avons essayé de choisir des lits de différentes résistances. Certains sont plus rafraîchissants que d’autres, certains soulagent mieux la douleur. Mais une chose est sûre : tous ces lits sont des options de qualité, et tous ces lits ont été minutieusement testés par l'équipe Somnopolis.
                </div>
                <div className="block text-center w-full mb-[20px] pl-[10%] lg:flex">
                    <div className="w-full lg:w-[65%]">
                        {/* <div className="flex flex-col w-[90%] items-start justify-center bg-[#5ca9e8] rounded-[30px] py-[20px] px-[5%] mb-20">
                            <p className={`${styles.manropeFont} text-center md:text-left text-3xl font-bold w-full pb-[20px]`}>&nbsp; Meilleur matelas en 2024 : &nbsp;</p>
                            
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
                        </div> */}
                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[20px] lg:text-[26px] md:text-[22px] text-wrap text-left pb-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Ce que nous recherchons dans les meilleurs matelas
                                </p>
                                {
                                    lookBestState.map((item, index) => 
                                        <div className={`${styles.rubikFont} text-[#1A1D20] text-[2vw] lg:text-[22px] text-left text-wrap w-[100%] pt-5`}>
                                            <div className="font-bold hover:cursor-pointer text-[20px]" onClick={()=>{
                                                console.log(index, 'pressed!!!');
                                                setLookBestState((bestItem) => {
                                                    const updatedItems = bestItem.map((item, idx) => {
                                                      if (idx === index) {
                                                        return {
                                                          ...item,
                                                          state: !item.state
                                                        };
                                                      }
                                                      return item;
                                                    });
                                                    console.log(updatedItems[index].title);
                                                    console.log(updatedItems[index].state);
                                                    return updatedItems;
                                                });
                                            }}>
                                                &nbsp;&nbsp;&nbsp;{item.state === false ? '+' : '-'}&nbsp;&nbsp;&nbsp; {item.title}
                                            </div>
                                            {item.state && item.content}
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                        <p className={`${styles.manropeFont} text-3xl font-bold pb-2 mb-10 text-left border-b-2 border-[#324983] w-[90%]`}>
                            Comparez les meilleurs matelas en 2024 : &nbsp;
                        </p>
                        <div className="overflow-scroll overflow-y-scroll mt-2 w-[90%] mb-20">
                            <table className="min-w-[1500px] divide-y divide-gray-200 border border-grey-200  bg-grey-100 mb-[20px]">
                            <thead>
                                <tr className="overflow-x-scroll">
                                    <th className="px-2 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                    {
                                        compareData.map((item:any, index:any) =>
                                            <th className="px-3 py-3 bg-gray-50 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border border-gray-200 w-[500px]">
                                                <img
                                                    src={item.mark} // Replace with the path to your image file
                                                    alt="Sample"
                                                    className="w-full h-full"
                                                />
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody className={`${styles.rubikFont} divide-y divide-gray-200`}>
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200 w-[800pxs]">Modale</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.model}
                                        </td>
                                    )}
                                </tr>
                                <tr className="w-[500px]">
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200 w-[300px]">Rating</td>
                                    {
                                    compareData.map((item:any, index:any) => 

                                        <td className="px-2 py-2 border border-gray-200 text-center">
                                            <div className="filter invert-85 sepia-22 saturate-857 hue-rotate-336 brightness-95 contrast-109 flex flex-row flex-nowrap justify-center items-center my-[10px] text-[#FDCC80]">
                                                <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                <span><img src="/img/star.svg" alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                <span><img src={`${item.rate > 4.7 ? "/img/star_half.svg" : "/img/star_empty.svg"}`} alt="My SVG Image" className="w-[20px] h-full" /></span>
                                                {/* <span className={`${styles.robotoFont} text-[18pt] md:text-[2vw] lg:text-[1vw] text-[#1A1D20]`}>{item.rate}/5.0</span> */}
                                            </div>
                                        </td>
                                    )
                                }
                                </tr>
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Firmness</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.firmness}
                                        </td>
                                    )}
                                </tr>
                                
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Material</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.material}
                                        </td>
                                    )}
                                </tr>
                                
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Cooling</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.cooling}
                                        </td>
                                    )}
                                </tr>
                                
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Sleep Position</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.sleep_position}
                                        </td>
                                    )}
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        
                        {
                            compareData.map((item:any, index:any) =>
                                <div className="w-[90%] mt-[50px]">
                                    <p className={`${styles.manropeFont} text-3xl font-bold pb-2 mb-10 text-left border-b-2 border-[#324983] w-[90%]`}>
                                        {item.title} - {item.sort}
                                    </p>
                                    <div className="border-2 border-[#E9E9EA] pt-[50px] border-b-1 px-[3%]">
                                        <p className={`${styles.manropeFont} text-2xl font-bold w-full pb-[20px] text-left`}>&nbsp; {item.model} &nbsp;
                                        </p>
                                        <div className="block md:flex justify-around items-start text-left w-full pl-[10px] pr-[10px] pt-[2%] bg-white pb-[20px] rounded-[10px]">
                                            <div className="w-2/9 flex flex-col justify-start items-center">
                                                <Image
                                                    src={item.mark} // Replace with the path to your image file
                                                    alt="Sample"
                                                    width={200} // Set the width of the image
                                                    height={50} // Set the height of the image
                                                    className="hidden md:block rounded-[10px] w-[80%] md:w-full mb-5"
                                                />
                                            </div>
                                            <div className="flex flex-col pl-[5%] pr-[5%] w-full md:w-[56%]">
                                                <p className={`${styles.manropeFont} font-medium text-[#151160] text-[12px] md:text-[16px] pl-[10px]`}>
                                                    {item.content}
                                                </p>
                                                <a href={item.review} className={`${styles.manropeFont} font-medium text-[#a19dfb] text-[12px] md:text-[16px] pl-[10px] underline pt-2`}>
                                                    Vérifier les avis
                                                </a>
                                            </div>
                                            <div className = "flex flex-col justify-center items-center w-2/9 mr-[10px]">
                                                <div className={starState}>
                                                    <div className="filter invert-85 sepia-22 saturate-857 hue-rotate-336 brightness-95 contrast-109 flex flex-row flex-nowrap items-center mb-[10px] text-[#FDCC80]">
                                                        <span className={`${styles.robotoFont} text-[18pt] md:text-[2vw] lg:text-[1vw] text-[#1A1D20]`}>{item.rate}/5.0</span>
                                                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                        <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                        <span ><img src={`${mattressData[0].rate>4.7 ? "/img/star_half.svg" : "/img/star_empty.svg"}`} alt="My SVG Image"  className="w-[30px] h-full"/></span>						
                                                    </div>
                                                </div>
                                                <a href={item.site} className={`${styles.manropeFont} bg-[#FFFFFF] hover:bg-[#F1F1F1] text-blue font-bold px-4 rounded-[10px] w-full py-4 mt-[20px] md:mt-5 border border-[#F7e4D6] text-center`}>
                                                    Visit Site
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-2 border-[#E9E9EA] border-t-0"> 
                                        <div className={`${styles.manropeFont} text-xl font-bold w-full py-[10px] text-center bg-[#f7fafc] border-b-4 border-[#84c6f2] hover:text-[#82a5f9] hover:cursor-pointer`}
                                            onClick={() => {
                                                setCompareData((bestItem) => {
                                                    const updatedItems = bestItem.map((ite, idex) => {
                                                      if (idex === index) {
                                                        return {
                                                          ...ite,
                                                          overviewState: !ite.overviewState
                                                        };
                                                      }
                                                      return item;
                                                    });
                                                    console.log(updatedItems[index].title);
                                                    console.log(updatedItems[index].state);
                                                    return updatedItems;
                                                })
                                            }}
                                        >
                                            Detalle del producto
                                        </div>
                                        {
                                            item.overviewState && <div className="block md:flex md:flex-wrap justify-center items-start text-center ml-[7%] gap-[5%] px-[10px] py-[5%] bg-white rounded-[10px] w-[90%]">
                                                {
                                                    item.overview.map((it:any, idx:any) =>
                                                        <div key={idx} className="flex flex-row justify-start items-center w-[100%] md:w-[30%] my-[5%]">
                                                            <Image
                                                                src={it.img} // Replace with the path to your image file
                                                                alt="Sample"
                                                                width={100} // Set the width of the image
                                                                height={100} // Set the height of the image
                                                                className="w-[65px]"
                                                            />
                                                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                                {it.title}
                                                                <p className={`${styles.rubikFont} text-[#69747F] text-[12px] lg:text-[14px] font-bold 
                                                                text-left text-wrap w-[100%]`}>
                                                                    {it.content}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {/* <div className="flex flex-row justify-start items-start w-[30%]">
                                                    <Image
                                                        src="/img/material.png" // Replace with the path to your image file
                                                        alt="Sample"
                                                        width={100} // Set the width of the image
                                                        height={100} // Set the height of the image
                                                        className="w-[65px]"
                                                    />
                                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                        Matériel
                                                        <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                                        text-left text-wrap w-[100%]`}>
                                                            Il s’agit d’un matelas hybride, ce qui signifie qu’il combine des mousses souples et des ressorts robustes pour un équilibre entre confort et soutien.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row justify-start items-start w-[30%]">
                                                    <Image
                                                        src="/img/firmness.svg" // Replace with the path to your image file
                                                        alt="Sample"
                                                        width={100} // Set the width of the image
                                                        height={100} // Set the height of the image
                                                        className="w-[65px]"
                                                    />
                                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                        Fermeté
                                                        <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                                        text-left text-wrap w-[100%]`}>
                                                            Nous avons attribué au Sensoreve Elekctra une note de 6 sur 10 sur l’échelle de fermeté, où 1 est le plus doux et 10 le plus ferme. Cela signifie qu’il est légèrement plus doux que la norme de l’industrie (6,5 sur 10).
                                                        </p>
                                                    </div>
                                                </div> */}
                                            </div>
                                        }
                                    </div>
                                    <div className="border-2 border-[#E9E9EA] border-t-0">
                                        <div className={`${styles.manropeFont} text-xl font-bold w-full py-[10px] text-center bg-[#f7fafc] border-b-4 border-[#84c6f2] hover:text-[#82a5f9] hover:cursor-pointer`}
                                            onClick={() => {
                                                setCompareData((bestItem) => {
                                                    const updatedItems = bestItem.map((ite, idex) => {
                                                      if (idex === index) {
                                                        return {
                                                          ...ite,
                                                          recommendationState: !ite.recommendationState
                                                        };
                                                      }
                                                      return item;
                                                    });
                                                    console.log(updatedItems[index].title);
                                                    console.log(updatedItems[index].state);
                                                    return updatedItems;
                                                })
                                            }}
                                        >
                                            Nuestra recomendación
                                        </div>
                                        {
                                            item.recommendationState && <div className="block justify-start items-start text-center ml-[7%] gap-[5%] px-[10px] py-[5%] bg-white rounded-[10px] w-[90%]">
                                                <p className={`${styles.manropeFont} text-[#1A1D20] text-[12px] lg:text-[14px] font-bold text-wrap text-left`}>Nous recommandons ce matelas pour les types de dormeurs suivants :</p>
                                                {
                                                    item.recommendation.map((it:any, idx:any) =>
                                                        <div key={idx} className="flex flex-row justify-start items-center w-[100%] my-[5%]">
                                                            <Image
                                                                src={it.img} // Replace with the path to your image file
                                                                alt="Sample"
                                                                width={100} // Set the width of the image
                                                                height={100} // Set the height of the image
                                                                className="w-[65px]"
                                                            />
                                                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                                {it.title}
                                                                <p className={`${styles.rubikFont} text-[#69747F] text-[12px] lg:text-[14px] font-bold 
                                                                text-left text-wrap w-[100%]`}>
                                                                    {it.content}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {/* <div className="flex flex-row justify-start items-start w-[30%]">
                                                    <Image
                                                        src="/img/material.png" // Replace with the path to your image file
                                                        alt="Sample"
                                                        width={100} // Set the width of the image
                                                        height={100} // Set the height of the image
                                                        className="w-[65px]"
                                                    />
                                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                        Matériel
                                                        <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                                        text-left text-wrap w-[100%]`}>
                                                            Il s’agit d’un matelas hybride, ce qui signifie qu’il combine des mousses souples et des ressorts robustes pour un équilibre entre confort et soutien.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row justify-start items-start w-[30%]">
                                                    <Image
                                                        src="/img/firmness.svg" // Replace with the path to your image file
                                                        alt="Sample"
                                                        width={100} // Set the width of the image
                                                        height={100} // Set the height of the image
                                                        className="w-[65px]"
                                                    />
                                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                                        Fermeté
                                                        <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                                        text-left text-wrap w-[100%]`}>
                                                            Nous avons attribué au Sensoreve Elekctra une note de 6 sur 10 sur l’échelle de fermeté, où 1 est le plus doux et 10 le plus ferme. Cela signifie qu’il est légèrement plus doux que la norme de l’industrie (6,5 sur 10).
                                                        </p>
                                                    </div>
                                                </div> */}
                                            </div>
                                        }
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Opinion d'expert</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[12px] lg:text-[16px] 
                                        text-left text-wrap w-[100%]`}>
                                            {/* Sensorve propose une vaste sélection de matelas, et l'Elekctra se situe en plein milieu en termes de fermeté. Il a une sensation moyenne qui plaira à un large éventail de dormeurs, c'est pourquoi nous l'avons choisi comme notre meilleur choix global. L’un des domaines dans lesquels Sensoreve Elekctra excelle est sa réduction de pression. En vous allongeant dessus, vous obtiendrez un soulagement immédiat au niveau du bas du dos et des épaules, tout en bénéficiant d'un léger soulèvement grâce à la couche de support composée de ressorts emballés individuellement.
                                            <br></br><br></br>
                                            Nous le savons parce que nous avons soumis le Sensoreve Elekctra à notre test de cartographie de pression, qui consiste à poser un tapis sur le matelas et à l'utiliser pour suivre les zones où la pression s'accumule le plus. Alors que nous étions allongés sur le tapis, notre carte indiquait principalement du bleu et du vert, indiquant une accumulation de basse pression. Il y avait un peu de jaune au niveau de la hanche, ce qui montre que le Sensoreve Elekctra n’est peut-être pas idéal pour les dormeurs latéraux souffrant de douleurs à la hanche. Mais comme la carte ne montre ni orange ni rouge, la plupart des dormeurs sur le dos et sur le côté devraient être à l’aise sur ce lit. */}
                                            {/* {item.expert_opinion} */}
                                        </p>
                                        {item.expert_opinion.split('\n').map((line:any, idx:any) => (
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap w-[100%]`} key={idx}>
                                                {line}
                                                <br></br>
                                            </p>
                                        ))}
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                        <span className="font-bold">{item.testersay[0]}</span> 
                                        <span className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                        text-left text-wrap w-[100%]`}>
                                            &nbsp;{item.testersay[1]} –&nbsp;
                                        </span>
                                        <span className="font-bold">{item.testersay[2]}</span>
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Ce que disent les clients</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                        text-left text-wrap w-[100%]`}>
                                            {item.customersay}
                                        </p>
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Points forts du {item.model}</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        {
                                            item.pros.map((ite:any, idex:any) =>
                                                <div key={idex} className="flex flex-row w-full items-start justify-left">
                                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                                    text-left px-5`}>
                                                        • &nbsp;
                                                    </p>
                                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                                    text-left text-wrap`}>
                                                        {ite}
                                                    </p>
                                                </div>
                                            )
                                        }
                                        {/* <div className="flex flex-row w-full items-start justify-left">
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left px-5`}>
                                                • &nbsp;
                                            </p>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap`}>
                                                Le transfert de mouvement fait référence à la quantité de mouvement qui se répercute sur un matelas. Nous le déterminons en laissant tomber une bille d'acier sur le lit et en mesurant ses vibrations avec un sismomètre. Le Sensoreve Elekctra a un faible transfert de mouvement, ce qui signifie que les partenaires ne se sentiront probablement pas bouger la nuit.
                                            </p>
                                        </div>
                                        <div className="flex flex-row w-full items-start justify-left">
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left px-5`}>
                                                • &nbsp;
                                            </p>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap`}>
                                                Les dormeurs sur le dos devraient apprécier l’équilibre entre confort et soutien du Sensoreve Elekctra. Ils bénéficieront d’un certain rembourrage dans la région lombaire et les ressorts aideront à maintenir leur colonne vertébrale alignée de manière neutre.
                                            </p>
                                        </div>
                                        <div className="flex flex-row w-full items-start justify-left">
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left px-5`}>
                                                • &nbsp;
                                            </p>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap`}>
                                                Les dormeurs latéraux nécessitent également un mélange de confort et de soutien. Ils devraient bénéficier d’un certain soulagement de la pression et d’un contour au niveau de leurs épaules et de leurs hanches. Ce sont les zones sur lesquelles ils exercent le plus de pression pendant leur sommeil. Pour un soulagement supplémentaire de la pression, nous recommandons le Sensoreve Elekctra.
                                            </p>
                                        </div> */}
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Ce qu’il faut garder à l’esprit à propos du {item.model}</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        <div className="flex flex-row w-full items-start justify-left">
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left px-5`}>
                                                • &nbsp;
                                            </p>
                                            <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                            text-left text-wrap`}>
                                                {item.cons}
                                            </p>
                                        </div>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap pt-5`}>
                                            Pour en savoir plus, consultez notre avis complet sur le {item.reviewName} ou cliquez ici pour obtenir notre meilleure offre. Vous trouverez d'autres options dans notre tour d'horizon des meilleurs matelas pour les dormeurs mixtes.
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                        {/* <div className="w-[90%]">
                            <div className="border-2 border-[#E9E9EA] pt-[50px] border-b-1 px-[3%]">
                                <p className={`${styles.manropeFont} text-2xl font-bold w-full pb-[20px] text-left`}>&nbsp; Matelas Sensoreve Elekctra &nbsp;
                                </p>
                                <div className="block md:flex justify-around items-start text-left w-full pl-[10px] pr-[10px] pt-[2%] bg-white pb-[20px] rounded-[10px]">
                                    <div className="w-2/9 flex flex-col justify-start items-center">
                                        <Image
                                            src={mattressData[0].img} // Replace with the path to your image file
                                            alt="Sample"
                                            width={200} // Set the width of the image
                                            height={50} // Set the height of the image
                                            className="hidden md:block rounded-[10px] w-[80%] md:w-full mb-5"
                                        />
                                    </div>
                                    <div className="flex flex-col pl-[5%] pr-[5%] w-full md:w-[56%]">
                                        <p className={`${styles.manropeFont} font-medium text-[#151160] text-[12px] md:text-[18px] pl-[10px]`}>
                                            L’Helix Midnight a un niveau de soutien et un rebond moyens qui séduiront un large éventail de préférences de sommeil. Le Midnight fait également un travail exceptionnel en isolant les mouvements, ce qui en fait un excellent choix pour les couples qui se déplacent la nuit.
                                        </p>
                                        <p className={`${styles.manropeFont} font-medium text-[#a19dfb] text-[12px] md:text-[18px] pl-[10px] underline pt-2`}>
                                            Vérifier les avis
                                        </p>
                                    </div>
                                    <div className = "flex flex-col justify-center items-center w-2/9 mr-[10px]">
                                        <div className={starState}>
                                            <div className="filter invert-85 sepia-22 saturate-857 hue-rotate-336 brightness-95 contrast-109 flex flex-row flex-nowrap items-center mb-[10px] text-[#FDCC80]">
                                                <span className={`${styles.robotoFont} text-[18pt] md:text-[2vw] lg:text-[1vw] text-[#1A1D20]`}>{mattressData[0].rate}/5.0</span>
                                                <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                <span ><img src="/img/star.svg" alt="My SVG Image"  className="w-[30px] h-full"/></span>
                                                <span ><img src={`${mattressData[0].rate>4.7 ? "/img/star_half.svg" : "/img/star_empty.svg"}`} alt="My SVG Image"  className="w-[30px] h-full"/></span>						
                                            </div>
                                        </div>
                                        <button className={`${styles.manropeFont} bg-[#FFFFFF] hover:bg-[#F1F1F1] text-blue font-bold px-4 rounded-[10px] w-full py-4 mt-[20px] md:mt-5 border border-[#F7e4D6]`}>
                                            Visit Site
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 border-[#E9E9EA] border-t-0">
                                <div className={`${styles.manropeFont} text-xl font-bold w-full py-[10px] text-center bg-[#f7fafc] border-b-4 border-[#84c6f2] hover:text-[#FDCC80]`}>Aperçu du matelas</div>
                                <div className="block md:flex justify-center items-start text-center ml-[12.5%] gap-[5%] pl-[10px] pr-[10px] pt-[2%] bg-white pb-[20px] rounded-[10px] w-[70%]">
                                    <div className="flex flex-row justify-start items-start w-[50%]">
                                        <Image
                                            src="/img/material.png" // Replace with the path to your image file
                                            alt="Sample"
                                            width={100} // Set the width of the image
                                            height={100} // Set the height of the image
                                            className="w-[65px]"
                                        />
                                        <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                            Matériel
                                            <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                            text-left text-wrap w-[100%]`}>
                                                Il s’agit d’un matelas hybride, ce qui signifie qu’il combine des mousses souples et des ressorts robustes pour un équilibre entre confort et soutien.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-start w-[50%]">
                                        <Image
                                            src="/img/firmness.svg" // Replace with the path to your image file
                                            alt="Sample"
                                            width={100} // Set the width of the image
                                            height={100} // Set the height of the image
                                            className="w-[65px]"
                                        />
                                        <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                            Fermeté
                                            <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                            text-left text-wrap w-[100%]`}>
                                                Nous avons attribué au Sensoreve Elekctra une note de 6 sur 10 sur l’échelle de fermeté, où 1 est le plus doux et 10 le plus ferme. Cela signifie qu’il est légèrement plus doux que la norme de l’industrie (6,5 sur 10).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block md:flex justify-center items-start text-center ml-[12.5%] gap-[5%] pl-[10px] pr-[10px] pt-[2%] bg-white pb-[20px] rounded-[10px] w-[70%]">
                                    <div className="flex flex-row justify-start items-start w-[50%]">
                                        <Image
                                            src="/img/price.svg" // Replace with the path to your image file
                                            alt="Sample"
                                            width={100} // Set the width of the image
                                            height={100} // Set the height of the image
                                            className="w-[65px]"
                                        />
                                        <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                            Prix
                                            <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                            text-left text-wrap w-[100%]`}>
                                                539,99 € - 749,99 € (avant toute remise)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-start w-[50%]">
                                        <Image
                                            src="/img/size.png" // Replace with the path to your image file
                                            alt="Sample"
                                            width={100} // Set the width of the image
                                            height={100} // Set the height of the image
                                            className="w-[65px]"
                                        />
                                        <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] font-bold text-wrap pl-[5%] text-left`}>
                                            Taille
                                            <p className={`${styles.rubikFont} text-[#69747F] text-[2vw] lg:text-[14px] font-bold 
                                            text-left text-wrap w-[100%]`}>
                                                Twin, twin XL, full, queen, king.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Opinion d'expert</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Sensorve propose une vaste sélection de matelas, et l'Elekctra se situe en plein milieu en termes de fermeté. Il a une sensation moyenne qui plaira à un large éventail de dormeurs, c'est pourquoi nous l'avons choisi comme notre meilleur choix global. L’un des domaines dans lesquels Sensoreve Elekctra excelle est sa réduction de pression. En vous allongeant dessus, vous obtiendrez un soulagement immédiat au niveau du bas du dos et des épaules, tout en bénéficiant d'un léger soulèvement grâce à la couche de support composée de ressorts emballés individuellement.
                                    <br></br><br></br>
                                    Nous le savons parce que nous avons soumis le Sensoreve Elekctra à notre test de cartographie de pression, qui consiste à poser un tapis sur le matelas et à l'utiliser pour suivre les zones où la pression s'accumule le plus. Alors que nous étions allongés sur le tapis, notre carte indiquait principalement du bleu et du vert, indiquant une accumulation de basse pression. Il y avait un peu de jaune au niveau de la hanche, ce qui montre que le Sensoreve Elekctra n’est peut-être pas idéal pour les dormeurs latéraux souffrant de douleurs à la hanche. Mais comme la carte ne montre ni orange ni rouge, la plupart des dormeurs sur le dos et sur le côté devraient être à l’aise sur ce lit.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                <span className="font-bold">Ce que dit notre testeur :</span> 
                                <span className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    &nbsp;“I love that the Sensoreve Elekctra offers solid edge support — you can use the whole bed! It also has great motion isolation, which makes it a nice option for couples. I also really like this bed for combination sleepers. The mattress is bouncy, making it easy for you to roll over or switch positions at night without worrying that you’ll get ‘stuck’ in the bed.” –&nbsp;
                                </span>
                                <span className="font-bold">Bridget Chapman, former senior product editor</span>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Ce que disent les clients</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    De nombreuses critiques mentionnent le Helix Sleep Quiz, qui dure 30 secondes et aide les acheteurs à trouver le meilleur modèle Helix pour leurs besoins. De nombreux acheteurs ont acheté le Sensoreve Elekctra à cause du quiz sur le sommeil, et beaucoup d’entre eux ont des critiques positives.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Points forts du matelas Sensoreve Elekctra</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Le transfert de mouvement fait référence à la quantité de mouvement qui se répercute sur un matelas. Nous le déterminons en laissant tomber une bille d'acier sur le lit et en mesurant ses vibrations avec un sismomètre. Le Sensoreve Elekctra a un faible transfert de mouvement, ce qui signifie que les partenaires ne se sentiront probablement pas bouger la nuit.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs sur le dos devraient apprécier l’équilibre entre confort et soutien du Sensoreve Elekctra. Ils bénéficieront d’un certain rembourrage dans la région lombaire et les ressorts aideront à maintenir leur colonne vertébrale alignée de manière neutre.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs latéraux nécessitent également un mélange de confort et de soutien. Ils devraient bénéficier d’un certain soulagement de la pression et d’un contour au niveau de leurs épaules et de leurs hanches. Ce sont les zones sur lesquelles ils exercent le plus de pression pendant leur sommeil. Pour un soulagement supplémentaire de la pression, nous recommandons le Sensoreve Elekctra.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Ce qu’il faut garder à l’esprit à propos du matelas Sensoreve Elekctra</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        De toutes les positions de sommeil, les dormeurs sur le ventre ont besoin de plus de soutien, et ils ne l’obtiendront probablement pas sur le Sensoreve Elekctra.
                                    </p>
                                </div>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap pt-5`}>
                                    Learn more in our full <a className="text-blue-900 underline">Sensoreve Elekctra mattress review</a> or click here for our best deal.  Find additional options in our roundup of the <a className="text-blue-900 underline">best online mattresses</a>.
                                </p>
                            </div>
                        </div> */}

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Comment trouver le meilleur matelas pour vous
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Si vous n’avez pas trouvé le matelas que vous souhaitiez ci-dessus, vous pourriez bénéficier de l’un de nos guides de matelas plus spécifiques. Vous trouverez ci-dessous quelques-unes de nos recommandations basées sur le type de corps, l’âge, la position de sommeil, la gestion de la douleur, etc. Vous pouvez également consulter notre guide sur la façon de choisir un matelas qui répond à vos besoins, et si vous vous sentez toujours dépassé, pensez à répondre à notre quiz sur le matelas pour une recommandation personnalisée.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Position de sommeil</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs latéraux réussissent mieux sur des matelas souples à moyennement fermes qui amortissent les points de pression au niveau de leurs hanches et de leurs épaules.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs sur le dos ont besoin d’un équilibre approprié entre soulagement de la pression et soutien pour maintenir leur colonne vertébrale en ligne droite, et ils le trouveront généralement dans un matelas moyennement ferme.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs sur le ventre ont besoin d’un lit ferme qui maintient leurs hanches alignées avec leurs épaules.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs mixtes préfèrent généralement les matelas sur lesquels il est facile de se déplacer et de changer de position. Nous recommandons à ces dormeurs de s’en tenir à un matelas gonflable avec une sensation moyennement ferme.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Construction du matelas</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas à ressorts reposent sur des systèmes de support à ressorts. Ils ont souvent une sensation ferme et rebondissante et fonctionnent bien pour les dormeurs sur le ventre, sur le dos et mixtes.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas hybrides utilisent un mélange de mousse et de support à ressorts, et leurs sensations varient considérablement.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas en mousse ne comprennent aucun support de ressorts. Ils utilisent des couches de mousse pour amortir et soutenir le dormeur. Les matelas en mousse à mémoire de forme sont un type populaire de matelas entièrement en mousse qui offre beaucoup de contour du corps et un soulagement de la pression.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas en latex sont souvent fabriqués à partir de mousse de latex écologique Dunlop ou Talalay. Ces lits sont naturellement rafraîchissants et gonflables. Les dormeurs mixtes et les personnes lourdes aiment souvent ces lits.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les matelas pneumatiques utilisent l’air pour soutenir le dormeur pendant la nuit.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Points forts du matelas bouleau naturel</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Choisir une surface de sommeil qui aide à atténuer la douleur est particulièrement important pour les dormeurs qui souffrent de douleur chronique. Nous avons sélectionné des options de matelas qui pourraient soulager plusieurs types de douleur différents.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                <p className="font-bold">Comment votre matelas peut-il soulager la douleur ?</p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%]`}>
                                    Un matelas offrant un soulagement et un soutien importants de la pression est essentiel pour soulager la douleur. Sans soulagement de la pression, vous pouvez vous réveiller raide et endolori – ce que nous savons que vous ne voulez pas. En plus du soulagement autour de vos points de pression, votre corps a besoin de soutien pour parvenir à l’alignement de la colonne vertébrale.
                                    <br></br><br></br>
                                    Voici les zones qui ont le plus besoin de soutien en fonction de votre position de sommeil préférée :
                                </p>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap`}>
                                        <span className="font-bold">Dormeurs sur le dos :</span>&nbsp;bas du dos et épaules
                                    </div>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap`}>
                                        <span className="font-bold">Dormeurs latéraux :</span>&nbsp;épaules et hanches
                                    </div>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap`}>
                                        <span className="font-bold">Dormeurs sur le ventre : </span>&nbsp;Hanches
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Ce qu’il faut garder à l’esprit à propos du matelas naturel en bouleau</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Si vous souhaitez un matelas durable et de qualité, consultez les meilleurs matelas bon marché.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Dormeurs chauds / Technologie de refroidissement</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Si vous recherchez un matelas qui dort au frais, nous vous recommandons d’opter pour un matelas en latex, hybride ou à ressorts. Ces lits ont tendance à favoriser la circulation de l’air, ce qui est important pour maintenir une température basse la nuit.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Type de corps et poids corporel</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] bg-[#eef5f9] py-8 rounded-lg px-4 mb-3`}>
                                    Nous reconnaissons que les gens sont de toutes formes et de toutes tailles, et que les personnes de toutes tailles méritent un matelas adapté à leur morphologie. Nous utilisons les catégories de poids léger, moyen et lourd pour catégoriser plus facilement les dormeurs en fonction des performances des matelas pour leur type de corps, car la plupart des matelas sont conçus pour le groupe que nous appelons "moyen" (130 à 250 livres).
                                </p>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs de moins de 130 livres trouveront souvent des matelas plus fermes que les dormeurs de poids moyen. Nous recommandons à ces dormeurs de jeter un œil aux meilleurs matelas moelleux pour être sûrs qu’ils obtiennent le soulagement de la pression dont ils ont besoin.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les dormeurs de plus de 250 livres ont besoin d’un lit offrant un soutien supplémentaire pour éviter l’affaissement prématuré du matelas. La durabilité globale et le support des bords sont généralement des préoccupations importantes.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les enfants ont un corps qui grandit et évolue rapidement et qui a des besoins spécifiques en matière de sommeil.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les seniors (plus de 65 ans) préfèrent généralement les matelas à sensation plus traditionnels qui offrent mobilité et soutien, mais qui restent doux pour les articulations sensibles.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        Les adolescents continuent de grandir et ont également des besoins spécifiques en matière de sommeil.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Comment nous avons choisi le meilleur matelas de 2024
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Lorsque nous testons un nouveau matelas, nous nous allongeons (sans surprise) dessus pour vous donner notre avis personnel sur sa sensation, mais nous ne vous demandons pas de nous croire sur parole. Une fois que nous avons essayé le matelas nous-mêmes, nous le testons avec une carte de pression, un sismomètre et d’autres méthodes pour vous donner des mesures objectives du transfert de mouvement, du soulagement de la pression, du rebond et des capacités de soutien des bords d’un lit. Nous évaluons également nos matelas de test couche par couche pour examiner leurs matériaux et leur technologie de refroidissement. Cela nous aide à garantir que chaque marque tient ses promesses marketing.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">L'allègement de la pression</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    L'un de nos tests les plus importants concerne la décompression. Le soulagement de la pression est une mesure de la répartition uniforme de votre poids sur un matelas. Un matelas avec un excellent soulagement de la pression amortit les points de pression au niveau des épaules, des hanches et du bas du dos pour vous empêcher de vous réveiller raide et endolori le matin.
                                </p>
                                <img src="/img/lucid_mattress.jpg" alt="Lucid Mattress" className="text-center w-[60%] my-5 ml-[20%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Pour tester la décompression, nous utilisons un test de carte de pression. Un évaluateur s'allonge sur un tapis à pression (comme celui que vous voyez ci-dessus) dans plusieurs positions de sommeil différentes. Le tapis enregistre la pression exercée et crée une « carte de pression » qui montre les zones de basse pression en bleu, de moyenne basse pression en vert, de moyenne pression en jaune, de moyenne haute pression en orange et de haute pression en rouge. Ces résultats nous permettent de savoir dans quelle mesure un matelas soulagera la pression dans chacune des principales positions de sommeil. Jetez un œil à un exemple de résultat de carte de pression ci-dessous.
                                </p>
                                <img src="/img/sleep_presure.jpg" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Un aperçu d'une carte de pression illustrant une bonne décompression.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Rebond</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Notre test de rebond nous permet de connaître la réactivité d'un matelas. Ceci est important pour les dormeurs mixtes qui ont besoin d’un lit réactif, facile à déplacer et à changer de position.
                                    <br></br><br></br>
                                    Notre test de rebond est assez simple, il suffit de déposer une bille d'acier de 10 livres sur le matelas et de mesurer la hauteur à laquelle elle rebondit. Plus la balle rebondit haut, plus le matelas est réactif. Les matelas en latex ont tendance à très bien réussir ce test. Jetez un œil à nous effectuant le test de rebond ci-dessous.
                                </p>
                                <img src="/img/bounce.jpg" alt="Lucid Mattress" className="text-center w-[60%] my-5 ml-[20%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Test du rebond.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Transfert de mouvement</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Un autre test important est notre test de transfert de mouvement. Le transfert de mouvement est une mesure de la quantité de mouvement qui se déplace d’un côté à l’autre du matelas. Si vous dormez avec un partenaire ou un animal de compagnie, cela permet de déterminer si vous vous sentirez ou non dérangé par le fait qu'ils se retournent et se retournent la nuit. Nous utilisons un sismomètre et une bille d'acier (comme vous le voyez ci-dessous) pour mesurer le transfert de mouvement.
                                </p>
                                <img src="/img/transfer.jpg" alt="Lucid Mattress" className="text-center w-[60%] my-5 ml-[20%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Exécution d'un test de transfert de mouvement.
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Au cours de ce test, nous laissons tomber la bille d'acier sur le matelas à des hauteurs de quatre pouces, huit pouces et 12 pouces pour imiter divers mouvements, allant du lancer et du retournement au saut sur le lit. Le sismomètre enregistre tout ce mouvement et crée un graphique comme celui ci-dessous. Un graphique avec de petites lignes nous indique qu’un matelas isole bien les mouvements. Les grandes lignes nous indiquent que vous vous sentirez probablement dérangé par un partenaire agité sur un certain matelas.
                                </p>
                                <img src="/img/transfer_compare.jpg" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Un exemple de résultats de tests de transfert de mouvement élevé.
                                </p>
                                <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                    <p className="font-bold">Pourquoi l'isolation des mouvements est importante</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%]`}>
                                        Si vous dormez seul, vous ne vous souciez peut-être pas des capacités d’isolation des mouvements de votre matelas. Cependant, les personnes qui dorment avec un partenaire, un enfant ou un animal de compagnie peuvent apprécier un matelas qui minimise le transfert de mouvement. Les matelas dotés d’une bonne isolation des mouvements peuvent vous aider à éviter d’être dérangé par leurs mouvements tout au long de la nuit.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Prise en charge périphérique</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Notre test de support de bord nous permet de savoir si vous pouvez dormir (ou vous asseoir) complètement sur le bord d'un matelas sans avoir l'impression qu'il pourrait s'effondrer. Les matelas à ressorts ont souvent des bords très solides. Le soutien des bords est important car des bords solides peuvent donner l’impression que votre matelas est un peu plus grand puisque vous pouvez vous étendre sur toute sa surface. Un soutien solide des bords empêche également l’affaissement prématuré au milieu de votre matelas, car vous êtes en mesure de répartir uniformément votre poids.
                                </p>
                                <img src="/img/edge_test.jpg" alt="Lucid Mattress" className="text-center w-[60%] my-5 ml-[20%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] pt-5`}>
                                    Notre test de support de bord est très simple : nous nous asseyons et nous allongeons tout au long du bord du lit.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Matériaux</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Après tous ces tests, nous ouvrons la housse de chaque matelas pour évaluer les matériaux à l’intérieur. Nous passons en revue chaque couche de mousse pour vous expliquer le fonctionnement du lit. Nous recherchons également des éléments tels que des housses hypoallergéniques, des matériaux respectueux de l'environnement, des mousses certifiées CertiPUR-US® et une technologie de refroidissement.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[14px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Valeur et politiques de l'entreprise</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Une fois que nous avons testé la sensation, les matériaux et les performances d’un matelas, notre équipe évalue le prix de chaque lit, la garantie du matelas, les politiques d’expédition, la période d’essai de sommeil et les équipes du service client dans le contexte de l’industrie du matelas en général. C’est ainsi que nous décidons si vous obtenez une bonne affaire sur votre nouveau lit. Tous nos évaluateurs ont une grande connaissance des matelas à partager et s’efforcent de proposer des critiques informatives et honnêtes de tous les lits qu’ils testent. À partir de là, nous établissons une note globale pour chaque matelas.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Acheter un matelas en ligne ou en magasin ?
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Vous avez peut-être remarqué que tous les matelas que nous avons recommandés ci-dessus sont disponibles en ligne. C’est parce que l’équipe Somnopolis préfère acheter des matelas dans l’espace numérique. Mais que vous deviez acheter un matelas en ligne ou en magasin dépend vraiment de vos préférences. Pour en savoir plus sur ce qui fonctionne pour vous, consultez notreguide d’achat de matelas en magasin ou en ligne.
                                    <br></br><br></br>
                                    Nous préférons acheter en ligne car les détaillants de matelas en ligne réduisent les frais généraux tels que les vendeurs et les salles d'exposition, ce qui signifie que vous pouvez normalement économiser plus d'argent en choisissant un matelas en ligne. Nous trouvons également plus pratique d’acheter en ligne et de faire expédier un lit à ma porte. Quelle que soit votre décision, nous vous recommandons de consulter notre page de coupons de matelas et de codes promotionnels avant l’achat pour vous assurer d’obtenir une bonne affaire.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-8 rounded-lg`}>
                                <p className="font-bold">Achat de matelas en magasin ou en ligne</p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] my-3 mb-5`}>
                                    Chez Somnopolis, nous préférons acheter nos matelas en ligne. Voici quelques raisons pour lesquelles :
                                </p>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5 font-bold`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        <span className="font-bold">Commodité :</span>&nbsp;les matelas en ligne sont expédiés directement à votre porte en un seul clic
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5 font-bold`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        <span className="font-bold">Économie d’argent :</span>&nbsp;les détaillants en ligne n’ont pas besoin de vendeurs ni de salles d’exposition, leurs matelas sont donc généralement moins chers. Ils ont également tendance à proposer davantage d’offres et de coupons.
                                    </p>
                                </div>
                                <div className="flex flex-row w-full items-start justify-left">
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left px-5 font-bold`}>
                                        • &nbsp;
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap`}>
                                        <span className="font-bold">Périodes d’essai :</span>&nbsp;comme vous ne pouvez pas essayer le matelas en magasin, les détaillants en ligne proposent généralement des périodes d’essai généreuses. Cela signifie que vous pouvez réellement dormir sur le matelas au lieu de simplement vous allonger dessus pendant quelques instants. Si vous décidez que vous ne l’aimez pas, vous pouvez généralement le retourner ou l’échanger.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[20px] lg:text-[26px] md:text-[22px] text-wrap text-left py-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    FAQ
                                </p>
                                {
                                    faq.map((item, index) => 
                                        <div className={`${styles.rubikFont} text-[#1A1D20] text-[2vw] lg:text-[22px] text-left text-wrap w-[100%] pt-5`}>
                                            <div className="font-bold hover:cursor-pointer text-[20px]" onClick={()=>{
                                                console.log(index, 'pressed!!!');
                                                setFAQ((bestItem) => {
                                                    const updatedItems = bestItem.map((item, idx) => {
                                                      if (idx === index) {
                                                        return {
                                                          ...item,
                                                          state: !item.state
                                                        };
                                                      }
                                                      return item;
                                                    });
                                                    console.log(updatedItems[index].title);
                                                    console.log(updatedItems[index].state);
                                                    return updatedItems;
                                                });
                                            }}>
                                                &nbsp;&nbsp;&nbsp;{item.state === false ? '+' : '-'}&nbsp;&nbsp;&nbsp; {item.title}
                                            </div>
                                            {item.state && item.content}
                                        </div>
                                    )
                                }
                            </div>
                            {/* <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    FAQ
                                </p>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-5`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Combien dois-je dépenser pour un matelas ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        Bien que cela dépende de votre budget individuel, un matelas de valeur est généralement considéré comme un matelas inférieur à 1 000 $ pour un lit queen-size. Fixez-le donc comme limite de dépenses si vous cherchez à économiser de l’argent. Nous pensons que le Bear est un excellent matelas bon marché, et vous pouvez souvent obtenir le luxe DreamCloud pour moins de 1 000 $ après réductions.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Quel est le meilleur moment pour acheter un matelas ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        De nombreuses marques de literie lancent d’énormes ventes pendant les jours fériés fédéraux, alors gardez un œil sur les offres autour du President’s Day, du Memorial Day et même de la fête du Travail. Vous trouverez aussi naturellement une tonne d’offres autour du Black Friday. Consultez notre page de coupons et de codes promotionnels pour matelas toute l’année pour rester au courant des dernières réductions.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   À quelle fréquence dois-je remplacer mon matelas ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        En général, vous devez remplacer votre ancien matelas tous les 7 à 10 ans. Cependant, un matelas peut s’affaisser prématurément si vous ne le placez pas sur une base adéquate ou si vous ne le traitez pas brutalement. Vous pouvez également prolonger la durée de vie d’un vieux matelas de quelques mois en ajoutant un surmatelas.
                                        <br></br><br></br>
                                        Chaque fois que vous achetez un nouveau lit, il est important de jeter un œil à sa garantie, qui peut également vous donner une bonne idée de sa durée.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Quel est le meilleur matelas pour les maux de dos ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        La plupart des personnes souffrant de maux de dos trouvent qu’un matelas ferme ou moyennement ferme leur convient le mieux. Ce type de lit vous aidera à garder votre colonne vertébrale droite pendant la nuit, ce qui peut contribuer à soulager beaucoup de douleurs.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Quel est le meilleur matelas pour dormir sur le ventre ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        De toutes les positions de sommeil, celles qui dorment sur le ventre nécessitent le plus de soutien. Dans cet esprit, il est préférable pour eux d’opter pour un lit renforcé par des ressorts ensachés. S’ils examinent les matelas de cette liste, les WinkBeds Plus et le Saatva pourraient être de bonnes options.
                                    </p>
                                </div>
                                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-10`}>
                                    <p className="font-bold">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;   Quel est le meilleur matelas pour dormir sur le côté ?</p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[90%] pt-2 ml-[5%]`}>
                                        Les dormeurs latéraux se situent à l’autre extrémité du spectre des dormeurs sur le ventre. Bien qu’ils aient encore besoin d’un certain soutien, ils ont tendance à préférer les lits plus moelleux (ou moyennement fermes) qui ont beaucoup de rembourrage pour leurs épaules et leurs hanches. La plupart des matelas de cette liste devraient convenir parfaitement aux dormeurs latéraux, notamment le Sensoreve Elekctra.
                                    </p>
                                </div>
                            </div> */}
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap mt-[5%] text-left px-4 bg-[#eef5f9] py-4 rounded-lg`}>
                                <p className="font-bold text-center">Comment nous choisissons ces matelas</p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] my-3 mb-5`}>
                                    Notre équipe de coachs certifiés en sciences du sommeil a examiné plus de 300 produits dans notre laboratoire de matelas, soumettant chacun d'eux à des tests tels que la cartographie de la pression et la mesure du transfert de mouvement avec un sismomètre. À partir de là, nous attribuons à chaque lit une note globale basée sur les matériaux, le confort, le soutien, le refroidissement et le support des bords. Nous prenons également en compte les performances de la marque avec des catégories telles que la valeur et la garantie.
                                    <br></br><br></br>
                                    Puisque nous voulions que notre liste des meilleurs matelas de 2024 représente véritablement le meilleur des meilleurs, nous avons pris en compte la note globale de chaque lit. Tous les matelas de cette liste ont une note globale de 4 sur 5 ou plus. Cliquez ici pour en savoir plus sur notre méthodologie.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Les matelas les mieux notés de 2024
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] my-3 mb-5`}>
                                    Voilà pour notre répartition des meilleurs matelas de l’année. Si vous souhaitez une comparaison côte à côte de ces lits, jetez un œil au tableau ci-dessous.
                                </p>
                            </div>
                            
                            {/* <div className="mt-2">
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
                            </div> */}
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

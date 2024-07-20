/* eslint-disable @next/next/no-img-element */
'use client'
/* eslint-disable react/jsx-key */
import Image from "next/image";
import { useState, useEffect } from "react";
import BottomBar from "../../components/bottomBar";
import styles from '../../components/CustomText.module.css';
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

    const [bestBudgetMattress, setBestBudgetMattress] = useState<object[]>([
        {
            company: 'Nectar',
            description: 'Meilleur matelas bon marché',
        },
        {
            company: 'DreamCloud Memory Foam',
            description: 'Meilleur matelas en mousse à mémoire de forme pour les petits budgets',
        },
        {
            company: 'Bear',
            description: 'Le meilleur matelas abordable pour les athlètes',
        },
        {
            company: 'Sensoreve Elekctra',
            description: 'Meilleur matelas hybride abordable',
        },
        {
            company: 'Siena',
            description: 'Meilleur matelas abordable de moins de 500',
        },
        {
            company: 'Titan Plus',
            description: 'Meilleur matelas économique pour les personnes corpulentes',
        },
        {
            company: 'Leesa Original',
            description: 'Meilleur matelas abordable pour les dormeurs sur le dos',
        },
        {
            company: 'Silk & Snow Hybrid',
            description: 'Meilleur matelas rafraîchissant à petit prix',
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
            model: "Nectar Matelas",
            material: "Mousse",
            firmness: "Doux : 6/10",
            mark: "/img/best/nectar_best.jpg",
            rate: 4.3,
            cooling: '- -',
            sleep_position: "Dos et côté",
            title: "Nectar",
            sort: "Meilleur matelas bon marché",
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
                    content: "Ce lit est idéal pour les personnes souffrant de douleurs articulaires."
                },
                {
                    img:"/img/best/hip.svg",
                    title: "Douleur à la hanche",
                    content: "Ce lit est idéal pour les personnes souffrant de douleurs aux hanches."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs légers et de poids moyen."
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
                    title: "garantie",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Lorsqu'il s'agit de matelas qui ne coûtent pas les yeux de la tête, notre premier choix est le Nectar, un matelas tout en mousse. Lorsque nous l'avons testé, nous lui avons attribué une note de 6 sur 10 sur l'échelle de fermeté du matelas, soit une note légèrement inférieure à la fermeté moyenne. Il est doté d'une épaisse couche de mousse à mémoire de forme souple qui offre une grande capacité de contournement et de soulagement de la pression pour les dormeurs latéraux, et d'une couche de soutien en mousse plus ferme qui assure la stabilité du matelas. Lorsque l'on s'allonge sur le Nectar, on s'enfonce un peu, mais on n'a jamais l'impression que l'on va tomber trop bas dans ses couches. Un lit queen size coûte actuellement moins de 1 000 dollars après déduction des remises. Tous les modèles sont assortis d'une période d'essai de 365 nuits et d'une garantie à vie. \n\n Nous pensons également que le Nectar est un choix solide pour les couples en raison de sa capacité à isoler les mouvements. Lorsque nous avons testé le transfert de mouvement à l'aide de billes d'acier et d'un sismomètre, nous avons constaté qu'il n'y avait pas beaucoup de mouvement, ce qui nous indique que si vous dormez avec un partenaire, vous ne sentirez probablement pas l'autre se retourner pendant la nuit.",
            testersay: [
                "Ce que dit notre testeur :",
                "Je pense que le Nectar a une excellente sensation de mousse à mémoire de forme classique. Si vous aimez l'enfoncement profond et les contours, c'est le matelas qu'il vous faut.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Sur le site Internet de Nectar, vous trouverez un nombre impressionnant de 47 000 commentaires, dont beaucoup font l'éloge de la sensation d'amortissement de la mousse à mémoire de forme sur le dos du dormeur. Un thème commun semble être le soulagement de la pression profonde du lit.",
            pros: [
                "Les dormeurs sur le dos devraient également être à l'aise sur le Nectar. La mousse souple devrait remplir la région lombaire, et la mousse plus ferme au bas du matelas est suffisamment solide pour aider à maintenir la colonne vertébrale dans un alignement neutre.",
                "Si vous souffrez de douleurs aux hanches, le Nectar pourrait vous soulager. Lorsque nous avons testé le matelas avec notre carte de pression, nous avons constaté qu'il y avait peu ou pas de pression au niveau des hanches dans les trois positions de sommeil.",
                "Le Nectar pourrait convenir aux adolescents. Il est suffisamment doux pour les plus jeunes, mais il peut aussi les accompagner dans leur développement jusqu'à l'adolescence."
            ],
            cons: "Les dormeurs sur l'estomac et les gros dormeurs n'obtiendront probablement pas le soutien dont ils ont besoin sur le Nectar. Ils devraient rechercher un matelas plus ferme, peut-être avec une couche de ressorts.",
            reviewName: "Examen du matelas Nectar"
        },
        {
            model: "DreamCloud Memory Foam",
            material: "Mousse",
            firmness: "Ferme : 7.5/10",
            mark: "/img/cheap/dreamCloud_MemoryFoam.jpg",
            rate: 4.4,
            cooling: '✓',
            sleep_position: "Dos et estomac",
            title: "DreamCloud Memory Foam",
            sort: "Meilleur matelas en mousse à mémoire de forme pour les petits budgets",
            content: "Le matelas à mémoire de forme de DreamCloud est un lit en boîte de luxe qui offre un excellent soutien tout en étant entièrement en mousse.",
            review: "/reviews",
            site: "",
            productState: false,
            overviewState: false,
            recommendationState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Dormeurs chauds",
                    content: "Si vous avez souvent trop chaud pendant votre sommeil, ce matelas devrait vous aider à rester au frais."
                },
                {
                    img:"/img/best/couple.svg",
                    title: "Couples",
                    content: "Ce lit offre une grande isolation des mouvements, de sorte que vous ne sentirez pas votre partenaire se retourner pendant la nuit."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dormir à l'arrière",
                    content: "Idéal pour les dormeurs légers et de poids moyen."
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
                    content: "Livraison gratuite moins HI et AK",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Fermeté",
                    content: "Ferme : 7.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `La mousse à mémoire de forme traditionnelle a souvent mauvaise réputation, car elle a tendance à retenir la chaleur du corps et à favoriser la transpiration. De plus, certaines marques utilisent une mousse de mauvaise qualité, ce qui entraîne un affaissement prématuré. Avec la mousse à mémoire de forme DreamCloud, vous obtiendrez un lit en mousse à mémoire de forme rafraîchissante et de haute qualité, avec tous les avantages habituels. Le plus intéressant ? Il est proposé à un prix modique, compte tenu de ses matériaux et de sa construction. Si l'on tient compte des remises, vous pouvez souvent obtenir un lit queen pour moins de 1 000 dollars. \n\n Le premier lit de DreamCloud était un matelas hybride de luxe, et le DreamCloud Memory Foam est leur première option entièrement en mousse. Comme son homologue hybride, il est recouvert d'un mélange de cachemire et sa mousse contient une infusion de gel pour faciliter le refroidissement. Cependant, il diffère de beaucoup d'autres options de mousse à mémoire de forme en ce sens qu'il est assez ferme. Lorsque nous nous sommes allongés dessus, nous lui avons attribué une note de 7,5 sur 10 sur notre échelle de fermeté du matelas. Il convient donc parfaitement aux dormeurs sur le dos et sur le ventre, qui ont tendance à avoir besoin de plus de fermeté et de soutien pour maintenir leur colonne vertébrale dans un alignement neutre.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Le DreamCloud Memory Foam est un matelas en mousse à mémoire de forme avec une sensation de fermeté qui, à mon avis, convient bien aux personnes de poids léger à moyen qui dorment sur le ventre ou sur le dos.",
                "– Amelia Jerden, rédactrice en chef"
            ],
            customersay: `Étant l'un des modèles les plus récents de la marque, le DreamCloud Memory Foam ne fait pas l'objet d'autant d'avis que la version hybride originale. Mais ceux qui existent font l'éloge du confort du lit, ainsi que de son apparence élégante.`,
            pros: [
                "Pour être entièrement constitué de mousse, le DreamCloud est très réactif. Les dormeurs mixtes devraient pouvoir changer facilement de position de sommeil sur sa surface.",
                "Il est également doté d'un support de bord solide. Vous devez pouvoir vous étendre et utiliser toute la surface du lit sans avoir l'impression que vous allez tomber.",
                "Le matelas comporte plusieurs touches de luxe, dont la housse en cachemire mentionnée plus haut et un dessus matelassé."
            ],
            cons: "Les mousses ne sont pas assez souples pour les personnes qui dorment sur le côté. Ceux-ci préféreront probablement un matelas plus enveloppant et qui soulage la pression au niveau des épaules et des hanches, là où ils exercent le plus de pression.",
            reviewName: "Examen du matelas DreamCloud Memory Foam"
        },
        {
            model: "Bear Original Matelas",
            material: "Mousse",
            firmness: "Ferme : 7.5/10",
            mark: "/img/cheap/bear_original.jpg",
            rate: 4.0,
            cooling: '✓',
            sleep_position: "Dos et côtés",
            title: "Bear",
            sort: "Le meilleur matelas abordable pour les athlètes",
            content: "Nous apprécions la fermeté et la réactivité du matelas Bear. Sa combinaison de soutien et de soulagement de la pression en fait une excellente option pour toute personne souffrant de douleurs dorsales. La housse Celliant permet également de garder le matelas au frais.",
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
                    content: "Idéal pour les dormeurs légers et de poids moyen."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage latéral",
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
                    content: "Ferme : 7.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie à vie"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Bear est une marque unique parce qu'elle s'adresse aux athlètes. L'entreprise a équipé son matelas phare de mousses fermes qui soutiennent la musculature lourde, ainsi que d'une housse en Celliant. Il s'agit d'un matériau doux et respirant qui aide à combattre la chaleur après une longue séance d'entraînement. De plus, la couche de confort en mousse à mémoire de forme contribue au refroidissement grâce à une infusion de gel de graphite. Le Bear convient donc parfaitement aux dormeurs qui ont chaud. \n\nUn autre composant de Celliant : il est conçu pour absorber l'énergie de votre corps, puis la rediriger vers vous pour aider à la récupération et à la circulation sanguine. Bien que nous n'ayons pas vérifié cette affirmation de manière indépendante dans notre laboratoire de test, 10 études évaluées par des pairs l'ont confirmée. Même sans la housse Celliant, nous pensons que le Bear est un excellent choix pour tous ceux qui ont un mode de vie actif, grâce aux facteurs de soutien et de refroidissement susmentionnés. Il est souvent possible d'obtenir un lit Queen à 998 $ avant toute réduction. Ce prix inclut un essai de 120 nuits et une garantie à vie.`,
            testersay: [
                "Ce que dit notre testeur :",
                "J'ai trouvé le Bear particulièrement confortable lorsque je dormais sur le dos. Sa couche supérieure de mousse à mémoire de forme a fait un excellent travail en comblant l'espace au niveau de la région lombaire, apportant à la fois soutien et soulagement de la pression sur ma colonne vertébrale.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Les commentaires sur le site Internet de Bear soulignent la fermeté du matelas, et plusieurs personnes ont indiqué que les mousses de soutien en font un matelas idéal pour les adolescents dont le corps est encore en pleine croissance. De nombreuses personnes apprécient également le fait que le matelas ait été fabriqué sans fibre de verre.",
            pros: [
                "Lorsque nous avons testé le transfert de mouvement du Bear, nous avons constaté qu'il était très faible. Si vous dormez à deux, vous ne devriez donc pas être réveillés par les mouvements de l'autre. Si l'on ajoute à cela les capacités de refroidissement du lit, il s'agit de l'un des meilleurs matelas pour les couples.",
                "Bien que le Bear soit entièrement constitué de mousse, il comporte une couche de haute densité qui offre un soutien suffisant pour aider à maintenir la colonne vertébrale des dormeurs dorsaux dans un alignement neutre, ce qui est essentiel pour un sommeil sain et réparateur.",
                "Les mousses du matelas sont suffisamment réactives pour que les dormeurs combinés puissent facilement changer de position."
            ],
            cons: "Les personnes qui dorment sur le côté : Ils n'obtiendront probablement pas un soulagement suffisant de la pression de l'ours. Ils devraient rechercher un matelas plus souple..",
            reviewName: "Examen du matelas Bear"
        },
        {
            model: "Sensoreve Elekctra Matelas",
            material: "Hybride",
            firmness: "Moyen-doux : 6/10",
            mark: "/img/product/Sensoreve.png",
            rate: 4.4,
            cooling: '✓',
            sleep_position: "Dos et côté",
            title: "Sensoreve Elekctra",
            sort: "Meilleur matelas hybride abordable",
            content: "L’Sensoreve Elekctra a un niveau de soutien et un rebond moyens qui séduiront un large éventail de préférences de sommeil. Le Midnight fait également un travail exceptionnel en isolant les mouvements, ce qui en fait un excellent choix pour les couples qui se déplacent la nuit.",
            review: "/reviews",
            site: "https://sensoreve.com/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm",
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
                    title: "garantie",
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
            model: "Siena Matelas",
            material: "Mousse",
            firmness: "Ferme : 7/10",
            mark: "/img/cheap/siena.jpg",
            rate: 4.0,
            cooling: '- -',
            sleep_position: "Dos et côté",
            title: "Siena",
            sort: "Meilleur matelas abordable de moins de 500",
            content: "Ce matelas tout en mousse offre une sensation de fermeté et de soutien avec une couche de mousse à mémoire de forme pour soulager la pression.",
            review: "/reviews",
            site: "https://www.sienasleep.com/mattress?CIDIMP=WFNz5gSf7xyPRhqx-Yx332coUkHQKUwXWQt71Y0&irgwc=1&utm_campaign=IMPACT&utm_content=Online%20Tracking%20Link_ONLINE_TRACKING_LINK&utm_source=SO_Main&utm_medium=AFF&utm_sharedid=&utm_account=15153&rh_s=SO_Main&rh_m=AFF&rh_c=IMPACT&rh_n=Online%20Tracking%20Link_ONLINE_TRACKING_LINK&rh_sid=",
            productState: false,
            recommendationState: false,
            overviewState: false,
            expert_opinionState: false,
            recommendation: [
                {
                    img:"/img/cheap/kid.svg",
                    title: "Les enfants",
                    content: "Ce lit est parfait pour les jeunes dormeurs."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs légers sur le dos."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Couchage sur le côté",
                    content: "Idéal pour les dormeurs latéraux légers."
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
                    content: "180 nuits",
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
                    title: "garantie",
                    content: "Garantie de 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Bien qu'il soit entièrement composé de mousse, le Siena offre un soutien surprenant, ses couches commençant par être souples, puis devenant de plus en plus fermes au fur et à mesure que l'on se rapproche du bas du lit. Cela signifie qu'il s'agit d'un matelas en mousse à mémoire de forme exceptionnellement durable, et qu'à moins de 500 $ pour une taille queen après remises, il constitue un investissement solide (et abordable) à long terme. \n\n Lorsque nous nous sommes allongés sur le Siena, nous avons vraiment eu la sensation d'être sur le dessus du lit. Cependant, plus nous restions sur le matelas, plus nous nous y enfoncions. Cette poussée et cette traction se sont traduites par une sensation de fermeté avec un peu de rembourrage. Nous devons également parler de la capacité du Siena à isoler les mouvements. Nous testons cette capacité en laissant tomber plusieurs billes d'acier de poids différents sur la surface du lit. Nous mesurons ensuite les vibrations à l'aide d'un sismomètre. Si les vibrations sont faibles, les mouvements sont moins susceptibles de se répercuter sur le matelas. Le Siena a excellé dans ce test, de sorte qu'il est peu probable que vous sentiez votre partenaire bouger pendant la nuit.",
            testersay: [
                "Ce que dit notre testeur :",
                "Le Siena a un design simple et minimaliste qui convient aux dormeurs sur le ventre et à de nombreux dormeurs sur le dos. Je pense qu'il s'agit d'une excellente option pour ceux qui recherchent un matelas ferme. Il maintient les dormeurs en position haute et les amortit légèrement, ce qui est particulièrement avantageux pour les dormeurs sur le ventre. Je pense également qu'il est assez facile de se déplacer sur un lit tout en mousse et qu'il offre un soutien solide sur les bords.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Sur le site web de Siena, il y a près de 1 200 avis, et de nombreux clients soulignent le confort du matelas sur leur dos. Toutefois, quelques personnes ont fait remarquer qu'en raison de la fermeté du matelas, il faut parfois quelques nuits pour s'habituer au lit. Accordez-vous donc un peu de temps pour vous y habituer.",
            pros: [
                "La couche supérieure de mousse à mémoire de forme s'adaptant au corps du Siena devrait vous procurer un certain amortissement au niveau de la région lombaire, tout en assurant le soutien de la colonne vertébrale grâce à la couche inférieure de mousse de base. Ce matelas est donc un choix naturel pour les dormeurs sur le dos.",
                "Le Siena est le rare matelas en mousse capable d'accueillir les dormeurs sur le ventre, qui ont tendance à exercer plus de pression sur les couches du lit que les dormeurs sur le côté ou sur le dos. Mais ce matelas remplit sa mission en maintenant les dormeurs à plat ventre de manière à ce que leurs hanches soient alignées avec leurs épaules.",
                "Avec un soutien solide des bords, des mousses suffisamment réactives pour les rapports sexuels et la capacité d'isoler les mouvements, le Siena est un bon choix pour tous ceux qui partagent leur lit avec un partenaire."
            ],
            cons: "Ce n'est pas le meilleur matelas pour les personnes qui dorment sur le côté. Ils préféreront probablement un matelas plus doux avec un meilleur soulagement de la pression.",
            reviewName: "Évaluation du matelas Siena"
        },
        {
            model: "Titan Plus",
            material: "Hybride",
            firmness: "Ferme : 7.5/10",
            mark: "/img/cheap/titan.jpg",
            rate: 4.3,
            cooling: '- -',
            sleep_position: "Dos et ventre",
            title: "Titan Plus",
            sort: "Meilleur matelas économique pour les personnes corpulentes",
            content: "Le Titan Firm Hybrid de Brooklyn Bedding est un matelas durable doté de ressorts de soutien robustes de 6 pouces, ce qui en fait une excellente option pour les dormeurs plus lourds. Ce matelas est également doté d'une couche de confort en mousse Titanflex, qui offre une bonne portance et un bon rebond pour les personnes plus lourdes.",
            review: "/reviews",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/back.svg",
                    title: "Mal de dos",
                    content: "Ce lit est idéal pour les personnes souffrant de douleurs dorsales."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les personnes qui dorment sur le dos et qui ont un poids élevé."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Sommeil de l'estomac",
                    content: "Idéal pour les gros dormeurs sur le ventre."
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
                    content: "Ferme : 7.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie de 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Pour les gros dormeurs, nous recommandons toujours le matelas Titan Plus, une option abordable et confortable. Mais comme ces personnes exercent une plus grande pression sur les couches du lit que les autres dormeurs, nous avons demandé à Paulie - un haltérophile professionnel à la morphologie plus imposante - de le tester. Il a estimé que les trois pouces de mousse permettaient un soulagement adéquat de la pression, et que les ressorts robustes et la mousse de base haute densité offraient un soutien durable. Cela n'est pas surprenant, car le Titan Plus a été conçu spécifiquement pour les dormeurs de plus de 250 livres. Il est vendu au prix de 1 249 $ pour un lit queen, avant réductions, et comprend un essai de 120 nuits ainsi qu'une garantie de 10 ans. Après réduction, il est souvent possible de trouver un lit queen pour moins de 1 000 $. \n\n Nous devons souligner qu'en ce qui concerne la fermeté, le Titan Plus sera plus doux pour les dormeurs lourds et plus ferme pour les dormeurs de poids moyen et léger. Pour donner un ordre d'idée, notre évaluateur a évalué le lit à 7,5 sur 10 sur notre échelle de fermeté du matelas, tandis que Paulie a estimé qu'il était plus proche d'un 6,5 (la norme de l'industrie pour une fermeté moyenne).`,
            testersay: [
                "Ce que dit notre testeur :",
                "Je pense que les couples trouveront beaucoup à aimer dans le Titan Plus en raison de sa solide isolation des mouvements et de son soutien des bords. Dans l'ensemble, je me suis senti très bien soutenu sur ce lit. Je pense qu'il pourrait convenir à de nombreux dormeurs sur le dos ou sur le ventre.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Le Titan Plus a fait l'objet de nombreux témoignages de dormeurs corpulents, y compris d'une vidéo d'un couple. La plupart de ces témoignages soulignent le confort du matelas pour leur morphologie, certains le qualifiant même de matelas le plus confortable sur lequel ils aient jamais dormi.",
            pros: [
                "Même s'ils pèsent moins de 250 livres, les dormeurs sur le dos qui recherchent une sensation plus ferme ou plus de soutien devraient apprécier ce matelas.",
                "De même, les dormeurs sur le ventre qui pèsent moins de 250 livres devraient être à l'aise sur le Titan Plus, bien qu'il leur semblera un peu plus ferme qu'aux dormeurs sur le ventre qui pèsent lourd.",
                "Nous recommandons ce lit aux couples lourds en raison de son impressionnante isolation des mouvements et de son soutien des bords. Il est peu probable que vous sentiez votre partenaire se retourner, et vous devriez tous deux être en mesure de vous étendre sur toute la surface du matelas."
            ],
            cons: "En raison de l'épaisseur et de la durabilité des matériaux, nous avons trouvé que le Titan Plus dormait chaud. Il est possible d'acheter un panneau de refroidissement, mais cela coûte plus cher.",
            reviewName: "Examen du matelas Titan Plus"
        },
        {
            model: "Leesa Original Matelas",
            material: "Mousse",
            firmness: "Doux : 5.5/10",
            mark: "/img/cheap/lessa.jpg",
            rate: 4.1,
            cooling: '- -',
            sleep_position: "Combinaison",
            title: "Leesa Original",
            sort: "Meilleur matelas abordable pour les dormeurs sur le dos",
            content: `Vous aimez la sensation d'un matelas tout en mousse, mais vous n'arrivez pas à en trouver un qui soit suffisamment rebondissant ? Le matelas Leesa original est peut-être ce qu'il vous faut. Ce matelas de type "bed-in-a-box" offre un soulagement en douceur de la pression ainsi qu'un soutien réactif.`,
            review: "/reviews",
            site: "",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Dos Dormir",
                    content: "Idéal pour les dormeurs légers, moyens et lourds."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Les dormeurs chauds",
                    content: "Idéal pour les dormeurs latéraux de poids moyen."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Sommeil de l'estomac",
                    content: "Idéal pour les dormeurs sur le ventre légers."
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
                    content: "Douceur : 5,5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "garantie",
                    content: "Garantie de 10 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Nous pensons que tous les matelas de cette liste présentent un bon rapport qualité-prix, mais le Leesa Original est particulièrement fantastique pour les personnes qui dorment sur le dos. En fait, ce matelas est commercialisé pour offrir la sensation " Boucle d'or " la plus recommandée pour les dormeurs sur le dos, avec un équilibre entre le confort et le soutien provenant de sa couche de confort en mousse à mémoire de forme et de sa mousse de base extra-durable. Lors de nos tests, nous avons remarqué que ce matelas épousait parfaitement les contours de notre dos, et nous avons déterminé qu'il s'agissait de notre position de sommeil préférée sur ce matelas. \n\n Nous avons mis tout cela à l'épreuve avec notre carte de pression, qui présentait surtout du bleu et du vert pendant le sommeil sur le dos. Cela indique que la plupart des gens devraient éviter une accumulation excessive de pression ; en fait, ce matelas pourrait même aider à soulager les maux de dos dans la région lombaire. Sur la base de nos résultats, nous pensons que ce matelas offrira aux dormeurs de moins de 250 livres un bon contour du bas du dos et une bonne portance au niveau des hanches.`,
            testersay: [
                "Ce que dit notre testeur :",
                "J'ai ressenti un bon soulagement de la pression en me couchant sur le dos, ce qui aide à soulager la douleur dans la région lombaire. Je pense que c'est la position de sommeil la plus confortable sur le Leesa. Cependant, je ne pense pas que les personnes qui dorment sur le côté ou sur le ventre et qui souffrent de douleurs dorsales obtiendront le soulagement dont elles ont besoin sur ce matelas.",
                "– Bridget Chapman, ancienne rédactrice en chef des produits"
            ],
            customersay: "Il est étonnant de constater que le Leesa Original fait l'objet de plus de 20 000 avis sur le site de la société, avec un total de 4,5 étoiles sur 5. De nombreux clients satisfaits louent la capacité du Leesa à prévenir et à soulager les maux de dos, en particulier pour un prix aussi fantastique. Les quelques plaintes qui existent mentionnent que le Leesa n'est pas aussi résistant qu'ils l'espéraient. Toutefois, il est important de noter que les prix élevés et la durée de vie des matelas vont souvent de pair.",
            pros: [
                "Il s'agit d'un matelas réactif, et la facilité de mouvement qu'il permet devrait en faire une option intéressante pour les dormeurs mixtes.",
                `Même si ce matelas offre une sensation plus "sur le dessus", il isole bien les mouvements, de sorte que les couples ne devraient pas se réveiller à cause des mouvements de l'autre.`,
                "Certains dormeurs latéraux pesant entre 130 et 250 livres, en particulier ceux qui recherchent une sensation plus ferme, devraient apprécier la fermeté moyenne du Leesa."
            ],
            cons: "Ce lit n'offre pas un soutien adéquat pour les dormeurs lourds de plus de 250 livres. Cependant, nous avons vraiment adoré le Leesa Sapira Chill pour ces personnes.",
            reviewName: "Examen du matelas Leesa Original"
        },
        {
            model: "Silk & Snow Hybrid Matelas",
            material: "Hybride",
            firmness: "Moyennement ferme : 6.5/10",
            mark: "/img/cheap/silk.jpg",
            rate: 4.0,
            cooling: '✓',
            sleep_position: "- -",
            title: "Silk & Snow Hybrid",
            sort: "Meilleur matelas rafraîchissant à petit prix",
            content: `Le Silk & Snow Hybrid est un matelas moyennement ferme qui offre un soutien important. Il est idéal pour les dormeurs sur le dos, certains dormeurs sur le côté et ceux qui passent d'une position à l'autre.`,
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
                    title: "garantie",
                    content: "Garantie de 15 ans"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Prix",
                    content: "$$$$$"
                },
            ],
            expert_opinion: `Le Silk & Snow est un matelas hybride économique que l'on peut généralement trouver à moins de 900 $ pour une taille queen. Nous pensons que le principal attrait du Silk & Snow Hybrid est son impressionnante capacité de refroidissement. Pour un matelas d'un tel rapport qualité-prix, il peut être difficile d'obtenir de telles capacités de refroidissement. Mais le Silk & Snow Hybrid comprend une housse fraîche au toucher et des ressorts respirants pour empêcher les dormeurs chauds de surchauffer. Nous avons ressenti les effets de ce lit dans notre laboratoire de matelas, où le Silk & Snow Hybrid a reçu une note de refroidissement impressionnante de 4 sur 5. \n\n La combinaison de mousse à mémoire de forme et de ressorts du Silk & Snow Hybrid en fait un lit moyennement ferme et réactif. Cette dernière caractéristique est due aux ressorts, qui fournissent une bonne quantité de rebond et nous ont permis de changer facilement de position de sommeil. Cela signifie que le Silk & Snow convient parfaitement aux dormeurs mixtes qui passent d'une position sur le dos à une position sur le ventre ou sur le côté pendant la nuit.`,
            testersay: [
                "Ce que dit notre testeur :",
                "Il s'agit d'une fermeté intermédiaire idéale pour ceux qui ne veulent pas d'un lit ultra-ferme, mais qui souhaitent se sentir bien soutenus. Cette sensation est obtenue grâce à une construction hybride, qui utilise des mousses conformantes dans les couches supérieures et des ressorts robustes dans les couches inférieures.",
                "– Amelia Jerden, rédactrice en chef"
            ],
            customersay: "Le site de la société Silk & Snow contient plus de 3 000 commentaires, dont la plupart sont positifs quant à l'équilibre délicat entre le confort et le soutien.",
            pros: [
                "Ce matelas a obtenu de bons résultats lors de notre test de pression (beaucoup de bleu dans la région lombaire). Nous pensons qu'il pourrait constituer un bon choix pour les personnes souffrant de maux de dos.",
                "Le soutien et l'allègement de la pression sont suffisants pour que les personnes qui dorment sur le dos soient à l'aise.",
                "Les personnes qui dorment sur le côté devraient également trouver le contour dont elles ont besoin grâce à la housse souple, aux mousses et à la fermeté moyenne du Silk & Snow."
            ],
            cons: "Le Silk & Snow Hybrid n'a pas obtenu les meilleurs résultats lors de notre test de soutien des bords, ce qui est plutôt rare pour un matelas hybride. Donc, si vous êtes le genre de dormeur qui aime s'étendre et prendre beaucoup de place sur votre lit, ce n'est peut-être pas le choix qu'il vous faut.",
            reviewName: "Examen du matelas Silk & Snow Hybrid"
        },
    ]);

    const [starState, setStarState] = useState<string>('flex');
    interface ComponentProps {
        index: number;
        setLookBestState: React.Dispatch<React.SetStateAction<LookBestItem[]>>;
    }

    const [pros, setPros] = useState<string []>([
        "Il est évident que des matelas moins chers vous permettent d'économiser cet argent supplémentaire pour d'autres choses importantes. Vous pouvez même utiliser l'argent économisé pour acheter des accessoires pour matelas, tels que les meilleurs surmatelas ou les meilleurs oreillers.",
        "La plupart des marques de matelas proposent au moins une option économique, il est donc probable que votre entreprise préférée propose un lit qui tient compte de votre porte-monnaie",
        "Il existe un certain nombre de matelas bon marché qui permettent néanmoins un sommeil réparateur, une surface confortable et une posture saine."
    ]);

    const [cons, setCons] = useState<string []>([
        "Peut ne pas offrir les matériaux et le soutien de haute qualité pour les personnes de forte corpulence.",
        "Peut ne pas inclure le soulagement de la pression nécessaire pour des conditions spécifiques telles que les douleurs articulaires.",
        "Les matelas bon marché ne durent pas aussi longtemps qu'un matelas fabriqué avec des matériaux de meilleure qualité et dont le prix est par conséquent plus élevé."
    ]);

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
                                Les 8 meilleurs matelas bon marché de 2024
                                <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] sm:text-[14px] text-[12px] md:text-[16px] font-bold 
                                text-left text-wrap w-[100%]`}>
                                    Par Bridget Chapman | Mise à jour : 14 mai 2024
                                </p>
                            </div>
                            <div className="w-full flex justify-start items-start pl-[5%]">
                                <span className="border-[2px] border-[#78c2ef] rounded-full">
                                    <img src="/img/cheap/Reviewer.png" alt="évaluateur"  className="lg:w-[4vw] lg:h-[4vw] md:w-[5vw] md:h-[5vw] w-[34px] rounded-[50px] border-[2px] border-[#F7E4D6]"/>
                                </span>
                                <p className={`${styles.robotoFont} 2xl:text-[20px] sm:text-[14px] md:text-[18px] text-[14px] ml-[3%] text-left flex items-center lg:h-[4vw] md:h-[5vw] h-[34px]`}>Rédigé par<br></br>
                                    Bridget Chapman, rédactrice en chef des produits
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
                                            Nos coachs certifiés en science du sommeil ont examiné plus de 300 matelas dans notre laboratoire, testant chacun d'entre eux sur ses matériaux, son confort, son refroidissement, son soutien et d'autres catégories.
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
                                            Nous avons récemment réexaminé tous nos meilleurs choix de matelas bon marché et ajouté des commentaires des testeurs de notre laboratoire. Vous pouvez donc être certain que s'il figure sur cette liste, c'est que nous l'avons personnellement testé, que nous avons dormi dessus et que nous nous en tenons à sa recommandation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] xl:text-[20px] lg:text-[18px] md:text-[16px]
                text-left text-wrap w-[80%] mb-20`}>
                    Sinun pitäisi saada hyvät yöunet rikkomatta pankkia. Onneksi me autamme. Viimeisten 20 vuoden aikana markkinoille on tullut kymmeniä patjayrityksiä, mikä on tarjonnut budjettitietoisille ostajille enemmän vaihtoehtoja kuin koskaan aiemmin. Jos etsit parasta edullista patjaa, lue eteenpäin. Käymme läpi patjojen hinnoittelua, sitä, miten kalliimmat vaihtoehdot eroavat edullisemmista vaihtoehdoista, ja miten voit päättää, mikä malli sopii sinulle ja lompakollesi. Lopputuloksena on parhaiden edullisten patjojen yhteenvetomme.
                    <p>&nbsp;</p>
                    En ce qui concerne le prix, nous n'avons retenu que les matelas dont le prix était inférieur ou égal à 1 000 $ pour un grand lit après déduction des remises, mais qui ont tout de même obtenu de bons résultats dans la plupart de nos tests (pour en savoir plus, consultez le guide d'achat au bas de cette page). Certains de ces matelas sont à 1 000 $ ou moins pour un lit queen size avant toute réduction.
                </div>
                <div className="block text-center w-full mb-[20px] pl-[10%] lg:flex">
                    <div className="w-full lg:w-[65%]">
                        <div className="flex flex-col w-[90%] items-start justify-center bg-[#d2e1eb] rounded-[30px] py-[20px] px-[5%] mb-20">
                            <p className={`${styles.manropeFont} text-center md:text-left text-3xl font-bold w-full pb-[20px]`}>&nbsp; Les meilleurs matelas économiques de 2024: &nbsp;</p>
                            
                            <div className="flex flex-col justify-between items-start text-[18px] text-left w-full pl-[3%]">
                            {
                                bestBudgetMattress.map((item:any, index:any) =>
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
                        {/* <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[20px] lg:text-[26px] md:text-[22px] text-wrap text-left pb-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Les meilleurs matelas économiques de 2024
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
                        </div> */}

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
                                    <p className={`${styles.manropeFont} text-2xl md:text-3xl font-bold pb-2 mb-10 text-left border-b-2 border-[#324983] w-[90%]`}>
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
                                                <p className={`${styles.manropeFont} font-medium text-[#a19dfb] text-[12px] md:text-[16px] pl-[10px] underline pt-2`}>
                                                    Vérifier les avis
                                                </p>
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
                                                <button className={`${styles.manropeFont} bg-[#FFFFFF] hover:bg-[#F1F1F1] text-blue font-bold px-4 rounded-[10px] w-full py-4 mt-[20px] md:mt-5 border border-[#F7e4D6]`}>
                                                    Visit Site
                                                </button>
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
                                            Pour en savoir plus, consultez notre avis complet sur le{item.reviewName} ou cliquez ici pour obtenir notre meilleure offre. Vous trouverez d'autres options dans notre tour d'horizon des meilleurs matelas pour les dormeurs mixtes.
                                        </p>
                                    </div>
                                </div>
                            )
                        }

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%] mb-5`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Avantages des matelas bon marché
                                </p>
                            </div>
                            {
                                pros.map((item:any, index:any) => 
                                    <div key={index} className="flex flex-row w-full items-start justify-left">
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                        text-left px-5`}>
                                            • &nbsp;
                                        </p>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                        text-left text-wrap`}>
                                            {item}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                        
                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%] mb-5`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Les inconvénients des matelas bon marché
                                </p>
                            </div>
                            {
                                cons.map((item:any, index:any) => 
                                    <div key={index} className="flex flex-row w-full items-start justify-left">
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                        text-left px-5`}>
                                            • &nbsp;
                                        </p>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                        text-left text-wrap`}>
                                            {item}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                        
                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%] mb-5`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Comment savoir si vous achetez un matelas de qualité ?
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    L'équilibre le plus important à trouver lors de la recherche d'un matelas économique de qualité est, bien sûr, entre le prix et la durabilité. Vous souhaitez un matelas durable et bon pour l'alignement de votre colonne vertébrale, sans que votre portefeuille n'en pâtisse trop.
                                    <br></br><br></br>
                                    Il est donc recommandé de rechercher des mousses de meilleure qualité (si possible de la mousse à mémoire de forme plutôt que de la mousse poly). Une couche de soutien solide, comprenant une mousse de base haute densité ou des ressorts, voire les deux, est également un élément à prendre en compte.
                                    <br></br><br></br>
                                    Heureusement, tous les matelas présentés dans ce tour d'horizon sont des options de haute qualité qui ne coûtent pas les yeux de la tête. Mais nous vous donnons également quelques conseils dans notre section Soldes et Coupons, afin que vous puissiez trouver les meilleures affaires sur vos marques préférées.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Les éléments à prendre en compte lors de l'achat d'un matelas bon marché
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Que faut-il prendre en compte à part le prix ? Lisez ci-dessous pour choisir un matelas pour des informations plus détaillées.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Ventes et coupons</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Si vous êtes à la recherche d'un matelas bon marché, vous pouvez rechercher les soldes. N'oubliez pas de vérifier les soldes et les bons de réduction non seulement pour les marques de matelas bon marché, mais aussi pour toutes les marques qui vous intéressent. Pendant les week-ends de soldes, comme le Black Friday et le Memorial Day, vous pouvez obtenir un matelas plus cher à un prix avantageux.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Frais d'expédition</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    N'oubliez pas de consulter les frais d'expédition calculés. Vous devrez peut-être payer des frais d'expédition. Un lit moins cher sans livraison gratuite peut finir par être plus cher qu'un matelas plus cher avec livraison gratuite. C'est une bonne idée de vérifier le prix final avant de finaliser votre achat.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Période d'essai et garantie</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    La période d'essai et la durée de la garantie sont des facteurs importants à prendre en compte, en particulier lors du choix d'un matelas économique. Choisissez un lit offrant une période d'essai de 100 nuits ou plus. Si votre nouveau lit n'est pas confortable, vous voudrez avoir la possibilité de le retourner.
                                    <br></br><br></br>
                                    De même, les matelas bon marché assortis d'une garantie de 10 ans (ou plus) sont des investissements plus sûrs que les lits bon marché sans garantie. Un matelas abordable assorti d'une garantie généreuse est généralement bien fabriqué et pourra être remplacé s'il commence à s'affaisser rapidement. Étant donné que l'affaissement prématuré est un risque lors de l'achat d'un matelas bon marché, une bonne politique de garantie est une bonne mesure d'assurance qualité.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap mt-[5%] text-left`}>
                                <p className="font-bold">Type de carrosserie</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left bg-[#eef5f9] rounded-lg px-4 py-8 mb-4`}>
                                    <p className="pb-2 font-bold">
                                        Note sur le type de corps
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap w-[100%] pt-5`}>
                                        Nous reconnaissons que les gens sont de toutes les formes et de toutes les tailles, et que les gens de toutes les tailles méritent un matelas qui convient à leur type de corps. Nous utilisons les catégories de poids léger, moyen et lourd pour classer plus facilement les dormeurs en fonction de la performance des matelas pour leur type de corps, car la plupart des matelas sont conçus pour le groupe que nous appelons "moyen" (130 à 250 livres).
                                    </p>
                                </div>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%]`}>
                                    Avant d'acheter un matelas, tenez compte de votre morphologie. Les matelas économiques sont souvent plus efficaces et durent plus longtemps pour les dormeurs de moins de 130 livres, car ils ont besoin de moins de soutien. Les personnes plus lourdes (plus de 250 livres) doivent être prudentes lors de l'achat d'un matelas bon marché ; ces dormeurs devraient opter pour un matelas hybride ou à ressorts bon marché. Ces matelas dureront plus longtemps et offriront un meilleur soutien qu'un matelas en mousse moins cher. Vous ne voulez pas acheter un matelas bon marché pour le voir s'user rapidement, ce qui vous coûterait plus cher à long terme.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Décharge de pression</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Le soulagement de la pression est essentiel pour les personnes qui dorment sur le côté et celles qui souffrent de douleurs articulaires. Ces dormeurs ont souvent besoin d'un coussin supplémentaire pour soulager la douleur et la raideur nocturnes. En général, les matelas en mousse à mémoire de forme sont de bonnes options pour ces dormeurs. Les alternatives à la mousse à mémoire de forme peuvent vous offrir le soulagement de la pression que vous recherchez à un prix réduit.
                                </p>
                                <img src="/img/cheap/memory_foam.jpg" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] py-5`}>
                                    La mousse à mémoire de forme peut permettre un enfoncement profond.
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Chez Somnopolis, nous testons la performance d'un matelas en matière de soulagement de la pression à l'aide d'un appareil appelé carte de pression. Nous étalons la carte sur la surface du matelas et nous nous allongeons dessus. Un ordinateur utilise ensuite un code couleur d'imagerie thermique pour afficher la pression exercée sur notre corps lorsque nous sommes couchés sur le dos, sur le côté et sur le ventre. Nous pouvons ainsi recommander le matelas adapté aux différentes positions de sommeil. Par exemple, si la carte n'indique que peu ou pas de pression lorsque nous sommes allongés sur le côté, le matelas conviendra aux personnes qui dorment sur le côté.
                                </p>
                                <img src="/img/cheap/pressure.jpg" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] py-5`}>
                                    Résultats de la carte de pression du Nectar.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Niveau de fermeté</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Pensez toujours à la fermeté idéale de votre matelas. De nombreux dormeurs préfèrent les matelas "universellement confortables" de fermeté moyenne. En règle générale, les dormeurs sur le côté devraient opter pour des matelas souples à moyennement souples, les dormeurs sur le dos et les dormeurs combinés pour des matelas moyennement fermes, et les dormeurs sur le ventre pour des matelas fermes à extra-fermes. Ces fermetés devraient vous aider à obtenir un alignement neutre de la colonne vertébrale et à répondre aux besoins uniques de soulagement de la pression de votre position de sommeil.
                                </p>
                                <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left bg-[#eef5f9] rounded-lg px-4 py-8 my-4`}>
                                    <p className="pb-2 font-bold">
                                        Comment nous évaluons la fermeté
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap w-[100%] pt-5`}>
                                        At Somnopolis, we rate firmness on a scale from 1 to 10, with 1 being so soft it’s like sleeping on a giant cotton ball and 10 being so firm it’s like sleeping on concrete. We use 6.5 as the standard for medium-firm and most beds we test fall into the 5 to 8 firmness range.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Comment trouver un matelas abordable
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    Avec un tel choix d'options bon marché, comment décider quel matelas acheter ? Trouvons le lit de vos rêves.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Faites vos recherches</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Lorsque vient le moment de comparer les prix, sachez ce qui entre dans la fabrication d'un matelas moins cher. Des couches de confort plus fines, une plus grande quantité de mousse poly et de la mousse à mémoire de forme sans propriétés rafraîchissantes contribuent à réduire les coûts. La construction tout en mousse ou les ressorts en acier de plus grand calibre sont d'autres mesures permettant de réduire les coûts. Les matelas sans certification en matière de sécurité ou d'environnement sont également moins chers, mais n'offrent pas nécessairement les mêmes normes de qualité.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Comprendre vos besoins</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Votre nouvel achat vous servira-t-il de support à vous seul ou à votre partenaire ? Êtes-vous tous deux de poids moyen ou aurez-vous besoin d'un soutien supplémentaire ? La position de sommeil est également importante. Une fermeté accrue est importante si vous avez tendance à dormir sur le ventre. Dressez une liste de vos préférences, telles que le soutien des bords, la limitation du transfert de mouvement et le toucher moelleux. N'oubliez pas qu'il existe un matelas économique pour presque tout le monde.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Boutique en ligne</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Lorsque le prix est un facteur décisif, recherchez les meilleurs matelas en ligne. Sans les dépenses liées aux salles d'exposition, aux vendeurs et aux autres frais généraux, les sociétés de matelas en ligne sont plus compétitives en termes de coûts. Les sites Web consacrés aux matelas proposent des descriptions détaillées, des avis et des photos de leurs produits. Ils proposent même des chats en direct avec des spécialistes du service clientèle.
                                </p>
                                <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left bg-[#eef5f9] rounded-lg px-4 py-8 mb-4`}>
                                    <p className="pb-2 font-bold">
                                        Les meilleurs moments pour acheter un matelas en ligne
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap w-[100%] pt-5`}>
                                        Certaines des meilleures offres de matelas sont proposées à l'occasion des fêtes, en particulier le Presidents' Day, le Memorial Day, le Labor Day, le Black Friday/Cyber Monday et Noël.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Optez pour un lit en boîte</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    La majorité des meilleures marques de literie en boîte sont disponibles exclusivement en ligne, et les rares qui proposent leurs produits le font dans les magasins de briques et de mortier d'autres entreprises. Les faibles frais généraux, la conception simplifiée des matelas et l'expédition directe au consommateur permettent aux entreprises de literie en boîte de se démarquer en termes de prix.
                                </p>
                                <img src="/img/cheap/unboxing.jpg" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[10px] lg:text-[12px] 
                                text-center text-wrap w-[100%] py-5`}>
                                    Déballage d'un matelas "bed-in-a-box" dans le studio Somnopolis.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Sachez ce que vous achetez</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Soyez attentif aux coûts cachés tels que la taxe de vente, les frais de recyclage ou de livraison, les frais de retour et les frais de garantie éventuels. Sachez quels coûts l'entreprise couvrira si votre matelas présente des défauts, s'affaisse prématurément ou doit être réparé. Les garanties de certains matelas bon marché peuvent être plus courtes ou plus limitées ; lisez donc les petits caractères.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Que peut-on attendre d'un matelas bon marché ?
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    À quoi pouvez-vous vous attendre lorsque votre matelas arrivera enfin ? Jetez un coup d'œil ci-dessous pour le découvrir.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Qualité du matelas</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    La réduction des coûts se fait au détriment de la qualité. Moins vous payez, moins votre matelas sera durable. Un matelas économique de bonne qualité devrait durer au moins cinq ans. Les matelas économiques de meilleure qualité peuvent durer jusqu'à dix ans, et les lits de moindre qualité peuvent commencer à s'abîmer au bout de deux ou trois ans seulement. Les matériaux tels que le latex et les ressorts en acier indiquent un matelas économique plus durable.
                                </p>
                                <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left bg-[#eef5f9] rounded-lg px-4 py-8 mb-4`}>
                                    <p className="pb-2 font-bold">
                                        Niveau d'assistance budgétaire et niveau d'assistance onéreux
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap w-[100%] pt-5`}>
                                        Les matelas bon marché peuvent également offrir un soutien moindre que les matelas plus coûteux. Les personnes de forte corpulence doivent en tenir compte. Si vous avez besoin d'un soutien durable, optez pour un matelas économique plus coûteux.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Valeur</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Pour vous assurer que vous obtenez un produit qui en vaut le coût, gardez à l'esprit les considérations d'achat ci-dessus. Un matelas bon marché devrait durer de cinq à sept ans. Si vous recherchez quelque chose de plus durable, mais que vous ne pouvez pas vous l'offrir pour le moment, achetez un surmatelas pour prolonger la durée de vie de votre matelas actuel de quelques mois.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Choisir la bonne entreprise de matelas</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Avant d'acheter un matelas d'une marque inconnue, faites vos recherches et lisez les commentaires. Nous avons soigneusement vérifié toutes les marques dans ce tour d'horizon, et une bonne façon de vérifier une marque que vous ne connaissez pas est de vérifier la garantie et la période d'essai. Des périodes d'essai et des garanties plus longues sont le signe d'un produit fiable. Vous pouvez également contacter le service clientèle de la marque. Une équipe réactive et transparente est le signe que vous avez affaire à un fabricant de matelas réputé. Pour une aide supplémentaire dans cette catégorie, nous proposons une pléthore d'avis sur les matelas, couvrant des marques aussi bien célèbres qu'obscures.
                                </p>
                            </div>
                        </div>

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%]`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Autres coûts liés aux matelas
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    N'oubliez pas de tenir compte des frais de livraison et des coûts de la nouvelle literie lorsque vous établissez votre budget final. Vous trouverez ci-dessous quelques-uns des coûts supplémentaires les plus courants liés à l'achat d'un nouveau matelas.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Livraison en gants blancs</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Si vous achetez un lit en boîte mais que vous ne souhaitez pas l'installer vous-même, vous pouvez souvent payer un supplément pour une livraison en gants blancs. Dans ce cas, l'équipe de livraison installera votre nouveau matelas. Certaines marques en ligne proposent la livraison en gants blancs gratuitement (surtout si elles ne vendent pas de matelas en boîte). N'oubliez pas de tenir compte de ce coût potentiel lorsque vous choisissez un nouveau lit.
                                </p>
                                <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left bg-[#eef5f9] rounded-lg px-4 py-8 mb-4`}>
                                    <p className="pb-2 font-bold">
                                        Qu'est-ce que la livraison en gants blancs ?
                                    </p>
                                    <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                    text-left text-wrap w-[100%] pt-5`}>
                                        Avec la livraison en gants blancs, les déménageurs installeront votre nouveau matelas dans la pièce de votre choix. Ils enlèveront également votre ancien matelas si nécessaire.
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Élimination des matelas</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    Lorsque vous calculez le coût de votre nouveau lit, pensez à la façon dont vous allez vous débarrasser de votre ancien matelas. Si vous souhaitez vous charger vous-même de l'élimination de votre matelas, prévoyez un ramassage en vrac gratuit dans votre ville et achetez un sac d'élimination des matelas peu coûteux. Si vous souhaitez que quelqu'un d'autre prenne votre lit, vous pouvez acheter un service d'enlèvement de matelas auprès de nombreuses marques de lits en boîte. Certaines marques de matelas traditionnels non emballés proposent l'enlèvement gratuit du matelas lors de la livraison.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Cadres et bases</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Avant d'acheter un matelas d'une marque inconnue, faites vos recherches et lisez les commentaires. Nous avons soigneusement vérifié toutes les marques dans ce tour d'horizon, et une bonne façon de vérifier une marque que vous ne connaissez pas est de vérifier la garantie et la période d'essai. Des périodes d'essai et des garanties plus longues sont le signe d'un produit fiable. Vous pouvez également contacter le service clientèle de la marque. Une équipe réactive et transparente est le signe que vous avez affaire à un fabricant de matelas réputé. Pour une aide supplémentaire dans cette catégorie, nous proposons une pléthore d'avis sur les matelas, couvrant des marques aussi bien célèbres qu'obscures.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Assemblée</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Si vous achetez un nouveau cadre de lit et que vous souhaitez que quelqu'un l'assemble pour vous, ajoutez également ce coût à votre budget matelas. Vous devrez prévoir quelques centaines de dollars pour l'assemblage.
                                </p>
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


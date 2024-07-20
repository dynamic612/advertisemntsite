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

    const [bestBudgetMattress, setBestBudgetMattress] = useState<object[]>([
        {
            company: 'Saatva',
            description: 'Best Overall Cooling Mattress',
        },
        {
            company: 'Helix Midnight Luxe',
            description: 'Best Cooling Mattress for Side Sleepers',
        },
        {
            company: 'Nectar Premier Copper Hybrid ',
            description: 'Best Cooling Hybrid Mattress',
        },
        {
            company: 'Sensoreve Elekctra',
            description: 'Best Soft Cooling Mattress',
        },
        {
            company: 'Emma Hybrid Comfort ',
            description: 'Best Cooling Mattress for Back Pain',
        },
    ]);

    const [compareData, setCompareData] = useState<any[]>([
        {
            model: "Saatva Mattress",
            material: "Innerspring",
            firmness: "Multiple firmness options",
            mark: "/img/cooling/saatva.jpg",
            rate: 4.8,
            cooling: '✓',
            sleep_position: "Back & Stomach",
            title: "Saatva",
            sort: "Best Overall Cooling Mattress",
            content: "The Saatva includes a tall section of pocketed coils, creating a lot of room for airflow. This feature is sure to keep you comfy and cool all through the night.",
            review: "/reviews",
            site: "https://www.saatva.com/mattresses/saatva-classic?utm_source=sleepopolis&utm_medium=affiliate&click_id=1011lyxM5DuR",
            productState: false,
            overviewState: false,
            recommendationState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Hot Sleepers",
                    content: "If you often overheat while you sleep, this mattress should help you stay cool."
                },
                {
                    img:"/img/best/back.svg",
                    title: "Back Pain",
                    content: "This bed is perfect for anyone suffering from back pain."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Back Sleeping",
                    content: "Ideal for lightweight, average weight, and heavyweight back sleepers."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Stomach Sleeping",
                    content: "Ideal for lightweight and average weight stomach sleepers."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Material",
                    content: "Innerspring"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Trial Period",
                    content: "365 nights",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "Shipping Method",
                    content: "Free white glove delivery",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Firmness",
                    content: "Multiple firmness options"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "Warranty",
                    content: "Lifetime warranty"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Price",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Innerspring mattresses are some of the best options for cooling. Unlike foam, innerspring coils leave a ton of room for airflow, helping dissipate body heat and imbue the structure with breathability.  So when deciding on the best mattress for cooling, we knew we had to pick an innerspring mattress like the Saatva. The bulk of this bed consists of a tall internal system of coils. It contains quality materials, boasts a luxury feel, and comes in three different firmness levels. In addition to considering the Saatva’s construction, we ran it through our thermal gun test. After we laid on the bed for 15 minutes, its temperature increased by 11.9 degrees. This indicates decent cooling. We think that, when coupled with the construction, this metric makes the Saatva a truly cooling mattress. \n\n The Saatva certainly behaves like an innerspring. On our pressure map test, there was a moderate amount of pressure (especially when side sleeping). But we also found that the high number of coils made the Saatva a responsive and durable option, great for stomach and back sleepers, or those wanting an “on top of” feel.",
            testersay: [
                "What our tester says:",
                "Considering its airy innerspring construction, I feel that the Saatva is one of the best cooling mattresses.",
                "–  Nichole Mondshein, lead reviewer and staff writer"
            ],
            customersay: "We definitely weren’t surprised to see good reviews regarding Saatva’s customer service. Saatva has free White Glove Delivery, where the company will set up your new mattress and dispose of your old one. There are many positive comments about this process, and many others about friendly and helpful customer service interactions. However, if you feel the need to try out the Saatva mattress in-store, the brand has several showrooms in major cities across the country.",
            pros: [
                "The Saatva is available in three different firmness levels. We think back sleepers will feel most comfortable on the Luxury Firm.",
                "Side sleepers should love the Plush Soft model, which has softer foam and more pressure relief than the other models.",
                "Stomach sleepers should get the support they need on the Firm model. The sturdy springs should help keep their hips in line with their shoulders to promote a healthy alignment."
            ],
            cons: "Some sleepers found the Saatva has high motion transfer, so if you’re easily woken up and sleep with a partner, you might feel their movements at night. We’d recommend a mattress with a plusher comfort layer.",
            reviewName: "Saatva mattress review"
        },
        {
            model: "Helix Midnight Luxe Mattress",
            material: "Hybrid",
            firmness: "Medium-soft: 6/10",
            mark: "/img/cooling/helix.jpg",
            rate: 4.3,
            cooling: '- -',
            sleep_position: "Combination",
            title: "Helix Midnight Luxe",
            sort: "Best Cooling Mattress for Side Sleepers",
            content: "The Helix Midnight Luxe is a supportive mattress that's great for back sleepers. The Midnight Luxe’s thick comfort layer of memory foam provides plenty of pressure relief and contouring while the zoned coils offer a great deal of support.",
            review: "/reviews",
            site: "https://helix-sleep.tkjf.net/c/1196680",
            productState: false,
            overviewState: false,
            recommendationState: false,
            recommendation: [
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Back Sleeping",
                    content: "Ideal for lightweight, average weight, and heavyweight back sleepers."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Side Sleepers",
                    content: "Ideal for average weight and heavyweight side sleepers."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Stomach Sleeping",
                    content: "Ideal for lightweight stomach sleepers."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Material",
                    content: "Hybrid"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Trial Period",
                    content: "100 nights",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "Shipping Method",
                    content: "Free shipping",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Firmness",
                    content: "Medium-soft: 6/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "Warranty",
                    content: "15-year warranty"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Price",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Our favorite cooling mattress for side sleepers is the Helix Midnight Luxe. This hybrid mattress combines memory foam with pocketed coils to offer a supportive combination of bounce and pressure relief. When we lie down on it, we can tell that the coils have excellent airflow, and like all of Helix’s Luxe models, the Midnight Luxe comes outfitted with some additional luxurious touches. It even includes a special Tencel cover that’s ultra-breathable. \n\n During testing, we also tested the standard Helix Midnight, and determined that while both are comfortable for side sleepers, the Midnight Luxe’s added pillow top (a feature of every mattress in the upgraded Luxe line) provides more contouring and softness at the shoulders and hips — the areas where side sleepers put the most pressure.",
            testersay: [
                "What our tester says:",
                "I think that the Helix Midnight sleeps cool enough on its own (the bed’s springs leave plenty of room for airflow), but the Midnight Luxe sleeps even cooler due to its Tencel cover.",
                "–  Nichole Mondshein, lead reviewer and staff writer"
            ],
            customersay: "The plush pillow top and comfort layer are positively commented on by many shoppers. Some report that the mattress helped a lot with joint pain. We think the most affordable and most convenient way to purchase a Helix is online, but if you want to test out the company’s mattresses for yourself, you can do so in the showrooms of many of their brand partners.",
            pros: [
                "It has a medium-firm feel that back sleepers should find comfortable. The balanced feel should help them achieve proper spinal alignment.",
                "The mattress performed well in motion isolation, edge support, and even responsiveness, so it’s a fantastic option for partners who share a bed.",
                "There are five other models in Helix’s Luxe line, all with a different level of firmness. So if the Midnight doesn’t work for you, you have plenty of other options."
            ],
            cons: "This mattress likely isn’t supportive enough for stomach sleepers. Luckily, Helix has a bed called the Helix Plus that’s built with plus-size people in mind. Because it’s designed with extra durability and support, it may give stomach sleepers what they need. ",
            reviewName: "Helix Luxe Midnight mattress review"
        },
        {
            model: "Nectar Premier Copper Hybrid",
            material: "Hybrid",
            firmness: "Medium-soft: 6/10",
            mark: "/img/cooling/Nectar.jpg",
            rate: 4.4,
            cooling: '- -',
            sleep_position: "Back & Side",
            title: "Helix Midnight Luxe",
            sort: "Best Cooling Mattress for Side Sleepers",
            content: "The Nectar Premier Copper Hybrid combines cooling copper infusions, contouring memory foam, and sturdy wrapped coils to bring sleepers pressure relief and support.",
            review: "/reviews",
            site: "https://nectarsleep.com/hybrid-premier-copper-mattress?CIDIMP=XoWVr%3AxB9xyKU7b2Vu1IZxCeUkHVwVVPWQt71Y0&irgwc=1&utm_campaign=IMPACT&utm_content=Online%20Tracking%20Link_ONLINE_TRACKING_LINK&utm_source=SO_Main&utm_medium=AFF&utm_sharedid=&utm_account=8338",
            productState: false,
            overviewState: false,
            recommendationState: false,
            recommendation: [
                {
                    img:"/img/best/back.svg",
                    title: "Back Pain",
                    content: "This bed is perfect for anyone suffering from back pain."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Back Sleeping",
                    content: "Ideal for lightweight and average weight back sleepers."
                },
                {
                    img:"/img/best/sidesleeping.svg",
                    title: "Side Sleepers",
                    content: "Ideal for average weight side sleepers."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Material",
                    content: "Hybrid"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Trial Period",
                    content: "365 nights",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "Shipping Method",
                    content: "Free shipping",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Firmness",
                    content: "Medium-soft: 6/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "Warranty",
                    content: "Lifetime warranty"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Price",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "We’ve chosen the Nectar Premier Copper Hybrid for this list because of its high-tech, high-quality features. Yes, its hybrid construction does allow for cooling, thanks to a layer of coils for airflow. But there’s more than the eye can see. When we lie down on its surface, we feel incredibly cool, thanks to its cool-to-the-touch, copper-infused cover. \n\n One of the most luxurious parts about the Nectar Premier Copper Hybrid is its delicate balance of comfort and support. During testing, we performed our pressure map test, which entails using a special map that uses body heat to tell us exactly how much pressure a mattress puts on certain areas. For the Nectar Premier Copper Hybrid, the medium-soft feel should feel especially comfortable to back sleepers, as the map showed a lot of blue and green, indicating low pressure. For side sleepers, there was a bit more green at the hip, but it should still be nice and comfortable for these folks.",
            testersay: [
                "What our tester says:",
                "I really liked how comfortable the Premier Copper Hybrid was sleeping on my back and was also really impressed by how pressure relieving it was while sleeping on my side. I think the soft, bouncy foams are great for combination sleepers too. I also think the cooling features in this mattress are great for hot sleepers and couples alike.",
                "–  Bridget Chapman, former senior product editor."
            ],
            customersay: "Many customers comment how the Nectar Premier Copper Hybrid helped alleviate their back pain. We think this is probably due to its medium feel and balance of comfort and support. Even though Nectar doesn’t have its own brick and mortar stores, you can test out their products in over 4,000 showrooms of their brand partners across the country.",
            pros: [
                "When placing a pressure map over the Nectar Premier, the graphics show little to no pressure at the shoulders. This is means the Nectar Premier should be a solid choice for shoulder pain.",
                "This bed has the classic feel of memory foam, allowing you to sink into its layers and feel like you’re getting a hug.",
                "As long as they enjoy a softer mattress, back sleepers should be comfortable on the Nectar Premier Copper Hybrid, feeling the memory foam support their spine."
            ],
            cons: "Stomach sleepers will probably need a much firmer and more supportive mattress than the Nectar Premier Copper Hybrid. ",
            reviewName: "Nectar Premier Copper Hybrid mattress review"
        },
        {
            model: "Sensoreve Elekctra Mattress",
            material: "Hybrid",
            firmness: "Medium-soft: 6/10",
            mark: "/img/product/Sensoreve.png",
            rate: 4.4,
            cooling: '✓',
            sleep_position: "Back & Side",
            title: "Sensoreve Elekctra",
            sort: "Best Cooling Mattress for Heavy People",
            content: "The tall layer of pocketed coils in the Elekctra' construction makes it an optimal choice for support and cooling. Above the coils, you'll also find a gel-infused foam layer, which further promotes airflow throughout the mattress.",
            review: "/reviews",
            site: "https://sensoreve.com/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm/fr/32-matelas/30-408-sensoreve-matelas-elekctra-hybrid-association-de-technologie-ressorts-ensaches-5cm-memoire-de-forme-30cm-epaisseur-tot.html#/69-taille-120_190cm",
            productState: false,
            recommendationState: false,
            overviewState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Hot Sleepers",
                    content: "If you often overheat while you sleep, this mattress should help you stay cool."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Back Sleeping",
                    content: "Ideal for heavyweight back sleepers"
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Stomach Sleeping",
                    content: "Ideal for heavyweight stomach sleepers."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Material",
                    content: "Hybrid"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Trial Period",
                    content: "120 nights",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "Shipping Method",
                    content: "Free shipping",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Firmness",
                    content: "Medium-soft : 6/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "Warranty",
                    content: "10-year warranty"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Price",
                    content: "$$$$$"
                },
            ],
            expert_opinion: "Sensorve has a huge selection of mattresses, and the Elekctra falls right in the middle in terms of firmness. It has a medium feel that will appeal to a wide range of sleepers, which is why we chose it as our best overall pick. One of the areas that Sensoreve Elekctra excels in is its pressure reduction. By lying on it, you'll get immediate relief to your lower back and shoulders, while enjoying a slight lift from the support layer of individually wrapped springs. \n\nWe know this because we put the Sensoreve Elekctra through our pressure mapping test, which involves laying a mat on the mattress and using it to track the areas where pressure builds up the most. As we lay on the mat, our map showed mostly blue and green, indicating a low pressure buildup. There was a bit of yellow at the hip area, showing that the Sensoreve Elekctra may not be ideal for side sleepers with hip pain. But since the map doesn't show orange or red, most back and side sleepers should be comfortable on this bed.",
            testersay: [
                "What our tester says :",
                "I love that the Sensoreve Elekctra offers solid edge support – you can use the whole bed! It also offers excellent motion isolation, making it an attractive option for couples. I also really like this bed for combination sleepers. The mattress is inflatable, allowing you to easily turn or change positions at night without worrying about getting “stuck” in the bed.",
                "– Bridget Chapman, former senior product editor"
            ],
            customersay: "Many reviews mention the Helix Sleep Quiz, which lasts 30 seconds and helps buyers find the best Helix model for their needs. Many buyers have purchased the Sensoreve Elekctra because of the sleep quiz, and many of them have positive reviews.",
            pros: [
                "Many buyers have purchased the Sensoreve Elekctra because of the sleep quiz, and many of them have positive reviews.",
                "Back sleepers should appreciate the Sensoreve Elekctra’s balance of comfort and support. They will benefit from some padding in the lumbar region and the springs will help keep their spine neutrally aligned.",
                "Side sleepers also require a mix of comfort and support. They should benefit from some pressure relief and contouring in their shoulders and hips. These are the areas they put the most pressure on while sleeping. For additional pressure relief, we recommend the Sensoreve Elekctra."
            ],
            cons: "Of all sleeping positions, stomach sleepers need the most support, and they probably won't get it on the Sensoreve Elekctra.",
            reviewName: "Sensoreve Elekctra Mattress Review"
        },
        {
            model: "Emma Hybrid Comfort",
            material: "Hybrid",
            firmness: "Firm: 7.5/10",
            mark: "/img/cooling/emma.jpg",
            rate: 4.4,
            cooling: '✓',
            sleep_position: "Back & Stomach",
            title: "Emma Hybrid Comfort",
            sort: "Best Cooling Mattress for Side Sleepers",
            content: "The Emma Hybrid Comfort is a firm, supportive, and bouncy mattress. A good fit for back sleepers and stomach sleepers, it also has open-celled foam for cooling.",
            review: "/reviews",
            site: "https://www.emma-sleep.com/products/emma-hybrid-sleepopolis?sscid=51k8_n7i0w&utm_campaign=2518564&utm_medium=Affiliate&utm_source=Shareasale-1578665",
            productState: false,
            overviewState: false,
            recommendationState: false,
            recommendation: [
                {
                    img:"/img/best/hotsleeping.svg",
                    title: "Hot Sleepers",
                    content: "If you often overheat while you sleep, this mattress should help you stay cool."
                },
                {
                    img:"/img/best/backsleeping.svg",
                    title: "Back Sleeping",
                    content: "Ideal for average weight and heavyweight back sleepers."
                },
                {
                    img:"/img/best/stomachsleeping.svg",
                    title: "Stomach Sleeping",
                    content: "Ideal for lightweight and heavyweight stomach sleepers."
                },
            ],
            overview: [
                {
                    img:"/img/best/material.svg",
                    title: "Material",
                    content: "Hybrid"
                },
                {
                    img:"/img/best/period.svg",
                    title: "Trial Period",
                    content: "365 nights",
                },
                {
                    img:"/img/best/shipping.svg",
                    title: "Shipping Method",
                    content: "Free shipping",
                },
                {
                    img:"/img/best/firmness.svg",
                    title: "Firmness",
                    content: "Firm: 7.5/10"
                },
                {
                    img:"/img/best/warranty.svg",
                    title: "Warranty",
                    content: "10-year warranty"
                },
                {
                    img:"/img/best/price.svg",
                    title: "Price",
                    content: "$$$"
                },
            ],
            expert_opinion: "When discussing the best beds for back pain, we’re talking mattresses with a balance of comfort and support. Often, medium-firm or firmer hybrid mattresses do the trick, as they’re equipped with soft foams to fill in the lumbar region, and sturdy coils to lift the body into a neutral alignment. It can also be important to find a cooling mattress if you suffer from back pain, especially if you’re a hot sleeper. Let’s face it, back pain already causes more than enough problems. The last thing folks need is additional discomfort. \n\n ur favorite cooling mattress for back pain is the Emma Hybrid Comfort. This is no surprise, as it did well at our cooling test in the mattress lab (a 4 out of 5). When scoring a mattress’s cooling, we take its construction into consideration, and the coils in this bed leave plenty of room for air to flow. We also recently started measuring the temperature of our mattresses with a thermal gun (note: not all of the products in this list have undergone this test yet). After 15 minutes of lying down on the Emma Hybrid Comfort, its temperature only rose 7.7 degrees Fahrenheit, a further indication of good cooling. And in the realm of back pain, our pressure relief test showed overall very low pressure buildup in the back-sleeping position. Around the lumbar region, our graphic shows only green and blue.",
            testersay: [
                "What our tester says:",
                "Based on the testing results from the above criteria, I’d say that the Emma Hybrid Comfort is a good mattress for couples. It performed well in all categories, from cooling and edge support to motion isolation and responsiveness. Most couples, especially heavier couples or those who prefer a firmer feel, should appreciate this mattress.",
                "–  Nichole Mondshein, lead reviewer and staff writer"
            ],
            customersay: "If you’re wanting your mattress to show up at your doorstep ASAP, we do recommend the Hybrid Comfort. Customers note that the delivery was not only free, but also speedy.",
            pros: [
                "The coils are softer in some places and firmer in others, helping to keep the spine in a neutral alignment. This zoned support makes the bed a solid option for back pain and back sleepers.",
                "The Emma Hybrid Comfort scored well in all important categories for couples: motion isolation, responsiveness, cooling, and edge support.",
                "This bed is sturdy enough to support the spinal alignment of heavy back sleepers and even heavy stomach sleepers."
            ],
            cons: "Side sleepers of all body weights will likely find that this mattress is a bit too firm to properly contour the hip and shoulder.",
            reviewName: "Emma Hybrid Comfort mattress review"
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
        "If it’s not too hot during the day, keep the windows open while keeping the shutters, curtains, or blinds closed.",
        "At night, open the windows to create a cross breeze.",
        "If you have a fan on the floor, keep a container of ice in front of it. It will help cool the air circulating throughout the room.",
        "Use cotton or linen bedding. Wearing cotton pajamas can also help.",
        "Drink plenty of water so you can stay hydrated throughout the day.",
        "Take a cool or cold shower before you go to bed.",
        "If you sleep with a partner, pet, or both, try to keep some space between everyone. This will also help with airflow.",
        "Investing in some of the aforementioned accessories can also be beneficial to stay cool without breaking the bank."
    ]);

    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-start w-full">
                <div className="w-full h-[700px] 2xl:h-[40vw] xl:h-[650px] lg:h-[600px] md:h-[500px] sm:h-[650px] bg-[#F1F1F1] flex justify-center items-start mb-20">
                    <div className="flex flex-col items-start justify-between font-marcellus pl-[5%] w-full">
                        <Link href='/' className={`${styles.manropeFont} text-[#87806A] sm:text-[16px] text-[14px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] font-bold text-left w-[100%] pt-[5%] text-wrap`}>
                            Home
                        </Link>
                        <div className="w-[90%] flex flex-col justify-start items-start pb-[5%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[48px] xl:text-[44px] md:text-[32px] sm:text-[32px] text-[24px] font-bold text-wrap w-[90%] py-[2%] pl-[5%] text-center`}>
                                Best Cooling Mattress for Hot Sleepers
                                <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] sm:text-[14px] text-[12px] md:text-[16px] font-bold 
                                text-left text-wrap w-[100%]`}>
                                    by Bridget Chapman | Updated: May 16, 2024
                                </p>
                            </div>
                            <div className="w-full flex justify-start items-start pl-[5%]">
                                <span className="border-[2px] border-[#78c2ef] rounded-full">
                                    <img src="/img/cheap/Reviewer.png" alt="évaluateur"  className="lg:w-[4vw] lg:h-[4vw] md:w-[5vw] md:h-[5vw] w-[34px] rounded-[50px] border-[2px] border-[#F7E4D6]"/>
                                </span>
                                <p className={`${styles.robotoFont} 2xl:text-[20px] sm:text-[14px] md:text-[18px] text-[14px] ml-[3%] text-left flex items-center lg:h-[4vw] md:h-[5vw] h-[34px]`}>Written by<br></br>
                                    Bridget Chapman, Mattress Reviewer
                                </p>
                            </div>
                            <div className="w-full flex flex-col justify-start items-start pt-[1%] pl-[5%] gap-[3%] md:flex-row">
                                <div className="flex justify-start items-start w-[100%] md:w-[50%] my-[20px] md:my-[0px]">
                                    <span >
                                        <img src="/img/method.png" alt="évaluateur"  className="lg:w-[48px] lg:h-[48px] md:w-[36px] md:h-[36px] w-[32px] mt-[5px]"/>
                                    </span>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[36px] text-[20px] lg:text-[28px] md:text-[21px] font-bold text-wrap w-[90%] pl-[5%]`}>
                                        Our Methodology
                                        <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] md:text-[14px] lg:text-[16px] font-bold 
                                        text-left text-wrap w-[100%] sm:text-[16px] text-[12px]`}>
                                            Our Certified Sleep Science Coaches have reviewed more than 300 mattresses in our lab, testing each one on its materials, comfort, cooling, support, and other categories.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex justify-start items-start w-[90%] md:w-[50%]">
                                    <span >
                                        <img src="/img/check.png" alt="évaluateur"  className="lg:w-[40px] lg:h-[40px] md:w-[30px] w-[28px] md:h-[30px] mt-[5px]"/>
                                    </span>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] 2xl:text-[36px] text-[20px] lg:text-[28px] md:text-[21px] font-bold text-wrap w-[90%] pl-[5%]`}>
                                        Just Updated
                                        <p className={`${styles.manropeFont} text-[#69747F] 2xl:text-[18px] md:text-[14px] lg:text-[16px] sm:text-[16px] text-[12px] font-bold 
                                        text-left text-wrap w-[100%]`}>
                                            We’ve recently re-evaluated our picks for the best cooling mattresses and added more insight from our testers in the lab. If it’s on this list, you can be confident we’ve personally tested it and the bed has gel infusions, coils for airflow, or another added feature that helps keep sleepers cool.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rubikFont} text-[#1A1D20] text-[14px] xl:text-[20px] lg:text-[18px] md:text-[16px]
                text-left text-wrap w-[80%] mb-20`}>
                    Are you a hot sleeper? You’re not alone! This is one of the most common complaints we hear about at Somnopolis. Many factors can impact how hot you sleep, including the temperature of your home, the climate you live in, whether you share a bed with a partner or pet, or your sleeping preference. Fortunately, finding the best cooling mattress — combined with other cooling bedding accessories — can help you stay fresh and comfortable all night long.
                    <p>&nbsp;</p>
                    At Somnopolis, we put each of our reviewed mattresses through a series of rigorous tests to see how well they perform in a number of categories: motion isolation, responsiveness, pain relief, and more. Of course, for the best cooling mattresses, we wanted to pay special attention to the quality of each product’s cooling properties. All of the below mattress have either an added cooling feature or a construction that promotes airflow.
                </div>
                <div className="block text-center w-full mb-[20px] pl-[10%] lg:flex">
                    <div className="w-full lg:w-[65%]">
                        <div className="flex flex-col w-[90%] items-start justify-center bg-[#d2e1eb] rounded-[30px] py-[20px] px-[5%] mb-20">
                            <p className={`${styles.manropeFont} text-center md:text-left text-3xl font-bold w-full pb-[20px]`}>&nbsp; Best Cooling Mattresses of 2024: &nbsp;</p>
                            
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
                        <p className={`${styles.manropeFont} text-3xl font-bold pb-2 mb-10 text-left border-b-2 border-[#324983] w-[90%]`}>
                            Compare the Best Cooling Mattresses &nbsp;
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
                                        <td key={index} className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.firmness}
                                        </td>
                                    )}
                                </tr>
                                
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Material</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td key={index} className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
                                            {item.material}
                                        </td>
                                    )}
                                </tr>
                                
                                <tr>
                                    <td className="px-3 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center border border-gray-200">Cooling</td>
                                    {
                                    compareData.map((item:any, index:any) =>
                                        <td key={index} className={`px-2 py-2 whitespace-no-wrap border text-xs border-gray-200 text-center bg-white}`}>
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
                                                    Check reviews
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
                                                        <span ><img src={`${item.rate>4.7 ? "/img/star_half.svg" : "/img/star_empty.svg"}`} alt="My SVG Image"  className="w-[30px] h-full"/></span>						
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
                                            Product Details
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
                                            Our Recommendation
                                        </div>
                                        {
                                            item.recommendationState && <div className="block justify-start items-start text-center ml-[7%] gap-[5%] px-[10px] py-[5%] bg-white rounded-[10px] w-[90%]">
                                                <p className={`${styles.manropeFont} text-[#1A1D20] text-[12px] lg:text-[14px] font-bold text-wrap text-left`}>We recommend this mattress for the following types of sleepers:</p>
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
                                            </div>
                                        }
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Expert Opinion</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[12px] lg:text-[16px] 
                                        text-left text-wrap w-[100%]`}>
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
                                        <p className="font-bold">What Customers Say</p>
                                        <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                        <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                        text-left text-wrap w-[100%]`}>
                                            {item.customersay}
                                        </p>
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Pros of the {item.model}</p>
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
                                    </div>
                                    <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                        <p className="font-bold">Cons of the {item.model}</p>
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
                                        {/* <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap pt-5`}>
                                            Pour en savoir plus, consultez notre avis complet sur le{item.reviewName} ou cliquez ici pour obtenir notre meilleure offre. Vous trouverez d'autres options dans notre tour d'horizon des meilleurs matelas pour les dormeurs mixtes.
                                        </p> */}
                                    </div>
                                </div>
                            )
                        }

                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%] mb-5`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    What Is a Cooling Mattress?
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    It’s basically what it sounds like: a cooling mattress is one that wicks heat away to keep you cool at night. It’s important to allow airflow throughout the mattress, which brands accomplish through a number of different materials.
                                    <br></br><br></br>
                                    For example, a traditional spring coil can easily breathe, given that the coils are very thin and, at most, will be wrapped in a thin layer of foam or fabric. A material like memory foam may not breathe as well as a coil, as there’s more material preventing air from circulating in and out of the mattress.                                    <br></br><br></br>
                                    Similar to breathability, a material’s heat conductivity and heat retention are important. A steel coil isn’t great at absorbing your body heat, and it’s even worse at holding onto that heat. However, a traditional memory foam soaks up body heat and retains it, usually causing that memory foam to feel a bit softer and warmer.</p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left bg-[#eef5f9] rounded-lg px-4 py-8 my-4`}>
                                <p className="pb-2 font-bold">
                                    Our Rankings for Cooling
                                </p>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%] pt-5`}>
                                    In our testing over the years, we’ve come to believe that the cooling of materials is generally ordered as follows (from most cool to least cool):
                                </p>
                                <p/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap w-[100%] pt-5 ml-5`}>
                                    1. Coils<br/>
                                    2. Latex<br/>
                                    3.Hybrid(mixture of coils and foams and/or latex)<br/>
                                    4. Memory Foams
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap`}>
                                    It’s important to remember that the materials used alone are not the only factor that determines the cooling of a mattress. The layer design, and cover also play an important part.
                                    <br></br><br></br>
                                    Still, materials are a great place to start, so let’s take a closer look at these building blocks of the mattress world.</p>
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
                                <p className="font-bold">Coils and Springs</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    The most traditional of mattress types use one or more layers of coils/springs. This kind of construction not only provides comfort and balance, but it also allows for airflow because there’s so much space inside the bed. Bear in mind, many coil mattresses contain some foams (usually poly foam or memory foam), which are often quilted within the covers of the mattress. Sometimes, these materials are not explicitly disclosed.

                                </p>
                                <img src="/img/cooling/coil.png" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Latex Foam</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Latex foam doesn’t change its feel based on how hot or cold the room is because it isn’t a good conductor of heat. It will almost always feel the same. Also, most latex foam layers are aerated, thus allowing for greater airflow.
                                </p>
                                <img src="/img/cooling/latex.gif" alt="Lucid Mattress" className="text-center w-[50%] my-5 ml-[25%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    This combination of factors makes latex a great option for cooling in a mattress. However, it’s important to remember that this is only true of 100 percent natural latex. Blended or synthetic latex is aerated in the same way, but they also share qualities of poly foam. This isn’t to say that all synthetic or blended latexes are bad or not cool (they certainly can be). You’ll just want to be sure you know the types of latex being used in the mattress to make a proper judgment call.
                                </p>
                                <img src="/img/cooling/latex.png" alt="Lucid Mattress" className="text-center w-[50%] my-5 ml-[25%]"/>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Memory Foam</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Memory foam, also known as viscoelastic memory foam and viscoelastic poly foam, is a type of polyurethane foam with viscoelastic properties. Viscoelastic means that memory foams have both viscous and elastic characteristics when under pressure. Essentially, they are slower to respond when pressure is applied and released. This effect creates great hug and contour, but for some sleepers, it can lead to a trapped feeling that can diminish cooling.
                                </p>
                                <img src="/img/cooling/memory.png" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    It’s important to note that the term “memory foam” doesn’t refer to a single type of material, but is simply a classification of poly foam that is viscoelastic. As such, there are scores of different types of memory foam with different qualities and attributes. The same can be said about standard non-viscoelastic poly foams.
                                </p>
                            </div>
                        </div>
                        
                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%] mb-5`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    What’s the Best Mattress Design for Hot Sleepers?
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap`}>
                                    While it’s important to understand how what a mattress is made of can impact cooling and heat performance, it’s more critical to understand how these materials work together within the larger design of the mattress itself. For example, you will almost never see a mattress that’s 100 percent traditional viscoelastic memory foam from top to bottom. Instead, you’ll have a layer or two of memory foam and a layer or two of poly foam. These materials work together to create airflow and a comfortable cooling surface on the mattress.
                                </p>
                            </div>
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[18px] lg:text-[20px] text-wrap text-left pt-[5%]`}>
                                <p className="font-bold">Keeping Airflow In Mind</p>
                                <hr className="w-[15%] bg-[#5ca9e8] my-2 "></hr>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    Many companies understand how important a cool mattress is and take their material design to the next level by further improving the airflow capabilities. These companies use special machines to mold, compress, or cut the foam into a design that allows greater movement of air.
                                    <br/><br/>
                                    The most basic level of this technique is to punch holes within the top of the foam. 
                                </p>
                                <img src="/img/cooling/design1.jpg" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] 
                                text-left text-wrap w-[100%]`}>
                                    More advanced techniques create deeper and more pronounced channels within the foam, dramatically improving airflow.
                                </p>
                                <img src="/img/cooling/design2.png" alt="Lucid Mattress" className="text-center w-[80%] my-5 ml-[10%]"/>
                            </div>
                        </div>
                        
                        <div className="w-[90%]">
                            <div className={`${styles.manropeFont} text-[#1A1D20] text-[22px] lg:text-[24px] text-wrap text-left pt-[5%] mb-5`}>
                                <p className="border-b-2 border-[#324983] pb-2 font-bold">
                                    Other Ways to Stay Cool at Night
                                </p>
                            </div>
                            <div className="flex flex-row w-full items-start justify-left">
                                <p className={`${styles.rubikFont} text-[#1A1D20] text-[14px] lg:text-[16px] text-left text-wrap mb-5`}>
                                    As nice as it is to purchase a cooling mattress, we recognize that it may not be within everyone’s budget.
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


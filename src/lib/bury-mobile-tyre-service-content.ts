import type { ContentSection } from "@/lib/content-sections";
import type { Faq } from "@/lib/services";
import { serviceAreas } from "@/lib/service-areas";

const buryLocations =
  serviceAreas
    .find((area) => area.slug === "bury")
    ?.locations.map((location) => location.name) ?? [];

export const buryMobileTyreServiceHero = {
  title: "Mobile Tyre Service Bury | Road Heroes 24/7",
  tagline:
    "Fast Mobile Tyre Assistance In Bury. We Come To You At Home, Work Or A Safe Roadside Location.",
  points: [
    "Professional Mobile Tyre Service Across Bury",
    "Mobile Tyre Fitting And Repair At Your Location",
    "Emergency Tyre Assistance When You Need It",
    "Tyre Replacement For Cars And Vans",
    "Same Day Appointments Where Available",
    "Clear Pricing Before Your Tyre Service Begins",
  ],
  cta: "Book Mobile Tyre Service Now",
};

export const buryMobileTyreServiceDescription =
  "Mobile Tyre Service Bury — mobile tyre fitting, repair, replacement and emergency tyre assistance at your home, work or a safe roadside location. Road Heroes 24/7.";

export const buryMobileTyreServiceSections: ContentSection[] = [
  {
    id: "mobile-tyre-service-bury",
    eyebrow: "Mobile Tyre Service",
    title: "Mobile Tyre Service Bury That Comes To You",
    paragraphs: [
      "A damaged or flat tyre can happen at the worst possible time. You may be at home getting ready for work, parked outside your workplace, shopping in Bury or stuck with a tyre problem on the roadside.",
      "Road Heroes 24/7 provides a convenient Mobile Tyre Service Bury for drivers who need tyre assistance without making a trip to a traditional tyre garage.",
      "Our mobile technicians can come to your location where safe access is available. Depending on your tyre problem, we can provide mobile tyre fitting, tyre repair, tyre replacement and emergency tyre assistance.",
      "Whether you need a single replacement tyre or urgent help with a damaged tyre, our service is designed to make the process easier.",
    ],
    image: {
      src: "/images/front-wheel-removed-street.jpg",
      alt: "Car with its front wheel removed on a residential street, with jack and impact wrench",
    },
  },
  {
    id: "why-choose-road-heroes-mobile-tyre-service-bury",
    eyebrow: "Why Road Heroes 24/7",
    title: "Why Choose Road Heroes 24/7 For Mobile Tyre Service Bury?",
    paragraphs: [],
    items: [
      {
        title: "We Come To Your Location",
        description:
          "You do not always need to drive to a tyre centre when you have a tyre problem. Our mobile service allows assistance to take place at a suitable location.",
      },
      {
        title: "Convenient Tyre Fitting",
        description:
          "Our Mobile Tyre Fitting Bury service is designed for drivers who want tyres fitted at home, work or another suitable location.",
      },
      {
        title: "Emergency Tyre Assistance",
        description:
          "A flat or damaged tyre can leave you unable to continue your journey. Our Emergency Tyre Service Bury provides mobile assistance when you need help.",
      },
      {
        title: "Tyre Repair And Replacement",
        description:
          "Depending on the condition of the tyre, a suitable repair may be possible. If the tyre cannot safely be repaired, replacement may be recommended.",
      },
      {
        title: "Support For Cars And Vans",
        description:
          "Our mobile tyre service can assist with suitable cars and vans where safe access is available.",
      },
      {
        title: "Local Bury Coverage",
        description:
          "Road Heroes 24/7 provides mobile tyre assistance across Bury and surrounding areas.",
      },
    ],
  },
  {
    id: "what-does-mobile-tyre-service-bury-include",
    eyebrow: "What's Included",
    title: "What Does Our Mobile Tyre Service Bury Include?",
    paragraphs: [
      "Our mobile service can cover several common tyre requirements.",
    ],
    subsections: [
      {
        title: "Mobile Tyre Fitting Bury",
        paragraphs: [
          "Need a new tyre fitted without visiting a garage?",
          "Our Mobile Tyre Fitting Bury service allows you to arrange tyre fitting at a suitable location.",
          "You can provide your vehicle details and tyre requirements, and we can help identify a suitable tyre option.",
        ],
      },
      {
        title: "Mobile Tyre Repair Bury",
        paragraphs: [
          "A puncture does not always mean that you need a new tyre.",
          "Our Mobile Tyre Repair Bury service can assess the damaged tyre and determine whether a safe repair is possible.",
          "Not every tyre can or should be repaired. The condition, location and severity of the damage need to be considered before a repair is carried out.",
        ],
      },
      {
        title: "Mobile Tyre Replacement Bury",
        paragraphs: [
          "If a tyre is damaged beyond safe repair, replacement may be required.",
          "Our Mobile Tyre Replacement Bury service provides a convenient way to replace the affected tyre without arranging a separate garage visit where mobile fitting is suitable.",
        ],
      },
      {
        title: "Emergency Tyre Service Bury",
        paragraphs: [
          "If you are unable to continue your journey because of a flat, damaged or unsafe tyre, our Emergency Tyre Service Bury can provide mobile assistance subject to availability.",
        ],
      },
      {
        title: "Tyre Fitting Near Me Bury",
        paragraphs: [
          "When you search for Tyre Fitting Near Me Bury, you are usually looking for a tyre service that can reach your location quickly and conveniently.",
          "Road Heroes 24/7 provides mobile tyre fitting for suitable locations across Bury and surrounding areas.",
        ],
        listIntro: "Areas we cover in Bury include:",
        bullets: buryLocations,
      },
      {
        title: "24 Hour Mobile Tyre Bury",
        paragraphs: [
          "Tyre problems do not always happen during normal working hours.",
          "Our 24 Hour Mobile Tyre Bury service provides extended mobile tyre assistance where available, helping drivers who experience tyre problems outside standard garage hours.",
        ],
      },
    ],
  },
  {
    id: "how-does-mobile-tyre-fitting-bury-work",
    eyebrow: "How It Works",
    title: "How Does Mobile Tyre Fitting Bury Work?",
    paragraphs: ["The process is simple and designed around your location."],
    steps: [
      {
        title: "Step One: Contact Road Heroes 24/7",
        description: "Tell us that you need mobile tyre assistance in Bury.",
      },
      {
        title: "Step Two: Provide Your Vehicle Details",
        description:
          "Provide your vehicle make, model and tyre information where possible.",
      },
      {
        title: "Step Three: Explain Your Tyre Problem",
        description:
          "Tell us whether you have a puncture, flat tyre, damaged tyre or need a replacement.",
      },
      {
        title: "Step Four: Share Your Location",
        description:
          "Give us your exact suitable location so the technician knows where assistance is required.",
      },
      {
        title: "Step Five: Choose A Suitable Tyre",
        description:
          "If replacement is required, available tyre options can be discussed based on your vehicle and requirements.",
      },
      {
        title: "Step Six: Mobile Technician Arrives",
        description:
          "The technician travels to your location and assesses the tyre.",
      },
      {
        title: "Step Seven: Tyre Service Is Completed",
        description:
          "The required tyre fitting, replacement or suitable repair is carried out where possible.",
      },
    ],
  },
  {
    id: "when-do-you-need-mobile-tyre-repair-bury",
    eyebrow: "Mobile Tyre Repair",
    title: "When Do You Need Mobile Tyre Repair Bury?",
    paragraphs: [
      "A mobile tyre repair service can be useful when you notice signs of tyre damage but the tyre may still be suitable for repair.",
      "Common situations include:",
    ],
    items: [
      {
        title: "Puncture",
        description:
          "A puncture caused by a suitable repairable object may sometimes be repaired.",
      },
      {
        title: "Slow Tyre Pressure Loss",
        description:
          "If your tyre repeatedly loses pressure, there may be a puncture, valve issue or other problem that needs inspection.",
      },
      {
        title: "Damaged Tyre",
        description:
          "Visible damage should be assessed before continuing to drive.",
      },
      {
        title: "Unexpected Flat Tyre",
        description:
          "A tyre that has suddenly lost pressure may require urgent assistance.",
      },
    ],
    note: "Do not continue driving on a severely damaged or completely flat tyre because doing so can cause additional damage and create a safety risk.",
  },
  {
    id: "when-do-you-need-mobile-tyre-replacement-bury",
    eyebrow: "Mobile Tyre Replacement",
    title: "When Do You Need Mobile Tyre Replacement Bury?",
    paragraphs: [
      "Replacement is generally considered when the tyre is not safe or suitable for repair.",
      "This may include:",
    ],
    items: [
      {
        title: "Severe Sidewall Damage",
        description:
          "Sidewall damage can compromise the tyre structure and may require replacement.",
      },
      {
        title: "Major Puncture Damage",
        description: "Some punctures cannot be safely repaired.",
      },
      {
        title: "Excessive Wear",
        description:
          "A tyre with insufficient tread or uneven wear may need replacing.",
      },
      {
        title: "Multiple Damaged Tyres",
        description:
          "If more than one tyre is damaged, mobile replacement can provide a convenient solution where suitable.",
      },
      {
        title: "Old Or Deteriorated Tyres",
        description:
          "Tyres can deteriorate over time even when the vehicle is not driven frequently.",
      },
    ],
  },
  {
    id: "emergency-tyre-service-bury",
    eyebrow: "Emergency Tyre Service",
    title: "Emergency Tyre Service Bury",
    paragraphs: [
      "A tyre emergency can leave you stuck in an inconvenient location.",
      "Road Heroes 24/7 provides mobile Emergency Tyre Service Bury assistance for suitable situations.",
      "If you have a flat tyre, damaged tyre or sudden tyre problem, contact us and explain your situation.",
    ],
    image: {
      src: "/images/night-tyre-change-car-park.jpg",
      alt: "Car with its front wheel removed in a car park at night",
    },
    subsections: [
      {
        title: "What Should You Do During A Tyre Emergency?",
        paragraphs: ["Your safety should always come first."],
        bullets: [
          "If you are on the roadside, move to a safe location if this is possible without creating additional danger.",
          "Turn on your hazard lights when appropriate.",
          "Do not attempt to change a tyre in an unsafe position close to moving traffic.",
          "Contact Road Heroes 24/7 and provide your location and vehicle details.",
        ],
      },
    ],
  },
  {
    id: "24-hour-mobile-tyre-bury",
    eyebrow: "24 Hour Mobile Tyres",
    title: "24 Hour Mobile Tyre Bury",
    paragraphs: [
      "Tyre problems can happen early in the morning, late at night or during a weekend journey.",
      "Our 24 Hour Mobile Tyre Bury service is designed to provide mobile tyre assistance beyond standard garage hours where availability allows.",
      "Whether you are dealing with a puncture, flat tyre or replacement requirement, you can contact Road Heroes 24/7 to check current service availability.",
    ],
  },
  {
    id: "mobile-tyre-service-at-home-bury",
    eyebrow: "At Home",
    title: "Mobile Tyre Service At Home In Bury",
    paragraphs: [
      "You may not need to leave your home to get a tyre fitted or replaced.",
      "Our mobile tyre service can come to a suitable driveway or private location where there is enough space and safe access to work on the vehicle.",
      "This can be especially convenient when:",
    ],
    items: [
      {
        title: "You Have A Flat Tyre",
        description:
          "A flat tyre may make it difficult or unsafe to drive to a garage.",
      },
      {
        title: "You Have A Busy Schedule",
        description:
          "Mobile fitting can save time by bringing the service to your location.",
      },
      {
        title: "Your Vehicle Is Not Roadworthy",
        description:
          "If the tyre condition prevents safe driving, mobile assistance can help you avoid driving the vehicle to a garage.",
      },
    ],
  },
  {
    id: "mobile-tyre-service-at-work-bury",
    eyebrow: "At Work",
    title: "Mobile Tyre Service At Work In Bury",
    paragraphs: [
      "A tyre problem does not always happen at home.",
      "You may discover a flat tyre when leaving work or find a damaged tyre while your vehicle is parked.",
      "Where suitable access is available, a mobile technician can provide assistance at your workplace.",
      "This means you may be able to have the tyre issue addressed without arranging separate transport for your vehicle.",
    ],
    image: {
      src: "/images/tyre-fitting-house-driveway.jpg",
      alt: "SUV raised on a jack on a house driveway for tyre fitting",
    },
  },
  {
    id: "mobile-tyre-service-cars-and-vans-bury",
    eyebrow: "Cars And Vans",
    title: "Mobile Tyre Service For Cars And Vans",
    paragraphs: [
      "Road Heroes 24/7 can provide mobile tyre assistance for suitable cars and vans.",
    ],
    items: [
      {
        title: "Car Tyre Service",
        description:
          "We can assist with common car tyre requirements including fitting, replacement and suitable puncture repair.",
      },
      {
        title: "Van Tyre Service",
        description:
          "Van drivers depend on their vehicles for work and daily travel. A tyre problem can cause unnecessary delays. Mobile assistance can provide a convenient option when a van has a flat or damaged tyre and safe access is available.",
      },
    ],
  },
  {
    id: "tyre-problems-mobile-assistance-can-help-with",
    eyebrow: "Tyre Problems",
    title: "What Types Of Tyre Problems Can Mobile Assistance Help With?",
    paragraphs: [
      "Our mobile service can assist with common tyre related problems including:",
    ],
    items: [
      {
        title: "Flat Tyres",
        description:
          "A completely flat tyre may require repair or replacement.",
      },
      {
        title: "Punctures",
        description:
          "Some punctures can be safely repaired following inspection.",
      },
      {
        title: "Damaged Tyres",
        description:
          "Visible damage should be assessed before continuing to drive.",
      },
      {
        title: "Worn Tyres",
        description: "Tyres with excessive wear may need replacement.",
      },
      {
        title: "Low Tyre Pressure",
        description:
          "Repeated pressure loss can indicate an underlying tyre problem.",
      },
      {
        title: "Emergency Replacement",
        description:
          "If a tyre cannot be safely repaired, replacement may be required.",
      },
    ],
  },
  {
    id: "how-to-tell-if-you-have-a-tyre-problem",
    eyebrow: "Warning Signs",
    title: "How Can You Tell If You Have A Tyre Problem?",
    paragraphs: ["There are several signs that your tyres may need attention."],
    items: [
      {
        title: "Low Tyre Pressure",
        description:
          "If the tyre pressure warning light appears or a tyre looks visibly low, check the tyre as soon as it is safe.",
      },
      {
        title: "Steering Changes",
        description:
          "A damaged or underinflated tyre can affect how the vehicle feels when steering.",
      },
      {
        title: "Vibrations",
        description:
          "Unusual vibration can sometimes indicate a tyre or wheel related issue.",
      },
      {
        title: "Visible Damage",
        description:
          "Cuts, bulges or other visible damage should not be ignored.",
      },
      {
        title: "Repeated Pressure Loss",
        description:
          "A tyre that repeatedly loses pressure should be inspected.",
      },
    ],
  },
  {
    id: "where-road-heroes-provides-mobile-tyre-service-bury",
    eyebrow: "Areas Covered",
    title: "Where Does Road Heroes 24/7 Provide Mobile Tyre Service In Bury?",
    paragraphs: [
      "Road Heroes 24/7 provides mobile tyre assistance across Bury and surrounding areas where safe access is available.",
    ],
    items: [
      {
        title: "Bury Town Centre",
        description:
          "Mobile tyre assistance for drivers in and around central Bury.",
      },
      {
        title: "Elton",
        description: "Support for suitable mobile tyre requirements in Elton.",
      },
      {
        title: "Radcliffe",
        description:
          "Mobile tyre fitting, repair and replacement assistance for drivers around Radcliffe.",
      },
      {
        title: "Whitefield",
        description: "Tyre assistance for suitable locations in Whitefield.",
      },
      {
        title: "Prestwich",
        description:
          "Mobile tyre services for drivers in Prestwich and nearby areas.",
      },
      {
        title: "Ramsbottom",
        description:
          "Mobile tyre assistance for suitable locations around Ramsbottom.",
      },
      {
        title: "Tottington",
        description:
          "Tyre fitting and mobile tyre support for drivers in Tottington.",
      },
      {
        title: "Summerseat",
        description:
          "Mobile assistance for suitable tyre related problems around Summerseat.",
      },
    ],
  },
  {
    id: "where-can-i-get-mobile-tyre-service-near-bury",
    eyebrow: "Suitable Locations",
    title: "Where Can I Get Mobile Tyre Service Near Bury?",
    paragraphs: [
      "Mobile tyre service can potentially be provided at several suitable locations.",
    ],
    listIntro: "This may include:",
    bullets: [
      "Home addresses",
      "Driveways",
      "Workplaces",
      "Business premises",
      "Private car parks",
      "Suitable public locations",
      "Safe roadside locations",
    ],
    closingParagraph:
      "The location must provide sufficient space and safe access for the technician to work.",
  },
  {
    id: "mobile-tyre-fitting-instead-of-garage-visit",
    eyebrow: "Mobile vs Garage",
    title: "Why Choose Mobile Tyre Fitting Instead Of A Garage Visit?",
    paragraphs: [],
    items: [
      {
        title: "It Saves Time",
        description: "You do not necessarily need to drive to a tyre centre.",
      },
      {
        title: "It Comes To You",
        description: "The technician can travel to a suitable location.",
      },
      {
        title: "It Is Convenient",
        description:
          "You can arrange assistance around your daily schedule where appointments are available.",
      },
      {
        title: "It Helps During Emergencies",
        description:
          "Mobile assistance can be particularly useful when your vehicle cannot safely continue its journey.",
      },
      {
        title: "It Reduces Unnecessary Travel",
        description:
          "If your tyre is flat or unsafe, mobile fitting can remove the need to drive the vehicle to a garage.",
      },
    ],
  },
  {
    id: "how-much-does-mobile-tyre-service-bury-cost",
    eyebrow: "Pricing",
    title: "How Much Does Mobile Tyre Service Bury Cost?",
    paragraphs: [
      "The cost depends on several factors including the tyre required, vehicle type, service needed, location and time of assistance.",
      "A tyre replacement will have a different cost from a puncture repair or emergency service.",
      "Road Heroes 24/7 can provide pricing information based on your vehicle and tyre requirements.",
      "Contact us with your vehicle registration or tyre size and explain the service you need.",
    ],
  },
  {
    id: "how-long-does-mobile-tyre-fitting-bury-take",
    eyebrow: "Timing",
    title: "How Long Does Mobile Tyre Fitting Bury Take?",
    paragraphs: [
      "The time required depends on the tyre service and vehicle.",
      "A straightforward single tyre replacement may be completed relatively quickly, while multiple tyre replacements or additional problems may take longer.",
      "Travel time also depends on the technician location, traffic and current demand.",
    ],
    image: {
      src: "/images/rear-wheel-removed-street.jpg",
      alt: "Hatchback with its rear wheel removed while parked on a street",
    },
  },
  {
    id: "what-if-my-tyre-cannot-be-repaired",
    eyebrow: "Repair Or Replace",
    title: "What If My Tyre Cannot Be Repaired?",
    paragraphs: [
      "If the tyre is not safe or suitable for repair, replacement may be recommended.",
      "Road Heroes 24/7 can discuss available replacement options based on your vehicle and tyre requirements.",
      "The priority is to ensure the tyre is suitable for safe use rather than repairing a tyre that should be replaced.",
    ],
  },
  {
    id: "what-if-i-need-more-than-one-tyre",
    eyebrow: "Multiple Tyres",
    title: "What If I Need More Than One Tyre?",
    paragraphs: [
      "Mobile tyre replacement can also be suitable when multiple tyres need changing.",
      "If you need two or four tyres, provide your vehicle and tyre details when booking so the correct requirements can be assessed.",
    ],
  },
  {
    id: "how-to-reduce-the-risk-of-a-tyre-emergency",
    eyebrow: "Tyre Care",
    title: "How To Reduce The Risk Of A Tyre Emergency",
    paragraphs: [],
    items: [
      {
        title: "Check Tyre Pressure Regularly",
        description:
          "Correct tyre pressure can help maintain handling and tyre performance.",
      },
      {
        title: "Inspect Your Tyres",
        description: "Look for visible cuts, bulges and unusual wear.",
      },
      {
        title: "Check Tread Condition",
        description:
          "Regularly inspect tyre tread and replace tyres when they no longer meet safe requirements.",
      },
      {
        title: "Avoid Ignoring Slow Punctures",
        description:
          "A tyre that repeatedly loses pressure should be inspected.",
      },
      {
        title: "Keep Your Tyres Maintained",
        description:
          "Regular checks can help identify problems before they become emergencies.",
      },
    ],
  },
  {
    id: "why-choose-road-heroes-bury-summary",
    eyebrow: "Why Road Heroes 24/7",
    title: "Why Choose Road Heroes 24/7 For Mobile Tyre Service Bury?",
    paragraphs: [],
    items: [
      {
        title: "Local Mobile Assistance",
        description:
          "We provide mobile tyre assistance across Bury and surrounding areas.",
      },
      {
        title: "Convenient Service",
        description:
          "Our technicians come to a suitable location instead of requiring you to arrange a garage visit.",
      },
      {
        title: "Tyre Fitting And Replacement",
        description:
          "We can assist with suitable tyre fitting and replacement requirements.",
      },
      {
        title: "Puncture Assistance",
        description:
          "Where a tyre is suitable for repair, mobile puncture assistance may be available.",
      },
      {
        title: "Emergency Support",
        description:
          "Our emergency service is designed for drivers who cannot safely continue because of a tyre problem.",
      },
      {
        title: "Extended Availability",
        description:
          "Mobile tyre assistance may be available outside normal working hours depending on current availability.",
      },
      {
        title: "Clear Communication",
        description:
          "We explain the service and requirements before work begins.",
      },
    ],
  },
];

export const buryMobileTyreServiceFaqsTitle =
  "Frequently Asked Questions About Mobile Tyre Service Bury";

export const buryMobileTyreServiceFaqs: Faq[] = [
  {
    question: "What Is A Mobile Tyre Service In Bury?",
    answer:
      "A mobile tyre service comes to your vehicle at a suitable location to provide tyre fitting, repair or replacement without requiring a traditional garage visit.",
  },
  {
    question: "How Does Mobile Tyre Fitting Bury Work?",
    answer:
      "You contact Road Heroes 24/7, provide your vehicle and tyre details, share your location and explain your tyre problem. A mobile technician can then attend where service availability and safe access allow.",
  },
  {
    question: "How Quickly Can I Get Mobile Tyre Service Bury?",
    answer:
      "Availability depends on your location, technician availability, traffic and current demand. Contact Road Heroes 24/7 for current assistance options.",
  },
  {
    question: "How Much Does Mobile Tyre Fitting Bury Cost?",
    answer:
      "The cost depends on the tyre, vehicle, service required, location and time of assistance. Contact us with your vehicle details for pricing information.",
  },
  {
    question: "How Long Does Mobile Tyre Fitting Bury Take?",
    answer:
      "The fitting time depends on the number of tyres and vehicle requirements. Travel time also depends on location and current traffic conditions.",
  },
  {
    question: "Who Provides Mobile Tyre Fitting Bury?",
    answer:
      "Road Heroes 24/7 provides mobile tyre fitting assistance across Bury and surrounding areas where suitable access is available.",
  },
  {
    question: "Who Needs Mobile Tyre Repair Bury?",
    answer:
      "Drivers with punctures, pressure loss or suitable tyre damage may need mobile tyre repair assistance.",
  },
  {
    question: "Who Can Use Mobile Tyre Replacement Bury?",
    answer:
      "Car and van owners who need a replacement tyre can request mobile tyre replacement where the service and tyre requirements are suitable.",
  },
  {
    question: "Where Can I Get Tyre Fitting Near Me Bury?",
    answer:
      "Road Heroes 24/7 provides mobile tyre fitting across Bury, allowing the technician to come to a suitable location rather than requiring you to visit a tyre centre.",
  },
  {
    question: "Where Can Mobile Tyre Service Be Provided?",
    answer:
      "Mobile tyre assistance may be provided at home, work, a driveway, suitable car park or safe roadside location where there is enough space to work.",
  },
  {
    question: "When Should I Call Emergency Tyre Service Bury?",
    answer:
      "Call for emergency tyre assistance when a flat, damaged or unsafe tyre prevents you from safely continuing your journey.",
  },
  {
    question: "When Should I Replace A Tyre Instead Of Repairing It?",
    answer:
      "A tyre may need replacement when the damage is too severe to repair safely, when there is significant sidewall damage or when the tyre is excessively worn.",
  },
  {
    question: "Why Is My Tyre Losing Air?",
    answer:
      "A tyre can lose air because of a puncture, damaged valve, wheel problem or other issue. Repeated pressure loss should be inspected.",
  },
  {
    question: "Why Should I Use A Mobile Tyre Service?",
    answer:
      "A mobile tyre service can save you a garage trip by bringing tyre assistance directly to a suitable location.",
  },
  {
    question: "Can You Fit A New Tyre At My Home In Bury?",
    answer:
      "Yes, mobile tyre fitting may be available at your home where there is suitable and safe access to the vehicle.",
  },
  {
    question: "Can You Repair A Puncture At My Location?",
    answer:
      "A puncture may be repairable depending on its location, size and condition. The tyre must be inspected before a repair is recommended.",
  },
  {
    question: "Can You Replace A Flat Tyre At The Roadside?",
    answer:
      "Mobile tyre replacement may be possible at a safe roadside location where the technician has sufficient access to the vehicle.",
  },
  {
    question: "Can You Provide 24 Hour Mobile Tyre Bury Service?",
    answer:
      "Extended and 24 hour mobile tyre assistance may be available depending on current service availability and your location.",
  },
  {
    question: "What Should I Do If My Tyre Goes Flat In Bury?",
    answer:
      "Move to a safe location if possible, avoid driving on a completely flat or visibly damaged tyre and contact Road Heroes 24/7 for mobile tyre assistance.",
  },
  {
    question: "What Details Do I Need To Book Mobile Tyre Service?",
    answer:
      "Provide your vehicle make and model, tyre size or vehicle registration, location and details of the tyre problem.",
  },
  {
    question: "What If I Need Tyres Urgently?",
    answer:
      "Contact Road Heroes 24/7 and explain your location and tyre requirements. Current availability and suitable replacement options can then be discussed.",
  },
  {
    question: "How Can I Book Mobile Tyre Service Bury?",
    answer:
      "Contact Road Heroes 24/7, provide your vehicle details and location, explain the tyre problem and request mobile assistance.",
  },
];

export const buryMobileTyreServiceClosingCta = {
  title: "Get Mobile Tyre Assistance In Bury With Road Heroes 24/7",
  paragraphs: [
    "A flat, punctured or damaged tyre can disrupt your entire day. You do not always need to arrange a garage visit or risk driving on an unsafe tyre.",
    "Road Heroes 24/7 provides Mobile Tyre Service Bury, including Mobile Tyre Fitting Bury, Mobile Tyre Repair Bury, Mobile Tyre Replacement Bury, Emergency Tyre Service Bury and 24 Hour Mobile Tyre Bury assistance where available.",
    "If you are searching for Tyre Fitting Near Me Bury, our mobile service can come to a suitable location and help you deal with your tyre problem more conveniently.",
  ],
  cta: "Book Mobile Tyre Service Now",
};

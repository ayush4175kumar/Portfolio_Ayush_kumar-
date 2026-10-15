/**
 * Content Writing & Technical Communication Portfolio Data
 * Ayush Kumar — Portfolio Data Models & Project Summaries
 */

export const contentSamples = {
  seoArticle: {
    id: 'seo-wireless-earbuds-2026',
    title: 'How to Choose the Best Wireless Earbuds in 2026',
    contentType: 'SEO Blog Article',
    targetAudience: 'Students, professionals, and everyday audio consumers',
    primaryKeyword: 'Best wireless earbuds',
    secondaryKeywords: ['earbuds battery life', 'earbuds sound quality', 'wireless earbuds guide 2026'],
    searchIntent: 'Commercial Investigation',
    wordCount: '850+ words (Demonstration excerpt)',
    status: 'Portfolio Sample',
    introduction: `Choosing wireless earbuds can be confusing, especially when so many products offer similar features. Before buying a pair, consider sound quality, battery life, comfort, microphone performance, and your budget.`,
    sections: [
      {
        heading: '1. Check Battery Life',
        content: `Look at both the earbuds' playback time and the additional charging capacity of the case. If you travel frequently or work long shifts without charging access, longer battery life (typically 8+ hours on buds and 24+ hours with case) can be especially useful.`
      },
      {
        heading: '2. Consider Sound Quality',
        content: `Think about your primary use. Balanced sound profiles may suit everyday listening and podcast consumption, while stronger bass curves may appeal to workout sessions and electronic music enthusiasts. Look for active EQ customization support via companion mobile apps.`
      },
      {
        heading: '3. Form Factor & Ergonomics',
        content: `Ear tips (silicone vs. foam) directly impact passive noise isolation and long-session ear fatigue. Select designs with IPX4 or higher water resistance if intended for gym use or outdoor commuting in monsoon conditions.`
      },
      {
        heading: '4. Microphone & Call Performance',
        content: `With remote meetings becoming standard, multi-mic beamforming and Environmental Noise Cancellation (ENC) ensure voice clarity over ambient traffic and background office noise.`
      }
    ],
    takeaway: 'Balancing technical specs against real-world usage ensures you invest in audio equipment that lasts beyond seasonal trends.'
  },

  socialPost: {
    id: 'social-5-content-writing-tips',
    title: '5 Content Writing Tips to Make Your Posts Better',
    contentType: 'Professional Social Media Post (LinkedIn / Twitter)',
    targetAudience: 'Content creators, freelancers, and junior marketers',
    engagementGoal: 'Educational value & audience retention',
    tips: [
      {
        number: '01',
        title: 'Start with a strong hook',
        detail: 'The first sentence determines whether the reader continues scrolling or stops to read. Ask a provocative question or state an unexpected fact.'
      },
      {
        number: '02',
        title: 'Keep it simple and direct',
        detail: 'Avoid unnecessary jargon and convoluted sentences. If an 8th-grade student cannot grasp the message in 5 seconds, simplify the phrasing.'
      },
      {
        number: '03',
        title: 'Focus on the reader',
        detail: 'Write from the perspective of what the audience gains, not just what you want to broadcast. Replace "I built" with "Here is how you can use".'
      },
      {
        number: '04',
        title: 'Use clear visual formatting',
        detail: 'Short paragraphs, generous white space, and numbered bullet points dramatically increase mobile readability and skim rates.'
      },
      {
        number: '05',
        title: 'End with an actionable takeaway',
        detail: 'Give readers one specific task or thought-provoking prompt they can test immediately after finishing your post.'
      }
    ],
    captionSnippet: `Writing online isn't about impressing people with complex vocabulary—it's about making useful ideas effortless to understand. Which of these 5 principles made the biggest difference in your recent work?`,
    hashtags: ['#ContentWriting', '#Copywriting', '#DigitalMarketing', '#WritingTips', '#CreatorEconomy']
  },

  videoScript: {
    id: 'script-ai-content-creation',
    title: '3 Ways to Use AI for Content Creation',
    contentType: 'Short-Form Video Script (YouTube Shorts / Instagram Reels)',
    targetAudience: 'Creators, solopreneurs, and students seeking productivity gains',
    runtime: '60 Seconds',
    aspectRatio: '9:16 Vertical Video',
    keyMessage: 'AI is a high-speed research partner, not an automated replacement for human judgment.',
    timeline: [
      {
        timestamp: '0:00 - 0:05',
        phase: 'Hook',
        visual: 'Ayush on camera holding a smartphone, quick dynamic zoom-in, fast on-screen text pop: "Stop using AI wrong."',
        narration: 'Most people use AI like a lazy search engine. Here are 3 ways smart creators actually use it to speed up content creation.'
      },
      {
        timestamp: '0:05 - 0:20',
        phase: 'Point 1: Brainstorming Angles',
        visual: 'Screen capture of ChatGPT prompt displaying 10 unconventional angles for one core topic. Cut to animated highlight over the best angle.',
        narration: 'One: Use it for rapid angle ideation. Don\'t ask AI to write the article. Ask it for 10 counter-intuitive angles on your main topic to uncover blind spots.'
      },
      {
        timestamp: '0:20 - 0:35',
        phase: 'Point 2: First-Draft Outlining',
        visual: 'Side-by-side view: Notion outline template being populated with logical section headers in seconds.',
        narration: 'Two: Structure your outlines fast. Feed it your raw notes and ask for a logical hierarchy. It saves 40% of drafting time without losing your original voice.'
      },
      {
        timestamp: '0:35 - 0:50',
        phase: 'Point 3: Tone & Readability Auditing',
        visual: 'Split screen: Cluttered text before versus clean bulleted prose after, with readability score meter jumping from 40 to 80.',
        narration: 'Three: Editorial auditing. Ask AI to find redundant sentences or rewrite complex sentences for 8th-grade readability before you hit publish.'
      },
      {
        timestamp: '0:50 - 1:00',
        phase: 'Call to Action (CTA)',
        visual: 'Direct to camera, smile, on-screen card: "Save this for your next draft", follow button animation.',
        narration: 'AI handles the heavy lifting, but the perspective has to be yours. Save this video for your next drafting session!'
      }
    ]
  },

  toolsUsed: [
    { name: 'ChatGPT', role: 'Ideation, research structuring, and semantic variations' },
    { name: 'Google Docs', role: 'Collaborative drafting, version tracking, and editing' },
    { name: 'Canva', role: 'Visual assets, thumbnail ideation, and social card graphics' },
    { name: 'Video Editing Suite (CapCut / Premiere)', role: 'Pacing timeline, caption timing, and b-roll planning' }
  ]
}

/* ========================================================================
   PROJECT 5: Product Review & Comparison Data
   ======================================================================== */
export const inverterReviewData = {
  title: 'Commercial Solar Inverters: Sungrow SG110CX vs. Huawei SUN2000-100KTL',
  subtitle: 'Head-to-head engineering review comparing MPPT flexibility, thermal derating, O&M ease, and 10-year lifecycle ROI for commercial rooftop projects in India.',
  category: 'Product Review & Technical Comparison',
  contentType: 'B2B Technical Review & Buyer Guide',
  targetAudience: 'Solar EPC contractors, commercial project developers, and facility electrical engineers',
  toolsUsed: ['Google Search (Datasheet Audits)', 'Google Docs (Drafting)', 'Canva (Visual Comparison Matrix)', 'Grammarly'],
  
  verdictSummary: 'While Huawei leads in software intelligence with AI-driven arc fault detection (AFCI), Sungrow SG110CX delivers superior cost-per-watt value and robust thermal endurance in hot ambient rooftop climates exceeding 45°C.',

  specsComparison: [
    { parameter: 'Nominal AC Power Output', sungrow: '110 kW @ 400V', huawei: '100 kW @ 400V', winner: 'Sungrow' },
    { parameter: 'Max. DC Input Voltage', sungrow: '1100 V', huawei: '1100 V', winner: 'Tie' },
    { parameter: 'Number of MPPT Trackers', sungrow: '9 MPPTs (18 Inputs)', huawei: '10 MPPTs (20 Inputs)', winner: 'Huawei' },
    { parameter: 'Max. MPPT Current Input', sungrow: '30 A per MPPT', huawei: '30 A per MPPT', winner: 'Tie (High-Wattage Module Ready)' },
    { parameter: 'Max. European Efficiency', sungrow: '98.5% (Max 98.7%)', huawei: '98.6% (Max 98.8%)', winner: 'Huawei (+0.1%)' },
    { parameter: 'Cooling Technology', sungrow: 'Smart Forced Air-Cooling', huawei: 'Natural Fan-less Convection', winner: 'Sungrow (In Indian Summer)' },
    { parameter: 'Arc Fault Circuit Interruption', sungrow: 'Optional Add-on', huawei: 'Integrated AI AFCI', winner: 'Huawei' },
    { parameter: 'Enclosure Protection', sungrow: 'IP66 + C5 Anti-Corrosion', huawei: 'IP66', winner: 'Sungrow' },
    { parameter: 'Approx. Price per Watt (India)', sungrow: '₹2.35 – ₹2.50 / Watt', huawei: '₹2.65 – ₹2.85 / Watt', winner: 'Sungrow (8-12% lower CapEx)' },
    { parameter: 'Standard Manufacturer Warranty', sungrow: '5 Years (Extendable to 10/15)', huawei: '5 Years (Extendable to 10)', winner: 'Tie' }
  ],

  sungrowReview: {
    name: 'Sungrow SG110CX-V112',
    pros: [
      'Delivers an extra 10 kW of nominal AC power (110 kW vs 100 kW) for equivalent footprint.',
      'Active forced air-cooling prevents steep thermal power derating when ambient rooftop temperatures exceed 45°C.',
      'C5 anti-corrosion rating ensures high reliability in coastal and industrial chemical environments.',
      'Lower CapEx per watt allows tighter project payback periods in tender bidding.'
    ],
    cons: [
      'Smart air cooling fans require periodic physical dust cleaning in arid regions.',
      'Monitoring portal and diagnostics app is less granular than Huawei FusionSolar.'
    ]
  },

  huaweiReview: {
    name: 'Huawei SUN2000-100KTL-M1',
    pros: [
      '10 independent MPPT trackers provide unmatched string flexibility on multi-oriented or partially shaded rooftops.',
      'Fan-less natural convection architecture eliminates moving parts and mechanical fan failures.',
      'Industry-leading AI-powered AFCI isolates DC arc faults within 0.5s to prevent rooftop electrical fires.',
      'FusionSolar cloud monitoring offers remote I-V curve diagnosis down to individual string circuits.'
    ],
    cons: [
      'Higher upfront equipment cost (8-12% premium over Sungrow).',
      'In extreme 48°C+ summer peaks, natural convection models may enter mild thermal curtailment earlier than forced-air units.'
    ]
  },

  buyerGuidance: [
    {
      scenario: 'Choose Sungrow SG110CX If:',
      points: [
        'You are designing a utility or commercial CAPEX-driven rooftop where tender bidding margin is critical.',
        'The plant is located in northern or central India where summer rooftop temperatures routinely surpass 45°C.',
        'You want maximum AC power evacuation from a standard 1000V DC system.'
      ]
    },
    {
      scenario: 'Choose Huawei SUN2000-100KTL If:',
      points: [
        'The roof has complex multi-angle orientations, varied slopes, or localized chimney shading requiring 10 independent MPPTs.',
        'Stringent rooftop fire safety standards demand integrated AI-assisted DC arc fault prevention.',
        'The client values premium remote automated I-V curve testing to lower ongoing field technician truck-rolls.'
      ]
    }
  ]
}

/* ========================================================================
   PROJECT 6: Social Media Content Design Data
   ======================================================================== */
export const socialCarouselData = {
  title: '5 Costly Traps to Avoid Before Installing Rooftop Solar in India',
  platform: 'Instagram & LinkedIn Multi-Slide Carousel',
  format: '1080 × 1350 px (4:5 Portrait Ratio)',
  targetAudience: 'Factory owners, commercial property managers, and independent homeowners exploring solar transition',
  engagementGoal: 'High saves and shares by delivering clear, technical consumer protection value',
  toolsUsed: ['Canva (Visual Layout & Branding)', 'ChatGPT (Hook & Copy Ideation)', 'Grammarly'],
  
  slides: [
    {
      slideNo: '01',
      tag: 'Avoid Costly Mistakes',
      headline: 'Thinking of Going Solar? 5 Traps Most Buyers Discover Too Late',
      subhead: 'Solar will slash your electricity bill by 70–90%—but only if you avoid these common design and contractor mistakes.',
      badge: 'Swipe to Learn →',
      visualNote: 'Bold contrasting headline, high-contrast clean energy emblem, subtle solar panel outline background.'
    },
    {
      slideNo: '02',
      tag: 'Trap #1: Electrical Safety',
      headline: 'Under-Sized Cable Gauges',
      body: 'Cheap installers often use 2.5 mm² or undersized aluminium wire to cut costs. On a hot summer day, undersized DC cables overheat, drop your voltage by 4–6%, and pose a genuine fire hazard.',
      actionableTip: 'Engineering Rule: Demand minimum 4 mm² cross-linked XLPO copper cables rated for 1500 VDC.',
      badge: 'Tip 1 of 4'
    },
    {
      slideNo: '03',
      tag: 'Trap #2: Layout Geometry',
      headline: 'Ignoring Winter Shading Clearance',
      body: 'Your roof may look clear in May, but on December 21 (winter solstice), the sun sits at its lowest angle (~28°). Front rows can cast long shadows over rear modules, crippling total generation.',
      actionableTip: 'Engineering Rule: Insist on a seasonal 3D shadow simulation (AutoCAD/HelioScope) before structural drilling.',
      badge: 'Tip 2 of 4'
    },
    {
      slideNo: '04',
      tag: 'Trap #3: Inverter Incompatibility',
      headline: 'Mismatching Inverter MPPT Windows',
      body: 'Modules have a minimum operating voltage on cold winter mornings (Voc) and hot summer afternoons (Vmp). An improperly sized string will fall outside the inverter\'s MPPT tracking window, wasting 15–20% of your power.',
      actionableTip: 'Engineering Rule: Always verify that string Vmp sits comfortably between 550 V – 850 V.',
      badge: 'Tip 3 of 4'
    },
    {
      slideNo: '05',
      tag: 'Summary & Action',
      headline: 'Summary Checklist: Protect Your 25-Year Investment',
      bullets: [
        'Insist on Tier-1 Monocrystalline modules with 25-year performance warranty',
        'Verify Type II Surge Protection Devices (SPD) on both DC and AC panels',
        'Ensure bi-directional net-metering approvals before installing hardware'
      ],
      callToAction: 'Save this post for your next contractor meeting 📌 Share with someone planning solar!',
      badge: 'Bookmark & Share'
    }
  ],

  captionCopy: `Going solar is one of the best ROI investments for Indian businesses and homeowners in 2026—with typical payback timelines under 3.5 years.

However, over 30% of installations underperform because buyers focus only on "Price per Watt" rather than the engineering fundamentals.

Here are the 5 critical engineering traps that cause low energy yield, inverter tripping, and safety hazards—and exactly how you can avoid them.

Which of these 5 checks surprised you the most? Drop your thoughts below! 👇`,

  hashtags: [
    '#SolarEnergy', '#RooftopSolarIndia', '#CleanEnergy', '#SolarEngineering',
    '#RenewableEnergy', '#EnergyEfficiency', '#ElectricalEngineering', '#CanvaDesign'
  ],

  designSystem: {
    fonts: 'Poppins (Bold Headings) + Inter (Crisp Body Text)',
    palette: [
      { name: 'Deep Navy', hex: '#10243A', role: 'Dominant Background' },
      { name: 'Solar Amber', hex: '#F59E0B', role: 'Accent Hooks & Numbers' },
      { name: 'Clean White', hex: '#FFFFFF', role: 'Primary Typography' },
      { name: 'Slate Grey', hex: '#94A3B8', role: 'Supporting Captions' }
    ],
    gridRule: '108-pixel margin safe zone, generous line-height for mobile reading, visual hierarchy from punchy number to bold title.'
  }
}

/* ========================================================================
   PROJECT 7: YouTube & Reels Scriptwriting Data
   ======================================================================== */
export const videoScriptingData = {
  title: 'Video Scriptwriting: Clean Energy & Solar Strategy Series',
  overview: 'Two production-ready scripts demonstrating the craft of audience retention: a fast-paced 60-second vertical video engineered for virality, and a structured 4-minute YouTube tutorial balancing technical precision with viewer empathy.',
  toolsUsed: ['ChatGPT (Hook Variations & Angle Testing)', 'Google Docs (Paced Formatting)', 'Canva (Graphic Overlay Design)'],
  
  reelScript: {
    title: '3 Rooftop Solar Myths That Cost You Money in India',
    format: '9:16 Vertical Video (Instagram Reels / YouTube Shorts / TikTok)',
    runtime: '60 Seconds',
    tone: 'Fast, authoritative, Mythbuster-style, visually dynamic',
    hookStrength: 'Interrupts common misconception in the first 2 seconds',
    timeline: [
      {
        time: '0:00 - 0:06',
        scene: 'The Hook',
        visual: 'Direct to camera with Ayush holding an electric bill with red stamped "OVERPAYING". Quick dynamic zoom. Large text pop: "Stop Believing These 3 Solar Myths."',
        narration: 'If you think solar panels don\'t work on cloudy days or will ruin your roof, you\'re leaving thousands of rupees on the table. Here are 3 myths debunked in 60 seconds.'
      },
      {
        time: '0:06 - 0:22',
        scene: 'Myth #1: Cloudy Weather',
        visual: 'Split screen: Overcast monsoon day on left vs solar inverter display showing steady 4.2 kW output on right. Animated graphic: "UV & Diffused Light Penetration".',
        narration: 'Myth One: "Solar only works under bright sunshine." Wrong! Modern monocrystalline panels use diffused ambient light. On cloudy monsoon days, they still produce 30 to 40% of their peak power.'
      },
      {
        time: '0:22 - 0:38',
        scene: 'Myth #2: Roof Drilling',
        visual: 'B-roll footage of non-penetrating ballasted aluminum rafter resting on rubber protection pads over an RCC roof slab. Zero drilling visible.',
        narration: 'Myth Two: "Solar causes roof leakage." A qualified engineering EPC uses non-penetrating concrete ballast structures or elevated pergolas. No roof membrane is ever punctured!'
      },
      {
        time: '0:38 - 0:50',
        scene: 'Myth #3: Battery Costs',
        visual: 'Infographic animation showing solar panels feeding grid through bidirectional net meter. Text: "Net Metering = Free Virtual Battery".',
        narration: 'Myth Three: "You need costly battery banks." For 90% of grid-connected homes, net-metering lets you bank daytime energy with the state power DISCOM for free night-time credits!'
      },
      {
        time: '0:50 - 1:00',
        scene: 'Call to Action',
        visual: 'Ayush on camera smiling, point downwards to caption card: "Follow for real solar & electrical design facts". Save button animation.',
        narration: 'Want to calculate your exact rooftop solar capacity? Drop "SOLAR" in the comments or check the link in bio!'
      }
    ]
  },

  youtubeScript: {
    title: 'Is Rooftop Solar Actually Worth It in 2026? Subsidies, Net Metering & Real Payback Math',
    format: '16:9 Landscape YouTube Video',
    runtime: '4 Minutes (Approx. 650 Spoken Words)',
    targetAudience: 'Indian homeowners, commercial building owners, and clean-tech enthusiasts',
    coreMessage: 'Demystifying the real financial and technical equations behind commercial & residential solar in India.',
    sections: [
      {
        timestamp: '0:00 - 0:45',
        chapter: '1. Introduction & The True Cost of Power',
        visualCue: '[Host on camera in modern engineering studio. B-roll of commercial solar installations across industrial rooftops. Lower-third text: "Ayush Kumar — Electrical Design Engineer"]',
        dialogue: `Electricity tariffs in India have risen between 6% and 9% year-on-year. For a small factory or large household paying ₹15,000 to ₹50,000 monthly, utility bills represent one of your biggest ongoing operational drains.

In 2026, rooftop solar isn't just an environmental statement—it's one of the highest-yield financial assets you can own. But how does the math actually stack up after factoring in hardware costs, government subsidies, and DISCOM net-metering?

In this video, we're breaking down the exact numbers: upfront costs, subsidy deductions under PM Surya Ghar, monthly generation, and real payback timelines.`
      },
      {
        timestamp: '0:45 - 1:45',
        chapter: '2. Upfront Costs vs. Government Subsidies',
        visualCue: '[Screen graphics showing clean spreadsheet breakdown of a typical 5 kW residential system and 100 kW commercial system. Animated highlight over subsidy brackets.]',
        dialogue: `Let's take a realistic benchmark: a standard 5 kW residential on-grid system requires about 400 square feet of shadow-free rooftop space. 

Gross installation costs currently average ₹60,000 to ₹65,000 per kilowatt for Tier-1 components. That's approximately ₹3,10,000 for a turnkey 5 kW setup.

Under central subsidy frameworks like PM Surya Ghar, residential consumers receive a direct DBT subsidy of up to ₹78,000. That brings your net out-of-pocket expenditure down to approximately ₹2,32,000. 

For commercial and industrial consumers who aren't eligible for residential subsidies, you instead receive accelerated depreciation benefits under Section 32 of the Income Tax Act, significantly lowering corporate tax liability in year one.`
      },
      {
        timestamp: '1:45 - 2:45',
        chapter: '3. Energy Yield & Monthly Savings Calculation',
        visualCue: '[Dynamic motion graphics showing solar irradiance hours across Indian latitudes (average 4.5 to 5.2 peak sun hours daily). Counter showing units generated.]',
        dialogue: `Now, let's look at generation. In most parts of India, 1 kWp of well-designed solar panels produces between 4 to 4.5 units of electricity per day. Over a full 365-day year, accounting for monsoon dips, a 5 kW system generates around 7,200 kilowatt-hours.

If your local DISCOM tariff is ₹8 per unit, that system produces ₹57,600 worth of free electricity every single year.

With net metering, excess power generated during peak afternoon hours spins your meter backward, crediting your bill for night-time air conditioning consumption.`
      },
      {
        timestamp: '2:45 - 3:30',
        chapter: '4. Payback Timeline & 25-Year Value',
        visualCue: '[Animated ROI bar chart comparing solar investment vs Bank Fixed Deposit (FD) and Mutual Funds over a 25-year lifecycle.]',
        dialogue: `Divide your net cost of ₹2,32,000 by your annual savings of ₹57,600, and your capital payback timeline is just 4.0 years! 

Because Tier-1 monocrystalline panels come with a 25-year linear performance warranty, the remaining 21 years represent virtually free electricity, yielding an internal rate of return (IRR) exceeding 22%—beating almost every traditional low-risk asset.`
      },
      {
        timestamp: '3:30 - 4:00',
        chapter: '5. Conclusion & Engineering Recommendation',
        visualCue: '[Host back on camera. End card with downloadable rooftop sizing checklist. Subscribe animation.]',
        dialogue: `The bottom line: rooftop solar makes immense financial sense, provided you insist on proper structural engineering, verified cable sizing, and certified inverter protection.

If you found this breakdown valuable, hit the like button and subscribe for deep-dive engineering and clean tech analysis. Drop your questions in the comments below, and I'll see you in the next video!`
      }
    ]
  }
}

/* ========================================================================
   MASTER PROJECT SUMMARIES
   ======================================================================== */
export const projectSummaries = [
  {
    id: 'commercial-rooftop-solar-pv',
    slug: 'commercial-rooftop-solar-pv',
    title: '119.6 kWp Commercial Rooftop Solar PV System',
    category: 'Solar Engineering',
    categoryFilter: 'solar',
    description: 'Comprehensive preliminary engineering design for a 119.6 kWp rooftop solar PV installation featuring 184 × 650W modules, 100 kW AC inverter capacity, SLD schematics, and AutoCAD layout.',
    image: '/images/commercial-rooftop-solar-pv.jpg',
    imageAlt: '119.6 kWp Commercial Rooftop Solar Photovoltaic Array Layout',
    imageCaption: 'Conceptual visualization — illustrative image',
    metrics: [
      { label: 'DC Capacity', value: '119.6 kWp' },
      { label: 'AC Inverter', value: '100 kW' },
      { label: 'Module Array', value: '184 × 650W' },
      { label: 'DC/AC Ratio', value: '1.196' }
    ],
    tags: ['AutoCAD', 'Solar PV', 'Single-Line Diagram', 'BOM', 'Electrical Design'],
    badge: 'Preliminary Design — Portfolio Demonstration',
    link: '/projects/commercial-rooftop-solar-pv',
    featured: true
  },
  {
    id: 'smart-city-lighting',
    slug: 'smart-city-lighting',
    title: 'Smart City LED Street Lighting Network',
    category: 'Electrical Distribution',
    categoryFilter: 'electrical',
    description: 'Distribution network design and automated photocell timer control system for energy-efficient street lighting across an urban sector.',
    image: '/images/smart-city-led-lighting.jpg',
    imageAlt: 'Smart City Modern Urban Avenue with Energy-Efficient LED Street Lighting',
    imageCaption: 'Conceptual visualization — municipal LED network',
    metrics: [
      { label: 'Voltage', value: '415V 3-Phase' },
      { label: 'Efficiency Gain', value: '~38%' },
      { label: 'Control', value: 'Automated Timer' },
      { label: 'Status', value: 'Academic Concept' }
    ],
    tags: ['AutoCAD', 'Power Distribution', 'Load Calculation', 'LED Lighting'],
    badge: 'Academic Project / Conceptual',
    link: '/projects/smart-city-lighting',
    featured: true
  },
  {
    id: 'inverter-comparison-review',
    slug: 'inverter-comparison-review',
    title: 'Product Review & Comparison: Sungrow SG110CX vs. Huawei SUN2000-100KTL',
    category: 'Technical Review',
    categoryFilter: 'content',
    description: 'Technical side-by-side comparison of two leading commercial solar inverters analyzing MPPT architecture, thermal derating, O&M ease, and 10-year lifecycle ROI for Indian EPCs.',
    image: '/images/inverter-comparison-review.jpg',
    imageAlt: 'Commercial Solar String Inverters Comparison — Sungrow vs Huawei',
    imageCaption: 'Commercial solar inverter comparative benchmark',
    metrics: [
      { label: 'Inverters', value: '110kW vs 100kW' },
      { label: 'Efficiency', value: '98.7% vs 98.8%' },
      { label: 'MPPTs', value: '9 vs 10 MPPTs' },
      { label: 'Pricing', value: '₹2.45/W vs ₹2.75/W' }
    ],
    tags: ['Product Review', 'Solar Inverters', 'Technical Comparison', 'B2B Copywriting', 'Google Docs'],
    badge: 'Technical Benchmark & Review',
    link: '/projects/inverter-comparison-review',
    featured: true
  },
  {
    id: 'social-media-carousel-design',
    slug: 'social-media-carousel-design',
    title: 'Social Media Content Design: Educational Solar Energy Carousel',
    category: 'Content & Media',
    categoryFilter: 'content',
    description: '5-slide educational Instagram & LinkedIn carousel deconstructing critical engineering checks before installing rooftop solar, engineered with high-retention visual hierarchy.',
    image: '/images/solar-social-carousel-design.jpg',
    imageAlt: '5-Slide Educational Solar Energy Instagram Carousel Design',
    imageCaption: 'Educational solar social media carousel design',
    metrics: [
      { label: 'Format', value: '5-Slide 1080x1350' },
      { label: 'Topic', value: 'Rooftop Solar Traps' },
      { label: 'Tools', value: 'Canva & ChatGPT' },
      { label: 'Engagement', value: 'Educational Hook' }
    ],
    tags: ['Canva Design', 'Carousel Layout', 'Educational Copy', 'Social Media', 'Content Strategy'],
    badge: 'Visual Social Media Design',
    link: '/projects/social-media-carousel-design',
    featured: true
  },
  {
    id: 'youtube-reels-script-writing',
    slug: 'youtube-reels-script-writing',
    title: 'YouTube & Reels Script Writing: Clean Energy & Solar Strategy Series',
    category: 'Video Scriptwriting',
    categoryFilter: 'content',
    description: 'Dual scriptwriting showcase: a 60-second high-hook Reel ("3 Solar Myths That Cost You Money") and a 4-minute YouTube deep-dive with scene-by-scene audio/visual directions.',
    image: '/images/youtube-reels-scriptwriting.jpg',
    imageAlt: 'YouTube and Reels Video Scriptwriting Studio Setup',
    imageCaption: 'Video scriptwriting & storyboarding workflow',
    metrics: [
      { label: 'Reel Script', value: '60 Seconds' },
      { label: 'YouTube Script', value: '4 Minutes' },
      { label: 'Structure', value: 'Hook, Content, CTA' },
      { label: 'Format', value: 'Paced Timelines' }
    ],
    tags: ['YouTube Script', 'Shorts / Reels', 'Video Storyboarding', 'Hook Mechanics', 'Audience Retention'],
    badge: 'Multi-Format Video Scripting',
    link: '/projects/youtube-reels-script-writing',
    featured: true
  },
  {
    id: 'content-writing-samples',
    slug: 'content-writing',
    title: 'Technical & SEO Content Writing Portfolio',
    category: 'Content Writing',
    categoryFilter: 'content',
    description: 'Three strategic content pieces demonstrating search-optimized article structuring, social media engagement copywriting, and vertical video scriptwriting with timing cues.',
    image: '/images/technical-content-writing.jpg',
    imageAlt: 'Technical Content Writing and Digital Publishing Editorial Workspace',
    imageCaption: 'Creative & editorial workspace visualization',
    metrics: [
      { label: 'Formats', value: 'SEO, Social, Script' },
      { label: 'Intent', value: 'Commercial & Edu' },
      { label: 'Video Timing', value: '60s Paced' },
      { label: 'Samples', value: '3 Pieces' }
    ],
    tags: ['SEO Copywriting', 'Short-Form Script', 'Content Strategy', 'Social Copy', 'ChatGPT'],
    badge: 'Self-Initiated Portfolio Samples',
    link: '/projects/content-writing',
    featured: false
  }
]

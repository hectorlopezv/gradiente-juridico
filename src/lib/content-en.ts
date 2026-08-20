import type { Service } from "@/lib/data";
import type { Office } from "@/lib/locations";
import type { Sector } from "@/lib/sectors";
import type { Expert } from "@/lib/team";

type ServiceCopy = Omit<Service, "slug" | "image" | "icon">;
type SectorCopy = Omit<Sector, "slug" | "image" | "serviceSlugs">;
type ExpertCopy = Omit<Expert, "slug" | "name" | "email" | "image">;
type OfficeCopy = Omit<Office, "slug" | "email" | "image" | "mapImage">;

export const valuePillarsEn = [
  { label: "Protection" },
  { label: "Innovation" },
  { label: "Value" },
];

export const statsEn = [
  { label: "practice areas" },
  { label: "with each client" },
  { label: "preventive and contentious" },
  { label: "in person and online" },
];

export const whyChooseUsEn = [
  {
    title: "Strategic, tailored work",
    body: "Each matter is read for its impact on the business, not only as a filing. We prioritize decisions that protect the asset and move the commercial goal.",
  },
  {
    title: "Experience and constant update",
    body: "The IP landscape shifts with technology, trade and regulation. We keep current so we can anticipate risk, not only react to it.",
  },
  {
    title: "Support at every stage",
    body: "From the idea to a dispute: filing, contracts, watch services and defense. The same team stays with the matter so context is not lost.",
  },
  {
    title: "Commitment, confidentiality and results",
    body: "We treat your assets with absolute reserve and give clear recommendations: risks, alternatives and the next step — in language that can be executed.",
  },
];

export const trendingEn = [
  {
    title: "Trademark registration",
    description: "Protecting commercial identity in Colombia and abroad.",
  },
  {
    title: "Invention patents",
    description: "A strategy to protect technical developments and inventions.",
  },
  {
    title: "Contracts and deals",
    description: "Drafting, review and negotiation of business relationships.",
  },
];

export const servicesEn: Record<string, ServiceCopy> = {
  "registro-de-marcas": {
    title: "Trademark registration",
    description:
      "An enforceable identity before the SIC: classes, prior marks and defense of the sign in Colombia and, if needed, abroad.",
    body: "In Colombia exclusive rights in a trademark are acquired by registration with the Superintendence of Industry and Commerce. Using the name on social media is not enough against a third party who filed first.",
    framework:
      "Andean Decision 486, the SIC’s Single Circular and, for international registration, the Madrid Protocol (Law 1455 of 2011). Registration lasts ten years and is renewable.",
    context: [
      "A trademark is any perceptible sign capable of distinguishing goods or services: words, logos, colors or combinations. The SIC examines distinctiveness and likelihood of confusion; third parties may oppose after publication in the Industrial Property Gazette.",
      "Registration is territorial: a foreign mark is not protected in Colombia by that fact alone. If the business crosses borders, the country map must follow commercial priority, not inertia.",
    ],
    when: [
      "Before investing in packaging, ads or a location with a name already chosen",
      "When a third party files a similar sign or uses it in the market",
      "When franchising, licensing or opening a distribution channel",
      "If you will export or sell on marketplaces outside Colombia",
    ],
    process: [
      "Prior-mark search and collision risk in the Nice classes that matter to the business",
      "Definition of the sign, the owner and the list of goods or services",
      "Filing with the SIC, replies to office actions and follow-up through the decision",
      "Watch services, oppositions, non-use cancellation and infringement defense once the sign is in the market",
    ],
    typicalIssues: [
      "The name is already in use, but someone else filed first with the SIC",
      "The application covers one class while the business operates in three",
      "A partner or an agency appears as owner without that having been decided",
      "There is an opposition or a published sign that looks too close",
    ],
    audience:
      "Companies, startups and owners who need an enforceable sign before spending on brand, packaging or expansion.",
    includes: [
      "Prior-mark search and collision risk",
      "Application and follow-up of registration in Colombia",
      "Ownership strategy and Nice classes",
      "Watch services, oppositions and infringement",
      "A protection map abroad when the market requires it",
    ],
  },
  "patentes-de-invencion": {
    title: "Invention patents",
    description:
      "Novelty, inventive step and industrial application: from the idea to a title before the SIC — or to the decision not to patent.",
    body: "A patent is not the only path for a technical development. Sometimes secrecy or contract protects better. When a patent does apply, the file has to survive substantive examination.",
    framework:
      "Decision 486: products or processes that are new, involve an inventive step and are industrially applicable may be patented. The SIC conducts formality then patentability examination. Disclosing before filing can destroy novelty; there is a one-year grace period in certain cases.",
    context: [
      "The state of the art is worldwide: it is not enough that nobody sells it in Colombia. A publication, a fair or a video can anticipate the invention. Search and the disclosure calendar matter as much as drafting.",
      "Claims delimit the monopoly. Vague wording cannot be enforced; wording that is too narrow does not cover what the business will sell. The useful deliverable is a negotiable perimeter for licenses, investment or excluding imitators.",
    ],
    when: [
      "There is a technical solution that is not obvious to a person skilled in the art",
      "You will show the development to an investor, a manufacturer or a partner",
      "The product can be copied by reverse engineering if there is no title",
      "You need an asset that can enter due diligence or a license",
    ],
    process: [
      "Prior-art search and viability: patent, utility model, trade secret, or nothing?",
      "Drafting of description, claims, drawings and abstract",
      "Filing, formality and substantive examination before the SIC, replies to office actions",
      "Maintenance, licenses and coordination with secrets that must not be disclosed in the file",
    ],
    typicalIssues: [
      "The prototype was already shown at a fair or on social media",
      "Several inventors and a freelancer without an assignment",
      "A wish to patent software or a business model that does not meet the requirements",
      "The claim does not cover the variant a competitor will use",
    ],
    audience:
      "Inventors, product teams and companies that want a technical development to become a negotiable asset — or to know in time that it is not patentable.",
    includes: [
      "Prior-art search and state of the art",
      "Claim drafting and the application file",
      "Follow-up of the proceeding before the SIC",
      "Support for licenses, investment and expansion",
    ],
  },
  "disenos-industriales": {
    title: "Industrial designs",
    description:
      "The appearance of the product as an asset: novelty, registration before the SIC and defense against catalogue copies.",
    body: "Industrial design protects the form and aesthetics that make a product recognizable. It does not cover technical function — that is patent — nor the name — that is trademark.",
    framework:
      "Decision 486 and filing with the SIC. Typical protection is ten years from the application and, unlike a trademark, it is not renewable: afterwards the design falls into the public domain. Disclosing the piece before filing puts novelty at risk.",
    context: [
      "In consumer goods, furniture, packaging or devices, copies often arrive in the first weeks after launch. Filing after the fair or the social drop is, in many cases, arriving late.",
      "The file needs clear representations of appearance. An incomplete render or an identical product already on a foreign market can kill novelty. We coordinate launch calendar, manufacturers and clauses on non-use of molds.",
    ],
    when: [
      "The competitive edge is in the silhouette, the packaging or the visual line",
      "You will manufacture with a third party that could replicate the mold",
      "There are copies at fairs, marketplaces or parallel imports",
      "Launch is close and no application has been filed",
    ],
    process: [
      "Assess whether what is distinctive is form (design), function (patent) or sign (trademark)",
      "Prepare views, novelty and ownership before disclosing",
      "Application with the SIC and follow-up through the certificate",
      "Infringement defense and rules with manufacturers and distributors",
    ],
    typicalIssues: [
      "The catalogue is already published and the design has not been filed",
      "The manufacturer retains molds or tooling",
      "Industrial design is confused with copyright in a drawing",
      "The copy enters through customs or a marketplace",
    ],
    audience:
      "Product brands, manufacturing and catalogues whose advantage is form, packaging or visual line.",
    includes: [
      "Assessment of appearance as an asset",
      "Industrial design registration before the SIC",
      "Disclosure and launch calendar",
      "Defense against copies in the market",
    ],
  },
  "derechos-de-autor": {
    title: "Copyright",
    description:
      "Works, software and content: ownership from creation, DNDA registration and rules with whoever produces.",
    body: "Copyright arises with the work. Registration with the National Copyright Directorate does not create the right, but it helps prove it. The usual problem is not the statute: it is who appears as owner when there is an agency, a freelancer or an internal team.",
    framework:
      "Law 23 of 1982, Andean Decision 351 and, for software, Decree 1360 of 1989: computer programs are treated as literary creations. The DNDA keeps the National Register. Code is protected by copyright; know-how, often, by trade secret.",
    context: [
      "Software, courses, photographs, music, audiovisual works and websites fall under this regime if there is originality. Without an assignment, the developer or photographer may keep rights the company believes it owns.",
      "Licensing is not the same as assigning. A use license for a client does not transfer the code or updates. We document the perimeter: what is delivered, what stays in-house and what collaborators may do.",
    ],
    when: [
      "There are several authors, a studio or a content factory",
      "The product is software, an app or a platform with third-party code",
      "You will publish, license or sell a catalogue of works",
      "A former collaborator claims authorship or reuses the material",
    ],
    process: [
      "Map of works, software and auxiliary material, and of who created them",
      "Assignments, works made for hire and licenses aligned with the business",
      "DNDA registration when it adds proof or later filings",
      "Defense against unauthorized use and review of platforms or repositories",
    ],
    typicalIssues: [
      "The repository is in the freelancer’s name",
      "The agency delivered art without an assignment of economic rights",
      "Music or stock is used without a license sufficient for paid ads",
      "Doubt between registering software with the DNDA or seeking a patent",
    ],
    audience:
      "Creators, studios, software houses and companies that produce content or code with several authors or contractors.",
    includes: [
      "Ownership of software, content and works",
      "DNDA registration when it is useful",
      "Assignments, commissioned works and licenses",
      "Rules among authors, the company and collaborators",
    ],
  },
  "contratos-y-negocios": {
    title: "Contracts and deals",
    description:
      "Drafting, review and negotiation of commercial and civil contracts: services, distribution, sale, collaboration, alliances and other business relationships.",
    body: "The contract is the map of the relationship: what is delivered, who bears the risk and how you exit. We draft, review and negotiate with a business criterion, not a generic form.",
    framework:
      "Colombia’s Civil Code and Commercial Code, and the special clauses the transaction requires: warranty, confidentiality, IP, non-compete and dispute resolution.",
    context: [
      "An alliance, a distribution or third-party development without a clear perimeter leaves the asset and cash flow in the air. The document has to be executable on the day of conflict.",
      "We coordinate the contract with ownership of brand, code or work when the business depends on an intangible.",
    ],
    when: [
      "You will sign services, distribution, sale or collaboration",
      "There is an alliance or a channel that uses your brand or know-how",
      "The current contract does not cover what the business already does",
      "You need to negotiate with a supplier, a partner or a key client",
    ],
    process: [
      "Reading of the commercial objective and the risks of the relationship",
      "Drafting or markup of the contract, with negotiation alternatives",
      "Alignment with IP, confidentiality and exit",
      "Closing and, if needed, follow-up of annexes and renewals",
    ],
    typicalIssues: [
      "An internet PDF that does not cover IP, default or termination",
      "The supplier retains deliverables or tools",
      "There are two signed versions and nobody knows which governs",
      "The alliance is already operating and the contract is still a draft",
    ],
    audience:
      "Companies and projects that need documented, negotiable commercial relationships.",
    includes: [
      "Services, distribution and sale",
      "Collaboration, alliances and contractual joint ventures",
      "Review and negotiation of counterpart paper",
      "IP, confidentiality and exit clauses",
    ],
  },
  "sociedades-y-gobierno-corporativo": {
    title: "Companies and corporate governance",
    description:
      "Company formation, bylaw amendments, shareholders’ agreements, minutes, boards, meetings, regulations and support in corporate conflicts.",
    body: "The company is the vehicle of the business. If bylaws, minutes or the shareholders’ agreement do not match how decisions are actually made, conflict arrives late and expensive.",
    framework:
      "Commercial Code, Law 1258 of 2008 (SAS) and the governance rules the company type and the shareholders agree. Decisions that never make it into minutes or an amendment are often the ones that later cannot be opposed to third parties.",
    context: [
      "Formation, amendments, capital increases and entry or exit of partners require a trail that the registry and third parties can read.",
      "The shareholders’ agreement covers what bylaws do not: drag-along, tag-along, deadlock and information rights.",
    ],
    when: [
      "You will form or amend a company",
      "A partner enters or exits, or there is a round",
      "Boards and meetings have no clear minutes or regulations",
      "There is a conflict among partners or with management",
    ],
    process: [
      "Diagnosis of bylaws, minute books and capital structure",
      "Formation, amendment or shareholders’ agreement according to the goal",
      "Support for boards, meetings and regulations",
      "A path to resolution if a corporate dispute already exists",
    ],
    typicalIssues: [
      "The company operates and the SAS is not registered or is outdated",
      "There are de facto partners without documented participation",
      "A manager decides without authority or without minutes",
      "The shareholders’ pact contradicts the bylaws",
    ],
    audience:
      "Founders, partners and companies that need a corporate vehicle aligned with how the business actually decides.",
    includes: [
      "Formation and bylaw amendments",
      "Shareholders’ agreements",
      "Minutes, boards, meetings and regulations",
      "Support in corporate conflicts",
    ],
  },
  "competencia-consumo-y-publicidad": {
    title: "Competition, consumer and advertising",
    description:
      "Preventive advice and defense on unfair competition, advertising, promotions, terms and conditions, complaints and sanctioning proceedings.",
    body: "The campaign, the packaging and the platform terms are legal acts. We review them before they go to market and defend when there is a complaint, a competitor or an authority.",
    framework:
      "Law 256 of 1996 (unfair competition), the Consumer Statute (Law 1480 of 2011) and SIC rules on advertising and promotions. A claim that cannot be sustained is a sanction and reputation risk.",
    context: [
      "Promotions, T&Cs, return policies and comparative advertising must match what the business can actually deliver.",
      "Preventive defense is cheaper than a sanctioning case: we review the material before the drop or the media buy.",
    ],
    when: [
      "You launch a campaign, a promotion or a marketplace",
      "A competitor copies the packaging, the claim or the channel",
      "There is a consumer complaint or an SIC request",
      "The terms and conditions do not cover what you already sell",
    ],
    process: [
      "Review of advertising, packaging, T&Cs and promotions",
      "Preventive adjustments and a protocol for responding to complaints",
      "Defense in unfair competition or consumer matters",
      "Support in sanctioning proceedings",
    ],
    typicalIssues: [
      "The ad claim cannot be proven",
      "The promotion has no clear mechanics or term",
      "A third party uses a sign or a look-alike in the market",
      "Copied T&Cs do not apply to the product or to Colombia",
    ],
    audience:
      "Marketing teams, e-commerce and companies that sell to consumers or compete in a claim-sensitive market.",
    includes: [
      "Review of advertising, promotions and packaging",
      "Terms and conditions and consumer policies",
      "Preventive and contentious unfair competition",
      "Complaints and sanctioning proceedings",
    ],
  },
  "litigios-y-solucion-de-controversias": {
    title: "Litigation and dispute resolution",
    description:
      "Representation in civil, commercial, corporate, administrative and IP proceedings, with a focus on risk and business strategy.",
    body: "Litigation is a business decision: cost, timeline, evidence and reputation. We represent in the path that best closes the risk, not the one that most resembles an off-the-shelf file.",
    framework:
      "Civil and commercial proceedings, corporate disputes, administrative actions and IP (SIC, DNDA and courts). The path is chosen by the objective: cessation, damages, annulment or an agreement that can be performed.",
    context: [
      "Before suing or answering you need to know what can be proved and what you gain if you win. Sometimes cessation or negotiation is the useful result.",
      "We coordinate the case with the asset: brand, contract, company or campaign, so the strategy does not contradict itself across forums.",
    ],
    when: [
      "There is a contractual breach or a conflict among partners",
      "A third party uses your sign, design or content",
      "An administrative request or a complaint has arrived",
      "You need an exit strategy, not only a brief",
    ],
    process: [
      "Diagnosis of facts, evidence and the commercial objective",
      "Choice of path and of claims",
      "Representation and, if useful, parallel negotiation",
      "Closing: judgment, settlement or a protocol so it does not repeat",
    ],
    typicalIssues: [
      "A suit was filed without an inventory of evidence",
      "Three forums are open on the same conflict",
      "The client wants to “win” without defining what winning is",
      "The verbal deal already broke and there is no useful contract",
    ],
    audience:
      "Companies and owners facing a conflict who need a path with a risk criterion, not procedural inertia.",
    includes: [
      "Civil, commercial and corporate proceedings",
      "Administrative and intellectual-property paths",
      "Strategy of claims and of proof",
      "Negotiation and closing of the conflict",
    ],
  },
  "compliance-y-gestion-de-riesgos": {
    title: "Compliance and risk management",
    description:
      "Design of policies, matrices, protocols and compliance programs in contracting, corporate governance, consumer, competition, privacy and risk prevention.",
    body: "Compliance is not a PDF in Drive: it is a matrix someone uses. We design policies and protocols the team can apply in contracting, governance, consumer, competition and privacy.",
    framework:
      "Consumer, competition and personal-data rules (Law 1581 of 2012), corporate governance and internal measures the company size can sustain. The program has to be proportional and demonstrable.",
    context: [
      "An authority request or an investor due diligence asks for real policies, not intention. We leave a trail: who approves, who accesses, what is recorded.",
      "We prioritize risks already in operation: third-party contracts, data processing, advertising claims and board minutes.",
    ],
    when: [
      "You are going into a round, a large client or a supplier that asks for compliance",
      "There are no data, contracting or conflict-of-interest policies",
      "There was an incident and no response protocol exists",
      "Growth outpaced the controls from when there were three people",
    ],
    process: [
      "Map of risks and of the rules that actually apply",
      "Executable policies, matrices and protocols",
      "Short training of who decides and who documents",
      "Periodic review and adjustment when the business changes",
    ],
    typicalIssues: [
      "There is a copied policy nobody applies",
      "Client data sits in a spreadsheet with no owner",
      "Contracts are signed without a checklist or approval",
      "An incident was handled on WhatsApp and left no trail",
    ],
    audience:
      "Companies that need a compliance program proportional to their operation, not a decorative manual.",
    includes: [
      "Policies and risk matrices",
      "Contracting and governance protocols",
      "Consumer, competition and privacy",
      "Prevention and incident response",
    ],
  },
  "inversion-extranjera-y-negocios-en-colombia": {
    title: "Foreign investment and doing business in Colombia",
    description:
      "Support for foreign companies on forming companies, branches, subsidiaries, local contracts, trademark protection and operating in Colombia.",
    body: "Entering Colombia is not only registering a company: it is the vehicle, the local contracts, the brand and the rules of operation. We support the foreign company from the first map through operations.",
    framework:
      "Company regime, branches of foreign companies, local contracts and IP before the SIC. Investment and operations are aligned with the vehicle the business actually needs — branch, SAS or contract — not the one that sounds familiar at headquarters.",
    context: [
      "The frequent error is copying a foreign contract or using a mark that a third party already owns in Colombia. The local map is drawn before spending on team, warehouse or ads.",
      "We coordinate formation, powers of attorney, contracts with distributors or suppliers, and trademark filing when the sign will be used here.",
    ],
    when: [
      "You will form a SAS, a branch or a subsidiary in Colombia",
      "You need local distribution, services or key employment contracts",
      "The brand or product is already used or will launch in the country",
      "Headquarters wants one counterpart who joins corporate, contractual and IP",
    ],
    process: [
      "Diagnosis of the vehicle and of market-entry risks",
      "Formation or branch, powers and minimum governance",
      "Local contracts and trademark protection",
      "Support through operations and first-year adjustments",
    ],
    typicalIssues: [
      "A branch was chosen when the business needed a SAS, or the reverse",
      "The foreign framework agreement is not enforceable here",
      "The mark has already been filed by a third party with the SIC",
      "There is no attorney-in-fact or minutes to operate with banks and suppliers",
    ],
    audience:
      "Foreign companies and groups that will form, contract or brand in Colombia.",
    includes: [
      "Formation of companies, branches and subsidiaries",
      "Local operating contracts",
      "Trademark protection in Colombia",
      "Support of business operations",
    ],
  },
};

export const sectorsEn: Record<string, SectorCopy> = {
  "propiedad-intelectual": {
    title: "Intellectual property",
    description:
      "The full map of the asset: what goes to the SIC, what to the DNDA and what stays secret.",
    body: "If the business depends on a sign, an invention, a form or content, IP is not a separate filing: it is the perimeter of what you can defend, license or sell.",
    framework:
      "In Colombia industrial property (trademarks, patents, designs, secrets) is filed with the SIC, with Decision 486 as the Andean regime. Copyright and software are governed by Law 23 of 1982, Decision 351 and the DNDA. Mixing the paths is the most expensive error.",
    context: [
      "A coherent portfolio avoids duplicated spend and gaps: the product mark, the packaging design, the app code and production know-how are not protected with the same instrument.",
      "We order ownership, filing priority and contracts so the asset can survive growth, a partner or a dispute — without inventing a network of offices or a proceeding the case does not need.",
    ],
    when: [
      "There are several loose assets (name, logo, product, content) with no map",
      "You will license, franchise or sell the company",
      "A third party is approaching the sign, the form or the code",
      "The team does not know what is registrable and what must stay internal",
    ],
    process: [
      "Inventory of intangibles and of who appears as owner",
      "Priority: register, keep as secret, or only contractualize",
      "Filings with the SIC or DNDA and alignment of contracts",
      "Watch services and a reaction protocol for copies or oppositions",
    ],
    typicalIssues: [
      "A mark used for years with no application, and a third party just published it in the Gazette",
      "Software with no assignment and a mark in the founder’s personal name",
      "A design disclosed on Instagram before filing",
      "Distribution contracts that leave trademark use uncontrolled",
    ],
    audience:
      "Companies and owners who need a coherent IP portfolio, not loose pieces.",
    includes: [
      "Diagnosis of the IP portfolio",
      "Priority of what to register and what to keep as secret",
      "Filings with the SIC and DNDA according to the asset",
      "Contracts aligned with ownership",
    ],
  },
  "tecnologia-y-software": {
    title: "Technology and software",
    description:
      "Code, product and know-how ready for market, investment or a technical partner.",
    body: "In software the risk is not only copying the interface: it is who owns the repository, what stays in the company and what can be shown to an investor.",
    framework:
      "As a rule, software is protected by copyright (Decree 1360 of 1989 and the DNDA), not by a patent on “the app”. Underlying technical inventions may go to patent if they meet novelty, inventive step and industrial application. Know-how requires a real secret: access measures, not only an NDA.",
    context: [
      "Startups and SaaS often mix freelancers, staff and third-party libraries. Without assignments, due diligence fails. Without secrecy, the algorithm leaves in a demo or a round PDF.",
      "We work ownership of code, secrets, patents only when the object is a patentable technical solution, and rules with vendors so the asset stays in the company.",
    ],
    when: [
      "You will raise capital or license the platform",
      "Development is split between in-house and third parties",
      "There is a technical invention besides the interface",
      "A former employee or vendor retains repo access",
    ],
    process: [
      "Map of code, contributions, open-source licenses and of what must not leave the perimeter",
      "Assignments, NDAs and development agreements in the company’s name",
      "Decision: patent vs. secret vs. copyright only",
      "IP package for the data room",
    ],
    typicalIssues: [
      "The CTO’s personal GitHub as the only repository",
      "A wish to “patent the app” when there is no patentable invention",
      "Confidentiality clauses with no control of who sees the code",
      "Open-source dependencies incompatible with the client license model",
    ],
    audience:
      "Startups, SaaS and product teams that will raise capital, license or scale with third parties.",
    includes: [
      "Software ownership and development assignments",
      "Trade secrets and confidentiality with real measures",
      "Patent viability of the technical component",
      "IP for due diligence and investment",
    ],
  },
  emprendimiento: {
    title: "Startups",
    description:
      "Brand, contracts and IP from day one, without waiting for the conflict to arrive.",
    body: "A venture often starts with a name on social media and a product in the market. The gap appears at the round, with the first partner, or when someone copies the sign.",
    framework:
      "A trademark is constituted by SIC registration. Partners and collaborators are governed by contracts and, if there is code or works, by copyright assignments. Operational secrets (suppliers, recipes, playbooks) exist only with effective reserve, not a PDF titled “confidential”.",
    context: [
      "We order the brand, the rules among founders and what cannot be copied, so the next channel or investor does not find an owner different from the company.",
      "You do not need a legal department: you need a minimum order — sign, ownership, NDA with whoever sees the product — before spending on ads.",
    ],
    when: [
      "The name is already on Instagram and there is no trademark application",
      "A partner, an investor or a first key employee is coming in",
      "You will manufacture or license the product",
      "A competitor uses a similar sign or packaging",
    ],
    process: [
      "Check of the name and classes against the SIC",
      "Ownership in the company, not in a natural person by accident",
      "Agreements among partners and with those who design or code",
      "A short plan: what to register now and what can wait",
    ],
    typicalIssues: [
      "The mark is in the name of a founder who is no longer there",
      "A friend made the logo with no invoice or assignment",
      "Launch in three cities with no watch of the sign",
      "The pitch deck describes the “secret” in detail",
    ],
    audience:
      "Founders and growing brands that need to protect identity and commercial relationships now.",
    includes: [
      "Trademark filing and strategy",
      "Agreements among partners and collaborators",
      "Assignments of design, content or code",
      "Preparation for investment or expansion",
    ],
  },
};

export const expertsEn: Record<string, ExpertCopy> = {
  "duvan-rambal": {
    role: "Lead contact",
    practice: "Business and intellectual property",
    location: "Colombia",
    teaser:
      "First conversation on the matter: what to protect, what to contract and how to take it forward with the team on WhatsApp.",
    bio: "Duvan is Gradiente Jurídico’s entry point. He receives the case, orders the risk and defines whether the path is filing, contract, company, compliance or dispute — or a combination. He works with companies and projects that need a business reading, not only a proceeding.\n\nIn a boutique the bottleneck is often diagnosis: is the mark already used without clear ownership? Does the contract fail to cover the alliance? Is there a corporate conflict or a third party close to the sign? Duvan turns that into an actionable plan.",
    advises:
      "Companies, founders and teams that will launch, contract, incorporate or defend an asset or a commercial relationship in Colombia.",
    approach:
      "First the commercial objective. Then the map: IP, contracts, company and risk. WhatsApp is the fast thread; the formal engagement is in writing.",
    typicalMatters: [
      "Diagnosis of trademark, contract and corporate portfolio",
      "Prioritize what to register, what to document and what can wait",
      "Coordinate watch services, negotiation and defense",
      "Align owners, partners and vendors so the asset is not diluted",
    ],
    focus: [
      "Business and IP strategy",
      "Client relationship",
      "Preventive and contentious coordination",
    ],
    languages: ["Spanish"],
    admitted: "Colombia",
  },
  "helena-novoa": {
    role: "Intellectual property",
    practice: "Trademarks and copyright",
    location: "Colombia",
    teaser:
      "Brand identity, content and works: registration, use in the market and rules with third parties.",
    bio: "Helena works on the identity the market recognizes: distinctive signs, names, packaging and the content the company produces. She combines filings with the Superintendence of Industry and Commerce and, for works, copyright paths, with a reading of how the asset is used in channels, packaging and contracts.\n\nThe frequent error is investing in brand or content without enforceable ownership, or signing with agencies and creators without an assignment. Helena orders classes, prior marks and the perimeter of use so the sign and the works can survive growth, franchise or export.",
    advises:
      "Consumer brands, studios, software houses and companies that publish content or work with agencies, influencers and collaborators.",
    approach:
      "Prior-mark search and collision risk before spending on design or ads. Then registration, use rules and licenses. If a third party is close to the sign, opposition or coexistence is assessed with a commercial criterion.",
    typicalMatters: [
      "Trademark registration and watch in Colombia and strategy abroad",
      "Ownership of works, software and content between authors and the company",
      "License, merchandising and distributor brand-use contracts",
      "Assignments with agencies, freelancers and creators",
    ],
    focus: ["Trademarks", "Copyright", "Licenses"],
    languages: ["Spanish"],
    admitted: "Colombia",
  },
};

export const officesEn: Record<string, OfficeCopy> = {
  colombia: {
    region: "Americas",
    country: "Colombia",
    kicker: "Office",
    headline: "Colombia",
    intro:
      "One office, nationwide coverage and clients abroad. It is not a network of offices: it is a team that stays with the matter from end to end.",
    overview: [
      "Gradiente Jurídico operates from Colombia. Meetings are by appointment — in person or online — and local filings are made before Colombian authorities: trademarks and IP with the Superintendence of Industry and Commerce, works and software through copyright when it applies.",
      "If the asset is also used outside Colombia, we build the strategy from here: what to register first, what to keep secret and how to align contracts with partners, agencies and developers.",
    ],
    modes: [
      {
        title: "In person",
        body: "Meeting by appointment in Colombia. We coordinate day and topic: there is no walk-in desk and no visit without an agenda.",
      },
      {
        title: "Online",
        body: "Video call and the site chat for anyone in another city or abroad. The file is the same.",
      },
      {
        title: "Filings in Colombia",
        body: "Registration, watch services and disputes before local authorities. The criterion is business: what protects the asset and what can wait.",
      },
    ],
    coverage: [
      {
        title: "Clients in Colombia",
        body: "Companies, founders and creators who launch or defend brand, technology or content in the local market.",
      },
      {
        title: "Clients abroad",
        body: "Anyone who needs enforceable ownership in Colombia, or an IP strategy aligned with a partner, a license or an expansion.",
      },
    ],
  },
};

import Image from "next/image";

interface Affiliation {
    company: string;
    image: string;
    role: string[];
}

const affiliations: Affiliation[] = [
    {
        company: "FEU Tech",
        image: "/fit.png",
        role: ["President's Scholar w/ High Honors"],
    },
    {
        company: "FEU Tech ACM",
        image: "/fit_acm.png",
        role: ["Initiative Head"],
    },
    {
        company: "FEU Tech GDSC",
        image: "/fit_gdsc.png",
        role: ["Former Front-End Lead Developer"],
    },
    {
        company: "Google Cloud Manila",
        image: "/google_cloud_manila.jpg",
        role: ["Volunteer"],
    },
    {
        company: "IEEE",
        image: "/ieee.png",
        role: ["Volunteer"],
    },
    {
        company: "IEEE Computer Society",
        image: "/ieee_cs.png",
        role: ["Member"],
    },
    {
        company: "Logrocket",
        image: "/logrocket.png",
        role: ["Content Advisory Board Member"],
    },
    {
        company: "Skilio",
        image: "/skilio.png",
        role: ["Scholar Fellow"],
    },
    {
        company: "ULAP.org",
        image: "/ulap.png",
        role: ["Scholar"],
    },
    {
        company: "GitHub",
        image: "/github.png",
        role: ["FOSS Contributor"],
    },
    {
        company: "Google Play",
        image: "/google_play.png",
        role: ["App Developer"],
    },
    {
        company: "Microsoft Store",
        image: "/ms_store.png",
        role: ["App Developer"],
    },
];

const Affiliation: React.FC<Affiliation> = ({ company, image, role }) => {
    return (
        <div className="group relative flex items-center justify-center overflow-hidden rounded-lg">
            <Image
                alt="Logo"
                className="w-full h-full object-contain object-center transition-all group-hover:scale-110"
                height={140}
                src={`/media/img/affiliations${image}`}
                style={{
                    aspectRatio: "280/140",
                    objectFit: "contain",
                }}
                width={280}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-center text-white">
                    <h3 className="text-lg font-semibold">{company}</h3>
                    {role.map((r) => (
                        <p key={r} className="text-sm">
                            {r}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Affiliations: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white text-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Professional Affiliations</h2>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
                    {affiliations.map((affiliation, index) => (
                        <Affiliation key={index} {...affiliation} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Affiliations;
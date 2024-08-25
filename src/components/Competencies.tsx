import { FaCode } from "react-icons/fa";
const coreCompetencies = [
    { title: 'Software Engineering', icon: FaCode },
    { title: 'Project Management', icon: FaCode },
    { title: 'AI/ML', icon: FaCode },
    { title: 'Cloud Computing', icon: FaCode },
];

const Competency = () => {
    return (
        <section id="about" className="py-20 bg-white text-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
                <p className="text-lg mb-8">
                    I'm a passionate full-stack developer with a keen eye for design. With over 5 years of experience in
                    building web applications, I specialize in creating seamless user experiences that blend form and
                    function.
                </p>
                <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {coreCompetencies.map((competency, index) => (
                        <div key={index} className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg">
                            <competency.icon className="w-6 h-6" />
                            <span>{competency.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Competency;
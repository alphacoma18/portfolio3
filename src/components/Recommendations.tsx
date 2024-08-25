const recommendations = [
    { id: 1, name: 'Job Isaac Ong', position: 'CS Student', company: 'FEU Tech', image: '/ong.jpg', date: '2022-12-20', recommendation: "Working with Mr. Alpha Romer Coma on the project was a pleasure, since he has been very responsive and professional throughout. I hope to work with him again in the future. The project was delivered on time, and the quality of the work is excellent. I highly recommend working with Mr. Alpha Romer Coma" },
    { id: 2, name: 'Kristoffer Ian Sioson', position: 'CS Student', company: 'FEU Tech', image: '/sioson.jpg', date: '2022-12-21', recommendation: "It was enlightening to work on the same team as Mr. Alpha Romer Coma. Despite his youth, he demonstrated professionalism in all of the tasks he was given. I had a terrific experience working with him, he gave me a detailed explanation of the project that we are working on and brought me a new perspective on things that I usually can't figure." },
    { id: 3, name: 'John Rey Basilio', position: 'After Sales Support', company: 'Concentrix', image: '/basilio.jpg', date: '2023-2-14', recommendation: "Mr. Coma is an excellent teammate you can rely on. We both honed our skills through simultaneous exchange of ideas or solutions whether it may be design-related or code-related. Learning with Mr. Coma is such a pleasure." },
    { id: 4, name: 'John Kenneth Andales', position: 'Software Engineer', company: 'Samsung', image: '/andales.jpg', date: '2023-3-27', recommendation: "Mr. Coma is a development-oriented person, as his passion for the field is unparalleled. His enthusiasm for sharing ideas and collaborating with colleagues fosters a dynamic and engaging work environment. Mr. Coma consistently demonstrates the ability to inspire and motivate his peers, which in turn leads to innovative solutions and outstanding results. He is a true asset to any team and will no doubt contribute significantly to any organization he join." },
    { id: 5, name: 'Angelo Arguson, DIT', position: 'CS Faculty', company: 'FEU Tech ACM', image: '/default.jpg', date: '2023-07-14', recommendation: "Mr. Alpha Romer is my data structure student. He is an industrious and knowledgeable in computer programming. He is a multilingual person and a very competitive when it comes to project submissions. He can be a candidate for intern software development in the future of this school." },
    { id: 6, name: 'Michelle Anne Constantino', position: 'CS Faculty', company: 'FEU Tech', image: '/constantino.jpg', date: '2023-12-11', recommendation: "I was Alpha's Computer Systems Architecture professor, but I didn't see him just as a student of CSA, he has always given an effort towards class work and goes beyond what is being asked. I had always admired how you go beyond what classes are always." },
    { id: 7, name: 'Beau Gray Habal', position: 'CS Faculty', company: 'FEU Tech', image: '/default.jpg', date: '2024-1-20', recommendation: "Alpha consistently performs well academically. His work reflects a deep understanding of the material, and he consistently produces quality assignment. Alpha is exceptionally curious and displays a genuine eagerness to learn. He works well with his fellow classmates and is evident that he is a team player" },
    { id: 8, name: 'Jeneffer Sabonsolin', position: 'CS Faculty', company: 'FEU Tech', image: '/sabonsolin.jpg', date: '2024-03-21', recommendation: "Alpha Romer Coma, my student in design thinking, exhibits a profound passion for academic excellence, evident in the outstanding quality of his work. I eagerly anticipate witnessing his continued growth and achievements.”" },
    { id: 9, name: 'Justine Jude Pura, MBA', position: 'CS Faculty', company: 'FEU Tech', image: '/pura.jpg', date: '2024-03-23', recommendation: "What distinguishes Alpha further is his remarkable humility and positive attitude. Despite his impressive credentials and achievements, he remains grounded and approachable, always willing to learn and grow. His blend of intellectual curiosity, leadership qualities, and character make him a standout individual." },
    { id: 10, name: 'Xynil Jhed Lacap', position: 'CS Student', company: 'FEU Tech', image: '/lacap.jpg', date: '2024-03-30', recommendation: "Alpha is an amazing team player, who always steps up his game especially in developing a program. He is really adept at adapting in unfavorable situations, and his skills to turn the tide in our team's favor is incredible." },
    { id: 11, name: 'Rab Karl Colasino', position: 'Webmaster', company: 'FEU Tech ACM', image: '/colasino.jpg', date: '2024-7-29', recommendation: "It's wonderful to hear about Alpha Romer Coma's impressive contributions. As Webmaster at FEU Tech ACM, He demonstrated exceptional leadership and technical skills. Also, his commitment to the ACM Beyond Campus Initiative positively impacted over a lot of people. Alpha's full-stack and back-end expertise, combined with a passion for education, make him an outstanding developer and team player." },
    { id: 12, name: 'Guennevere Rito', position: 'Vice President', company: 'FEU Tech ACM', image: '/rito.jpg', date: '2024-8-21', recommendation: "I've had the pleasure of working alongside Alpha as part of the executive officers at ACM, and I can confidently say that he is an exceptional Webmaster with a forward-thinking mindset. Alpha never limited himself to his job responsibilities. Instead, he consistently ventured beyond his role, introducing ideas that greatly benefited the entire computer science community at FEU Tech :))" }
].reverse();

const Recommendations = () => {
    return (
        <section id="recommendations" className="py-20 bg-white text-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Recommendations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                    {recommendations.map((rec) => (
                        <div key={rec.id} className="bg-gray-100 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <img src={`/media/img/recommendations${rec.image}`} alt={rec.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h3 className="font-bold">{rec.name}</h3>
                                    <p className="text-sm text-gray-600">{rec.position} at {rec.company}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-800 mb-2">
                                {rec.recommendation || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'}
                            </p>
                            <p className="text-xs text-gray-500">Received on {new Date(rec.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
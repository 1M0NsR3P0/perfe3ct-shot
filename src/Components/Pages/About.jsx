import React from 'react';
import ParallaxComponent from 'react-parallax-component';
const bgVideo = ['https://www.veed.io/view/a38c91b2-6597-4b19-9307-76a7b383c96f?sharingWidget=true&panel=share']


const About = () => {
    return (
    //    <ParallaxComponent>
         <div className='flex flex-col gap-5 justify-center items-center text-start m-[100px]  bg-[url("https://www.veed.io/view/a38c91b2-6597-4b19-9307-76a7b383c96f?sharingWidget=true&panel=share")]'>
            <div> 
                <h2 className='text-4xl font-semibold'>ABout Us</h2>
                <div>

                    "Welcome to Perfect-Shots, a leading institution dedicated to nurturing aspiring photographers and unleashing their creative potential. With a rich history spanning over [number of years] years, our school has earned a reputation for excellence in photography education.

                    At Perfect-Shots, we believe in the power of photography to capture moments, evoke emotions, and tell compelling stories. Our esteemed faculty comprises experienced photographers who are passionate about sharing their knowledge and expertise with the next generation of visual storytellers.

                    Our carefully curated curriculum combines technical proficiency with artistic expression, ensuring that our students develop a well-rounded skill set. From foundational courses covering camera operations and composition to advanced specialization in genres such as portrait, landscape, and documentary photography, we offer a comprehensive learning experience.

                    We take pride in fostering a dynamic and supportive learning environment. Our state-of-the-art facilities provide students with access to cutting-edge equipment and studios, enabling hands-on practice and experimentation. We believe that learning goes beyond the classroom, and therefore, our students actively engage in workshops, live shoots, and collaborative projects, gaining invaluable practical experience.

                    One of the hallmarks of our photography school is our strong network of industry connections. We have established partnerships with renowned photographers, photography studios, and industry professionals. These connections provide our students with opportunities for internships, mentorships, and exposure to real-world projects, setting them up for success in the competitive photography industry.

                    At Perfect-Shots, we celebrate the achievements of our students. Many of our alumni have gone on to build successful careers, exhibiting their work internationally, and earning accolades in the photography world. Their success stories serve as a testament to the quality of education and guidance provided by our faculty.

                    We invite you to explore our website, learn more about our programs, and join our vibrant photography community. Whether you are a beginner with a passion for photography or a seasoned enthusiast looking to refine your skills, Perfect-Shots is here to support you on your creative journey. We look forward to inspiring and empowering you to become a skilled photographer with a unique voice."

                    Feel free to customize and tailor this description to fit your specific photography school's attributes, values, and achievements.</div>
            </div>
            <div> 
                <h2 className='text-4xl font-semibold'>Benifits you may expect from us:</h2>
                <ol className='flex flex-col gap-2'>

                    <li><span className='font-bold text-lg'>  1.</span> Comprehensive Education: Our photography school offers a comprehensive curriculum that covers both technical skills and artistic expression. Students gain a deep understanding of camera operations, composition, lighting techniques, editing, and more.</li>
                    <li><span className='font-bold text-lg'>  2.</span> Experienced Faculty: Our faculty members are experienced photographers who bring their industry expertise and passion for teaching to the classroom. They provide personalized guidance, mentorship, and feedback to help students reach their full potential.</li>
                    <li><span className='font-bold text-lg'>  3.</span> Practical Learning: We believe in hands-on learning experiences. Our students actively engage in practical assignments, workshops, and live shoots to apply their knowledge in real-world scenarios. This practical approach helps them build confidence and develop their unique artistic style.</li>
                    <li><span className='font-bold text-lg'>  4.</span> State-of-the-Art Facilities: Our photography school is equipped with state-of-the-art facilities, including professional-grade studios, darkrooms, digital editing labs, and the latest photography equipment. Students have access to these resources to enhance their learning and creative process.</li>
                    <li><span className='font-bold text-lg'>  5.</span> Networking Opportunities: We foster connections between students and industry professionals through events, guest lectures, and partnerships. These networking opportunities provide valuable connections for internships, collaborations, and future career prospects.</li>
                    <li><span className='font-bold text-lg'>  6.</span> Portfolio Development: Building a strong portfolio is crucial for a photographer. Our photography school guides students in developing a compelling portfolio that showcases their skills, creativity, and unique vision. This portfolio becomes a powerful tool for seeking employment or freelance opportunities.</li>
                    <li><span className='font-bold text-lg'>  7.</span> Industry Exposure: We organize field trips, industry visits, and photography exhibitions to expose students to different aspects of the photography industry. This exposure helps students understand current trends, gain inspiration, and build connections within the photography community.</li>
                    <li><span className='font-bold text-lg'>  8.</span> Career Support: Our photography school provides career support services, including job placement assistance, resume building, and interview preparation. We aim to empower our graduates with the skills and resources needed to pursue successful careers in photography.</li>
                    <li><span className='font-bold text-lg'>  9.</span> Community and Collaboration: We foster a supportive and collaborative community of photographers. Students have the opportunity to interact with peers, share ideas, and collaborate on projects. This collaborative environment enhances creativity and provides a network of like-minded individuals.</li>
                    <li><span className='font-bold text-lg'>  10</span> . Lifelong Learning: Photography is a lifelong journey of growth and exploration. Our photography school instills a love for continuous learning. We offer advanced courses, workshops, and alumni events to ensure that our students can continue to refine their skills and stay updated with industry trends.</li>

                    These benefits showcase the value and unique offerings of your photography school, attracting potential students who are seeking a comprehensive and enriching educational experience.
                </ol>
            </div>
        </div>
    //    </ParallaxComponent>

    );
};

export default About;
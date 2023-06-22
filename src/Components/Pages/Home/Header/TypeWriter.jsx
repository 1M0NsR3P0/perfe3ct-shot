import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './banner.css'

// npm i typewriter-effect to install module
const TypeWriter = () => {
    const [start,setStart] = useState(false)
    return (
        <div data-aos="fade-right" data-aos-duration="1000" className='text-2xl md:text-5xl w-full absolute text-black'>
        <div className='flex gap-5 md:ml-0 ml-[400px]'>
            <Typewriter
                options={{
                    cursor:'',
                    autoStart: true,
                    delay: 5,
                    loop: false,
                    
                }}
                
                onInit={(typewriter) => {
                    typewriter.typeString(`<p class=" shadow-xl fontStyle">Capture the Moment: </p>`)
                    .callFunction(() => {
                        // console.log('')
                        setStart(true)
                      })
                    .start();
                }}
                />
            {
                
            }
            <Typewriter
                options={{
                    cursor:'',
                    strings: ['<p  class="shadow-xl fontStyle">Welcome to<br/> <span class="">perfect-shots</span></p>','<p class="fontStyle">where moments <br/> freeze in time </p>', '<p class="fontStyle">stories unfold through <br/> the lens</p>','<p class="fontStyle">Just Click,<br/> Capture,<br/> Create.</p>'],
                    autoStart: start?true:false,
                    delay: 20,
                    deleteSpeed: 5,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString()
                    // typewriter.pasteString('whats up')
                    .pauseFor(1000)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
        
        </div>
    );
};

export default TypeWriter;
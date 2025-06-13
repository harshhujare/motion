import react from 'react'



        const BentoCard=({src, tital, descrption}) => {

        return(
        <div className="size-full relaive ">
        <video className="absolute top-0 left-0 size-full object-cover object-center"
        loop
        autoPlay
        muted
        src={src}/>
<div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
<div>
    <h1 className="bento-title special-font" > {tital }</h1>
    {descrption && (<p className="mt-3 text-xs max-w-64 md:text-base"> {descrption}</p>)}
</div>


</div>


        </div>

        )

        }
const Feactures =()=>{

return (
<section className="bg-black pb-52" >
<div className="container mx-auto px-3 md:px-10"> 
<div className=" px-5 py-32 " >

    <p className="text-blue-50 font-circular-web text-lg">

welcome to the world of AI, 

    </p>

<p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
    welcome to the world of AI, where innovation meets creativity. Our platform is designed to empower developers and enthusiasts alike, providing cutting-edge tools and resources to harness the power of artificial intelligence. Whether you're building intelligent applications, exploring machine learning algorithms, or diving into data science, we have everything you need to succeed. Join us on this exciting journey and unlock the potential of AI today!   
</p>

</div>

<div className="border-hsla relative mb-7 h-96 rounded-md md:h-[65vh] w-full overflow-hidden">
<BentoCard  
src="videos/feature-1.mp4"
tital={<>radia<b>n</b>t</>}
descrption="A platform for AI enthusiasts to explore and innovate. which is a platform for AI enthusiasts to explore and innovate. It provides a space for developers and enthusiasts to come together, share ideas, and push the boundaries of artificial intelligence. "
/>
<div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">







</div>



</div>
</div>
</section>

)

}
export default Feactures
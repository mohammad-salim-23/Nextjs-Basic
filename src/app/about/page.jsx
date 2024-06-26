import AboutContent from "@/components/AboutContent";

export const metadata = {
    title: "about ",
    description: "CHEAPEST HERO",
  };
  const getTime = async()=>{
    const res = await fetch(`${process.env.URL}/time`,{next:{revalidate:5}});
    const data = await res.json();
    return data.currentTime;
  }
const page =async () => {
    const currentTime = await getTime();
    return (
        <div>
           <h2>ABOUT</h2> 
           <AboutContent></AboutContent>
           <h3 className="text-3xl text-red-400 mt-12">Time: {currentTime}</h3>
        </div>
    );
};

export default page;
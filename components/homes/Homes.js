"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import Banner from './Banner';
import Abouts from './Abouts';

export default function Homes() {
  const router = useRouter(); // Hook to access the router
  

  return (
    <>
        <Banner/>
        <div className='m-5'>
          <h2>WWF History</h2>
          <p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, 
            formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
          <h2>WWF's Symbol</h2>
          <p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the 
            Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
        </div>
        <Abouts/>
        

        
    </>
  );
}

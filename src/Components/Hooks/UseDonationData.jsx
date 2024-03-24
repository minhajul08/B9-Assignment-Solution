import { useEffect } from "react";
import { useState } from "react";


const UseDonationData = () => {
    const [data,setData] = useState ([]);
     const [loading,setLoading] = useState (true)
      useEffect (() => {
        setLoading (true)
        fetch ('/public/donation.json')
        .then (res => res.json ())
        .then (data => setData (data))
        setLoading (false)
      } ,[])
    return {data,loading}
};

export default UseDonationData;
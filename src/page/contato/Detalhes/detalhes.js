import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Detalhes(){


    const params = useParams()
    console.log(params.id)

    useEffect(() => {

    },[])


    return (
        <div>
            detalhes
        </div>


    )
}

export default Detalhes;
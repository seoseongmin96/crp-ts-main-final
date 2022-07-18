import React, {useState} from 'react';
import { NextPage } from 'next';
import AnUpload from '@/components/analysis/Anupload';

const fileTypes = ["JPG", "PNG", "GIF"];


const AnUploadPage: NextPage = () =>{

   const [file, setFile] = useState(null)
    
    const onChange =(e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
         
    }
    return <AnUpload onChange={onChange}/>
}
export default AnUploadPage;
import React, {useState} from 'react';
import Result from '@/components/plagiarism/Result';
import { NextPage } from 'next';

const ResultPage: NextPage = () =>{

const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
}

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
}

    
    return (<Result onSubmit={onSubmit} onChange = {onChange}/>)
}
export default ResultPage;
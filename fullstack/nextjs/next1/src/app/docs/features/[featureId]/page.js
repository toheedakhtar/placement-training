import { notFound } from "next/navigation"

export default function FeatureId({params}){
    if(params.featureId > 20){
        notFound();
    }

    return <h1>Feature ID {params.featureId}</h1>
}
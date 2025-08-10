import { Metadata } from "next";
import { resolve } from "path";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

type Props = {
    params: Promise<{ productId: string}>;
};

export const generateMetadata = async ({ 
    params,
 }: Props): Promise<Metadata> => {
    const random = getRandomInt(2);
    if(random ==1 ) {
        throw new Error('Error loading review');
    }
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`);
        }, 100);
    });
    return {
        title: `Product ${title}`
    }
}

export default async function ProductDetails({ params }: Props) {
    const  productId = (await params).productId;
    return <>
        <h1>Details about product {productId}</h1>
    </>;
}
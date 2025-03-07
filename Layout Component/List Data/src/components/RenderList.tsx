import { ElementType } from "react";

export type ElectronicsData = {
    name: string,
    description: string,
    price: string,
    rating: number,
    imageUrl: string
};

export type ClothingData = ElectronicsData;

type RenderListProps = {
    data: ElectronicsData[] | ClothingData[],
    resourceName: string,
    dataToRender: ElementType
}
const RenderList = ({
    data,
    resourceName,
    dataToRender: ItemComponent
}: RenderListProps) => {

    return (
        <ul>
            {data.map((item, index) => (
                <ItemComponent key={index} {...{ [resourceName]: item }} />
            ))}
        </ul>
    );
};

export default RenderList;

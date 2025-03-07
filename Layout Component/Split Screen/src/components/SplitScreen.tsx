import { ReactNode } from "react";

type SplitScreenProps = {
    children: [ReactNode, ReactNode];
    leftWeight: number;
    rightWeight: number;
};

const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }: SplitScreenProps) => {
    const [sidebar, content] = children;

    const leftWidth = `${leftWeight}rem`;
    const rightWidth = `${rightWeight}rem`;


    return (
        <div className="flex flex-1">
            <div className="p-4" style={{ width: leftWidth }}>{sidebar}</div>
            <div className="p-4" style={{ width: rightWidth }}>{content}</div>
        </div>
    );
};

export default SplitScreen;

import { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Icon from "../icon";

export default function Feature({ icon, title, description }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className="max-w-[450px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader className="flex gap-3">
                <Icon
                    name="Icon"
                    size="md"
                    handleAnimate={isHovered}
                    Icon={icon}
                    color='#2473f5'
                />
                <p className="text-xl font-bold m-0 text-primary-300">{title}</p>
            </CardHeader>
            <CardBody>
                <p className="text-base text-gray-400 mb-1">{description}</p>
            </CardBody>
        </Card>
    );
}
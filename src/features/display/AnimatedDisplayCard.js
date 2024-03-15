import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const AnimatedDisplayCard = ({item}) => {
    const { toggle, setToggle } = useState(false);
    const { image, name, description } = item;

    return (
        <Card>
            <CardImg src={image} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
};

export default AnimatedDisplayCard;
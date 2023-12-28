import React from "react";
import Button from "../components/Button";
import {GoBell} from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
        console.log('clicked');
    }

  return <div>
    <div>
        <Button primary rounded onClick={handleClick}><GoBell/>Hello</Button>
    </div>
    <div>
        <Button success outline rounded>Whats up</Button>
    </div>
    <div>
        <Button primary rounded>Buy now</Button>
    </div>
    <div>
        <Button danger outline>see deal</Button>

    </div>
    <div>
        <Button warning rounded outline>Cool</Button>
    </div>
    <div>
        <Button secondary outline>Coal</Button>
    </div>  
    <div>
        <Button primary rounded outline>lol</Button>
    </div>
    <div>
        <Button danger rounded>Yo</Button>
    </div>
    <div>
        <Button warning rounded>What's up</Button>
    </div>        

  </div>
 
}
export default ButtonPage;

import React, {useState} from 'react';
import {Button} from 'antd';
interface Greeting {
  name: string;
}
const HelloHooks = function(props: Greeting) {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>你点击了{count}次</p>
      <Button onClick={()=> setCount(count + 1)}>{props.name}</Button>
    </>
  )

}
export default HelloHooks
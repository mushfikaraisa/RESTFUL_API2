import React from 'react';
import renderer from 'react-test-renderer';

import { ItemContainer } from './ItemContainer';

describe("Item container component", () => {

  //Snapshot test: Does our Component render as expected?

  test("renders Item Container component as expected", () => {
    const sauces = ['sriracha', 'franks'];


    const component = renderer.create(<ItemContainer items={sauces} />)

    const snapshot = component.toJSON();

    console.log("What does our snapshot look like?  ", snapshot)

    expect(snapshot).toMatchSnapshot();
  })

  //Behavior Test: Does our Component handle data passed in as props?

  test("Contains items passed down as props", () => {
    const sauces = ['sriracha', 'franks'];
    
    const component = renderer.create(<ItemContainer items={sauces}/>);
    const treeEl = component.toTree()

    

    expect(treeEl.props.items.length).toBe(2)
  })

  test('Invokes addItem function when clicked', () => {
    const sauces = ['sriracha'];
    const stub = () => 'clicked!!!';

    //Mock item
    const component = renderer.create(<ItemContainer items={sauces} addItem={stub}/>)

    //Let's unspool the tree
    const treeEl = component.toTree()

    //console.log("What does our tree look like?", treeEl);

    expect(treeEl.props.addItem()).toBe('clicked!!!');
  })

})










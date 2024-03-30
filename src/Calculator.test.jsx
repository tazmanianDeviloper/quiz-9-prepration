import Calculator from "./Calculator.jsx";
import renderer from 'react-test-renderer';
import {test, expect} from 'vitest';

test('The Calculator component should run', ()=>{
    const view = renderer
        .create(<Calculator/>)
        .toJSON();
    expect(view).toMatchSnapshot()
});

test('Adding two Numbers should result in their summation', ()=>{
    const component = renderer.create(<Calculator/>);
    const firstInput = component.root.findByProps({ id: 'first' });
    const secondInput = component.root.findByProps({ id: 'second' });
    const addButton = component.root.findAllByType('button')[0];

    // Change input values
    firstInput.props.onChange({ target: { value: '2' } });
    secondInput.props.onChange({ target: { value: '3' } });

    // Click addition button
    addButton.props.onClick();

    // Find result
    const resultArray = component.root.findByType('p').props.children;

    // Extract the numerical result
    const resultValue = resultArray[1];

    // Assert result is correct
    expect(resultValue).toBe(5);
});

test('Subtracting two numbers should display the correct difference', () => {
    const component = renderer.create(<Calculator />);
    const firstInput = component.root.findByProps({ id: 'first' });
    const secondInput = component.root.findByProps({ id: 'second' });
    const subtractButton = component.root.findAllByType('button')[1];

    // Change input values
    firstInput.props.onChange({ target: { value: '8' } });
    secondInput.props.onChange({ target: { value: '3' } });

    // Click subtraction button
    subtractButton.props.onClick();

    // Find result
    const resultArray = component.root.findByType('p').props.children;

    // Extract the numerical result
    const resultValue = resultArray[1];

    // Assert result is correct
    expect(resultValue).toBe(5);
});

test('Multiplying two numbers should display the correct product', () => {
    const component = renderer.create(<Calculator />);
    const firstInput = component.root.findByProps({ id: 'first' });
    const secondInput = component.root.findByProps({ id: 'second' });
    const multiplyButton = component.root.findAllByType('button')[2];

    // Change input values
    firstInput.props.onChange({ target: { value: '4' } });
    secondInput.props.onChange({ target: { value: '3' } });

    // Click multiplication button
    multiplyButton.props.onClick();

    // Find result
    const resultArray = component.root.findByType('p').props.children;

    // Extract the numerical result
    const resultValue = resultArray[1];

    // Assert result is correct
    expect(resultValue).toBe(12);
});

test('Dividing two numbers should display the correct quotient', () => {
    const component = renderer.create(<Calculator />);
    const firstInput = component.root.findByProps({ id: 'first' });
    const secondInput = component.root.findByProps({ id: 'second' });
    const divideButton = component.root.findAllByType('button')[3];

    // Change input values
    firstInput.props.onChange({ target: { value: '10' } });
    secondInput.props.onChange({ target: { value: '2' } });

    // Click division button
    divideButton.props.onClick();

    // Find result
    const resultArray = component.root.findByType('p').props.children;

    // Extract the numerical result
    const resultValue = resultArray[1];

    // Assert result is correct
    expect(resultValue).toBe(5);
});

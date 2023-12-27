import Accordion from './components/Accordion';

function App() {
    const items = [
        {
            id: "llgslflg",
            label: 'What is React?',
            content: 'React is a front end javascript framework',
        },
        {
            id: "hhgfdhflg",
            label: 'Why use React?',
            content: 'React is a favorite JS library among engineers',
        },
        {
            id: "llgdfsfsg",
            label: 'How do you use React?',
            content: 'You use React by creating components',
        },
    ]
    
    return <Accordion items={items}/>;
 
}
export default App;

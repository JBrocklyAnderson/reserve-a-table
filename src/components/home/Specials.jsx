import Special from './Special';
import styles from './Specials.module.css';

const specials = [
    {
        title: 'Campanelle',
        desc: 'Fresh campanelle pasta tossed in pesto alla genovese and topped with roasted pine nuts and fried kale.',
        price: '$31',
    },
    {
        title: 'Seared salmon',
        desc: 'Perfectly pan-seared salmon served over polenta with a lemon butter and salmoriglio drizzle.',
        price: '$38',
    },
    {
        title: 'Caprese salad',
        desc: 'Classic caprese with vine-ripened roma tomatoes, fresh buffalo mozzarella, basil, and balsamic glaze.',
        price: '$18',
    },
    {
        title: 'Bolognese',
        desc: 'Slow-cooked bolognese sauce with ground beef, pork, and a hint of cabernet sauvignon, served over house-made spaghetti.',
        price: '$32',
    },
    {
        title: 'Pampanella molisana',
        desc: 'Tender pork loin served over creamed English peas and pair with fig and blackberry compote.',
        price: '$42',
    },
    {
        title: 'Bruschetta',
        desc: 'Grilled sourdough batard topped with chopped tomatoes, basil, mozzarella, and garlic.',
        price: '$22',
    },
    {
        title: 'Chocolate Tiramisu',
        desc: 'Layered espresso-dipped ladyfingers and mascarpone cream, dusted with cocoa powder.',
        price: '$12',
    }
];


// Create a section for restaurant specials
const Specials = () => {
    return (
        <main>
            <h2 className={styles.sectionTitle}>Weekly Specials</h2>
            <div className={styles.layout}>
                {specials.map(special => {
                    return <Special key={special.title} data={special} />
                })}
            </div>
        </main>
    );
};

export default Specials;
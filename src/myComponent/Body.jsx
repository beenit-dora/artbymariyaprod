import Tilt from "react-vanilla-tilt";
const products = [
    {
        id: 1,
        name: 'Bingo wrpaper',
        href: '#',
        price: '$48',
        imageSrc: '../../imgw1.jpg',
        imageAlt: 'Bingo',
    },
    {
        id: 2,
        name: 'Diary Milk',
        href: '#',
        price: '$35',
        imageSrc: '../../imge2.jpg',
        imageAlt: 'art',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '../../imge2.jpg',
        imageAlt: 'art',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '../../imge1.jpg',
        imageAlt: 'art',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '../../imge1.jpg',
        imageAlt: 'art.',
    },
    {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '../../imge1.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 7,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '../../imge1.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

]

export default function Body() {
    return (
        <div className="bg-white">

            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">


                <div className="grid grid-cols-1 gap-y-7 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                           
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                                
                            </div>
                            
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>

                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
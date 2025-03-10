interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface ProductListProps {
    products: Product[] | null;
}

const ProductList = ({ products }: ProductListProps) => {
    return products ? (
        <div className="max-w-6xl mx-auto p-5">
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="flex flex-col bg-white h-[350px] border border-gray-300 rounded-lg 
                        shadow-md overflow-hidden p-5 text-center
                         transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-1/2 h-[100px] rounded-lg mx-auto object-contain"
                        />
                        <h2 className="text-xs font-bold text-gray-800 my-2 line-clamp-3 overflow-hidden text-ellipsis">{product.title}</h2>
                        <p className="text-xs text-gray-600 my-2 line-clamp-3 overflow-hidden text-ellipsis">{product.description}</p>
                        <span className="text-lg font-bold text-orange-500 mt-auto block">${product.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    ) : (
        <p className="text-xl text-gray-600 text-center">Loading products...</p>
    );
};

export default ProductList;

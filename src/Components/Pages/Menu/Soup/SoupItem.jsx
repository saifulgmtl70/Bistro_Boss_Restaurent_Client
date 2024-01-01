

const SoupItem = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div>

            <div className="flex items-center gap-6 mb-8">
                <div>
                    <img src={image} className="w-[150px]" style={{borderRadius: '0 200px 200px 200px'}} />
                </div>
                <div>
                    <h3 className="text-[20px] texr-[#151515] mb-2"> {name}-------------- </h3>
                    <p className="text-[#737373] text-[16px]"> {recipe} </p>
                </div>
                <div>
                    <span className="text-[#BB8506] text-[20px]">${price} </span>
                </div>
            </div>

        </div>
    );
};

export default SoupItem;
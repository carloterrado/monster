


const CardList = ({ monsters }) => {

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-10 gap-4  place-items-center ">
            {
                monsters.map((monster) => {
                    const { id, name, email } = monster;
                    return (
                        <div key={id} className="rounded-lg p-2 pb-6 w-full text-center bg-white/50 grid gap-4 hover:scale-105 max-w-md">
                            <img className="m-auto" src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster image" />
                            <h2 className="text-gray-600 font-bold text-ellipsis whitespace-nowrap overflow-hidden">{name}</h2>
                            <p className="text-gray-600 text-ellipsis whitespace-nowrap overflow-hidden">{email}</p>
                        </div>
                    );
                })
            }
        </div>
    );


}

export default CardList;
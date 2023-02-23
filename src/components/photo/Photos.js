import React, { useState, useEffect } from 'react';
import axios from 'axios';

// https://picsum.photos/v2/list?page=2&limit=100

const getRandomPhotos = async (page) => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default function Photos() {
    const [randomPhotos, setRandomPhotos] = useState([]);
    const [nextPage, setNextPage] = useState(1);

    const handleLoadMore = async () => {
        const images = await getRandomPhotos(nextPage);
        const newPhotos = [...randomPhotos, ...images];
        setRandomPhotos(newPhotos);
        setNextPage(nextPage + 1);
    };

    // useEffect(callback, [dependencies])
    useEffect(() => {
        handleLoadMore();
    }, []);
    return (
        <div>
            <div className="grid grid-cols-4 gap-5 p-5">
                {randomPhotos.length > 0 &&
                    randomPhotos.map((item, index) => (
                        <div key={item.id} className="p-1 bg-white shadow-md rounded-lg h-[300px]">
                            <img
                                src={item.download_url}
                                alt={item.author}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
            </div>
            <div className="text-center">
                <button className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg" onClick={handleLoadMore}>
                    Load More
                </button>
            </div>
        </div>
    );
}

var URL = "https://api.thecatapi.com/v1/breeds";


export const getAllBreeds =async () => {
    
        const response = await fetch(URL);

        return await response.json()
        
    };

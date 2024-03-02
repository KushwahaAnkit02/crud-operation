const endPoint = 'http://localhost:4000/Users'


export const createUser = async (data) => {
    try {
        const response = await fetch(endPoint, {
            method: 'POST',
            body: JSON.stringify(data),
        })
        return response
    } catch (error) {
        return error
    }
}

export const fetchUsers = async () => {
    try {
        const response = await fetch(endPoint)
        return response
    } catch (error) {
        return error
    }
}
export const fetchUsersById = async (id) => {
    try {
        const response = await fetch(`http://localhost:4000/Users/${id}`, {
            method: 'GET',
        })
        return response
    } catch (error) {
        return error
    }
}

export const postDataById = async (details) => {

   
    try {
        const response = await fetch(`http://localhost:4000/Users/${details.id}`, {
            method: 'PUT',
            body: JSON.stringify(details)
        })
        return response
    } catch (error) {
        return error
    }
}

export const deleteUser = async (id) => {
   
    try {
        const response = await fetch(`http://localhost:4000/Users/${id}`, {
            method: 'DELETE',
        })
        return response
    } catch (error) {
        return error
    }
}

export const fetchCountryDtails = async () => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/all?fields=name`)
        return response
    } catch (error) {
        return error
    }
}
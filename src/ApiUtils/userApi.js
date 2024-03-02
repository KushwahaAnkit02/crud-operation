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

    console.log(details.id);
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
    console.log("id:", id);
    try {
        const response = await fetch(`http://localhost:4000/Users/${id}`, {
            method: 'DELETE',
        })
        return response
    } catch (error) {
        return error
    }
}
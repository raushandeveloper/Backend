export const addItemToServer = async (task,date) => {
    const response = await fetch('http://localhost:3000/api/todo',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task, date })
        }
    );
    const item = await response.json();
    return mapServerItemToLocalItem(item);
};

export const getAllItemsFromServer = async () => {
    const response = await fetch('http://localhost:3000/api/todo');
    const items = await response.json();
    return items.map(mapServerItemToLocalItem);
}

export const markItemCompletedOnServer = async (id, completed) => {
    const response = await fetch(`http://localhost:3000/api/todo/${id}/completed`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed })
        }
    );
    const item = await response.json();
    return mapServerItemToLocalItem(item);
};

export const deleteItemFromServer = async (id) => {
    const response = await fetch(`http://localhost:3000/api/todo/${id}`,
        {
            method: 'DELETE',
        }
    );
    const result = await response.json();
    return result;
};

const mapServerItemToLocalItem = (serverItem) => {
    return {
        id: serverItem._id || serverItem.id,
        name: serverItem.task,
        dueDate: serverItem.date,
        completed: serverItem.completed,
        createdAt: serverItem.createdAt,
        updatedAt: serverItem.updatedAt,
    };
}
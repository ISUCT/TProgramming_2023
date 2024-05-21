
export const deleteCat = async (id: string) => {
    fetch(`/api/cats/${id}`,{
        method: 'DELETE',
    })
}
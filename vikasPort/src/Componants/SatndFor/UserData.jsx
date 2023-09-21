const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id,} = curUser;
                    console.log(id)
                    {/* const {street, city, zipcode} = curUser.address; */}

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                           
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;
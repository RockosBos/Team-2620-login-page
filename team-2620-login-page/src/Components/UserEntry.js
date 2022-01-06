const UserEntry = () => {
    return ( 
        <div className="login">
            <div>
                <form>
                    <label for="name">Name</label>
                    <select name="name">
                        <option value="1">User 1</option>
                        <option value="2">User 2</option>
                    </select>
                </form>
            </div>
        </div>
     );
}
 
export default UserEntry;
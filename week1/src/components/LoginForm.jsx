
const LoginForm = () => {

    return (
            <form autocomplete="off">
                <input name="username" type="text" placeholder="Username" />
                <input name="password" type="password" placeholder="Password"  />
                <button type="submit">Login</button>
            </form>
    )
}
export default LoginForm;
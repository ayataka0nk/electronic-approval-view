const CookieTest = () => {
  const login = async () => {
    await fetch(process.env.NEXT_PUBLIC_ENV_TEST + '/api/auth/login', {
      method: 'POST',
    })
  }
  const confirm = async () => {
    const result = await fetch(
      process.env.NEXT_PUBLIC_ENV_TEST + '/api/auth/logged-in-user'
    )
    console.log(result)
  }
  return (
    <div>
      <button onClick={login}>login dummy</button>
      <button onClick={confirm}>confirm login</button>
    </div>
  )
}

export default CookieTest

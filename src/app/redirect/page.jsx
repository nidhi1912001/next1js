import {redirect} from 'next/navigation'

const Redirect = () => {
  redirect("/login")
  return (
    <p>
      redirect to login page
    </p>

  )
}

export default Redirect
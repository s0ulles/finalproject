'use client'

export default function RegisterForm() {

    async function Form(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            })
        })
    }
    return (
        <div>
            <form onSubmit={Form} className='flex flex-col w-1/2 mx-auto border p-5 gap-y-5 my-[30px]'>
                <input name="email" className='border border-gray-300 py-2 px-4' type="email" placeholder="Введите почту" />
                <input name="password" className='border border-gray-300 py-2 px-4' type="password" placeholder="Введите пароль" />
                <button className='w-fit mx-auto border border-gray-300 py-2 px-4 hover:bg-gray-300 hover:text-black transitiom-all'>Регистрация</button>
            </form>
        </div>
    )
}

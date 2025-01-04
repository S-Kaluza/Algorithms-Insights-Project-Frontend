import dynamic from 'next/dynamic'

const register = dynamic(() => import('../../RegisterPage/RegisterPage'))

export default register
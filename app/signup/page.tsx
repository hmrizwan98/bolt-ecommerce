// app/signup/page.tsx (Server Component)
import dynamic from 'next/dynamic'

const SignupPage = dynamic(() => import('./signup'), {
  ssr: false
})

export default function SignupWrapper() {
  return <SignupPage />
}

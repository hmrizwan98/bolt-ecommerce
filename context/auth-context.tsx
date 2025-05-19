"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User, LoginCredentials, SignupCredentials } from '@/lib/types'
import { useToast } from '@/components/ui/use-toast'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<boolean>
  signup: (credentials: SignupCredentials) => Promise<boolean>
  logout: () => void
  resetPassword: (email: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()
  
  // Simulate checking auth status on mount
  useEffect(() => {
    const checkAuthStatus = () => {
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser))
        } catch (error) {
          console.error('Failed to parse user data:', error)
          localStorage.removeItem('user')
        }
      }
      setIsLoading(false)
    }
    
    checkAuthStatus()
  }, [])
  
  // Mock login functionality
  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo: Use any email/password with simple validation
      if (!credentials.email.includes('@') || credentials.password.length < 6) {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        })
        return false
      }
      
      // Create mock user from credentials
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        email: credentials.email,
      }
      
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      
      toast({
        title: "Login successful",
        description: "Welcome back!",
      })
      
      return true
    } catch (error) {
      console.error('Login error:', error)
      toast({
        title: "Login failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
      return false
    } finally {
      setIsLoading(false)
    }
  }
  
  // Mock signup functionality
  const signup = async (credentials: SignupCredentials): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo: Use any email/password with simple validation
      if (!credentials.email.includes('@') || credentials.password.length < 6) {
        toast({
          title: "Signup failed",
          description: "Please use a valid email and a password of at least 6 characters",
          variant: "destructive",
        })
        return false
      }
      
      // Create user from credentials
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        email: credentials.email,
        name: credentials.name || credentials.email.split('@')[0],
      }
      
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      
      toast({
        title: "Account created",
        description: "Welcome to Beauty Sparkle Hub!",
      })
      
      return true
    } catch (error) {
      console.error('Signup error:', error)
      toast({
        title: "Signup failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
      return false
    } finally {
      setIsLoading(false)
    }
  }
  
  // Logout functionality
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    })
  }
  
  // Mock password reset functionality
  const resetPassword = async (email: string): Promise<boolean> => {
    try {
      setIsLoading(true)
      
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (!email.includes('@')) {
        toast({
          title: "Reset password failed",
          description: "Please enter a valid email address",
          variant: "destructive",
        })
        return false
      }
      
      toast({
        title: "Password reset email sent",
        description: "Check your inbox for further instructions",
      })
      
      return true
    } catch (error) {
      console.error('Reset password error:', error)
      toast({
        title: "Reset password failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
      return false
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      login, 
      signup, 
      logout, 
      resetPassword 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Card, TextInput, Checkbox, Button, Label } from 'flowbite-react' // Import Flowbite-React components
import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'
import Logo from '../assets/images/logomarca-pecunia.png'

interface LoginProps {
    email: string
    password: string
    remember: boolean
}

export const LoginPage: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const { login } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginProps>()

    const handleLogin = async (data: LoginProps) => {
        setLoading(true)
        console.log(data)
        try {
            login(data)
            navigate(location.state?.from || '/')
        } catch (error) {
            console.error(error)
            // Handle error, e.g., show a message to the user
        } finally {
            setLoading(false)
        }
    }

    return (
        <Card className="flex w-80 shrink-0 flex-row items-center justify-center gap-4">
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="flex w-full flex-col justify-center gap-4"
            >
                <img
                    src={Logo}
                    alt="logomarca"
                    className="size-16 self-center"
                />
                <h2 className="self-center font-medium">Login</h2>
                <div className="flex w-full flex-col">
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="E-mail" />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="demo@pecunipay.com.br"
                        {...register('email', {
                            required: 'E-mail é obrigatório',
                        })}
                        color={errors.email ? 'failure' : 'success'}
                        helperText={
                            <>
                                {errors.email && (
                                    <span className="font-medium">
                                        Oops! {errors.email.message}
                                    </span>
                                )}
                            </>
                        }
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Senha" />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        {...register('password', {
                            required: 'Senha é obrigatória',
                        })}
                        placeholder="Teste@1234"
                        color={errors.password ? 'failure' : 'success'}
                        helperText={
                            <>
                                {errors.password && (
                                    <span className="font-medium">
                                        Oops! {errors.password.message}
                                    </span>
                                )}
                            </>
                        }
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Continuar conectado</Label>
                </div>
                <Button type="submit" color="primary" isProcessing={loading}>
                    Entrar
                </Button>
            </form>
        </Card>
    )
}

import { FormEventHandler } from 'react';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import Image from "next/image"
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Checkbox from '@/Components/Checkbox';
import { ThemeProvider } from 'next-themes';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        username: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden">
                <Head title="Log in" />

                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

                <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                    <div className="flex items-center justify-center py-12">
                        <div className="mx-auto grid w-[350px] gap-6">
                            <div className="grid gap-2 text-center">
                                <h1 className="text-3xl font-bold">Login</h1>
                                <p className="text-balance text-muted-foreground">
                                    Enter your username and password to login
                                </p>
                            </div>
                            <form onSubmit={submit}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <InputLabel htmlFor='username' value='Username' />
                                        <Input id="username"
                                            type="text"
                                            value={data.username}
                                            placeholder="abcd"
                                            onChange={(e) => setData("username", e.target.value)}
                                            autoFocus
                                            required
                                        />
                                        <InputError message={errors.username} className='mt-2' />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                            <Link
                                                href="/forgot-password"
                                                className="inline-block ml-auto text-sm underline">
                                                Forgot your password?
                                            </Link>
                                        </div>
                                        <Input value={data.password} onChange={(e) => setData("password", e.target.value)} autoComplete='current-password' id="password" type="password" required />
                                        <InputError message={errors.password} className='mt-2' />
                                    </div>
                                    <div className='flex items-center mt-4 space-x-2'>
                                        <Checkbox id='remember' name='remember' checked={data.remember} onChange={(e) => setData("remember", e.target.checked)} />
                                        <Label htmlFor='remember' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                            Remember me
                                        </Label>
                                    </div>
                                    <Button type="submit" className="w-full" disabled={processing}>
                                        Login
                                    </Button>
                                </div>
                                <div className="mt-4 text-sm text-center">
                                    Don&apos;t have an account?{" "}
                                    <Link href="#" className="underline">
                                        Sign up
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="hidden bg-muted lg:block">
                        <Image
                            src="https://ui.shadcn.com/placeholder.svg"
                            alt="Image"
                            width="1920"
                            height="1080"
                            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

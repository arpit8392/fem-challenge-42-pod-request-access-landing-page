'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
	email: z
		.string()
		.min(4, { message: 'Oops! Please add your email' })
		.email({ message: 'Oops! Please check your email' }),
})

const CTAForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values)
		values.email = ''
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full flex flex-col gap-4 md:flex-row md:gap-0'>
			<label htmlFor='email' className='sr-only'>
				Email Address
			</label>
			<input
				type='email'
				id='email'
				className='block w-full rounded-3xl bg-midnight-blue py-2 pl-8 text-white placeholder:opacity-50 font-semibold text-sm/7 caret-white outline-none'
				placeholder='Email address'
				{...register('email')}
			/>
			<button
				type='submit'
				className='text-navy-black text-center w-full bg-aqua text-sm/7 rounded-3xl md:w-fit py-2 font-semibold hover:bg-[#B3FFE2]'>
				Request Access
			</button>
		</form>
	)
}
export default CTAForm

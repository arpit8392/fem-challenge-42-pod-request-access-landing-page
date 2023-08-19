'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Oops! Please add your email' })
		.email({ message: 'Oops! Please check your email' }),
})

const CTAForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values)
		form.reset()
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-full md:max-w-lg'
			noValidate>
			<label htmlFor='email' className='sr-only'>
				Email Address
			</label>
			<div className='relative flex flex-col md:flex-row md:items-center md:gap-0 gap-4 '>
				<input
					type='email'
					id='email'
					aria-invalid={errors.email ? 'true' : 'false'}
					className='block w-full rounded-[28px] bg-midnight-blue py-2 pl-8 text-white placeholder:opacity-50 font-semibold text-sm/7 caret-white outline-none md:py-4'
					placeholder='Email address'
					{...register('email')}
				/>
				<button
					type='submit'
					className='text-navy-black text-center w-full bg-aqua text-sm/7 rounded-[28px] md:w-fit py-2 font-semibold hover:bg-mint-green md:absolute  right-1.5 md:px-7'>
					Request Access
				</button>
			</div>
			{errors.email && (
				<p
					role='alert'
					className='text-vibrant-red text-sm mt-2 text-center md:text-start'>
					{errors.email.message}
				</p>
			)}
		</form>
	)
}
export default CTAForm
